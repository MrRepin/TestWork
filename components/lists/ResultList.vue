<template>
    <v-card
        class="mx-auto"
        width="300"
        tile
    >
        <v-list-item two-line v-for="(item, index) in user" :key="index">
            <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
                <v-list-item-subtitle>{{item.text}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

    </v-card>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    name: 'ResultList',
    computed: {
        ...mapGetters({
            user: 'user/getPersonData'
        })
    },
}
</script>
