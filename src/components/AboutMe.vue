<template>
  <div>
    <img alt="Sascha Greuel" src="../assets/me.jpg" width="300" height="300">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    msg: String
  }
}
</script>

<style>
img {
  border-radius: 50%;
  height: 300px;
  width: 300px;
}
</style>
