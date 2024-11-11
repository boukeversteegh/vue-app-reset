<script setup lang="ts">

import {selectedCulture, Culture} from "../culture.ts";
import {ref} from "vue";


const fetchTexts = (): Promise<{ [key in Culture]: string }> =>
    new Promise((resolve) => {
      setTimeout(() => {
        const texts: { [key in Culture]: string } = {
          'nl': 'Hallo wereld!',
          'en': 'Hello world!',
          'de': 'Hallo Welt!',
          'fr': 'Bonjour le monde!',
          'es': '¡Hola mundo!',
          'it': 'Ciao mondo!'
        }
        resolve(texts);
      }, 1000); // Simulate a 1 second delay
    });

const msg = ref<string>();

fetchTexts().then((texts) => {
  msg.value = texts[selectedCulture.value];
});
</script>

<template>
  <h1 v-if="msg">{{ msg }}</h1>
  <p v-else>Loading...</p>
</template>
