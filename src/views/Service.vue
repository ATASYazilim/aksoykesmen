<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Services" subTitle="Services" />
  <!-- Service Area -->

  <div id="service-3" class="serv-area sky-bg section-padding">
    <div class="container">
      <div class="row">
        <div class="offset-lg-2 col-lg-8 text-center">
          <div class="section-title">
            <h6>What We do</h6>
            <h2>We Offer Perfect Real<br /><b>Law Service</b></h2>
            <p>
              We can service all of legal procedure from starting to ending,
              hearing, impitchment & witness. We have done adequetly something.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
          data-wow-delay=".2s"
          v-for="service in services"
          :key="service.id"
        >
          <div class="single-serv-wrapper">
            <div class="row gx-0">
              <div class="col-lg-6">
                <div
                  class="single-serv-bg bg-cover"
                  :style="
                    'background-image:url(' + service.images.banner_image + ')'
                  "
                ></div>
              </div>
              <div class="col-lg-6">
                <div class="single-serv-area">
                  <div class="service-icon">
                    <i :class="service.icon"></i>
                  </div>
                  <h5>{{ service.name }}</h5>
                  <p>{{ service.short_description }}</p>
                  <router-link
                    class="read-more"
                    :to="{ name: 'ServiceDetails', params: { id: service.id } }"
                    >Read More</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--CTA Section-->

  <CTA />

  <!-- Services Area -->

  <div id="service-2" class="services-area section-padding pb-50">
    <div class="container">
      <div class="row">
        <div class="offset-lg-2 col-lg-8 text-center">
          <div class="section-title">
            <h6>Services</h6>
            <h2>
              What we are offering<b
                ><br />
                to solve cases</b
              >
            </h2>
            <p>
              Combining Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Repellendus laboriosam omnis cum, natus doloremque
              perferendis.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft"
          data-wow-delay=".2s"
          v-for="(service, i) in services.slice(0, 6)"
          :key="service.id"
        >
          <div
            class="single-service-area mb-50"
            :class="
              i % 2 ? 'service-' + service.id : 'blue-bg service-' + service.id
            "
          >
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h4>{{ service.name }}</h4>
            <p>{{ service.short_description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Testimonial Area -->

  <TestimonialTwo />

  
  <Footer5 />
</template>

<script>
// @ is an alias to /src
import NavbarHome5 from "@/components/Home5/NavbarHome5.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import CTA from "@/components/CTA.vue";
import TestimonialTwo from "@/components/TestimonialTwo.vue";
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
  name: "Service",
  components: {
    NavbarHome5,
    Breadcrumb,
    Swiper,
    SwiperSlide,
    CTA,
    TestimonialTwo,
    Footer5,
  },
  data() {
    return {
      services: [],
      images: [],

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

  async beforeMount() {
    let fetchedData = await axios.get("/assets/data/services.json");
    this.services = fetchedData.data.services;

  },

  mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";

useSeoMeta({
  title: "Practice Area |Aksoy/Kesmen",
  description: "Practice Area | Aksoy/Kesmen",
  ogDescription: "Practice Area | Aksoy/Kesmen",
  ogTitle: "Practice Area | Aksoy/Kesmen",
});
</script>
