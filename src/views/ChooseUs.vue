<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Why Choose Us" subTitle="Why Choose Us" />
  <!-- Feature Section-->

  <div class="feature-area bg-cover sky-bg section-padding">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
          data-wow-delay=".3s"
        >
          <div class="section-title">
            <h6>A Little Bit More</h6>
            <h2>We bring justification against <b>injustice</b></h2>
          </div>
          <div
            class="single-feature-item"
            v-for="reason in choose_us.reasons"
            :key="reason.id"
          >
            <div class="feature-icon">
              <i :class="reason.icon"></i>
            </div>
            <div class="feature-content">
              <h5>{{ reason.title }}</h5>
              <p>{{ reason.short_description }}</p>
            </div>
          </div>
        </div>
        <div
          class="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInUp"
          data-wow-delay=".4s"
        >
          <div class="feature-image">
            <img :src="choose_us.feature_image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--CTA Section-->

  <CTA />

  <!-- Choose Us Area -->

  <div class="choose-us-area gray-bg section-padding">
    <div class="container">
      <div class="row">
        <div class="offset-lg-2 col-lg-8 text-center">
          <div class="section-title">
            <h6>Why Choose Us</h6>
            <h2>We offer perfect real <br /><b>Legal Service</b></h2>
          </div>
        </div>
      </div>
      <div class="choose-us-wrapper wow fadeInUp" data-wow-delay=".3s">
        <div class="row no-gutters">
          <div
            class="col-lg-3 col-md-6 col-12"
            v-for="feature in choose_us.key_features"
            :key="feature.id"
          >
            <div class="choose-us-inner">
              <div class="choose-us-icon">
                <img :src="feature.icon" alt="" />
              </div>
              <h5>{{ feature.title }}</h5>
              <p>{{ feature.short_description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="spacer section-padding"></div>

  <!-- Testimonial Section -->

  <TestimonialOne />

  <!--Process Section -->

  <div class="process-area gray-bg section-padding pb-50">
    <div class="container">
      <div class="row">
        <div class="offset-lg-2 col-lg-8 text-center">
          <div class="section-title">
            <h6>Our Process</h6>
            <h2>How Do We <b>Works</b></h2>
          </div>
        </div>
      </div>
      <div class="row process-item-wrap">
        <div
          class="col-lg-3 col-md-6 col-12 wow fadeInLeft"
          data-wow-delay=".2s"
          v-for="process in choose_us.processes"
          :key="process.id"
        >
          <div class="single-process-item mb-50">
            <div class="process-num">
              <p>{{ process.id }}</p>
            </div>
            <div class="process-icon">
              <img :src="process.icon" alt="" />
            </div>
            <div class="process-content">
              <h5>{{ process.title }}</h5>
              <p>{{ process.short_description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer5 />
</template>

<script>
// @ is an alias to /src
import NavbarHome5 from "@/components/Home5/NavbarHome5.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import CTA from "@/components/CTA.vue";
import TestimonialOne from "@/components/TestimonialOne.vue";
import Footer5 from "@/components/Home5/Footer5.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import axios from "axios";

export default {
  name: "ChooseUs",
  components: {
    NavbarHome5,
    Breadcrumb,
    Swiper,
    SwiperSlide,
    CTA,
    TestimonialOne,
    Footer5,
  },

  data() {
    return {
      choose_us: [],
      modules: [Navigation, Pagination, A11y, Autoplay],
      swiperOptions: {
        breakpoints: {
          354: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 50,
          },

          990: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      },
    };
  },

  async mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);

    let fetchedData = await axios.get("/assets/data/choose_us.json");
    this.choose_us = fetchedData.data.choose_us;
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "Why Choos Us | Aksoy/Kesmen",
  description: "Why Choos Us | Aksoy/Kesmen",
  ogDescription: "Choos Us | Aksoy/Kesmen",
  ogTitle: "Why Choos Us | Aksoy/Kesmen",
});
</script>
