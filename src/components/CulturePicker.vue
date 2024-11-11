<script setup lang="ts">
import {availableCultures, selectedCulture} from "../culture.ts";
</script>

<template>
  <select v-model="selectedCulture" >
    <option v-for="culture in availableCultures" :key="culture" :value="culture">{{ culture }}</option>
  </select>
</template>

<style scoped>

</style>