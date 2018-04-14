<template>
  <div id="app">
    <div id="version">{{versionString}}</div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    console.log(this.versionString);
  },
  computed: {
    versionString() {
      return `${'development' === process.env.NODE_ENV ? 'dev' : ''} v${
        process.env.PKG_VERSION
      } b${process.env.GIT_COMMIT_NUMBER}`;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
}

#version {
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  text-align: right;
}
</style>
