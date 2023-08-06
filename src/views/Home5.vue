<script setup>
import Banner5 from "@/components/Home5/Banner5.vue";
import ReadyToHelp from "@/components/Home5/ReadyToHelp.vue";
import Home5Counter from "@/components/Home5/Home5Counter.vue";
import PracticeAreas5 from "@/components/Home5/PracticeAreas5.vue";
import AppointmentForm from "@/components/Home5/AppointmentForm.vue";
import OurCaseStudies from "@/components/Home5/OurCaseStudies.vue";
import Testimonials5 from "@/components/Home5/Testimonials5.vue";
import Faq5 from "@/components/Home5/Faq5.vue";
import RecentBlog from "@/components/Home5/RecentBlog.vue";
import NavbarHome5 from "@/components/Home5/NavbarHome5.vue";

import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "AksoyKesmen | Law Firm",
  description: "Home | AksoyKesmen",
  ogDescription: "Home | AksoyKesmen",
  ogTitle: "AksoyKesmen | Law Firm",
});
</script>

<template>
  <NavbarHome5 />
  <Banner5 />
  <ReadyToHelp />
  <Home5Counter />
  <PracticeAreas5 />
  <AppointmentForm />
  <OurCaseStudies />
  <Testimonials5 />
  <Faq5 />
  <RecentBlog />
  <!-- Footer5 is called from RecentBlog -->
</template>
