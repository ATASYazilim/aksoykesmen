<script setup>
import {useSwiper} from "swiper/vue"
import {onMounted} from "vue";
const {swiperControll} = defineProps(['swiperControll'])
const swiper_Controll = useSwiper();

onMounted(() => {
  swiperControll.value = swiper_Controll;
})
</script>
<template>
  <span></span>
</template>

