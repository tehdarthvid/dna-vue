<template>
  <div id="app">
    <div id="version">
      <a
        href="https://github.com/tehdarthvid/dna-vue/releases"
        target="_blank">
        {{versionString}}
      </a>
    </div>
    <div id="title">
      <h1><a 
        href='https://twitter.com/darthvid' 
        target="_blank">darthvid</a>'s influences DNA</h1>
      <p>[also the target for webdev study]</p>
    </div>
    <div id="content">
      <router-view/>
    </div>
    <p>[ vue-cli 3.x beta ]</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { log } from '@/utils';

export default {
  name: 'app',
  created() {
    log(this.versionString);
  },
  mounted() {
    this.initStore();
  },
  computed: {
    versionString() {
      return `${'development' === process.env.NODE_ENV ? 'dev' : ''} v${
        process.env.PKG_VERSION
      } b${process.env.GIT_COMMIT_NUMBER}`;
    }
  },
  methods: {
    // Map store actions.
    ...mapActions(['initStore'])
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

  a {
    color: #202d3a;
    text-decoration: inherit; /* no underline */
  }
}

body {
  margin: 40px 0;
  font-family: 'Raleway';
  font-size: 14px;
  font-weight: 500;
  //background-color: #bcaaa4;
  background-color: #888888;
  -webkit-font-smoothing: antialiased;
}

.title {
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: 700;
  color: #5d4037;
  text-align: center;
}

p {
  line-height: 1.5em;
}

h1 + p,
p + p {
  margin-top: 10px;
}
* {
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
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

#version {
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  text-align: right;

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
}
</style>
