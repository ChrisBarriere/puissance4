<!-- eslint-disable max-len -->
<template>
  <div id="masterTableCreation">
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
      <span class="text-h5 text-grey-9 text-bold">Création de la table en cours</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MasterTableCreation',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
#masterTableCreation
  height 100vh
  width 60vw
  margin auto
  display flex
  flex-direction row
  justify-content center
  align-items center
</style>
