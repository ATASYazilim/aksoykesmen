<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Case Details" subTitle="Single Case" />
  <!-- Case Details -->

  <div class="case-single-section section-padding pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>{{ currentCase.title }}</h3>
          <p>{{ currentCase.description }}</p>
          <div class="row">
            <div class="col-lg-8">
              <img :src="images.banner_image" alt="" />
              <div class="case-overview">
                <h5>Case Overview</h5>
                <p>{{ currentCase.overview }}</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="case-info">
                <h5>Case Info</h5>
                <p>
                  <b>Advocate:</b><span>{{ currentCase.advocate }}</span>
                </p>
                <p>
                  <b>Category:</b><span>{{ currentCase.category }}</span>
                </p>
                <p>
                  <b>Start Date:</b><span>{{ currentCase.start_date }}</span>
                </p>
                <p>
                  <b>End Date:</b><span>{{ currentCase.end_date }}</span>
                </p>
                <p>
                  <b>Address:</b><span>{{ currentCase.address }}</span>
                </p>
                <p>
                  <b>Tags:</b
                  ><span v-for="tag in currentCase.tags" :key="tag.name"
                    >{{ tag.name }},
                  </span>
                </p>
                <div class="main-btn">View Case</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-8"></div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="port-img mt-10 mb-50">
            <img :src="images.image_1" alt="" />
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="port-img mt-10 mb-50">
            <img :src="images.image_2" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Recent Case Area -->

  <div id="case-3" class="case-area sky-bg section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center">
            <h6>Recent Case Solved</h6>
            <h2>We bring justification againts <b>injustice</b></h2>
          </div>
        </div>
      </div>
      <div class="case-slider">
        <!-- <div class="row"> -->
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :autoplay="{ delay: 4000 }"
        >
          <swiper-slide v-for="singleCase in allCases" :key="singleCase.id">
            <!-- <div class="col-lg-4 col-md-6 col-12 wow fadeInLeft" data-wow-delay=".2s"> -->
            <div
              class="single-case-item mb-50 bg-cover"
              :style="
                'background-image:url(' + singleCase.images.bg_image + ')'
              "
            >
              <div class="case-inner">
                <div class="hover-info">
                  <h4>{{ singleCase.short_title }}</h4>
                  <p>{{ singleCase.short_description }}</p>
                  <router-link
                    class="case-icon"
                    :to="{ name: 'CaseDetails', params: { id: singleCase.id } }"
                    >Read More</router-link
                  >
                </div>
              </div>
            </div>
            <!-- </div> -->
          </swiper-slide>
        </swiper>
        <!-- </div> -->
      </div>
    </div>
  </div>
  <Footer5 />
</template>

<script>
// @ is an alias to /src
import NavbarHome5 from "@/components/Home5/NavbarHome5.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
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
  name: "SingleCase",
  components: { NavbarHome5, Breadcrumb, Swiper, SwiperSlide, Footer5 },
  data() {
    return {
      currentCase: [],
      allCases: [],
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

  async mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);

    let fetchedData = await axios.get("/assets/data/cases.json");
    this.allCases = fetchedData.data.cases;

    this.currentCase = this.allCases.find(
      (item) => item.id == this.$route.params.id
    );
    this.images = this.currentCase.images;
    console.log(this.currentCase);
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "Case Details | Aksoy/Kesmen",
  description: "Case Details | Aksoy/Kesmen",
  ogDescription: "Case Details | Aksoy/Kesmen",
  ogTitle: "Case Details | Aksoy/Kesmen",
});
</script>
