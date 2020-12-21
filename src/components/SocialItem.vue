<template>
  <span>
    <span class="socialIcon" aria-label="Twitter">
      <TwitterIcon
        class="twitter"
        v-if="item.icon === 1"
        width="20px"
        height="20px"
        @click="handleClick(item.url)"
      />
    </span>

    <span class="socialIcon" aria-label="GitHub">
      <GithubIcon
        class="github"
        v-if="item.icon === 2"
        width="20px"
        height="20px"
        @click="handleClick(item.url)"
      />
    </span>

    <span class="socialIcon" aria-label="Xing">
      <XingIcon
        class="xing"
        v-if="item.icon === 3"
        width="20px"
        height="20px"
        @click="handleClick(item.url)"
      />
    </span>

    <span class="socialIcon" aria-label="LinkedIn">
      <LinkedinIcon
        class="linkedin"
        v-if="item.icon === 4"
        width="20px"
        height="20px"
        @click="handleClick(item.url)"
      />
    </span>
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
  cursor: pointer;
  height: 20px;
  position: relative;
  width: 20px;

  &::before {
    background-color: #333;
    border-radius: 50px;
    color: #fff;
    content: attr(aria-label);
    left: -26px;
    padding: 10px;
    position: absolute;
    text-transform: none;
    top: -54px;
    transition: all 0.5s ease;
    width: 80px;
  }

  &::after {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #2b222a;
    content: " ";
    font-size: 0;
    left: 9px;
    line-height: 0;
    margin-left: -5px;
    position: absolute;
    top: -13px;
    width: 0;
  }

  &::before,
  &::after {
    color: #efefef;
    opacity: 0;
    pointer-events: none;
    text-align: center;
  }

  &:focus::before,
  &:focus::after,
  &:hover::before,
  &:hover::after {
    opacity: 1;
    transition: all 0.75s ease;
  }

  > .twitter:hover {
    fill: #1da1f2;
  }

  > .github:hover {
    fill: #333;
  }

  > .xing:hover {
    fill: #026466;
  }

  > .linkedin:hover {
    fill: #0077b5;
  }
}
</style>
