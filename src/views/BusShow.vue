<template>
  <img ref="busImg" src="../assets/tickets1.jpg" alt="busImg" height="1080" width="1920">
</template>

<script setup lang="ts">
import tickets1 from '../assets/tickets1.jpg'
import tickets2 from '../assets/tickets2.jpg'
import {onMounted, ref} from "vue";

const busImg = ref()

onMounted(() => {
  busImg.value.src = tickets1
  // busImg.value.height = 1080
  // busImg.value.width = 1920
  setInterval(() => {
    busImg.value.src = tickets1
    setTimeout(() => {
      busImg.value.src = tickets2
    }, 1000)
  }, 2000)
})

</script>

<style scoped>

</style>