<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="About Us" subTitle="About Us" />

  <!-- About Section-->

  <div id="about-2" class="about-area section-padding">
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-lg-5 wow fadeInUp" data-wow-delay=".3s">
          <div class="mt-10"></div>
          <div class="about-bg-wrapper">
            <div class="about-bg-innner bg-cover"></div>
          </div>
        </div>
        <div class="col-lg-7 wow fadeInDown" data-wow-delay=".4s">
          <div class="about-content-wrapper">
            <div class="section-title">
              <h6>About Us</h6>
              <h2>We are the Leading Law <br />Firm in <b>worldwide</b></h2>
            </div>
            <p>
              Logistics ennovation for freight plan Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quos natus ipsam ea vero placeat?
              Quia consequuntur odio nemo incidunt, perferendis.
            </p>
            <div class="row">
              <div
                class="col-lg-6 col-md-6 col-12"
                v-for="feature in about.features"
                :key="feature.id"
              >
                <div class="key-feature">
                  <div class="row no-gutters">
                    <div class="col-lg-4">
                      <div class="about-icon">
                        <img :src="feature.icon" alt="" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <h4>{{ feature.title }}</h4>
                      <p>{{ feature.short_description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row d-flex pt-30">
              <div class="img-content">
                <img class="img-fluid" :src="about.admin_sign" alt="sign" />
              </div>
              <div class="text-content">
                <h6>- {{ about.admin_name }}</h6>
                <p>{{ about.admin_designation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Services Section -->

  <div class="services-area bg-cover section-padding pb-50">
    <div class="container">
      <div class="row">
        <div class="offset-lg-2 col-lg-8 text-center">
          <div class="section-title">
            <h6>Practice Areas</h6>
            <h2>We Provide Various <br /><b>Legal Services</b></h2>
            <p class="text-white">
              Law Practice equipment modern technique sit amet, consectetur
              adipisicing elit. <br />
              Repellendus laboriosam omnis cum.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft"
          data-wow-delay=".2s"
          v-for="service in services"
          :key="service.id"
        >
          <div
            class="single-service-area mb-70"
            :class="'service-' + service.id"
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

  <!-- Achievement Area -->

  <div class="skill-area">
    <div class="skill-bg bg-cover">
      <div class="overlay"></div>
      <div class="pop-up-video">
        <a
          href="https://www.youtube.com/watch?v=RQu7jpcNUWI"
          class="video-play-btn mfp-iframe"
        >
          <i class="fa fa-play"></i>
        </a>
      </div>
    </div>
    <div class="skill-content">
      <div class="section-title mb-30">
        <h6>Our Achievement</h6>
        <h2>
          Our Brilliant Skill & <b><br />Creativity</b>
        </h2>
      </div>
      <p>
        There are planty industrial solution the filed. One of the best civil
        work in downtown have done by expert contractor.
      </p>
      <div class="row no-gutters mt-40">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="single-counter-box one">
            <div class="fact-icon">
              <i class="flaticon-book"></i>
            </div>
            <p class="counter-number">
              <span>{{ achivement.case_dismissed }}</span>
            </p>
            <h6>Case Dismissed</h6>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="single-counter-box two">
            <div class="fact-icon">
              <i class="flaticon-attorney"></i>
            </div>
            <p class="counter-number">
              <span>{{ achivement.expert_lawyer }}</span>
            </p>
            <h6>Expert Lawyer</h6>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="single-counter-box three">
            <div class="fact-icon">
              <i class="flaticon-support"></i>
            </div>
            <p class="counter-number">
              <span>{{ achivement.trusted_client }}</span
              >+
            </p>
            <h6>Trusted Client</h6>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="single-counter-box four">
            <div class="fact-icon">
              <i class="flaticon-insurance"></i>
            </div>
            <p class="counter-number">
              <span>{{ achivement.minimal_rate }}</span
              >+
            </p>
            <h6>Minimal Rate</h6>
          </div>
        </div>
      </div>
    </div>
  </div>

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
          v-for="attorney in attorneys.slice(0, 4)"
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
  name: "About",
  components: { NavbarHome5, Breadcrumb, CTA, Footer5 },
  data() {
    return {
      services: [],
      attorneys: [],
      achivement: [],
      about: [],
    };
  },

  async mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);

    let fetchedData = await axios.get("/assets/data/services.json");
    this.services = fetchedData.data.services;

    let fetchedAttorneyData = await axios.get("/assets/data/attorneys.json");
    this.attorneys = fetchedAttorneyData.data.attorneys;

    let fetchedAchivementData = await axios.get("/assets/data/achivement.json");
    this.achivement = fetchedAchivementData.data.achivement;

    let fetchedaboutData = await axios.get("/assets/data/about_us.json");
    this.about = fetchedaboutData.data.about_us;
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "About Us | Aksoy/Kesmen",
  description: "About Us | Aksoy/Kesmen",
  ogDescription: "About Us |Aksoy/Kesmen",
  ogTitle: "About Us | Aksoy/Kesmen  ",
});
</script>
