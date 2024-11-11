<script setup lang="ts">
import LocalizedComponent from './components/LocalizedComponent.vue'
import CulturePicker from "./components/CulturePicker.vue";
import {selectedCulture} from "./culture.ts";
</script>

<template>
  <CulturePicker/>
  <LocalizedComponent :key="selectedCulture"/>
</template>
