<template>
  <div id="app">
    <about-me msg="Sascha Greuel" />
    <social-bar v-bind:items="socialProfiles" />
    <octocat />
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
          name: "twitter",
          url: "/2",
          icon: 1, // https://github.com/SoftCreatR/softcreatr.github.io/issues/2
        },
        {
          name: "github",
          url: "/3",
          icon: 2, // https://github.com/SoftCreatR/softcreatr.github.io/issues/3
        },
        {
          name: "xing",
          url: "/4",
          icon: 3, // https://github.com/SoftCreatR/softcreatr.github.io/issues/4
        },
        {
          name: "linkedin",
          url: "/5",
          icon: 4, // https://github.com/SoftCreatR/softcreatr.github.io/issues/5
        },
      ],
    };
  },
  components: {
    AboutMe,
    SocialBar,
    Octocat,
  },
};
</script>

<style lang="scss">
:root {
  color-scheme: light dark;
  --background-color: #fff;
  --text-color: #24292e;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #0d1117;
    --text-color: #c9d1d9;
  }
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}

svg {
  fill: var(--text-color);
}

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  margin-top: 60px;
  text-align: center;
}
</style>
