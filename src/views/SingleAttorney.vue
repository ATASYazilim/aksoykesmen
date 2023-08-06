<template>
  <NavbarHome5 />
  <Breadcrumb mainTitle="Attorney Details" subTitle="Attorney Details" />
  <!-- Attorney Details  -->

  <div class="attorney-pg-area section-padding">
    <div class="container">
      <div class="attorney-info-wrap">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="attorney-info-img">
              <img :src="attorney.image" :alt="attorney.name" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="attorney-info-text">
              <h2>{{ attorney.name }}</h2>
              <ul>
                <li>
                  Position: <span>{{ attorney.designation }}</span>
                </li>
                <li>
                  Practice Area:<span
                    v-for="area in attorney.expertise"
                    :key="area.name"
                    >{{ area.name }},</span
                  >
                </li>
                <li>
                  Experience:<span>{{ attorney.experience }}</span>
                </li>
                <li>
                  Address:<span>{{ attorney.address }}</span>
                </li>
                <li>
                  Phone:<span>{{ attorney.phone }}</span>
                </li>
                <li>
                  Email:<span>{{ attorney.email }}</span>
                </li>
                <li>Fax:<span>257 963 876</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="exprience-area">
        <div class="row">
          <div class="col-lg-12">
            <div class="exprience-wrap">
              <h2>Personal Experience</h2>
              <p>{{ attorney.personal_experience }}</p>
            </div>
            <div class="at-progress">
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                  <div class="progress yellow">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">{{ attorney.total_case }}</div>
                    <div class="progress-name"><span>Happy Client</span></div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                  <div class="progress blue">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                      {{ attorney.total_case_won }}
                    </div>
                    <div class="progress-name"><span>Cases Won</span></div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                  <div class="progress pink">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                      {{ attorney.total_case_dismissed }}
                    </div>
                    <div class="progress-name"><span>Case Dismissed</span></div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                  <div class="progress green">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                      {{ attorney.success_rate }}%
                    </div>
                    <div class="progress-name"><span>Success Rate</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="education-area ex-wiget">
              <h2>Area of Expertise</h2>
              <ul>
                <li v-for="area in attorney.expertise" :key="area.name">
                  {{ area.name }}
                </li>
              </ul>
            </div>
            <div class="language-area ex-wiget">
              <h2>Language</h2>
              <ul>
                <li v-for="language in attorney.languages" :key="language.name">
                  {{ language.name }},&nbsp;
                </li>
              </ul>
            </div>
            <div class="wpo-contact-area ex-wiget">
              <h2>Contact Me</h2>
              <div class="quote-form">
                <form>
                  <div class="form-group half-col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name:"
                      name="name"
                    />
                  </div>
                  <div class="form-group half-col">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email:"
                      name="email"
                    />
                  </div>
                  <div class="form-group half-col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject:"
                      name="subject"
                    />
                  </div>
                  <div class="form-group half-col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Address:"
                      name="address"
                    />
                  </div>
                  <div class="form-group full-col">
                    <textarea
                      class="form-control"
                      name="note"
                      placeholder="Description..."
                    ></textarea>
                  </div>
                  <div class="form-group full-col">
                    <button class="btn theme-btn" type="submit">
                      Get In Touch
                    </button>
                  </div>
                </form>
              </div>
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
import Footer5 from "@/components/Home5/Footer5.vue";

import axios from "axios";

export default {
  name: "SingleAttorney",
  components: { NavbarHome5, Breadcrumb, Footer5 },

  data() {
    return {
      attorney: [],
    };
  },
  async mounted() {
    //scrolling to top of the window
    window.scrollTo(0, 0);

    let fetchedData = await axios.get("/assets/data/attorneys.json");

    let attorneys = fetchedData.data.attorneys;
    this.attorney = attorneys.find((item) => item.id == this.$route.params.id);
  },
};
</script>
<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "Attorney Details | Aksoy/Kesmen",
  description: "Attorney Details  | Aksoy/Kesmen",
  ogDescription: "Attorney Details  | Aksoy/Kesmen",
  ogTitle: "Attorney Details | Aksoy/Kesmen",
});
</script>
