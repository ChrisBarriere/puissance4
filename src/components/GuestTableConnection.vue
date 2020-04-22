<!-- eslint-disable max-len -->
<template>
  <div id="guestTableConnection">
    <div v-if="!peeringId" class="bg-orange-8 q-pa-md" style="border-radius: 28px; width: 100%;">
      <q-input color="teal" bg-color="white" outlined v-model="id" label="Identifiant de l'organisateur" class="q-mb-md">
        <template v-slot:append>
          <q-icon name="mdi-identifier" />
        </template>
      </q-input>
      <q-btn class="q-mt-md" rounded no-caps color="white" @click="submitId">
        <span class="text-h5 text-grey-9 text-bold">Valider</span>
      </q-btn>
      <q-btn class="q-ml-xl q-mt-md" rounded no-caps color="white" @click="$emit('cancel-guest')">
        <span class="text-h5 text-grey-9 text-bold">Annuler</span>
      </q-btn>
    </div>
    <div v-if="peeringId" class="bg-orange-8 q-pa-md" style="border-radius: 28px;">
      <q-circular-progress
        indeterminate
        size="90px"
        :thickness="0.2"
        color="lime"
        center-color="grey-8"
        track-color="transparent"
        class="q-ma-md"
      />
      <span class="text-h5 text-grey-9 text-bold">En attente de connexion</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuestTableConnection',
  props: ['peeringId', 'errorConnection'],
  data() {
    return {
      id: null,
    };
  },
  watch: {
    errorConnection() {
      if (this.errorConnection) {
        this.id = null;
        this.$q.notify({
          type: 'negative',
          message: this.errorConnection,
          timeout: 5000,
          progress: true,
          position: 'top',
        });
      }
    },
  },
  methods: {
    submitId() {
      if (this.id) {
        this.$emit('id-submitted', this.id);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
#guestTableConnection
  height 100vh
  width 60vw
  margin auto
  display flex
  flex-direction row
  justify-content center
  align-items center
</style>
