<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Contact" subTitle="Contact" />
  <!-- Contact Area -->

  <div id="contact-us" class="contact-us-area section-padding">
    <div class="container">
      <div class="contact-us-wrapper">
        <div class="row no-gutters">
          <div class="col-lg-3 col-md-6 col-12">
            <div class="contact-us-inner">
              <div class="info-i">
                <span><i class="las la-map-marker"></i></span>
              </div>
              <h5>Location</h5>
              <p>{{ contactData.address }}</p>
              <a href="">Find us on map</a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="contact-us-inner">
              <div class="info-i">
                <span><i class="las la-clock"></i></span>
              </div>
              <h5>Office Hour</h5>
              <p>
                {{ contactData.opening_days }} <br />{{
                  contactData.opening_hour
                }}
              </p>
              <a href="">Get Direction</a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="contact-us-inner">
              <div class="info-i">
                <span><i class="las la-mobile"></i></span>
              </div>
              <h5>Phone Number</h5>
              <p>
                {{ contactData.phone }} <br />{{ contactData.secondary_phone }}
              </p>
              <a href="">Call Now</a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="contact-us-inner">
              <div class="info-i">
                <span><i class="las la-envelope"></i></span>
              </div>
              <h5>E-mail Address</h5>
              <p>
                {{ contactData.mail }}<br />{{ contactData.secondary_mail }}
              </p>
              <a href="">Mail Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Form -->

  <div id="contact-page" class="contact-section blue-bg section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-12 text-center wow fadeInRight">
          <div class="contact-form-wrapper">
            <div class="section-title">
              <h2>Get in <b>Touch</b></h2>
            </div>
            <div class="contact-form">
              <form action="/">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <input type="email" placeholder="E-mail" />
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <input type="tel" placeholder="Phone Number" />
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <input type="text" placeholder="Subject" />
                  </div>
                  <div class="col-lg-12">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                  <div class="col-lg-12 col-md-6 col-12 text-center">
                    <button class="main-btn">Get A Quote</button>
                  </div>
                </div>
              </form>
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
  name: "Contact",
  components: { NavbarHome5, Breadcrumb, CTA, Footer5 },
  data() {
    return {
      contactData: [],
    };
  },

  async mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);

    let fetchedData = await axios.get("/assets/data/homeData.json");
    this.contactData = fetchedData.data.homeData;
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "Contact | Aksoy/Kesmen",
  description: "Contact | Aksoy/Kesmen",
  ogDescription: "Contact | Aksoy/Kesmen",
  ogTitle: "Contact | Aksoy/Kesmen",
});
</script>
