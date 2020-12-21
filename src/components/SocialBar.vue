<template>
  <ul id="socialItems">
    <li v-for="(item, index) in items" :key="index" tabindex="0">
      <social-item v-bind:item="item"></social-item>
    </li>
  </ul>
</template>

<script>
import SocialItem from "./SocialItem.vue";

export default {
  name: "SocialBar",
  components: {
    SocialItem,
  },
  props: {
    items: Array,
  },
};
</script>

<style lang="scss">
ul#socialItems {
  padding-inline-start: 0;

  li {
    display: inline;

    &:not(:last-child) {
      margin-right: 15px;
    }
  }
}
</style>
