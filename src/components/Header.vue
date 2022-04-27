<script setup>
import { ref } from "vue";
import Menu from "@/components/atoms/Menu.vue";

import ProgateIcon from "@/assets/svg/progate-icon.svg";
import ArrowDown from "@/assets/svg/arrow_drop_down.svg";

const isOpen = ref(false);

const clickMenu = () => {
  isOpen.value = !isOpen.value;
  console.log("click発動");
};

const clickClose = () => {
  isOpen.value = false;
  console.log("モーダル閉じる");
};

const onClick = (url) => {
  location.href = url;
  console.log("ページ切り替え１");
};
const items = ref([
  {
    url: "#",
    name: "法人プラン",
  },
  {
    url: "#",
    name: "言語",
    children: [
      {
        url: "https://www.google.com/",
        name: "日本語",
      },
      {
        url: "#",
        name: "英語",
      },
    ],
  },
  {
    url: "#",
    name: "ログイン",
  },
  {
    url: "#",
    name: "無料会員登録",
  },
]);
</script>

<template>
  <div class="header">
    <a href="#" class="icon-link"><ProgateIcon class="progate-icon" /></a>

    <div class="header-tag">
      <ul class="header-list">
        <li v-for="(item, i) in items" :key="i">
          <button
            v-if="!item.children"
            class="header-tag-button"
            @click="onClick(item.url)"
          >
            {{ item.name }}
          </button>
          <button v-else @click="clickMenu" class="header-tag-button">
            {{ item.name }}<span><ArrowDown class="arrow-down-icon" /></span>
            <Menu :items="item.children" @away="clickClose" v-if="isOpen" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
}
.header {
  background-color: #f9fbfe;
  display: flex;
  padding: 10px 28px;
  left: 0%;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  z-index: 100;
}
.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
}
.progate-icon {
  width: 112px;
  height: 30px;
  padding: 20px;
}

.header-tag {
  margin-left: auto;
}
.header-list {
  display: flex;
  list-style-type: none;
}

.header-tag-button {
  position: relative;
  display: block;
  height: auto;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 14px;
  border: none;
  outline: none;
  background: transparent;
  color: #2b546a;
  border-radius: 5%;
}
.header-tag-button:hover {
  background-color: rgb(240, 244, 249); /* 背景色 */
}
.arrow-down-icon {
  vertical-align: -8px;
}
.header-tag li:nth-of-type(4) {
  background-color: #8be0e6;
  border-radius: 10%;
}
.header-tag li:nth-of-type(4) button {
  color: white;
  border-radius: 10%;
  transition: 0.3s;
  height: 44px;
}
.header-tag li:nth-of-type(4) :hover {
  background-color: rgb(36 150 161);
}
</style>
