<template>
  <div v-for="(platform, index) in platforms" :key="index">
    <button class="btn-test" @click="openDoor(platform, 1)">開{{ platform }}月台</button>
    <button class="btn-test" @click="openDoor(platform, 0)">關{{ platform }}月台</button>
    <p></p>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";

const platforms = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])

const openDoor = (door_id: number, is_open: number) => {
  fetch(`http://localhost:1111/door?door_id=${door_id}&is_open=${is_open.toString()}`)
  console.log('open door')
}
</script>

<style scoped>

.btn-test {
  width: 200px;
  height: 30px;
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 20px;
}
</style>