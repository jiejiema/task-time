<!--<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>-->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    html,
    body {
        height: 100%;
    }
    #app{
        width: 100%;
        height: 100%;
    }

    /*.userFrom > div > input{*/
    /*    width: 70%;*/
    /*    border-radius: 2px;*/
    /*    padding: 4px 15px;*/
    /*}*/
</style>

<script>
    // export default {
    //     methods: {
    //
    //     }
    // }
</script>