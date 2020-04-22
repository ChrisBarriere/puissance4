<!-- eslint-disable max-len -->
<template>
  <div id="guestOrMasterSelect">
    <q-btn color="orange-8" class="q-mb-md" rounded no-caps @click="$emit('master-selected')">
      <div>
        <span class="text-h5 text-grey-9 text-bold">Organiser</span>
        <br />
        <span class="text-body-2">une table privée</span>
      </div>
    </q-btn>
    <q-btn color="orange-8" class="q-mt-md" rounded no-caps @click="$emit('guest-selected')">
      <div>
        <span class="text-h5 text-grey-9 text-bold">Rejoindre un ami</span>
        <br />
        <span class="text-body-2">à l'aide de son identifiant</span>
      </div>
    </q-btn>
  </div>
</template>

<script>
export default {
  name: 'GameOrMasterSelect',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
#guestOrMasterSelect
  height 100vh
  width 60vw
  margin auto
  display flex
  flex-direction column
  justify-content center
</style>
