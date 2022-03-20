<script setup>
import { ref } from "vue";

import ProgateIcon from "@/assets/svg/progate-icon.svg";
import ArrowDown from "@/assets/svg/arrow_drop_down.svg";
import UserIcon from "@/assets/svg/user.svg";
import CountryIcon from "@/assets/svg/country.svg";
import DownloadIos from "@/assets/svg/download-ios.svg";
import DownloadAndroid from "@/assets/svg/download-android.svg";
import TwitterIcon from "@/assets/svg/twitter.svg";
import FacebookIcon from "@/assets/svg/facebook.svg";
import BizIcon from "@/assets/svg/biz_logo.svg";
import MailIcon from "@/assets/svg/mail-outline.svg";
import LaunchIcon from "@/assets/svg/launch_black.svg";

const isOpen = ref(false);

const open = () => {
  isOpen.value = !isOpen.value;
  console.log("click発動");
};

const close = () => {
  isOpen.value = false;
  console.log("blur発動");
};

const onClick = (url) => {
  location.href(url);
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
        url: "#",
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
const humanDatas = ref([
  {
    name: "茂木優太",
    message:
      "「プログラミングで人生180度変わった。」小学生がJavaScriptでゲーム開発するようになるまで ",
    image: require("@/assets/1570587077399.png"),
    url: "#",
  },
  {
    name: "林亮輔",
    message:
      "「プログラミングはもうやりたくなかったけど必要に迫られて」 mikanグロースハッカーの超実践SQL活用法",
    image: require("@/assets/1566914605258.png"),
    url: "#",
  },
  {
    name: "十時健吾",
    message:
      "「私、プログラミングできるかも。」アプリ版Progateから2ヶ月で、アイドルからエンジニアに転職した話",
    image: require("@/assets/1565058933263.png"),
    url: "#",
  },
  {
    name: "半澤拓実",
    message:
      "「起業準備はProgateしかしてません」 YOUTRUST代表岩崎由夏のプログラミング勉強法",
    image: require("@/assets/1561420948224.jpeg"),
    url: "#",
  },
  {
    name: "藤澤大成",
    message:
      "「夢みていたところで働けるのは幸せです」プログラミング未経験者が憧れのBASEで働くまで",
    image: require("@/assets/1560417815612.jpeg"),
    url: "#",
  },
  {
    name: "中原一馬",
    message:
      "「教育現場にエンジニア経験を還元したい!」元小学校教員エンジニアが叶えたい夢とは",
    image: require("@/assets/1560417763917.jpeg"),
    url: "#",
  },
]);
</script>

<template>
  <div class="progate-top">
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
            <button
              v-else
              @click="open"
              @blur="close"
              class="header-tag-button"
            >
              {{ item.name }}<span><ArrowDown class="arrow-down-icon" /></span>

              <ul class="dropdown" :class="{ isOpen }">
                <li v-for="(child, i) in item.children" :key="i">
                  <button>{{ child.name }}</button>
                </li>
              </ul>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="main">
      <div class="introduction">
        <h1 class="text-48px">プログラミングで<br />人生の可能性を広げよう</h1>
        <div class="user-country">
          <UserIcon class="user-icon" />
          <span>2,500,000ユーザー&nbsp;&nbsp;&nbsp;</span>

          <CountryIcon class="country-icon" />

          <span>提供国数 100+</span>
        </div>
        <button onclick="location.href='#'" class="start-bottom">
          今すぐにはじめる
        </button>
        <div class="img-w100">
          <img
            src="@/assets/first_view_ja-ab351ae2e2501cc8bff6..webp"
            alt="user-ロゴ"
          />
        </div>
      </div>

      <div class="flow">
        <h1 class="flow-text">初心者から、創れる人へ</h1>
        <div class="img-w80">
          <img
            src="@/assets/slide_image_jp-42aa3c4af733b44f6d51..webp"
            alt="user-ロゴ"
          />
        </div>
        <h1>イラスト中心のスライドで学ぶ</h1>
        <p>
          紙の本よりも直感的で、動画よりも学びやすい、「スライド学習」を採用しました。<br />自分のペースで学習できること、復習しやすいことが強みです。
        </p>
        <div class="img-w80">
          <img
            src="@/assets/editor_image_jp-449785c0f9a62d3e5ceb..webp"
            alt="user-ロゴ"
          />
        </div>
        <h1>すぐに実践</h1>
        <p>
          実際にプロダクトを作りながら学ぶから、使えるスキルが身につきます。<br />ブラウザ上で、コードを書いて結果も確認。準備いらずで、すぐにプログラミングが実践できます。
        </p>
        <div class="img-w80">
          <img
            src="@/assets/path_image_jp-7cff9fa3f076201e6c4a..webp"
            alt="user-ロゴ"
          />
        </div>
        <h1>道のりに沿って学ぶ</h1>
        <p>
          「創れる人」になるために必要なレッスンを最適な順番で学ぶことができます。<br />最終的には自分自身でエラーを解決して、目標に向かって自ら走りきる能力が身につきます。
        </p>
      </div>

      <div class="success-story">
        <h1 class="success-story-title color-white">サクセスストーリー</h1>
        <p class="color-white">
          プログラミングの世界への第一歩を踏み出し、夢を実現した方々のサクセスストーリーを紹介します。
        </p>

        <div class="person">
          <div v-for="(humanData, i) in humanDatas" :key="i" class="box">
            <a :href="humanData.url">
              <div class="story">
                <img :src="humanData.image" alt="個人写真" />
                <p class="human-message">
                  {{ humanData.message }}
                </p>
                <p class="human-name">{{ humanData.name }}</p>
                <p class="country-name">japan</p>
              </div>
            </a>
          </div>
        </div>

        <button onclick="location.href='#'" class="more-button">
          もっと見る
        </button>
      </div>

      <div class="course-plan">
        <div class="find-lesson">
          <div class="find-lesson-img">
            <img
              src="@/assets/plan_section_main-3a91657a6381dac7469a..webp"
              alt="findイメージ"
            />
          </div>
          <div class="find-lesson-text">
            <h2>あなたに合ったレッスンがきっと見つかる</h2>
            <p>全16コース・79レッスン</p>
          </div>
        </div>
        <div class="free-plus">
          <div class="free-plan">
            <h2>無料プラン</h2>
            <p>プログラミングに触れ<br />「基礎」を身につける</p>
            <h3>基礎レベルの16レッスン<br />(各コースの最初のレッスン+a)</h3>
            <h2>¥0</h2>
          </div>
          <div class="plus-plan">
            <h2>プラスプラン</h2>
            <p>「応用」と「実践」で<br />「基礎」を身につける</p>
            <h3><br />公開中の79レッスンすべて</h3>
            <h2>税込¥1,078/月</h2>
          </div>
        </div>
        <div class="lesson-information">
          <a href="#" class="lesson-information-text"
            >レッスンの公開状況<LaunchIcon class="launch-icon"
          /></a>
        </div>
      </div>

      <div class="application">
        <div class="application-title">
          <h1>アプリでも、Progate</h1>
          <p>「まずは気軽に始めてみたい」という方にオススメです。</p>
        </div>
        <div class="application-text-img">
          <div class="application-text color-white">
            <h3 class="color-white">いつでもどこでもプログラミング</h3>
            <p class="application-text-paragraph color-white">
              まとまった時間がなくても大丈夫。アプリならスマホゲーム感覚で楽しく始められます。
            </p>
            <h3 class="color-white">アプリならではの学習体験</h3>
            <p class="application-text-paragraph color-white">
              スマホやタブレットの画面に最適化したスライドとキーボードを用意しています。アプリ版でサクっと理解したら、Web版で本格的に実践するのがオススメです。
            </p>
            <div class="download">
              <a href="https://itunes.apple.com/jp/app/id1335868128?mt=8"
                ><DownloadIos class="download-ios-icon"
              /></a>
              <a
                href="https://play.google.com/store/apps/details?id=com.yuyosoft.globalspy&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                ><DownloadAndroid class="download-sndroid-icon"
              /></a>
            </div>
          </div>
          <div class="application-img">
            <img
              src="@/assets/app_image_jp-f23938d3a983c54af93e..webp"
              alt="application-イメージ"
            />
          </div>
        </div>
      </div>

      <div class="make-creater">
        <h1>初心者から、創れる人を生み出す</h1>
        <p>
          初心者でも独学で、挫折せずに学べること。<br />そして、本物のスキルが身につき
          「創れる」ようになること。
        </p>
        <p>
          プログラミングで夢を叶えたい人が、本当に夢を叶えられるように、<br />私たちはこんな思いをProgateに込めています。
        </p>
        <p>プログラミングの世界へ踏み出すあなたを、私たちがサポートします。</p>
      </div>

      <div class="lets-start">
        <h1>さっそく始めよう</h1>
        <p class="lets-start-paragraph">
          1分後、プログラミングの世界でお会いしましょう。
        </p>
        <button onclick="location.href='#'" class="start-bottom">
          無料会員登録
        </button>
      </div>
    </div>

    <div class="twi-face">
      <a href="#"><TwitterIcon class="sns-icon" /></a>
      <a href="#"><FacebookIcon class="sns-icon" /></a>
    </div>

    <div class="footer">
      <div class="left1">
        <a href="#"><ProgateIcon class="progate-icon-footer" /></a>

        <p class="app-paragraph">アプリ版のダウンロードはこちら</p>
        <div>
          <a href="https://itunes.apple.com/jp/app/id1335868128?mt=8"
            ><DownloadIos class="download-ios-icon"
          /></a>
        </div>
        <div>
          <a
            href="https://play.google.com/store/apps/details?id=com.yuyosoft.globalspy&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            ><DownloadAndroid class="download-sndroid-icon"
          /></a>
        </div>

        <p class="copyright">© 2014 Progate, Inc.</p>
      </div>

      <div class="left2">
        <h4>サービス</h4>
        <a href="" class="footer-link">コース一覧</a>
        <a href="" class="footer-link">有料会員プラン</a>
        <a href="" class="footer-link">中学・高校向けプラン</a>
        <a href="" class="footer-link">学習ロードマップ</a>
        <a href="" class="footer-link">サクセスストーリー</a>
        <a href="" class="footer-link">ヘルプ</a>
      </div>

      <div class="left3">
        <h4>サポート</h4>
        <a href="" class="footer-link">運営会社</a>
        <a href="" class="footer-link">採用情報</a>
        <a href="" class="footer-link">利用規約</a>
        <a href="" class="footer-link">法人プラン利用規約</a>
        <a href="" class="footer-link">特定商取引法に基づく表示</a>
        <a href="" class="footer-link">プライバシーポリシー</a>
        <h4>SNS</h4>
        <a href="" class="footer-link">Facebook</a>
        <a href="" class="footer-link">Twitter</a>
      </div>

      <div class="left4">
        <h4>法人向けサービス</h4>
        <a href="#"><BizIcon class="biz-icon" /></a>

        <p class="footer-paragraph">
          企業のプログラミング研修を支援する、法人のお客様向けの利用プランです。
        </p>
      </div>
    </div>

    <div class="mail-box">
      <button onclick="location.href='#'" class="mail-box-button">
        <MailIcon class="mail-icon" />ご意見箱
      </button>
    </div>
  </div>
</template>

<style scoped>
.progate-top {
  max-width: 1440px;
  color: #2b546a;
  overflow: hidden;
  position: absolute;
  left: 0%;
}
a {
  text-decoration: none;
  color: #6783a0;
}
p {
  margin: 0 auto;
}
button {
  cursor: pointer;
}
.header {
  background-color: #f9fbfe;
  display: flex;
  padding: 10px 28px;
  /* margin: 0 auto; */
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
  /* pointer-events: none; */
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

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  padding: 0;
  list-style-type: none;
  background-color: white;
  transition: 0.3s;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
}
.dropdown button:hover {
  background-color: rgb(240, 244, 249); /* 背景色 */
}

.dropdown li {
  width: 140px;
}

.dropdown li button {
  display: block;
  padding: 10px 30px;
  color: #2b546a;
  text-decoration: none;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  text-align: left;
}

.isOpen {
  display: block;
}

.asignBottom {
  background-color: rgb(223, 232, 233);
  background-size: 110px 40px;
  width: 110px;
  height: 40px;
  color: rgb(255, 255, 255);
}
.main {
  background-color: #f9fbfe;
  padding: 120px 0 50px 0;
}
.introduction {
  text-align: center;
  background-color: #f9fbfe;
}

.user-country {
  display: flex;
  justify-content: center;
}
.user,
.country {
  margin: 10px 10px 70px 10px;
}
.start-bottom {
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
button:hover {
  background-color: #0ccef0; /* 背景色 */
}
.img-w100 img {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}
.flow-text {
  font-size: 48px;
}

.flow {
  text-align: center;
  background-color: #f9fbfe;
}

.img-w80 img {
  width: 80%;
  margin-top: 30px;
}

.success-story {
  background-color: #2b546a;
  text-align: center;
  width: 100%;
}
.success-story-title {
  padding: 60px 0 10px 0;
}
.person {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.box {
  width: 24%;
  background-color: white;
  margin: 15px;
  border-radius: 5%;
  transition-duration: 0.3s;
}
.box:hover {
  transform: scale(102%);
}
.human-message {
  margin: 30px 0 40px 0;
  color: #2b546a;
  font-weight: bold;
}
.box img {
  border-radius: 50%;
}
.story {
  width: 80%;
  height: auto;
  margin: 0 auto;
}

.story img {
  width: 40%;
  margin-top: 30px;
}
.country-name {
  padding-bottom: 30px;
}

.more-button {
  background-color: rgb(240, 244, 249);
  padding: 0px 16px;
  border: none;
  min-width: 200px;
  line-height: 48px;
  border-radius: 5px;
  font-weight: bold;
  color: #16325c;
  margin-top: 30px;
  margin-bottom: 60px;
  transition: 0.3s;
}
.more-button:hover {
  background-color: #8be0e6;
}

.find-lesson {
  width: 80%;
  display: flex;
  background-color: #f0f4f9;
  margin: 30px auto 50px auto;
  border-radius: 5%;
}
.find-lesson-img {
  width: 40%;
}
.find-lesson-text {
  width: 60%;
  margin: auto auto auto 60px;
}
.find-lesson-img img {
  width: 100%;
}
.find-lesson-text h2 {
  width: 80%;
}

.free-plus {
  display: flex;
  width: 80%;
  margin: 0 auto;
}
.free-plan {
  background-color: #f0f4f9;
  border-radius: 5%;
  width: 47%;
  text-align: center;
}
.plus-plan {
  background-color: #f7edad;
  border-radius: 5%;
  width: 47%;
  margin-left: auto;
  text-align: center;
}
.lesson-information {
  width: 80%;
  margin: 20px auto;
}
.lesson-information-text {
  color: #0070d2;
}
.launch-icon {
  fill: #0070d2;
  vertical-align: -7px;
}
.application {
  width: 80%;
  margin: 0 auto;
}
.application-title {
  text-align: center;
}
.download {
  margin: 100px 0 30px 0;
}
.application-text-img {
  display: flex;
  background-color: #90c3f0;
  border-radius: 5%;
  padding: 50px 0 0 50px;
  margin-top: 40px;
}
.application-text {
  width: 50%;
}
.application-text-paragraph {
  margin: 0%;
  width: 80%;
}
.color-white {
  color: white;
}
.download img {
  margin-top: 80px;
}
.application-img {
  width: 50%;
  margin: 40px auto 0 auto;
}
.application-img img {
  width: 90%;
}

.make-creater {
  text-align: center;
  margin: 60px auto;
}

.lets-start {
  text-align: center;
  margin: 60px auto;
}
.lets-start-paragraph {
  margin-bottom: 50px;
}

.twi-face {
  text-align: center;
  margin-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #eee;
}
.sns-icon {
  margin: 0 10px;
}
.footer {
  display: flex;
  margin: 40px auto;
  width: 80%;
}
.footer-link {
  display: block;
  font-size: 12px;
  margin-bottom: 12px;
}

.footer-paragraph {
  margin: 0%;
}
.copyright {
  font-size: 10px;
}
.left1 {
  width: 30%;
}
.left2 {
  width: 20%;
}
.left3 {
  width: 20%;
}
.left4 {
  width: 30%;
}
.left4 img {
  width: 90%;
}
.download-ios-icon {
  padding-top: 15px;
}
.download-android-icon {
  padding-bottom: 30px;
}
.footer-paragraph {
  font-size: 12px;
  padding: 30px 30px 0 30px;
}
.progate-icon {
  width: 112px;
}
.progate-icon-footer {
  width: 144px;
  margin: 30px 0 100px 0;
}
.biz-icon {
  width: 200px;
  height: auto;
  padding: 20px 20px 10px 20px;
  background-color: white;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
}

.mail-box-button {
  color: white;
  font-size: 12px;
  position: fixed;
  background-color: #ff577b;
  border-radius: 3px 3px 0 0;
  bottom: 0;
  right: 12px;
  min-width: 120px;
  line-height: 34px;
  text-align: center;
  text-decoration: none;
  border: none;
  outline: none;
  transition: 0.3s;
}
.mail-box-button:hover {
  background-color: #c74460;
}
.mail-icon {
  fill: white;
  width: 14px;
  vertical-align: -2px;
}
</style>
