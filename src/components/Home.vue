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
  </div>
</template>

<script lang="ts">
  /*import Vue from "vue";*/

  import navigation from './mynav/navigation.vue'
  export default {
    name: 'home',
    components: {
      navigation
    },

    data() {
      return {
        routeParams: 111,

      }
    },
    props: ['message'],

    created(){
      this.getUser()
    },

    methods: {
      getUser() {
        console.log(this.routeParams, 'routeParams');
        this.routeParams = this.$route.params.username;
        // console.log(this.routeParams)
      },
    }
  }

</script>