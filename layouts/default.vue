<template>
  <v-app>
    <Navbar />
    <v-container>
      <nuxt />
    </v-container>
    <Footer />
  </v-app>
</template>
  

<script>

import Navbar from '@/components/bars/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}

</script>
<style lang="sass" scoped>
  .container
    height: 100%
</style>
