<script setup>
import ProgateIcon from "@/assets/svg/progate-icon.svg";
import DownloadIos from "@/assets/svg/download-ios.svg";
import DownloadAndroid from "@/assets/svg/download-android.svg";
import BizIcon from "@/assets/svg/biz_logo.svg";
import MailIcon from "@/assets/svg/mail-outline.svg";
</script>

<template>
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
    <button @click="onClickButton" class="mail-box-button">
      <MailIcon class="mail-icon" />ご意見箱
    </button>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #6783a0;
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
