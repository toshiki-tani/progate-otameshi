<script setup>
import { defineProps, defineEmits } from "vue";
// import { defineProps } from "vue";

const props = defineProps({
  items: Array,
});

const emit = defineEmits(["away"]);
const away = () => {
  console.log("モーダルとじ");
  emit("away");
};
// const away = () => {
//   console.log("ここにemit書くだけ");
// };
</script>

<template>
  <div v-click-away="away">
    <ul class="dropdown">
      <li v-for="(item, i) in props.items" :key="i">
        <a :href="item.url">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0;

  background-color: white;
  transition: 0.3s;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
}
.dropdown li {
  width: 140px;
  list-style-type: none;
}

.dropdown a {
  display: block;
  padding: 10px 30px;
  color: #2b546a;
  text-decoration: none;
  border: none;
  outline: none;
  background: transparent;
  text-align: left;
}
.dropdown a:hover {
  background-color: rgb(240, 244, 249);
}
</style>
