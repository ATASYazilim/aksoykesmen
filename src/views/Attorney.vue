<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Our Attorney" subTitle="Our Attorney" />
  <!-- Team Section-->

  <div class="team-area section-padding pb-150">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h6>Meet Our Lawyer</h6>
            <h2>Qualified <b>Attorneys</b></h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInLeft my-5 pb-5"
          data-wow-delay=".2s"
          v-for="attorney in attorneys"
          :key="attorney.id"
        >
          <div class="single-team-member">
            <div
              class="team-member-bg"
              :style="'background-image:url(' + attorney.image + ')'"
            >
              <div class="team-content">
                <div class="team-title">
                  <router-link
                    :to="{
                      name: 'AttorneyDetails',
                      params: { id: attorney.id },
                    }"
                    >{{ attorney.name }}</router-link
                  >
                </div>
                <div class="team-subtitle">
                  <p>{{ attorney.designation }}</p>
                </div>
              </div>
              <div class="team-social">
                <ul>
                  <li>
                    <a href="#"><i class="lab la-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lab la-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lab la-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>
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
  name: "Attorney",
  components: { NavbarHome5, Breadcrumb, CTA, Footer5 },
  data() {
    return {
      attorneys: [],
    };
  },
  async mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);

    let fetchedData = await axios.get("/assets/data/attorneys.json");
    this.attorneys = fetchedData.data.attorneys;
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "Our Attorney | Aksoy/Kesmen",
  description: "Our Attorney | Aksoy/Kesmen",
  ogDescription: "Our Attorney | Aksoy/Kesmen",
  ogTitle: "Our Attorney | Aksoy/Kesmen",
});
</script>
