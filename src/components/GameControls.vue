<!-- eslint-disable max-len -->
<template>
  <div id="gameControls" class="bg-white q-ma-md rounded-borders q-pa-sm shadow-4">
    <div v-if="guestOrMaster === 'master' && !started">
      <span class="text-bold">Aucune partie en cours !!!</span>
      <q-btn class="q-ml-md" rounded no-caps size="sm" color="primary" @click="$emit('new-game')">
        <span class="text-bold">Lancer une partie</span>
      </q-btn>
    </div>
    <div v-if="guestOrMaster === 'guest' && !started">
      <q-circular-progress
        indeterminate
        size="sm"
        :thickness="0.2"
        color="lime"
        center-color="grey-8"
        track-color="transparent"
        class="q-ma-md"
      />
      <span>En attente du lancement d'une partie par l'organisateur</span>
    </div>
    <div id="gamePanel" v-if="started" class="q-pa-sm">
      <div id="disksCounter" class="bg-blue-1 q-mb-xs q-pa-sm rounded-borders">
        <div :class="`disksInfo ${myColor}`">
          <div class="diskIcon"></div>
          <div class="q-ml-md q-mr-xl text-bold diskLabel">Vous</div>
          <div class="diskCounter text-bold text-h6">{{myDisks}}</div>
        </div>
        <div :class="`q-mt-sm disksInfo ${versusColor}`">
          <div class="diskIcon"></div>
          <div class="q-ml-md q-mr-xl text-bold diskLabel">Adversaire</div>
          <div class="diskCounter text-bold text-h6">{{versusDisks}}</div>
        </div>
      </div>
      <div id="gameState" class="q-mt-xs text-white text-bold">
        <div v-if="!ended" class="bg-primary q-mb-xs q-pa-sm rounded-borders">
          Partie en cours....
        </div>
        <div v-if="!ended && shouldPlay" class="bg-primary q-mb-xs q-pa-sm rounded-borders">
          C'est-à-vous de jouer
        </div>
        <div v-if="!ended && !shouldPlay" class="bg-primary q-mb-xs q-pa-sm rounded-borders">
          C'est-à-votre adversaire de jouer
        </div>
        <div v-if="ended" class="bg-primary q-mb-xs q-pa-sm rounded-borders">
          La partie est terminée !!!
        </div>
        <div v-if="colorWinner === myColor" class="bg-positive q-mt-xs q-pa-sm rounded-borders">
          Vous avez gagné.
        </div>
        <div v-if="ended && !colorWinner" class="bg-info q-mt-xs q-pa-sm rounded-borders">
          Partie nulle.
        </div>
        <div v-if="colorWinner === versusColor" class="bg-negative q-mt-xs q-pa-sm rounded-borders">
          Vous avez perdu
        </div>
        <div v-if="ended && guestOrMaster === 'master'" class="text-center q-mt-md">
          <q-btn rounded no-caps size="sm" color="primary" @click="$emit('new-game')">
            <span class="text-bold">Lancer une nouvelle partie</span>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameControls',
  props: ['guestOrMaster', 'started', 'colorWinner', 'counterRedDisks', 'counterYellowDisks', 'playingColor'],
  data() {
    return {};
  },
  computed: {
    myColor() {
      if (this.guestOrMaster === 'master') return 'yellow';
      if (this.guestOrMaster === 'guest') return 'red';
      return null;
    },
    versusColor() {
      if (this.guestOrMaster === 'guest') return 'yellow';
      if (this.guestOrMaster === 'master') return 'red';
      return null;
    },
    shouldPlay() {
      return this.myColor === this.playingColor;
    },
    myDisks() {
      if (this.myColor === 'yellow') return this.counterYellowDisks;
      if (this.myColor === 'red') return this.counterRedDisks;
      return null;
    },
    versusDisks() {
      if (this.guestOrMaster === 'guest') return this.counterYellowDisks;
      if (this.guestOrMaster === 'master') return this.counterRedDisks;
      return null;
    },
    ended() {
      if (this.colorWinner) return true;
      if (this.counterRedDisks === 0 && this.counterYellowDisks === 0) return true;
      return false;
    },
  },
};
</script>

<!-- eslint-disable -->
<style lang="stylus" scoped>
#gameControls
  width 300px
#gamePanel
  display flex
  flex-direction column
.disksInfo
  display flex
  justify-content flex-start
  width 100%
  align-items center
.disksInfo.red
  color #ff010b
.disksInfo.yellow
  color #ffd918
.disksInfo .diskIcon
  width 25px
  height 25px
  background radial-gradient(circle, currentcolor 6px, #666 7px, currentcolor 8px, currentcolor 11px, #666 12px, transparent 13px, transparent) center/25px
  transition top 0.32s cubic-bezier(0.56, 0, 1, 1)
  opacity 1
.disksInfo .diskCounter
  margin-left auto
#gameState
  display flex
  width 100%
  flex-direction column
  justify-content center
</style>
