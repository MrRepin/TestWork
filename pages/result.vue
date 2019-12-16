<template>
    <v-row align="center" justify="center" class="row">
        <result-list />
    </v-row>
</template>
<script>

import ResultList from '@/components/lists/ResultList'

export default {
    components: {
        ResultList
    }
}
</script>
<style lang="sass" scoped>
    .row
        height: 100%
</style>
