<!-- eslint-disable max-len -->
<template>
  <div id="gridConnect4">
    <div v-if="shouldPlay" id="playRow">
      <div v-for="(colObject, indexCol) of grid"
        :key="'playRow' + indexCol"
        :id="'playRow' + indexCol"
        :class="'cellPlayRow ' + playingColor"
        @click="$emit('new-disc',indexCol)">
      </div>
    </div>
    <div v-else id="playRow" />
    <div id="grid">
      <div v-for="(colObject, indexCol) of grid" :key="indexCol" :id="indexCol" class="col">
        <div v-for="(cellValue, indexCell) of colObject"
          :key="indexCell"
          :id="indexCell"
          :class="cellClasses(indexCol, indexCell, cellValue)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridConnect4',
  props: ['guestOrMaster', 'colorWinner', 'playingColor', 'grid', 'disksWinner'],
  data() {
    return {};
  },
  computed: {
    myColor() {
      if (this.guestOrMaster === 'master') return 'yellow';
      if (this.guestOrMaster === 'guest') return 'red';
      return null;
    },
    shouldPlay() {
      return !this.colorWinner && this.myColor === this.playingColor;
    },
  },
  methods: {
    cellClasses(col, cell, value) {
      const isADiskWinner = this.disksWinner.find((disk) => disk.col === col && disk.cell === cell);
      return `cell ${value}${isADiskWinner ? ' winner' : ''}`;
    },
  },
};
</script>

<!-- eslint-disable -->
<style lang="stylus" scoped>
#grid
  display flex
  margin auto
  border 15px solid #007fff
  border-radius 4px
  width 450px
  height 390px
  background radial-gradient(circle, white, white 18px, #007fff 20px, #007fff 23px, #1f90ff 23px, #1f90ff 36px, #007fff) center top/60px 60px
  box-sizing border-box
#grid .col
  width 60px
  height 360px
  display flex
  flex-direction column
#grid .cell
  width 60px
  height 60px
#grid .cell.yellow.winner, #grid .cell.red.winner
  border 1px solid orange;
#grid .cell.empty
  color: #fff
  transition opacity 0.2s, top 0s 0.2s, color 0s 0.2s
#grid .cell.yellow
  background radial-gradient(circle, currentcolor 12px, #666 13px, currentcolor 14px, currentcolor 21px, #666 22px, transparent 23px, transparent) center/60px
  transition top 0.32s cubic-bezier(0.56, 0, 1, 1)
  color #ffd918
  opacity 1
#grid .cell.red
  background radial-gradient(circle, currentcolor 12px, #666 13px, currentcolor 14px, currentcolor 21px, #666 22px, transparent 23px, transparent) center/60px
  transition top 0.32s cubic-bezier(0.56, 0, 1, 1)
  color #ff010b
  opacity 1
#playRow
  display flex
  margin auto
  border 15px solid transparent
  width 450px
  height 90px
  box-sizing border-box
.cellPlayRow
  width 60px
  height 60px
  &:hover
    cursor pointer
.cellPlayRow.yellow
  &:hover
    background radial-gradient(circle, currentcolor 12px, #666 13px, currentcolor 14px, currentcolor 21px, #666 22px, transparent 23px, transparent) center/60px
    transition top 0.32s cubic-bezier(0.56, 0, 1, 1)
    color #ffd918
    opacity 1
.cellPlayRow.red
  &:hover
    background radial-gradient(circle, currentcolor 12px, #666 13px, currentcolor 14px, currentcolor 21px, #666 22px, transparent 23px, transparent) center/60px
    transition top 0.32s cubic-bezier(0.56, 0, 1, 1)
    color #ff010b
    opacity 1
</style>
