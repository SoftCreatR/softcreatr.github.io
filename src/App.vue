<template>
  <div id="app">
    <about-me msg="Sascha Greuel"/>
    <social-bar v-bind:items="socialProfiles"/>
    <octocat/>
  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue';
import SocialBar from './components/SocialBar.vue';
import Octocat from './components/Octocat.vue';

export default {
  name: 'Apps',
  data() {
    return {
      socialProfiles: [
        {
          name: 'twitter', url: 'https://twitter.com/1_2_dev', icon: 1
        }, {
          name: 'github', url: 'https://github.com/SoftCreatR', icon: 2
        }, {
          name: 'xing', url: 'https://www.xing.com/profile/Sascha_Greuel3', icon: 3
        }, {
          name: 'linkedin', url: 'https://www.linkedin.com/in/1-2-dev', icon: 4
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

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
