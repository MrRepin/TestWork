<template> 
  <v-row align="center" justify="center" class="row">
    <PersonalDataForm />
  </v-row>
</template>

<script>

import PersonalDataForm from '@/components/forms/PersonalDataForm'

export default {
  components: {
    PersonalDataForm
  }
}
</script>
<style lang="sass" scoped>
  .row
    height: 100%
</style>