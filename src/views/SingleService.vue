<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Single Service" subTitle="Single Service" />
  <!-- Service Details -->

  <div id="service-page" class="service-details-section section-padding pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="service-list">
            <h5>Service Lists</h5>
            <router-link
              :class="this.$route.params.id == service.id ? 'active' : ''"
              :to="{ name: 'ServiceDetails', params: { id: service.id } }"
              v-for="service in services"
              :key="service.id"
              @click="reRenderData"
              >{{ service.name }}<span><i class="las la-arrow-right"></i></span
            ></router-link>
          </div>

          <div class="question-section">
            <h6>Have any Question?</h6>
            <form action="sendemail.php">
              <input
                type="text"
                name="name"
                id="name"
                required=""
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                required=""
                placeholder="Your E-mail"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                required=""
                placeholder="How can help you?"
              ></textarea>
              <button class="btn btn-primary" type="submit">
                Your Question
              </button>
            </form>
          </div>

          <div class="helpline-section">
            <div class="helpline-content text-center">
              <h4>Need Consultancy Help</h4>
              <p>Gatherin galso sprit moving shall flow</p>
              <button class="btn btn-primary" type="submit">Contact Us</button>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="single-service">
            <img :src="images.banner_image" alt="banner image" />
            <h2>{{ service.name }}</h2>
            <p>{{ service.full_description }}</p>

            <hr />
            <h5>{{ service.sub_heading_1 }}</h5>
            <p>{{ service.sub_description_1 }}</p>
            <div class="row">
              <div
                class="col-lg-6 col-md-6 col-12"
                v-for="feature in service.features"
                :key="feature.id"
              >
                <div class="key-feature text-center pr-50">
                  <div class="row justify-content-center no-gutters">
                    <div class="col-lg-4">
                      <div class="about-icon">
                        <img :src="feature.icon" alt="" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <h5>{{ feature.title }}</h5>
                      <p>{{ feature.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <div class="single-service-bg mt-50 pb-20">
                  <img :src="images.sub_image_1" alt="sub image" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="single-service-bg mt-50 pb-20">
                  <img :src="images.sub_image_2" alt="sub image" />
                </div>
              </div>
            </div>

            <h5>{{ service.sub_heading_2 }}</h5>
            <p>{{ service.sub_description_2 }}</p>

            <hr />

            <br />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--CTA Section-->

  <CTA />

  <Footer5 />
</template>

<script>
// @ is an alias to /src
import NavbarHome5 from "@/components/Home5/NavbarHome5.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import CTA from "@/components/CTA.vue";
import Footer5 from "@/components/Home5/Footer5.vue";

import axios from "axios";

export default {
  name: "SingleService",
  components: { NavbarHome5, Breadcrumb, CTA, Footer5 },
  data() {
    return {
      services: [],
      service: [],
      images: [],
    };
  },

  async mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);

    let fetchedData = await axios.get("/assets/data/services.json");
    this.services = fetchedData.data.services;

    this.service = this.services.find(
      (item) => item.id == this.$route.params.id
    );
    this.images = this.service.images;
  },

  methods: {
    async reRenderData() {
      let fetchedData = await axios.get("/assets/data/services.json");
      this.services = fetchedData.data.services;

      this.service = this.services.find(
        (item) => item.id == this.$route.params.id
      );
      this.images = this.service.images;
    },
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "Practice Area Details | Aksoy/Kesmen",
  description:
    "Practice Area Details | Aksoy/Kesmen",
  ogDescription:
    "Practice Area Details | Aksoy/Kesmene",
  ogTitle:
    "Practice Area Details | Aksoy/Kesmen",
});
</script>
