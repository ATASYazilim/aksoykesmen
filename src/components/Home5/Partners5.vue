<script setup>
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, A11y, Autoplay} from "swiper";
import ControlTransfer from "./ControlTransfer.vue"

const modules = [Navigation, A11y, Autoplay]
const swiperControll = ref([])
const breakPoints = {
  "1200": {
    slidesPerView: 6
  },
  "992": {
    slidesPerView: 3
  },
  "0": {
    slidesPerView: 2
  }
}
</script>
<template>
  <div class="parterns5-bg">
    <div class="container">
      <swiper :modules="modules" :breakpoints="breakPoints" :space-between="0" navigation :pagination="{clickable: true}"
        :loop="true" :autoplay="{delay: 4000}">
        <swiper-slide>
          <div class="d-flex justify-content-center">
            <img src="/assets/img/home5/partners/partner_logo_1.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center">
            <img src="/assets/img/home5/partners/partner_logo_2.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center">
            <img src="/assets/img/home5/partners/partner_logo_3.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center">
            <img src="/assets/img/home5/partners/partner_logo_4.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center">
            <img src="/assets/img/home5/partners/partner_logo_5.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="d-flex justify-content-center">
            <img src="/assets/img/home5/partners/partner_logo_6.png" alt="">
          </div>
        </swiper-slide>
        <ControlTransfer :swiperControll="swiperControll" />
      </swiper>
      <div class="mx-2 d-flex align-items-center justify-content-center">
        <div class="horizontal-line"> </div>
        <button class="parterns5-control-button mx-1" @click="swiperControll.value.slideNext()"><i
            class="las la-angle-left"></i></button>
        <button class="parterns5-control-button mx-1" @click="swiperControll.value.slidePrev()">
          <i class="las la-angle-right"></i></button>
        <div class="horizontal-line"> </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.parterns5-bg {
  padding-top: 6rem;
  background-color: #f7f2ec;
  overflow: hidden;
}

.parterns5-control-button {
  border: none;
  background-color: white;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
}

.horizontal-line {
  padding: 0 1rem;
}

.horizontal-line::before {
  content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";
  text-decoration: line-through;
  color: #DDD;
}
</style>
