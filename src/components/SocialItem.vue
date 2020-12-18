<template>
  <span>
    <TwitterIcon
      class="socialIcon twitter"
      v-if="item.icon === 1"
      width="20px"
      height="20px"
      @click="handleClick(item.url)"
    />

    <GithubIcon
      class="socialIcon github"
      v-if="item.icon === 2"
      width="20px"
      height="20px"
      @click="handleClick(item.url)"
    />

    <XingIcon
      class="socialIcon xing"
      v-if="item.icon === 3"
      width="20px"
      height="20px"
      @click="handleClick(item.url)"
    />

    <LinkedinIcon
      class="socialIcon linkedin"
      v-if="item.icon === 4"
      width="20px"
      height="20px"
      @click="handleClick(item.url)"
    />
  </span>
</template>

<script>
import TwitterIcon from "../assets/twitter-logo.svg";
import GithubIcon from "../assets/github-logo.svg";
import XingIcon from "../assets/xing-logo.svg";
import LinkedinIcon from "../assets/linkedin-logo.svg";

export default {
  name: "SocialItem",
  components: {
    TwitterIcon,
    GithubIcon,
    XingIcon,
    LinkedinIcon,
  },
  props: {
    item: Object,
  },
  methods: {
    handleClick(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style lang="scss">
.socialIcon {
  height: 20px;
  width: 20px;

  &.twitter:hover {
    fill: #1da1f2;
  }

  &.github:hover {
    fill: #333;
  }

  &.xing:hover {
    fill: #026466;
  }

  &.linkedin:hover {
    fill: #0077b5;
  }
}
</style>
