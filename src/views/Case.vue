<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Case Study" subTitle="Case Study" />
  <!-- Case Studies -->

  <div class="case-area section-padding">
    <div class="container">
      <div class="offset-lg-1 col-lg-10 text-center">
        <div class="section-title">
          <h6>Featured Work</h6>
          <h2>Recent <b>Case Studies</b></h2>
          <p>
            Law Practice equipment modern technique sit amet, consectetur
            adipisicing elit. <br />
            Repellendus laboriosam omnis cum.
          </p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-12 wow fadeInLeft"
          data-wow-delay=".2s"
          v-for="c in cases"
          :key="c.id"
        >
          <div
            class="single-case-item mb-50 bg-cover"
            :style="'background-image:url(' + c.images.bg_image + ')'"
          >
            <div class="case-inner">
              <div class="hover-info">
                <h6>{{ c.category }}</h6>
                <h4>{{ c.short_title }}</h4>
              </div>
              <router-link
                class="case-icon"
                :to="{ name: 'CaseDetails', params: { id: c.id } }"
              >
                <i class="las la-plus"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--CTA Section-->

  <div class="cta-area bg-cover">
    <div class="overlay-2"></div>
    <div class="container">
      <div class="row">
        <div
          class="col-lg-5 col-md-12 col-12 wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div class="evalution-form">
            <h5>Free Case Evalution</h5>
            <form action="/">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your E-mail" />
              <input type="tel" placeholder="Your Phone Number" />
              <input type="text" placeholder="Subject" />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></textarea>
              <input class="main-btn" type="submit" value="Submit Now" />
            </form>
          </div>
        </div>
        <div
          class="offset-lg-1 col-lg-6 col-md-12 col-12 wow fadeInDown"
          data-wow-delay=".4s"
        >
          <div class="section-title mt-50">
            <h6>We Are Here</h6>
            <h2>
              Get a Quick Response & Legal Advice from <b>professional</b>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              recusandae voluptatibus dolores, molestiae distinctio earum
              dolorum, alias amet officia reprehenderit.
            </p>
            <h5>Contact Us</h5>
            <p class="tel">+88-148-265-102</p>
          </div>
        </div>
      </div>
    </div>
  </div>

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
        >
          <div class="single-process-item mb-50">
            <div class="process-num">
              <p>01</p>
            </div>
            <div class="process-icon">
              <img src="assets/img/icon/law-book.png" alt="" />
            </div>
            <div class="process-content">
              <h5>Study & Research</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-12 wow fadeInLeft"
          data-wow-delay=".4s"
        >
          <div class="single-process-item mb-50">
            <div class="process-num">
              <p>02</p>
            </div>
            <div class="process-icon">
              <img src="assets/img/icon/contract.png" alt="" />
            </div>
            <div class="process-content">
              <h5>Date Collection</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-12 wow fadeInLeft"
          data-wow-delay=".6s"
        >
          <div class="single-process-item mb-50">
            <div class="process-num">
              <p>03</p>
            </div>
            <div class="process-icon">
              <img src="assets/img/icon/lawyer-2.png" alt="" />
            </div>
            <div class="process-content">
              <h5>Fight in the Court</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-12 wow fadeInLeft"
          data-wow-delay=".8s"
        >
          <div class="single-process-item mb-50">
            <div class="process-num">
              <p>04</p>
            </div>
            <div class="process-icon">
              <img src="assets/img/icon/podium-2.png" alt="" />
            </div>
            <div class="process-content">
              <h5>Bring Back the Win</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
  name: "Case",
  components: { NavbarHome5, Breadcrumb, CTA, Footer5 },
  data() {
    return {
      cases: [],
    };
  },

  async mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);

    let fetchedCases = await axios.get("/assets/data/cases.json");
    this.cases = fetchedCases.data.cases;
    console.log(this.cases);
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "Case Study | Aksoy/Kesmen",
  description: "Case Study | Aksoy/Kesmen",
  ogDescription: "Case Study | Aksoy/Kesmen",
  ogTitle: "Case Study | Aksoy/Kesmen",
});
</script>
