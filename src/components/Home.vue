<!--
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
-->


<template>
    <div id="home" class="home">
        <navigation v-bind:message="routeParams"/>
        <!--    <navigation message="this.routeParams"/>-->
        <timee/>
    </div>
</template>

<script lang="ts">
    /*import Vue from "vue";*/

    import navigation from "./mynav/navigation.vue";
    import timee from "./views/time.vue";

    export default {
        name: "home",
        components: {
            navigation,
            timee
        },

        data() {
            return {
                routeParams: localStorage.getItem('task-userName'),

            };
        },
        props: ["message"],

        created() {
            // this.getUser();
        },

    methods: {
      // getUser() {
      //   console.log(this.routeParams, 'routeParams');
      //   this.routeParams = this.$route.params.username;
      // },
    }
  }

</script>
