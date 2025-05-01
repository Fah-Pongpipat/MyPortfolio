<script setup lang="ts">
import MenuViewVue from './MenuView.vue'
</script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat>
      <MenuViewVue />
    </v-app-bar>

    <v-main class="bg-contact">
      <v-container class="contact-wrapper py-16 fade-in text-center">
        <!-- Header -->
        <h2 class="gradient-title mb-4">ยินดีที่ได้รู้จักครับ</h2>
        <p class="contact-intro">
          หากคุณกำลังมองหาคนร่วมทีมที่มีความรับผิดชอบ
          <span class="highlight">พร้อมเรียนรู้</span> และใส่ใจในรายละเอียด<br />
          ผมยินดีอย่างยิ่งที่จะร่วม
          <span class="highlight">ทำงาน</span> และเติบโตไปพร้อมกับทีมของคุณ 🙏<br />
          สามารถ <span class="highlight">ติดต่อ</span> ผมได้ผ่านช่องทางด้านล่างครับ
        </p>

        <!-- Card -->
        <v-card class="contact-card mx-auto" max-width="600" elevation="12">
          <div class="text-center mb-6">
            <h3 class="text-h5 font-weight-bold mb-1">Pongpipat Siangsai</h3>
          </div>

          <!-- Contact Info -->
          <v-row class="mb-6" dense justify="start">
            <!-- Email -->
            <v-col cols="12" class="d-flex align-center mb-4 text-left">
              <img src="../images/email.png" alt="Email" class="icon mr-3" />
              <div>
                <div class="text-caption text-grey-lighten-1">Email</div>
                <div class="text-body-1 font-weight-medium text-white">
                  pongpipat.workchat@hotmail.com
                </div>
              </div>
            </v-col>

            <!-- Phone -->
            <v-col cols="12" class="d-flex align-center mb-2 text-left">
              <img src="../images/telephone.png" alt="Phone" class="icon mr-3" />
              <div>
                <div class="text-caption text-grey-lighten-1">Phone</div>
                <div class="text-body-1 font-weight-medium text-white">098-993-5941</div>
              </div>
            </v-col>
          </v-row>

          <!-- Social Icons -->
          <div class="social-links mt-6 d-flex justify-center flex-wrap">
            <a href="https://web.facebook.com/pongpipat.saingsat/" target="_blank">
              <img src="../images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://line.me/ti/p/wzvx7xnMsx" target="_blank">
              <img src="../images/line.png" alt="Line" />
            </a>
            <a href="https://github.com/Fah-Pongpipat" target="_blank">
              <img src="../images/github-sign.png" alt="GitHub" />
            </a>
            <a href="mailto:pongpipat.workchat@hotmail.com" target="_blank">
              <img src="../images/sent.png" alt="Email Link" />
            </a>
          </div>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.highlight {
  color: #aaf3b4;
  font-weight: 600;
}

.contact-intro {
  font-size: 18px;
  line-height: 1.8;
  color: #e0e0e0;
  text-shadow:
    0 0 4px rgba(0, 255, 255, 0.2),
    0 0 8px rgba(160, 32, 240, 0.2);
  font-weight: 500;
  margin-bottom: 48px;
  letter-spacing: 0.3px;
  transition: color 0.3s ease;
}

.contact-wrapper {
  max-width: 960px;
  margin: 0 auto;
}

.gradient-title {
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(90deg, #00fff0, #a020f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-card {
  background: rgba(20, 20, 20, 0.95);
  color: #fff;
  border-radius: 20px;
  padding: 32px;
  position: relative;
  box-shadow:
    0 0 16px rgba(0, 255, 255, 0.2),
    0 0 24px rgba(160, 32, 240, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.contact-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  border-radius: 20px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.4), transparent 70%);
  filter: blur(30px);
  z-index: -1;
}
.bg-contact {
  background-color: #000;
}

.contact-wrapper {
  max-width: 960px;
  margin: 0 auto;
}

.contact-card {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  padding: 32px;
  color: #fff;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
  transition: 0.3s ease;
}

.contact-card:hover {
  box-shadow:
    0 0 40px rgba(0, 255, 255, 0.3),
    0 0 30px #a020f0;
}

.icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.social-links img {
  width: 36px;
  height: 36px;
  margin: 10px 14px;
  filter: grayscale(100%);
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}

.social-links img:hover {
  transform: scale(1.2);
  filter: none;
}

.fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
