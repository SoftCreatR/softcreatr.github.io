<template>
  <div>
    <img
      alt="Sascha Greuel"
      src="./../assets/me.webp"
      srcset="
        ./../assets/me.webp    1x,
        ./../assets/me@2x.webp 2x,
        ./../assets/me@3x.webp 3x
      "
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
  background-repeat: no-repeat;
  background-size: 320px 320px;
  height: 294px;
  width: 294px;
  --angle: 0deg;
  border: 6px solid #01baef;
  border-image: conic-gradient(
      from var(--angle),
      #bdd5e1,
      #01baef,
      #09196d,
      #37d5d6,
      #01baef,
      #09196d,
      #bdd5e1
    )
    1;
  animation: 10s rotate linear infinite;
  margin: 7px;
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
</style>
