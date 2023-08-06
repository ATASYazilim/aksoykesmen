<script setup>
const {text, variant, size} = defineProps(['text', 'variant', 'size'])
</script>
<template>
  <button class="home5-button"
    :class="{'home5-button-light-variant': variant == 'light', 'home5-button-dark-variant': variant == 'dark', 'home5-button-long': size == 'long'}">{{
      text
    }}</button>
</template>
<style scoped>
.home5-button {
  font-size: 16px;
  font-family: "Rajdhani";
  color: rgb(255, 255, 255);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.625;
  text-align: center;
  border: none;
  border-radius: 2rem;

  background-color: rgb(200, 157, 102);
  width: 145px;
  height: 56px;
}

.home5-button-long {
  width: 225px;
}

.home5-button-light-variant {
  background-color: #fff;
  color: rgb(47, 49, 64);
}

.home5-button-dark-variant {
  color: #fff;
  background-color: rgb(47, 49, 64);
}
</style>

