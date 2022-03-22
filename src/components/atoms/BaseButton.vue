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
  <button class="example-btn" @click="onClick">{{ props.text }}</button>
</template>

<style scoped>
.example-btn {
  width: 140px;
  height: 40px;
}
</style>
