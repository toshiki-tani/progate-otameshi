<script setup>
import { ref } from "vue";
import ProgateIcon from "@/assets/svg/progate.svg";
import BaseButton from "@/components/atoms/BaseButton";

const isShow = ref(false);
const handleClick = () => {
  isShow.value = !isShow.value;
};
const humanDatas = ref([
  { name: "田中太郎", height: 172 },
  { name: "山本武", height: 181 },
  { name: "林亮輔", height: 170 },
  { name: "タニトゥシキ", height: 201 },
  { name: "山田涼介", height: 160 },
]);
</script>

<template>
  <div class="example">
    <BaseButton @onClick="handleClick" text="クリック" />
    <div v-if="isShow">
      <p>ボタンを押した</p>
      <p>現在，表示は{{ isShow }}です</p>
      <div
        v-for="(humanData, i) of humanDatas"
        :key="i"
        class="example-wrapper"
      >
        <p class="example-text">名前: {{ humanData.name }}</p>
        <p class="example-text">身長: {{ humanData.height }}cm</p>
      </div>
    </div>
    <div v-else>
      <p>現在，表示は{{ isShow }}です</p>
    </div>
    <ProgateIcon class="progate-icon" />
    <BaseButton @onClick="handleClick" text="使いまわせるぜ" />
  </div>
</template>

<style scoped>
.example-btn {
  width: 140px;
  height: 40px;
}
.example-wrapper {
  display: flex;
}
.example-text {
  margin-left: 50px;
}
.progate-icon {
  width: 24px;
  height: 24px;
}
</style>
