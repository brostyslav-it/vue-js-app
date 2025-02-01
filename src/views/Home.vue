<script setup>

import JobListings from "@/components/JobListings.vue";
import HomeCards from "@/components/HomeCards.vue";
import Hero from "@/components/Hero.vue";
</script>

<template>
  <Hero title="Test"/>
  <HomeCards/>
  <JobListings :limit="3" :show-button="true"/>
</template>
