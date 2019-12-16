<template>
    <div>
        <v-toolbar class="blue" fixed top>
            
            <v-toolbar-title>Test</v-toolbar-title>

            <v-toolbar-items class="nav">
                <v-btn text to="/">Calculate</v-btn>
                <v-btn text to="/form">Form</v-btn>
                <v-btn text to="/result">Result</v-btn>
            </v-toolbar-items>
            
        </v-toolbar>
    </div>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="sass" scoped>
  .nav
    margin-left: 20px
</style>
