<script setup>
import axios from 'axios'
import {ref, onMounted} from "vue"
const faqs = ref([])
onMounted(async () => {
  let fecthedData = await axios.get("/assets/data/faqs5.json");
  faqs.value = fecthedData.data.faqs;
})

</script>
<template>
  <div class="d-grid-system faq5-grid">
    <div class="faq5-grid-item faq5-left">
      <h2 class="faq5-subtitle">
        <span class="mx-2" style="text-decoration:line-through">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        Our Expert Answers
      </h2>
      <h1 class="faq5-title">Frequently Asked Questions</h1>
      <!-- Grabbed from Faq page -->
      <div class="accordion faqs mt-4" id="accordionFaq">
        <div class="card" v-for="faq in faqs" :key="faq.id">
          <div class="card-header" id="heading1">
            <h5 class="mb-0 subtitle">
              <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#collapse-' + faq.id" aria-expanded="false" aria-controls="collapse7">
                {{ faq.question }}
              </button>
            </h5>
          </div>

          <div :id="'collapse-' + faq.id" class="collapse" aria-labelledby="heading1" data-parent="#accordionFaq">
            <div class="card-body">
              <div class="content">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="faq5-grid-item  d-flex justify-content-center faq5-right">
      <div class="position-relative">
        <div class="d-flex justify-content-center">
          <img class="img img-fluid w-100" src="/assets/img/home5/Faq/faq_side.png" alt="More Help">
        </div>
        <div class="faq5-more-help">
          <h2 class="faq5-more-help-title">If you need more help</h2>
          <p class="m-0 faq5-more-help-contact">CONTACT WITH US</p>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
.faq5-grid {
  overflow: hidden;
}

.faq5-grid-item {
  grid-column: auto / span 6;
}

.faq5-more-help {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: white;
  padding: 1rem 2rem;
}

.faq5-left {
  background-color: #c89e67;
  padding: 3rem;
}

.faq5-right {
  display: flex;
  align-items: center;
  background-color: #c89e67;
}

.faq5-title {
  font-size: 52px;
  font-family: "Rajdhani";
  font-weight: bold;
  line-height: 1.192;
  text-align: left;
  color: white;
}

.faq5-subtitle {
  font-size: 18px;
  font-family: "Rajdhani";
  color: white;
  font-weight: bold;
  line-height: 1.444;
}

.faq5-more-help-title {
  font-size: 36px;
  font-family: "Rajdhani";
  color: rgb(47, 49, 64);
  font-weight: bold;
  line-height: 1.722;
  text-align: left;
}

.faq5-more-help-contact {
  font-size: 20px;
  font-family: "Rajdhani";
  color: rgb(200, 157, 102);
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.3;
  text-align: left;
  text-decoration: underline;
}

@media screen and (max-width:1000px) {
  .faq5-grid-item {
    grid-column: auto / span 12;
  }

  .faq5-right {
    order: -1;
  }
}
</style>
