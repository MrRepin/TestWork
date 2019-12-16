<template>
    <v-col md="2">
        
        <h1>Insert the number</h1>

        <v-form
            ref="form"
            v-on:submit.prevent
        >

            <v-text-field v-if="step1"
                v-model="number1"
                :rules="numberRules"
                label="Number 1"
                class="step-1"
                required
                autofocus
                @change="showNextStep(number1, 1)"
            >
            </v-text-field>

            <v-text-field v-if="step2"
                v-model="number2"
                :rules="numberRules"
                label="Number 2"
                class="step-2"
                required
                @change="showNextStep(number2, 2)"
            >
            </v-text-field>

        </v-form>

        <p class="result font-regular step-3 text-center display-1" v-if="step3">Result: {{summ}}</p>

    </v-col>
</template>
<script>
export default {
    name: 'NumberSummForm',
    data: () => ({
        number1: '',
        number2: '',
        numberRules: [
            v => !!v || 'Number is required',
            v => /^[0-9]+(\/[0-9]{1,2})?$/.test(v) || 'Value must be a number or fractional number',
        ],
        step1: true,
        step2: false,
        step3: false
    }),
    computed: {
        summ() {
            let firstNumber = this.number1.split('/'),
                secondNumber = this.number2.split('/');

            if(firstNumber.length > 1) firstNumber = firstNumber[0] / firstNumber[1];
            if(secondNumber.length > 1) secondNumber = secondNumber[0] / secondNumber[1];

            return (+firstNumber + +secondNumber).toFixed(2);
        }
    },
    methods: {
        showNextStep(value, step) {
            const splitValue = value.split('/');
            if(value <= 0 || isNaN(splitValue[0]) || (isNaN(splitValue[1]) && splitValue[1])) return;
            if(step == 1) {
                this.step1 = false;
                this.step2 = true;
            } else {
                this.step2 = false;
                this.step3 = true;
            }
        }
    }
}
</script>
<style lang="sass">
    h1
        margin-bottom: 20px
</style>
