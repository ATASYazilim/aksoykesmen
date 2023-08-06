<template>
  <router-view />
</template>

<script setup>
import { useSeoMeta } from "@vueuse/head";
useSeoMeta({
  title: "AksoyKesmen | Law Firm ",
  description: "Law Firm",
  ogDescription: "Law Firm",
  ogTitle: "AksoyKesmen | Law Firm",
});
</script>
