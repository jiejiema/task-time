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
    <navigation/>
  </div>
</template>

<script lang="ts">
  /*import Vue from "vue";
  import Component from 'vue-class-component';
  // @Component({
  //   components: {
  //     navv,
  //   },
  // })
  // export default class Home extends Vue {}
  // export default {
  //   name: "home"
  // }*/


  import navigation from './mynav/navigation.vue'
  export default {
    name: 'home',
    components: {
      navigation
    },
  }

</script>