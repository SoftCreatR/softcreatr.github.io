<template>
  <div id="app">
    <about-me msg="Sascha Greuel"/>
    <social-bar v-bind:items="socialProfiles"/>
    <octocat/>
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import SocialBar from "./components/SocialBar.vue";
import Octocat from "./components/Octocat.vue";

export default {
  name: "Apps",
  data() {
    return {
      socialProfiles: [
        {
          name: "twitter", url: "/2", icon: 1 // https://github.com/SoftCreatR/softcreatr.github.io/issues/2
        }, {
          name: "github", url: "/3", icon: 2 // https://github.com/SoftCreatR/softcreatr.github.io/issues/3
        }, {
          name: "xing", url: "/4", icon: 3 // https://github.com/SoftCreatR/softcreatr.github.io/issues/4
        }, {
          name: "linkedin", url: "/5", icon: 4 // https://github.com/SoftCreatR/softcreatr.github.io/issues/5
        }
      ]
    }
  },
  components: {
    AboutMe,
    SocialBar,
    Octocat
  }
}
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
