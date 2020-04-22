<!-- eslint-disable max-len -->
<template>
  <div id="tableInformation" class="bg-orange-8 q-pa-xs shadow-4">
    <div>
      <q-icon name="mdi-check-bold" class="text-green q-ml-xs q-mr-xs" size="sm" />
      <span class="q-ml-xs text-caption text-white text-bold">Table opérationnelle</span>
      <span class="q-ml-xs text-italic text-white" style="font-size: 0.8em;">({{labelGuestOrMaster}})</span>
    </div>
    <div>
      <div>
        <span class="text-caption text-bold text-white">Id :</span>
        <q-btn id="idTable" push glossy rounded no-caps color="white" text-color="black" class="q-ml-xs q-mr-xs" size="sm" title="Cliquez pour copier l'identifiant" @click="copyIdInClipboard">{{peeringId}}</q-btn>
        <span v-if="guestOrMaster === 'master'" class="text-italic text-white" style="font-size: 0.7em;">à partager avec un ami</span>
      </div>
    </div>
    <div>
      <q-btn v-if="guestOrMaster === 'master'" icon="mdi-exit-run" push glossy color="black" class="q-mr-xs" size="sm" title="Cliquez pour fermer la table" @click="$emit('close-table')" />
      <q-btn v-if="guestOrMaster === 'guest'" icon="mdi-exit-run" push glossy color="black" class="q-mr-xs" size="sm" title="Cliquez pour quitter la table" @click="$emit('exit-table')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableInformation',
  props: ['peeringId', 'guestOrMaster'],
  data() {
    return {};
  },
  computed: {
    labelGuestOrMaster() {
      return this.guestOrMaster === 'master' ? 'Vous êtes l\'organisateur' : 'Vous êtes invité';
    },
  },
  methods: {
    copyIdInClipboard() {
      const el = document.createElement('textarea');
      el.value = this.peeringId;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.$q.notify({
        type: 'positive',
        message: 'identifiant copié dans le presse-papier',
        timeout: 2000,
        progress: true,
        position: 'top',
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
#tableInformation
  display flex
  justify-content space-between
  align-items center
</style>
