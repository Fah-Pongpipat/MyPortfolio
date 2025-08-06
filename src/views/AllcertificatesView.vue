<script setup lang="ts">
import { ref } from 'vue'
import MenuViewVue from './MenuView.vue'
import CerChatGPT from '../images/borntodev-acdemy_ChatGPT for Developers_certifiacte.png'
import CerTypeScript from '../images/borntodev-acdemy_Get started with TypeScript_certifiacte.png'
import CerJavaScript from '../images/borntodev-acdemy_Introduction to JavaScript_certifiacte.png'
import CerGitHub from '../images/borntodev-acdemy_GitHub for Developer _certifiacte.png'
import CerBA from '../images/CerBA.jpg'
import CerSQl from '../images/SQL.jpg'
import CerBS from '../images/BusinessCer.jpg'
import CerAG from '../images/AngularCer.jpg'
const certificates = [
  {
    title: 'ChatGPT for Developer',
    image: CerChatGPT,
  },
  {
    title: 'Get started with TypeScript',
    image: CerTypeScript,
  },
  {
    title: 'Introduction to JavaScript',
    image: CerJavaScript,
  },
  {
    title: 'GitHub for Developer',
    image: CerGitHub,
  },
  {
    title: 'Fundamental of Business Requirement Gathering',
    image: CerBS,
  },
  {
    title: 'Angular in Action',
    image: CerAG,
  },
  {
    title: 'Basic SQL',
    image: CerSQl,
  },
  {
    title: 'Fundamental of Business Analysis',
    image: CerBA,
  },
]

const dialog = ref(false)
const selectedCert = ref({ title: '', image: '' })

function openDialog(cert: { title: string; image: string }) {
  selectedCert.value = cert
  dialog.value = true
}
</script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat>
      <MenuViewVue></MenuViewVue>
    </v-app-bar>

    <v-main class="minimal-bg py-12">
      <div class="fade-in-wrapper">
        <v-container>
          <h2 class="header-project-title">Certificates</h2>
          <v-row dense justify="center">
            <v-col v-for="(cert, index) in certificates" :key="index" cols="12" sm="6" md="4">
              <v-card class="certificate-modern-card" dark elevation="6" @click="openDialog(cert)">
                <v-img :src="cert.image" class="modern-cert-img" height="200px" cover />
                <v-card-title class="modern-cert-title">
                  {{ cert.title }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>

          <v-dialog v-model="dialog" max-width="800px">
            <v-card color="black" dark>
              <v-img :src="selectedCert.image" height="auto" max-height="80vh" contain></v-img>
              <v-card-text class="career-goal">
                {{ selectedCert.title }}
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
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

.header-project-title {
  font-size: 42px;
  font-weight: 800;
  text-align: center;
  color: transparent;
  background-image: linear-gradient(to right, #011f16, #a1e4ff); /* mint to sky blue */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1.5px;
  margin-bottom: 40px;
  text-shadow:
    0 0 10px rgba(159, 255, 226, 0.3),
    0 0 20px rgba(161, 228, 255, 0.3);
}

/* ใช้กับ <v-card> ทุกใบ */
.v-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

/* การ์ดแบบทันสมัย */
.certificate-modern-card {
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.85), rgba(15, 15, 15, 0.85));
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.05);
  border: 1px solid transparent;
}

/* เอฟเฟกต์ Hover ให้เหมือน Project */
.certificate-modern-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 0 12px #00ffff,
    0 0 24px #a020f0,
    0 0 36px rgba(160, 32, 240, 0.4);
  border: 1px solid rgba(160, 32, 240, 0.3);
}

/* รูปภาพ */
.modern-cert-img {
  object-fit: cover;
  transition: 0.3s ease;
}

.modern-cert-title {
  background-color: #121212;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ข้อความใน popup */
.career-goal {
  font-size: 20px;
  line-height: 1.6;
  color: #ffffff;
  font-weight: 400;
  text-align: justify;
  max-width: 100%;
  margin: 0 auto;
}

/* รูปใน popup */
.v-img {
  cursor: pointer;
  object-fit: contain;
  background-color: #000;
}

/* ข้อความ popup */
.v-card-text {
  text-align: center;
  color: #ccc;
}

/* แอนิเมชันแสดงทีละส่วน */
.fade-in-wrapper {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
