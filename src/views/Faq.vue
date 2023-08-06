<template>
  <Navbar />
  <Breadcrumb mainTitle="Helpful FAQ's" subTitle="FAQ's" />
  <!--FAQ Section -->

  <div class="faq-section section-padding pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8">
          <div class="section-title">
            <h6>If you don't know, find out</h6>
            <h2>Frequently Asked Question</h2>
          </div>
          <div class="accordion faqs" id="accordionFaq">
            <div class="card" v-for="faq in faqs" :key="faq.id">
              <div class="card-header" id="heading1">
                <h5 class="mb-0 subtitle">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#collapse-' + faq.id"
                    aria-expanded="false"
                    aria-controls="collapse7"
                  >
                    {{ faq.question }}
                  </button>
                </h5>
              </div>

              <div
                :id="'collapse-' + faq.id"
                class="collapse"
                aria-labelledby="heading1"
                data-parent="#accordionFaq"
              >
                <div class="card-body">
                  <div class="content">
                    <p>{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4">
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
              <button type="submit" class="main-btn white">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Footer from "@/components/Footer.vue";

import axios from "axios";

export default {
  name: "Faq",
  components: { Navbar, Breadcrumb, Footer },
  data() {
    return {
      faqs: [],
    };
  },

  async mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);

    let fecthedData = await axios.get("/assets/data/faqs.json");
    this.faqs = fecthedData.data.faqs;
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "Faq | Aksoy/Kesmen",
  description: "Faq  | Aksoy/Kesmen",
  ogDescription: "Faq | Aksoy/Kesmen",
  ogTitle: "Faq | Aksoy/Kesmen",
});
</script>
