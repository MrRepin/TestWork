<template>
  <v-row align="center" justify="center" class="row">
    <NumberSummForm />
  </v-row>
</template>

<script>
import NumberSummForm from '@/components/forms/NumberSummForm'

export default {
  components: {
    NumberSummForm
  }
}
</script>
<style lang="sass" scoped>
  .row
    height: 100%
</style>
