<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import Button from "./Button5.vue";
import ControlTransfer from "./ControlTransfer.vue";

const modules = [Navigation, A11y, Autoplay];
const swiperControll = ref([]);
</script>
<template>
  <div class="w-100" style="overflow: hidden">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{ delay: 4000 }"
    >
      <swiper-slide>
        <div
          class="single-slide-item position-relative"
          style="background-image: url(/assets/img/home5/banner/banner5Bg.png)"
        >
          <div class="overlay"></div>
          <div class="hero-area-content">
            <div class="container">
              <div class="row justify-content-center">
                <div
                  class="col-lg-12 wow fadeInUp animated"
                  data-wow-delay=".3s"
                >
                  <div class="section-title">
                    <h2 class="banner5-subtitle">Welcome to Aksoy/Kesmen</h2>
                    <h1>Success measured by<br />your satisfaction</h1>
                    <p class="my-3">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered
                      <br />alteration in some form, by injected humour,
                    </p>
                  </div>
                  <div class="text-center">
                    <router-link :to="{ name: 'Contact' }"
                      ><Button text="Schedule Consultation" size="long"></Button
                    ></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              @click="swiperControll.value.slidePrev()"
              class="prev_button_home5"
            >
              <img src="/assets/img/home5/banner/left_blob.png" />
            </div>
            <div
              @click="swiperControll.value.slideNext()"
              class="next_button_home5"
            >
              <img src="/assets/img/home5/banner/right_blob.png" />
            </div>
          </div>
          <div class="banner5-social-container">
            <p class="pipe d-block d-lg-none">|</p>
            <p><i class="lab la-facebook"></i> Facebook</p>
            <p>|</p>
            <p><i class="lab la-twitter"></i> Twitter</p>
            <p>|</p>
            <p><i class="lab la-linkedin"></i> LinkedIn</p>
            <p>|</p>
            <p><i class="lab la-instagram"></i> Instagram</p>
            <p class="pipe d-block d-lg-none">|</p>
          </div>
          <div class="banner5-quote-container">
            <div>
              <img
                src="/assets/img/home5/banner/customers.png"
                alt="customers pictures"
              />
            </div>
            <div>
              <p>
                We’be more than 2,056+ customer <br />
                satisfied with our services
                <a href="#"
                  ><span class="fw-bold" style="text-decoration: underline"
                    >Get Quote</span
                  ></a
                >
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="single-slide-item position-relative"
          style="background-image: url('/assets/img/home5/bannerBGpng.png')"
        >
          <div class="overlay"></div>
          <div class="hero-area-content">
            <div class="container">
              <div class="row justify-content-center">
                <div
                  class="col-lg-12 wow fadeInUp animated"
                  data-wow-delay=".3s"
                >
                  <div class="section-title">
                    <h2 class="banner5-subtitle">Welcome to Aksoy/Kesmen</h2>
                    <h1>
                      We are Certified <br />
                      Law <span class="stroke-text">Professionals</span>
                    </h1>
                    <p>
                      Law is the process of facilitating practicing, or
                      acquisition of knowledge, <br />
                      skills, values, beliefs, and habits.
                    </p>
                  </div>
                  <div class="text-center">
                    <router-link :to="{ name: 'About' }"
                      ><Button text="Schedule Consultation" size="long"
                    /></router-link>
                    <router-link :to="{ name: 'Case' }" class="ms-2"
                      ><Button text="Contact with us" variant="light"
                    /></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              @click="swiperControll.value.slidePrev()"
              class="prev_button_home5"
            >
              <img src="/assets/img/home5/banner/left_blob.png" />
            </div>
            <div
              @click="swiperControll.value.slideNext()"
              class="next_button_home5"
            >
              <img src="/assets/img/home5/banner/right_blob.png" />
            </div>
          </div>
          <div class="banner5-social-container">
            <p class="pipe d-block d-lg-none">|</p>
            <p><i class="lab la-facebook"></i> Facebook</p>
            <p>|</p>
            <p><i class="lab la-twitter"></i> Twitter</p>
            <p>|</p>
            <p><i class="lab la-linkedin"></i> LinkedIn</p>
            <p>|</p>
            <p><i class="lab la-instagram"></i> Instagram</p>
            <p class="pipe d-block d-lg-none">|</p>
          </div>
          <div class="banner5-quote-container">
            <div>
              <img
                src="/assets/img/home5/banner/customers.png"
                alt="customers pictures"
              />
            </div>
            <div>
              <p>
                We’be more than 2,056+ customer <br />
                satisfied with our services
                <a href="#"
                  ><span class="fw-bold" style="text-decoration: underline"
                    >Get Quote</span
                  ></a
                >
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <ControlTransfer :swiperControll="swiperControll" />
    </swiper>
  </div>
</template>
<style scoped>
.banner5-subtitle {
  font-size: 30px;
  font-family: "Rajdhani";
  color: rgb(200, 157, 102);
  line-height: 0.867;
  text-align: center;
}

.next_button_home5 {
  position: absolute;
  right: 50px;
  top: 50%;
  cursor: pointer;
}

.prev_button_home5 {
  position: absolute;
  left: 50px;
  top: 50%;
  cursor: pointer;
}

.banner5-social-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  display: flex;
  justify-content: space-between;
  padding-left: 5rem;
  padding-bottom: 1rem;
}

.banner5-social-container p:hover {
  color: rgb(200, 157, 102);
  cursor: pointer;
}

.banner5-quote-container {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: white;
  display: flex;
  padding: 25px 40px;
}

.banner5-quote-container p {
  margin-inline-start: 1rem;
  color: black;

  font-size: 18px;
  font-family: "Rajdhani";
  color: rgb(47, 49, 64);
  line-height: 1.556;
}

@media screen and (max-width: 1200px) {
  .banner5-social-container {
    width: 100%;
    left: 50%;
    padding-right: 5rem;
    transform: translateX(-50%);
  }

  .banner5-quote-container {
    display: none;
  }
}
</style>
