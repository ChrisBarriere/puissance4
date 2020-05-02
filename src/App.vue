<!-- eslint-disable max-len -->
<template>
  <div id="app">
    <!-- Choix organisateur ou invité -->
    <guest-or-master-select
      v-if="!peering.guestOrMaster"
      @master-selected="onMasterSelected"
      @guest-selected="onGuestSelected"
    />

    <!-- Information sur la table  -->
    <table-information
      v-if="peering.id"
      :peeringId="peering.id"
      :guestOrMaster="peering.guestOrMaster"
      :guestConnected="peering.guestConnected"
      @exit-table="exitTable"
      @close-table="closeTable"
    />

    <!------------------ BEGIN MASTER ------------------------------------->
    <!-- Création de la table par l'organisateur -->
    <master-table-creation
      v-if="peering.guestOrMaster === 'master' && !peering.id"
    />
    <!-- Information de connexion de l'invité pour l'organisateur -->
    <master-guest-information
      v-if="peering.guestOrMaster === 'master' && peering.id"
      :connected="peering.guestConnected"
    />
    <!------------------ END MASTER --------------------------------------->

    <!------------------ BEGIN GUEST -------------------------------------->
    <!-- Connexion de l'invité -->
    <guest-table-connection
      v-if="peering.guestOrMaster === 'guest' && !peering.guestConnected"
      @id-submitted="setMasterPeerId"
      @cancel-guest="cancelGuestSelection"
      :peeringId="peering.id"
      :errorConnection="peering.guestErrorConnection"
    />
    <!------------------ END GUEST ---------------------------------------->

    <!-- Contrôle du jeu et grille -->
    <div id="gridAndControls">
      <!-- Contrôle de la partie -->
      <game-controls
        v-if="peering.guestConnected"
        :guestOrMaster="peering.guestOrMaster"
        :started="game.started"
        :colorWinner="game.colorWinner"
        :counterRedDisks="game.counterRedDisks"
        :counterYellowDisks="game.counterYellowDisks"
        :playingColor="game.playingColor"
        @new-game="launchNewGame"
      />
      <!-- Affichage de la grille du puissance 4-->
      <grid-connect4
        v-if="game.started"
        :guestOrMaster="peering.guestOrMaster"
        :colorWinner="game.colorWinner"
        :playingColor="game.playingColor"
        :grid="game.grid"
        :disksWinner="game.disksWinner"
        @new-disc="putNewDisc"
      />
    </div>

    <audio ref="soundCreationConnection" src="./assets/creation_connection_table.mp3" preload="auto" controls="none" style="display: none;"></audio>
    <audio ref="soundExit" src="./assets/exit.mp3" preload="auto" controls="none" style="display: none;"></audio>
    <audio ref="soundGuestArrived" src="./assets/guest_arrived.mp3" preload="auto" controls="none" style="display: none;"></audio>
    <audio ref="soundNewGame" src="./assets/new_game.mp3" preload="auto" controls="none" style="display: none;"></audio>
    <audio ref="soundSuccess" src="./assets/success.mp3" preload="auto" controls="none" style="display: none;"></audio>
    <audio ref="soundFailure" src="./assets/failure.mp3" preload="auto" controls="none" style="display: none;"></audio>
    <audio ref="soundNewDisk" src="./assets/new_disk.mp3" preload="auto" controls="none" style="display: none;"></audio>
  </div>
</template>

<!-- eslint-disable max-len -->
<script>
import Peer from 'peerjs';
import GuestOrMasterSelect from './components/GuestOrMasterSelect.vue';
import MasterTableCreation from './components/MasterTableCreation.vue';
import TableInformation from './components/TableInformation.vue';
import MasterGuestInformation from './components/MasterGuestInformation.vue';
import GuestTableConnection from './components/GuestTableConnection.vue';
import GameControls from './components/GameControls.vue';
import GridConnect4 from './components/GridConnect4.vue';

const PEERSERVER = {
  host: 'peerjs.charloup.fr',
  port: 443,
  path: '/',
  secure: true,
};

