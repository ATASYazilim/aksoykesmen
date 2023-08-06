<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, A11y, Autoplay } from "swiper";
import ControlTransfer from "./ControlTransfer.vue";
const modules = [Navigation, A11y, Autoplay];

const breakPoints = {
  992: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
  },
};

const swiperControll = ref({});
</script>
<template>
  <div class="case-studies-bg d-flex align-items-center">
    <div class="container">
      <h2 class="case-study-subtitle">
        <span class="mx-2" style="text-decoration: line-through">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        Recent Cases
      </h2>
      <div class="d-md-flex justify-content-between align-items-center">
        <h1 class="case-study-title my-5">Our Recent Case Study</h1>
        <div class="text-center">
          <button
            class="case-studies-control-button"
            @click="swiperControll.value.slidePrev()"
          >
            <i class="las la-angle-double-left"></i>
          </button>
          <button
            class="case-studies-control-button ms-3"
            @click="swiperControll.value.slideNext()"
          >
            <i class="las la-angle-double-right"></i>
          </button>
        </div>
      </div>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :breakpoints="breakPoints"
        navigation
        :loop="true"
        :autoplay="{ delay: 4000 }"
        class="mt-5"
      >
        <swiper-slide>
          <div class="case-study-card">
            <div class="position-relative">
              <div class="d-flex justify-content-center">
                <img
                  class="case-study-card-img"
                  src="/assets/img/home5/case_studies/case_1.png"
                />
              </div>
              <div class="case-study-meta-container">
                <div class="case-study-meta">
                  <p class="case-study-card-subtitle">Law {{ "&" }} Attorney</p>
                  <h1 class="case-study-card-title">Family Cases</h1>
                </div>
              </div>
              <div class="case-study-hover-icon">
                <router-link :to="{ name: 'Case' }">
                  <img
                    src="/assets/img/home5/case_studies/up-right-arrow.png"
                    alt=""
                  />
                </router-link>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="case-study-card">
            <div class="position-relative">
              <div class="d-flex justify-content-center">
                <img
                  class="case-study-card-img"
                  src="/assets/img/home5/case_studies/case_2.png"
                />
              </div>
              <div class="case-study-meta-container">
                <div class="case-study-meta">
                  <p class="case-study-card-subtitle">Law {{ "&" }} Attorney</p>
                  <h1 class="case-study-card-title">Car Insurances</h1>
                </div>
              </div>
              <div class="case-study-hover-icon">
                <router-link :to="{ name: 'Case' }">
                  <img
                    src="/assets/img/home5/case_studies/up-right-arrow.png"
                    alt=""
                  />
                </router-link>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="case-study-card">
            <div class="position-relative">
              <div class="d-flex justify-content-center">
                <img
                  class="case-study-card-img"
                  src="/assets/img/home5/case_studies/case_3.png"
                />
              </div>
              <div class="case-study-meta-container">
                <div class="case-study-meta">
                  <p class="case-study-card-subtitle">Law {{ "&" }} Attorney</p>
                  <h1 class="case-study-card-title">Business Cases</h1>
                </div>
              </div>
              <div class="case-study-hover-icon">
                <router-link :to="{ name: 'Case' }">
                  <img
                    src="/assets/img/home5/case_studies/up-right-arrow.png"
                    alt=""
                  />
                </router-link>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="case-study-card">
            <div class="position-relative">
              <div class="d-flex justify-content-center">
                <img
                  class="case-study-card-img"
                  src="/assets/img/home5/case_studies/case_4.png"
                />
              </div>
              <div class="case-study-meta-container">
                <div class="case-study-meta">
                  <p class="case-study-card-subtitle">Law {{ "&" }} Attorney</p>
                  <h1 class="case-study-card-title">Drug Violence</h1>
                </div>
              </div>
              <div class="case-study-hover-icon">
                <router-link :to="{ name: 'Case' }">
                  <img
                    src="/assets/img/home5/case_studies/up-right-arrow.png"
                    alt=""
                  />
                </router-link>
              </div>
            </div>
          </div>
          <ControlTransfer :swiperControll="swiperControll" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style scoped>
.case-study-card-subtitle {
  font-size: 18px;
  font-family: "Rajdhani";
  color: rgb(79, 79, 103);
  text-align: center;
  margin-bottom: 0;
}

.case-study-card-title {
  font-size: 24px;
  font-family: "Rajdhani";
  color: rgb(47, 49, 64);
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
}

.case-study-meta-container {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
}

.case-study-title {
  font-size: 52px;
  font-family: "Rajdhani";
  font-weight: bold;
  line-height: 1.192;
  text-align: left;
  color: white;
}

.case-study-subtitle {
  font-size: 18px;
  font-family: "Rajdhani";
  color: rgb(200, 157, 102);
  font-weight: bold;
  line-height: 1.444;
}

.case-study-meta {
  background-color: white;
  width: 80%;
  padding: 20px 30px;
}

.case-study-hover-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -40%);
  visibility: hidden;
  transition: all 0.4s;
}

.case-study-card {
  filter: brightness(100%);
  transition: filter 0.8s;
}

.case-study-card:hover {
  cursor: pointer;
}

.case-studies-control-button {
  border: none;
  border-radius: 100%;
  font-size: 24px;
  padding: 0.75rem;
  color: white;
  background-color: rgb(200, 157, 102);
}

.case-studies-control-button:hover {
  background-color: white;
  color: rgb(200, 157, 102);
}

.case-study-card:hover .case-study-card-img {
  filter: brightness(50%);
}

.case-study-card:hover .case-study-hover-icon {
  visibility: visible;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 768px) {
  .case-study-title {
    text-align: center;
  }
}
</style>
