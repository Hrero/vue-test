<template>
    <div id="App">
        <component v-bind:is="currentView" v-on:increment="incrementTotal"></component>
    </div>
</template>

<script>
    import Login from "./login.vue"
    import MainComponent from "./main.vue"
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                currentView: "Login"
            }
        },
        components: {
            Login,
            MainComponent
        },
        methods: {
            incrementTotal (component) {
                this.currentView = component;
            }
        }
    }
</script>

<style>

</style>
