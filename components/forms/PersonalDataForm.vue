<template>
    <v-col md="3">

        <h1 v-if="show">Insert personal data</h1>

        <v-form
            v-if="show"
            v-on:submit.prevent
        >

            <v-text-field v-if="step1"
                v-model="person[0].text"
                :rules="personalRules"
                label="Name"
                class="step-1"
                required
                autofocus
                @change="showNextStep(person[0].text, 1)"
            >
            </v-text-field>

            <v-text-field v-if="step2"
                v-model="person[1].text"
                :rules="personalRules"
                label="Surname"
                class="step-2"
                required
                autofocus
                @change="showNextStep(person[1].text, 2)"
            >
            </v-text-field>

        </v-form>

        <div class="my-2" v-if="!show">
            <v-btn large @click="show = true">Next</v-btn>
        </div>

        <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">Insert your phone</v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="person[2].text"
                        :rules="personalRules"
                        label="Phone"
                        required
                    >
                    </v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click.native="confirmPersonalData" to="/result">Finish</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-col>
</template>
<script>
export default {
    name: 'PersonalDataForm',
    data() {
        return {
            person: [
                {
                    title: 'Name',
                    text: ''
                },
                {
                    title: 'Surname',
                    text: ''
                },
                {
                    title: 'Phone',
                    text: ''
                },
            ],
            personalRules: [val => (val || '').length > 0 || 'This field is required'],
            step1: true,
            step2: false,
            show: false,
            dialog: false
        }
    },
    methods: {
        showNextStep(value, step) {
            if(value <= 0) return;
            if(step == 1) {
                this.step1 = false;
                this.step2 = true;
            } else {
                this.step2 = false;
                this.dialog = true;
            }
        },
        confirmPersonalData() {
            this.$store.commit('user/setPersonalData', this.person);
            this.dialog = false;
        }
    }
}
</script>
<style lang="sass" scoped>
    button
        margin: 0 auto
        display: block
</style>
