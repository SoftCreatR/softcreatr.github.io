<template>
  <div>
    <img
      alt="Sascha Greuel"
      src="./../assets/me.webp"
      srcset="./../assets/me.webp 1x, ./../assets/me@2x.webp 2x, ./../assets/me@3x.webp 3x"
      width="294"
      height="294"
    />
    <h1 itemprop="name">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
img {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='300' width='300' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='gradient'%3E%3Cstop offset='0' style='stop-color:%230070d8' /%3E%3Cstop offset='0.5' style='stop-color:%232cdbf1' /%3E%3Cstop offset='1' style='stop-color:%2383eb8a' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(150, 150)'%3E%3Ccircle cx='0' cy='0' r='140' style='fill:none;stroke:url(%23gradient);stroke-width:6;'%3E%3CanimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0' to='360' begin='0' dur='5s' repeatCount='indefinite' /%3E%3C/circle%3E%3C/g%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: 320px 320px;
  border-radius: 50%;
  border-radius: 50%;
  height: 294px;
  padding: 13px;
  width: 294px;
}
</style>