export default {
  name: 'App',
  components: {
    GuestOrMasterSelect,
    MasterTableCreation,
    TableInformation,
    MasterGuestInformation,
    GuestTableConnection,
    GameControls,
    GridConnect4,
  },
  data() {
    return {
      peering: {
        guestOrMaster: null,
        id: null,
        peer: null,
        connection: null,
        guestConnected: false,
        guestErrorConnection: false,
      },
      game: {
        started: false,
        colorWinner: null,
        disksWinner: [],
        counterRedDisks: null,
        counterYellowDisks: null,
        playingColor: null,
        grid: null,
      },
    };
  },
  methods: {
    onGuestSelected() {
      this.peering.guestOrMaster = 'guest';
    },
    cancelGuestSelection() {
      this.peering.guestOrMaster = null;
    },
    onMasterSelected() {
      this.peering.guestOrMaster = 'master';
      this.initializePeerMaster();
    },
    initializePeerMaster() {
      this.peering.peer = new Peer(PEERSERVER, { debug: 2 });
      this.peering.peer.on('open', () => {
        if (this.peering.peer.id === null) {
          console.log('Received null id from peer open');
          this.peering.peer.id = this.peering.id;
        } else {
          this.peering.id = this.peering.peer.id;
        }
        this.$refs.soundCreationConnection.play();
        console.log('Connection Open. Awaiting', this.peering.peer.id);
      });
      this.peering.peer.on('connection', (connection) => {
        // Allow only one connection
        if (this.peering.connection) {
          connection.on('open', () => {
            connection.send('Already connected to another client');
            setTimeout(() => this.peering.connection.close(), 500);
          });
          return;
        }
        this.peering.connection = connection;
        console.log('Connected to', connection.peer);
        // Connection ready et prête à recevoir des data
        this.peering.connection.on('data', (data) => {
          console.log('Data Received', data);
          this.analyseDataReceived(data);
        });
        this.peering.connection.on('close', () => {
          console.log('Connection reset. Awaiting connection...');
          this.peering.connection = null;
          // start(true);
        });
      });
      this.peering.peer.on('disconnected', () => {
        console.log('Connection lost. Please Reconnect');
        this.peering.peer.id = this.peering.id;
        // this.peering.peer._lastServerId = this.peering.id;
        this.peering.peer.reconnect();
      });
      this.peering.peer.on('close', () => {
        this.peering.connection = null;
        console.log('Connection destroyed. Please refresh');
      });
      this.peering.peer.on('error', (error) => {
        console.error('Error', error);
      });
    },
    closeTable() {
      if (this.peering.guestConnected) this.peering.connection.send({ code: 'masterCloseTable' });
      this.$refs.soundExit.play();
      this.peering = {
        guestOrMaster: null,
        id: null,
        peer: null,
        connection: null,
        guestConnected: false,
        guestErrorConnection: false,
      };
      this.game = {
        started: false,
        colorWinner: null,
        counterRedDisks: null,
        counterYellowDisks: null,
        playingColor: null,
        grid: null,
      };
    },
    exitTable() {
      this.peering.connection.send({ code: 'guestExitTable' });
      this.peering.guestOrMaster = null;
      setTimeout(() => {
        this.$refs.soundExit.play();
        this.peering.connection.close();
        this.peering = {
          guestOrMaster: null,
          id: null,
          peer: null,
          connection: null,
          guestConnected: false,
          guestErrorConnection: false,
        };
        this.game = {
          started: false,
          colorWinner: null,
          counterRedDisks: null,
          counterYellowDisks: null,
          playingColor: null,
          grid: null,
        };
      }, 1000);
    },
    setMasterPeerId(id) {
      this.peering.id = id;
      this.initializePeerGuest();
    },
    initializePeerGuest() {
      this.peering.peer = new Peer(PEERSERVER, { debug: 2 });
      this.peering.peer.on('open', () => {
        if (this.peering.peer.id === null) {
          console.log('Received null id from peer open');
          this.peering.peer.id = this.peering.id;
        }
        console.log('Connection Open. Awaiting', this.peering.peer.id);
        this.connectGuestToMaster();
      });
      this.peering.peer.on('disconnected', () => {
        console.log('Connection lost. Please Reconnect');
        this.peering.peer.id = this.peering.id;
        // this.peering.peer._lastServerId = this.peering.id;
        this.peering.peer.reconnect();
      });
      this.peering.peer.on('close', () => {
        this.peering.connection = null;
        console.log('Connection destroyed. Please refresh');
      });
      this.peering.peer.on('error', (error) => {
        this.peering.guestErrorConnection = `Impossible de se connecter à la table avec l'id ${this.peering.id}`;
        setTimeout(() => { this.peering.guestErrorConnection = null; }, 3000);
        this.peering.id = null;
        this.peering.peer = null;
        this.peering.connection = null;
        console.error('Error', error);
      });
    },
    connectGuestToMaster() {
      // Close old Connection
      if (this.peering.connection) this.peering.close();
      // Create connection to destination peer specified in the input field
      this.peering.connection = this.peering.peer.connect(this.peering.id,
        { reliable: true });
      this.peering.connection.on('open', () => {
        console.log('Connected to', this.peering.connection.peer);
        this.$refs.soundCreationConnection.play();
        this.peering.connection.send({ code: 'guestConnected' });
        this.peering.guestConnected = true;
      });
      this.peering.connection.on('data', (data) => {
        console.log('Data Received', data);
        this.analyseDataReceived(data);
      });
      this.peering.connection.on('error', (error) => {
        this.peering.guestErrorConnection = `Impossible de se connecter à la table avec l'id ${this.peering.id}`;
        setTimeout(() => { this.peering.guestErrorConnection = null; }, 3000);
        this.peering.id = null;
        this.peering.peer = null;
        this.peering.connection = null;
        console.error('Error', error);
      });
    },
    analyseDataReceived(data) {
      if (data.code === 'guestConnected' && this.peering.guestOrMaster === 'master') {
        this.$refs.soundGuestArrived.play();
        this.peering.guestConnected = true;
      }
      if (data.code === 'newGame' && this.peering.guestOrMaster === 'guest') {
        this.game = data.game;
        this.$refs.soundNewGame.play();
      }
      if (data.code === 'newDisc') this.putNewDisc(data.col, true);
      if (data.code === 'masterCloseTable') {
        this.$q.notify({
          type: 'info',
          message: 'L\'organisateur vient de fermer sa table...',
          timeout: 5000,
          progress: true,
          position: 'top',
        });
        this.$refs.soundExit.play();
        this.peering = {
          guestOrMaster: null,
          id: null,
          peer: null,
          connection: null,
          guestConnected: false,
          guestErrorConnection: false,
        };
        this.game = {
          started: false,
          colorWinner: null,
          counterRedDisks: null,
          counterYellowDisks: null,
          playingColor: null,
          grid: null,
        };
      }
      if (data.code === 'guestExitTable') {
        this.$q.notify({
          type: 'info',
          message: 'Votre invité vient de quitter la table...',
          timeout: 5000,
          progress: true,
          position: 'top',
        });
        this.$refs.soundExit.play();
        this.peering.guestConnected = false;
        this.game = {
          started: false,
          colorWinner: null,
          counterRedDisks: null,
          counterYellowDisks: null,
          playingColor: null,
          grid: null,
        };
      }
    },
    launchNewGame() {
      this.game.grid = {};
      for (let indexCol = 1; indexCol < 8; indexCol += 1) {
        this.game.grid[`col${indexCol}`] = {};
        for (let indexRow = 6; indexRow > 0; indexRow -= 1) {
          this.game.grid[`col${indexCol}`][`row${indexRow}`] = 'empty';
        }
      }
      this.game.started = true;
      this.game.colorWinner = null;
      this.game.disksWinner = [];
      this.game.counterRedDisks = 21;
      this.game.counterYellowDisks = 21;
      this.game.playingColor = Math.random() < 0.5 ? 'yellow' : 'red';
      this.$refs.soundNewGame.play();
      this.peering.connection.send({ code: 'newGame', game: this.game });
    },
    putNewDisc(col, replayForOtherPlayer) {
      let newDisc = false;
      for (let indexRow = 1; indexRow < 7; indexRow += 1) {
        if (this.game.grid[col][`row${indexRow}`] === 'empty') {
          this.game.grid[col][`row${indexRow}`] = this.game.playingColor;
          newDisc = { col, row: `row${indexRow}`, color: this.game.playingColor };
          break;
        }
      }
      if (!newDisc) {
        this.$q.notify({
          type: 'info',
          message: 'La colonne est déjà pleine...',
          timeout: 3000,
          progress: true,
          position: 'top',
        });
        return;
      }
      if (newDisc) {
        const winner = this.checkGrid(newDisc);
        if (winner.status) {
          this.game.colorWinner = this.game.playingColor;
          this.game.disksWinner = winner.disks;
        }
        this.game.counterRedDisks -= this.game.playingColor === 'red' ? 1 : 0;
        this.game.counterYellowDisks -= this.game.playingColor === 'yellow' ? 1 : 0;
        this.game.playingColor = this.game.playingColor === 'yellow' ? 'red' : 'yellow';

        if (this.game.colorWinner === 'yellow') {
          if (this.peering.guestOrMaster === 'master') {
            this.$refs.soundSuccess.play();
          }
          if (this.peering.guestOrMaster === 'guest') {
            this.$refs.soundFailure.play();
          }
        }
        if (this.game.colorWinner === 'red') {
          if (this.peering.guestOrMaster === 'guest') {
            this.$refs.soundSuccess.play();
          }
          if (this.peering.guestOrMaster === 'master') {
            this.$refs.soundFailure.play();
          }
        }

        this.$refs.soundNewDisk.play();
        if (replayForOtherPlayer) return;
        this.peering.connection.send({ code: 'newDisc', col });
      }
    },
    checkGrid(disk) {
      const checkDirection = (direction, diskIndexCol, diskIndexRow, diskColor) => {
        const incrementeIndexRow = (index, verticalDirection) => {
          if (verticalDirection === 'top') return index + 1;
          if (verticalDirection === 'bottom') return index - 1;
          return index;
        };
        const incrementeIndexCol = (index, horizontalDirection) => {
          if (horizontalDirection === 'left') return index - 1;
          if (horizontalDirection === 'right') return index + 1;
          return index;
        };
        const condition = (col, row, horizontalDirection, verticalDirection) => {
          if (verticalDirection === 'top' && !horizontalDirection) return row < 7; // top
          if (verticalDirection === 'bottom' && !horizontalDirection) return row > 0; // bottom
          if (horizontalDirection === 'right' && !verticalDirection) return col < 8; // right
          if (horizontalDirection === 'left' && !verticalDirection) return col > 0; // left
          if (verticalDirection === 'top' && horizontalDirection === 'right') return row < 7 && col < 8; // top right
          if (verticalDirection === 'top' && horizontalDirection === 'left') return row < 7 && col > 0; // top left
          if (verticalDirection === 'bottom' && horizontalDirection === 'right') return row > 0 && col < 8; // top right
          if (verticalDirection === 'bottom' && horizontalDirection === 'left') return row > 0 && col > 0; // top left
          return null;
        };

        let count = 0;
        let disks = [];
        let indexCol = incrementeIndexCol(diskIndexCol, direction.horizontal);
        let indexRow = incrementeIndexRow(diskIndexRow, direction.vertical);
        while (condition(indexCol, indexRow, direction.horizontal, direction.vertical)) {
          if (this.game.grid[`col${indexCol}`][`row${indexRow}`] !== diskColor) break;
          count += 1;
          disks = [...disks, { col: `col${indexCol}`, row: `row${indexRow}` }];
          indexCol = incrementeIndexCol(indexCol, direction.horizontal);
          indexRow = incrementeIndexRow(indexRow, direction.vertical);
        }
        return { count, disks };
      };

      const diskIndexCol = parseInt(disk.col.slice(-1), 10);
      const diskIndexRow = parseInt(disk.row.slice(-1), 10);
      const diskColor = disk.color;

      const rightCheck = checkDirection({ vertical: null, horizontal: 'right' }, diskIndexCol, diskIndexRow, diskColor);
      const leftCheck = checkDirection({ vertical: null, horizontal: 'left' }, diskIndexCol, diskIndexRow, diskColor);
      const topCheck = checkDirection({ vertical: 'top', horizontal: null }, diskIndexCol, diskIndexRow, diskColor);
      const bottomCheck = checkDirection({ vertical: 'bottom', horizontal: null }, diskIndexCol, diskIndexRow, diskColor);
      const topRightCheck = checkDirection({ vertical: 'top', horizontal: 'right' }, diskIndexCol, diskIndexRow, diskColor);
      const bottomLeftCheck = checkDirection({ vertical: 'bottom', horizontal: 'left' }, diskIndexCol, diskIndexRow, diskColor);
      const topLeftCheck = checkDirection({ vertical: 'top', horizontal: 'left' }, diskIndexCol, diskIndexRow, diskColor);
      const bottomRightCheck = checkDirection({ vertical: 'bottom', horizontal: 'right' }, diskIndexCol, diskIndexRow, diskColor);

      const winner = { status: false, disks: [] };
      // vertical
      if (1 + topCheck.count + bottomCheck.count > 3) {
        winner.status = true;
        winner.disks = [...winner.disks, ...topCheck.disks, { col: `col${diskIndexCol}`, row: `row${diskIndexRow}` }, ...bottomCheck.disks];
      }
      // horizontal
      if (1 + leftCheck.count + rightCheck.count > 3) {
        winner.status = true;
        winner.disks = [...winner.disks, ...leftCheck.disks, { col: `col${diskIndexCol}`, row: `row${diskIndexRow}` }, ...rightCheck.disks];
      }
      // diag top-right to bottom-left
      if (1 + topRightCheck.count + bottomLeftCheck.count > 3) {
        winner.status = true;
        winner.disks = [...winner.disks, ...topRightCheck.disks, { col: `col${diskIndexCol}`, row: `row${diskIndexRow}` }, ...bottomLeftCheck.disks];
      }
      // diag top-left to bottom-right
      if (1 + topLeftCheck.count + bottomRightCheck.count > 3) {
        winner.status = true;
        winner.disks = [...winner.disks, ...topLeftCheck.disks, { col: `col${diskIndexCol}`, row: `row${diskIndexRow}` }, ...bottomRightCheck.disks];
      }

      return winner;
    },
  },
};
</script>

<!-- eslint-disable -->
<style lang="stylus">
body
  background-image url('./assets/background.jpg')
  background-size cover
#gridAndControls
  display flex
  align-items center
  justify-content center
</style>
