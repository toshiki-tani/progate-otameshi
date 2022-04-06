<script setup>
import { defineProps, defineEmits } from "vue";
const onClick = () => {
  emit("onClick");
};
const props = defineProps({
  text: String,
});

const emit = defineEmits(["onClick"]);
</script>

<template>
  <button class="start-button" @click="onClick">{{ props.text }}</button>
</template>

<style scoped>
.start-button {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: rgb(48, 200, 214);
  color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 20px 50px;
  margin-top: 40px;
  border: 0;
  transition: 0.3s;
}
.start-button:hover {
  background-color: #0ccef0;
}
</style>
