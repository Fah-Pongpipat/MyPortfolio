<script setup lang="ts">
import MenuViewVue from './MenuView.vue'
import { useLanguageStore } from '@/stores/language'
import { ref } from 'vue'
const languageStore = useLanguageStore()

const isLoading = ref(false)
function switchLanguage() {
  // สลับภาษาและบันทึกลง localStorage
  languageStore.currnetedLanguage = languageStore.currnetedLanguage === 'TH' ? 'ENG' : 'TH'
  localStorage.setItem('language', languageStore.currnetedLanguage)
  showIsLoading()
  // รีเฟรชหน้าเพื่อให้การเปลี่ยนแปลงมีผล
}
function showIsLoading() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}
</script>

<template>
  <v-app>
    <!-- Top Bar -->
    <v-app-bar app color="black" dark flat>
      <MenuViewVue />
    </v-app-bar>

    <!-- Main Content -->
    <v-main class="minimal-bg">
      <v-container class="contact-wrapper py-16 fade-in text-center">
        <!-- Language Switch Button -->
        <div class="d-flex justify-end mb-4">
          <v-btn class="lang-btn" @click="switchLanguage">
            {{ languageStore.currnetedLanguage }}
          </v-btn>
        </div>

        <!-- Loading Overlay -->
        <v-overlay v-model="isLoading" class="d-flex align-center justify-center" absolute>
          <v-progress-circular indeterminate size="64" color="pink" />
        </v-overlay>

        <!-- Heading -->
        <h2 class="gradient-title mb-4">
          {{
            languageStore.currnetedLanguage === 'TH'
              ? 'ยินดีที่ได้รู้จักครับผม'
              : 'Nice to meet you!'
          }}
        </h2>
        <p class="contact-intro">
          {{
            languageStore.currnetedLanguage === 'TH'
              ? 'หากคุณกำลังมองหาคนร่วมทีมที่มีความรับผิดชอบ'
              : "If you're looking for a team member who is responsible"
          }}
          <span class="highlight">
            {{ languageStore.currnetedLanguage === 'TH' ? 'พร้อมที่จะเรียนรู้' : 'eager to learn' }}
          </span>
          {{
            languageStore.currnetedLanguage === 'TH'
              ? 'และใส่ใจในรายละเอียด'
              : 'and pays attention to detail.'
          }}<br />
          {{
            languageStore.currnetedLanguage === 'TH'
              ? 'ผมยินดีอย่างยิ่งที่จะร่วม'
              : "I'd be more than happy to"
          }}
          <span class="highlight">
            {{ languageStore.currnetedLanguage === 'TH' ? 'ทำงาน' : 'join the team' }}
          </span>
          {{
            languageStore.currnetedLanguage === 'TH'
              ? 'และเติบโตไปพร้อมกับทีมของคุณ 🙏'
              : 'and grow together with your team. 🙏'
          }}<br />
          {{ languageStore.currnetedLanguage === 'TH' ? 'สามารถ' : 'Feel free to' }}
          <span class="highlight">
            {{ languageStore.currnetedLanguage === 'TH' ? 'ติดต่อ' : 'reach out to' }}
          </span>
          {{
            languageStore.currnetedLanguage === 'TH'
              ? 'ผมได้ผ่านช่องทางด้านล่างครับ'
              : 'me through the contact info below.'
          }}
        </p>

        <!-- Contact Card -->
        <v-card class="contact-card mx-auto elevation-12">
          <div class="text-center mb-6">
            <h3 class="text-h5 font-weight-bold mb-1">
              {{
                languageStore.currnetedLanguage === 'TH'
                  ? 'ช่องทางการติดต่อ'
                  : 'Contact Information'
              }}
            </h3>
          </div>

          <!-- Contact Info -->
          <v-row class="mb-6" dense justify="start">
            <v-col cols="12" class="d-flex align-center mb-4 text-left">
              <img src="../images/email.png" alt="Email" class="icon mr-3" />
              <div>
                <div class="text-caption text-grey-lighten-1">Email</div>
                <div class="text-body-1 font-weight-medium">pongpipat.workchat@hotmail.com</div>
              </div>
            </v-col>

            <v-col cols="12" class="d-flex align-center mb-2 text-left">
              <img src="../images/telephone.png" alt="Phone" class="icon mr-3" />
              <div>
                <div class="text-caption text-grey-lighten-1">Phone</div>
                <div class="text-body-1 font-weight-medium">
                  098-993-5941
                  {{ languageStore.currnetedLanguage === 'TH' ? 'หรือ' : 'or' }} 066-132-0025
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Social Media Links -->
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
.fade-in {
  opacity: 0;
  animation: fadeIn 1.2s ease-out forwards;
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

/* พื้นหลังแนวมินิมอล ฟ้าอ่อน ชมพูอ่อน ขาว */
.minimal-bg {
  background: linear-gradient(135deg, #e3f0ff 0%, #ffe3f6 50%, #ffffff 100%);
  min-height: 100dvh;
  position: relative;
  overflow: hidden;
  z-index: 0;
}

/* วงกลมตกแต่งพื้นหลัง */
.minimal-bg::before,
.minimal-bg::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  opacity: 0.35;
  pointer-events: none;
}
.minimal-bg::before {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, #b3e5fc 60%, #e3f0ff 100%);
  top: -120px;
  left: -120px;
}
.minimal-bg::after {
  width: 340px;
  height: 340px;
  background: radial-gradient(circle, #f8bbd0 60%, #ffe3f6 100%);
  bottom: -100px;
  right: -100px;
}

.lang-btn {
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  background-color: #ffffffdd;
  color: #333;
  border-radius: 20px;
  padding: 6px 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-transform: none;
  transition: background-color 0.2s ease;
}

.lang-btn:hover {
  background-color: #f0e6ff;
  color: #6a1b9a;
}

.gradient-title {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #7c4dff, #9c27b0); /* ปรับเป็นม่วง gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-intro {
  color: #555555; /* สีเทาเข้มสุภาพ อ่านง่ายกว่า #ccc */
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.highlight {
  color: #9c27b0; /* ชมพูอมม่วงสุภาพ */
  font-weight: bold;
}

.contact-card {
  background-color: #2c2c2c;
  color: #e0e0e0; /* สีเทาอ่อน ดูนุ่มนวลกว่า pure white */
  padding: 2rem;
  border-radius: 16px;
}

.contact-card h3 {
  color: #ffffff; /* ชื่อให้เด่นสุด */
}

.icon {
  width: 32px;
  height: 32px;
}

.social-links img {
  width: 36px;
  height: 36px;
  margin: 0 10px;
  filter: brightness(1.2);
  transition: transform 0.2s;
}

.social-links img:hover {
  transform: scale(1.1);
  filter: brightness(1.5);
}

/* เนื้อหาทั้งหมดข้างใน */
.slide-down-wrapper {
  animation: slideDown 1s ease-out;
  width: 100%;
  max-width: 700px;
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
}
</style>
