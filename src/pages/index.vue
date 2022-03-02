<script setup>
import { ref } from "vue";

const msg = ref("hello");
</script>

<template>
  <div class="progate-top">
    <div>{{ msg }}</div>

    <div class="header">
      <div class="progate-logo">
        <img
          src="@/assets/typo_logo-b40bf595603dc0e63a5c..svg"
          alt="progate-ロゴ"
        />
      </div>
      <div class="header-tag">
        <a href="" class="header-tag-link">法人プラン</a>
        <div>
          <a @click="showLanguage" class="header-tag-link">言語</a>
          <a class="header-tag-link">{{ msg }}</a>
          <a class="header-tag-link">{{ msg }}</a>
        </div>
        <a href="" class="header-tag-link">ログイン</a>
        <a href="" class="header-tag-link">無料会員登録</a>
      </div>
    </div>

    <div class="main">
      <div class="introduction">
        <h1>プログラミングで<br />人生の可能性を広げよう</h1>
        <div class="user-country">
          <div class="user">
            <img
              src="@/assets/users-a679d89a2eda53806fb8..svg"
              alt="user-ロゴ"
            />
            <span>2,500,000ユーザー</span>
          </div>
          <div class="country">
            <img
              src="@/assets/countries-8efc3c1c1ec2f954738c..svg"
              alt="user-ロゴ"
            />
            <span>提供国数 100+</span>
          </div>
        </div>
        <button class="start-bottom">今すぐにはじめる</button>
        <div class="img-w100">
          <img
            src="@/assets/first_view_ja-ab351ae2e2501cc8bff6..webp"
            alt="user-ロゴ"
          />
        </div>
      </div>

      <div class="flow">
        <h1>初心者から、創れる人へ</h1>
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
        <h1>サクセスストーリー</h1>
        <p>
          プログラミングの世界への第一歩を踏み出し、夢を実現した方々のサクセスストーリーを紹介します。
        </p>
        <div class="person">
          <div class="box">
            <div class="story">
              <img src="@/assets/1570587077399.png" alt="村尾くん" />
              <p>
                「プログラミングで人生180度変わった。」小学生がJavaScriptでゲーム開発するようになるまで
              </p>
              <p>村尾くん</p>
              <p>japan</p>
            </div>
          </div>
          <div class="box">
            <div class="story">
              <img src="@/assets/1566914605258.png" alt="飯田さん" />
              <p>
                「プログラミングはもうやりたくなかったけど必要に迫られて」 mikan
                グロースハッカーの超実践SQL活用法
              </p>
              <p>飯田 諒</p>
              <p>japan</p>
            </div>
          </div>
          <div class="box">
            <div class="story">
              <img src="@/assets/1565058933263.png" alt="五十嵐さん" />
              <p>
                「私、プログラミングできるかも。」アプリ版Progateから2ヶ月で、アイドルからエンジニアに転職した話
              </p>
              <p>五十嵐 夏菜</p>
              <p>japan</p>
            </div>
          </div>
          <div class="box">
            <div class="story">
              <img src="@/assets/1561420948224.jpeg" alt="岩崎さん" />
              <p>
                「起業準備はProgateしかしてません」 YOUTRUST代表
                岩崎由夏のプログラミング勉強法
              </p>
              <p>岩崎 由夏</p>
              <p>japan</p>
            </div>
          </div>
          <div class="box">
            <div class="story">
              <img src="@/assets/1560417815612.jpeg" alt="三佐和さん" />
              <p>
                「夢みていたところで働けるのは幸せです」プログラミング未経験者が憧れのBASEで働くまで
              </p>
              <p>三佐和 千鶴</p>
              <p>japan</p>
            </div>
          </div>
          <div class="box">
            <div class="story">
              <img src="@/assets/1560417763917.jpeg" alt="三浦さん" />
              <p>
                「教育現場にエンジニア経験を還元したい!」元小学校教員エンジニアが叶えたい夢とは
              </p>
              <p>三浦卓馬</p>
              <p>japan</p>
            </div>
          </div>
        </div>
        <a href="">もっと見る</a>
      </div>

      <div class="course-plan">
        <div class="find-lesson">
          <div class="img2">
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
          <a href="">レッスンの公開状況</a>
        </div>
      </div>

      <div class="application">
        <div class="application-title">
          <h1>アプリでも、Progate</h1>
          <p>「まずは気軽に始めてみたい」という方にオススメです。</p>
        </div>
        <div class="application-text-img">
          <div class="application-text">
            <h3>いつでもどこでもプログラミング</h3>
            <p class="application-text-paragraph">
              まとまった時間がなくても大丈夫。アプリならスマホゲーム感覚で楽しく始められます。
            </p>
            <h3>アプリならではの学習体験</h3>
            <p>
              スマホやタブレットの画面に最適化したスライドとキーボードを用意しています。アプリ版でサクっと理解したら、Web版で本格的に実践するのがオススメです。
            </p>
            <div class="download">
              <a
                href="https://apps.apple.com/jp/app/yahoo-%E3%83%A1%E3%83%BC%E3%83%AB/id669931877?mt=8"
                style="
                  display: inline-block;
                  overflow: hidden;
                  background: url(https://linkmaker.itunes.apple.com/ja-jp/badge-lrg.svg?releaseDate=2013-09-18&kind=iossoftware&bubble=ios_apps)
                    no-repeat;
                  width: 200px;
                  height: 60px;
                  background-size: contain;
                "
              ></a>
              <a
                href="https://play.google.com/store/apps/details?id=com.yuyosoft.globalspy&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                ><img
                  alt="Google Play で手に入れよう"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png"
                  width="200"
                  style="margin-top: -32px"
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
        <button class="start-bottom">無料会員登録</button>
      </div>

      <div class="twi-face">
        <div class="twi-img">
          <img
            src="@/assets/twitter-0bbc0e003ac1f36cd2ef..svg"
            alt="twi-イメージ"
          />
        </div>
        <div class="face-img">
          <img
            src="@/assets/facebook-e14b50ed4aca3144e275..svg"
            alt="face-イメージ"
          />
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="left1">
        <div class="progate-logo">
          <img
            src="@/assets/typo_logo-b40bf595603dc0e63a5c..svg"
            alt="progate-ロゴ"
          />
        </div>
        <p class="footer-paragraph">アプリ版のダウンロードはこちら</p>
        <div class="downlod-ios-logo">
          <img
            src="@/assets/download-ios-701013f2027553d61911..svg"
            alt="ios-ロゴ"
          />
        </div>
        <div class="download-android-logo">
          <img
            src="@/assets/download-android-2469951b8a1091077c28..svg"
            alt="android-ロゴ"
          />
        </div>
        <p class="footer-paragraph">© 2014 Progate, Inc.</p>
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
        <div class="biz-logo">
          <img
            src="@/assets/biz_logo_ja-98cf7067364efcd4f1899de2266450871bcdd0a0c617517ac3ae738aaa340963.svg"
            alt="biz-ロゴ"
          />
        </div>
        <p class="footer-paragraph">
          企業のプログラミング研修を支援する、法人のお客様向けの利用プランです。
        </p>
      </div>
    </div>

    <div class="mail-box">
      <a href="">ご意見箱</a>
    </div>
  </div>
</template>

<style scoped>
.progate-top {
  max-width: 1440px;
}
a {
  text-decoration: none;
  color: #6783a0;
}
p {
  margin: 0 auto;
}

.progate-logo {
  width: 112px;
  height: 30px;
}

.header {
  background-color: #f9fbfe;
  width: 100%;
  display: flex;
  padding: 24px 32px;
  margin: 0 auto;
}

.header-tag {
  margin-left: auto;
}
.header-tag-link {
  margin-left: 32px;
}
.asignBottom {
  background-color: rgb(48, 200, 214);
  background-size: 110px 40px;
  width: 110px;
  height: 40px;
  color: rgb(255, 255, 255);
}
.main {
  background-color: #f9fbfe;
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
  border: 0;
  transition: 0.3s;
  cursor: pointer;
}
button:hover {
  background-color: #0ccef0; /* 背景色 */
}
.img-w100 img {
  width: 100%;
  margin-top: 30px;
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
.success-story h1 {
  padding: 60px 0 10px 0;
}
.person {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.box {
  width: 30%;
  background-color: white;
  margin: 15px;
  border-radius: 5%;
}
.box img {
  border-radius: 50%;
}
.story {
  width: 80%;
  height: 80%;
  margin: 40px auto;
}
.story img {
  width: 40%;
}

.find-lesson {
  width: 80%;
  display: flex;
  background-color: #f0f4f9;
  margin: 30px auto 50px auto;
  border-radius: 5%;
}
.img2 {
  width: 40%;
}
.find-lesson-text {
  width: 60%;
  margin: auto auto auto 60px;
}
.img2 img {
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
  margin: 0 auto;
}
.application {
  width: 80%;
  margin: 0 auto;
}
.application-title {
  text-align: center;
}
.application-text-img {
  display: flex;
  background-color: #90c3f0;
  border-radius: 5%;
  padding: 50px;
  margin-top: 40px;
}
.application-text {
  width: 50%;
  margin: 40px auto;
}
.application-text-paragraph {
  margin: 0%;
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
  display: flex;
  justify-content: center;
  margin: 100px 0 50px 0;
}
.twi-img,
.face-img {
  margin: 0 20px;
}

.footer {
  display: flex;
  margin: 40px auto;
  width: 80%;
}
.footer-link {
  display: block;
}
.footer-paragraph {
  margin: 0%;
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
</style>
