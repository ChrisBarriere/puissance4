<!-- eslint-disable max-len -->
<template>
  <div id="masterGuestInformation">
    <div id="masterWaitingGuest" v-if="!connected">
      <div class="bg-orange-8 q-pa-md" style="border-radius: 28px;">
        <q-circular-progress
          indeterminate
          size="90px"
          :thickness="0.2"
          color="lime"
          center-color="grey-8"
          track-color="transparent"
          class="q-ma-md"
        />
        <span class="text-h5 text-grey-9 text-bold">En attente d'un invité...</span>
      </div>
    </div>
    <div v-if="connected" class="q-ma-md">
      <q-icon name="mdi-emoticon-cool-outline" class="text-orange q-ml-xs q-mr-xs" size="sm" />
      <span class="text-caption text-black text-bold">Votre invité est connecté !!!</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MasterGuestInformation',
  props: ['connected'],
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
#masterWaitingGuest
  height 100vh
  width 60vw
  margin auto
  display flex
  flex-direction row
  justify-content center
  align-items center
</style>
