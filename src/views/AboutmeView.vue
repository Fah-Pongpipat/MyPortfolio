<script setup lang="ts">
import MenuViewVue from './MenuView.vue'
import buraphaLogo from '../images/Logo_of_Burapha_University.png'
import bdsLogo from '../images/BDSLogo.jpg'
const educationList = [
  {
    title: 'มหาวิทยาลัยบูรพา',
    degree: 'ปริญญาตรี',
    major: 'วิทยาการคอมพิวเตอร์',
    year: '2021–2025',
    gpa: '2.98',
    image: buraphaLogo,
  },
  {
    title: 'บดินทรเดชา (สิงห์ สิงหเสนี) สมุทรปราการ',
    degree: 'มัธยมศึกษาตอนปลาย',
    major: 'ศิลป์คํานวณ',
    year: '2018–2021',
    gpa: '2.82',
    image: bdsLogo,
  },
]
const skills = [
  {
    title: '💻 ภาษาโปรแกรม',
    items: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java', 'Go'],
  },
  {
    title: '⚙️ เฟรมเวิร์ก',
    items: ['Vue.js', 'Vuetify', 'Node.js', 'Nest.js'],
  },
  {
    title: '🛠 เครื่องมือพัฒนา',
    items: ['Git', 'GitHub', 'GitLab', 'Postman', 'Docker', 'Visual Studio Code'],
  },
  {
    title: '🎨 การออกแบบ UI/UX',
    items: ['Figma', 'Canva'],
  },
  {
    title: '🗄️ ฐานข้อมูล (Databases)',
    items: ['MySQL', 'SQLite', 'Mongodb'],
  },
]
</script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat>
      <MenuViewVue></MenuViewVue>
    </v-app-bar>

    <v-main class="bg-black fade-in">
      <v-container class="pa-12 text-white">
        <h2 class="header-project-title">ประวัติการศึกษา</h2>

        <v-carousel
          hide-delimiter-background
          height="480"
          cycle
          show-arrows
          class="education-carousel custom-carousel"
          :prev-icon="'mdi-chevron-left'"
          :next-icon="'mdi-chevron-right'"
        >
          <v-carousel-item v-for="(item, index) in educationList" :key="index">
            <div class="education-slide d-flex flex-column align-center justify-center text-center">
              <v-avatar size="200" class="mb-6 mt-8 neon-avatar">
                <img :src="item.image" alt="education image" />
              </v-avatar>
              <h3 class="text-h5 font-weight-bold mb-1">{{ item.degree }}</h3>
              <p class="text-subtitle-1 mb-1">{{ item.title }}</p>
              <p v-if="item.major" class="mb-1">📘 {{ item.major }}</p>
              <p class="mb-1">📅 {{ item.year }}</p>
              <p>📊 GPA: {{ item.gpa }}</p>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-container>

      <v-container class="my-12 fade-in">
        <h2 class="text-center font-weight-bold mb-8">ทักษะที่เชี่ยวชาญ</h2>

        <v-row dense>
          <v-col cols="12" md="6" lg="4" v-for="(category, index) in skills" :key="index">
            <v-card class="skill-card h-100" dark elevation="4">
              <h3>{{ category.title }}</h3>
              <div class="d-flex flex-wrap gap-2">
                <v-chip v-for="(skill, i) in category.items" :key="i" class="skill-chip ma-1">
                  {{ skill }}
                </v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="my-12 goal-section fancy-goal-container fade-in">
        <div class="goal-header d-flex align-center mb-4">
          <v-icon size="36" color="cyan" class="mr-2 glow-icon">mdi-target</v-icon>
          <h2 class="goal-title">เป้าหมายของฉัน</h2>
        </div>

        <v-card class="goal-card" flat>
          <v-card-text class="goal-text">
            ผมมีความมุ่งมั่นที่จะทำงานในตำแหน่ง <strong>Backend Developer</strong> หรือ
            <strong>Frontend Developer</strong><br />
            เพราะผมสนใจทั้งด้านการพัฒนาโครงสร้างระบบและการออกแบบประสบการณ์ผู้ใช้ โดยเฉพาะในส่วนของ
            <strong>Backend</strong> ผมมีความสนใจในกระบวนการเขียนโปรแกรมที่เกี่ยวข้องกับการออกแบบ
            API, การเชื่อมต่อกับฐานข้อมูล และการสร้างระบบที่มีประสิทธิภาพและปลอดภัย<br />
            ผมเชื่อว่าความเข้าใจในทั้งสองฝั่งจะช่วยให้ผมสามารถพัฒนาระบบที่ตอบโจทย์ผู้ใช้งานได้อย่างรอบด้าน
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.header-project-title {
  font-size: 42px;
  font-weight: 800;
  text-align: center;
  color: transparent;
  background-image: linear-gradient(to right, #a86af0, #4fc3f7, #6ffff8); /* purple to sky cyan */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1.5px;
  margin-bottom: 40px;
  text-shadow:
    0 0 6px rgba(111, 255, 248, 0.2),
    0 0 18px rgba(178, 106, 255, 0.35);
}

.fancy-goal-container {
  max-width: 900px;
  margin: 0 auto;
}

.goal-header {
  justify-content: center;
}

.goal-title {
  font-size: 28px;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
}

.goal-card {
  background-color: #121212;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.goal-card:hover {
  box-shadow: 0 6px 24px rgba(0, 255, 255, 0.12);
}
.goal-text {
  font-size: 18px;
  line-height: 1.9;
  color: #e0e0e0;
  text-align: justify;
  font-family: 'Sarabun', 'Prompt', sans-serif;
}

.goal-text strong {
  color: #ffffff;
  font-weight: 600;
}

.glow-icon {
  text-shadow:
    0 0 8px #00fff0,
    0 0 12px #a020f0;
}

/* Card container ของแต่ละหมวดทักษะ */
.skill-card {
  border-radius: 20px;
  padding: 24px;
  background: linear-gradient(145deg, #1c1c1c, #121212);
  box-shadow:
    0 0 10px #00ffc3,
    0 0 20px #00cfff,
    0 0 30px rgba(0, 255, 213, 0.4);
  position: relative;
  overflow: hidden;
  transition: 0.3s ease-in-out;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 0 15px #00ffc3,
    0 0 25px #00cfff,
    0 0 40px rgba(0, 255, 213, 0.6);
}

/* หัวข้อของแต่ละหมวด */
.skill-card h3 {
  color: #00fff0;
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 18px;
}

/* ปรับปุ่ม chip */
.skill-chip {
  border-radius: 999px;
  font-weight: 500;
  font-size: 14px;
  background-color: #00ffff;
  color: #000 !important;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 6px rgba(0, 255, 255, 0.4);
}

.skill-chip:hover {
  transform: scale(1.05);
  box-shadow:
    0 0 10px #00ffff,
    0 0 15px rgba(0, 255, 255, 0.6);
}

/* ปรับปุ่มเลื่อนให้ดูสุภาพ */
.custom-carousel ::v-deep(.v-carousel__prev),
.custom-carousel ::v-deep(.v-carousel__next) {
  background-color: rgba(200, 200, 200, 0.2);
  color: #ffffff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  transition: background-color 0.3s ease;
}
.custom-carousel ::v-deep(.v-carousel__prev:hover),
.custom-carousel ::v-deep(.v-carousel__next:hover) {
  background-color: rgba(100, 100, 100, 0.3);
}

.fade-in {
  animation: fadeIn 1.2s ease-out;
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

.education-title {
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  color: #e6e6e6;
  font-family: 'Sarabun', 'Prompt', sans-serif;
  margin-bottom: 32px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.neon-avatar {
  border: 3px solid #4a90e2;
  box-shadow: none;
  background-color: #f0f0f0;
  padding: 4px;
}
.v-avatar img {
  object-fit: cover;
  border-radius: 50%;
}

.goal-section {
  background-color: #121212;
  border-radius: 16px;
  padding: 40px;
}
.career-goal {
  font-size: 20px;
  line-height: 1.8;
  color: #ffffff;
  font-weight: 400;
  text-align: justify;
  max-width: 1800px;
  margin: 0 auto;
}

.blackground-v-card {
  border: 2px solid #99f3bc;
  box-shadow:
    0 0 12px #6febd6,
    0 0 22px #1dd417,
    0 0 36px rgba(158, 247, 155, 0.5);
  transition: 0.3s ease;
}

.glow-background::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, #00ffff40, #00ffab10, transparent 70%);
  transform: translate(-50%, -50%);
  filter: blur(100px);
  z-index: -1;
}

html,
body,
#app {
  background-color: black;
  margin: 0;
  height: 100%;
}

.education-slide p,
.education-slide h3 {
  color: #e0e0e0;
  font-family: 'Sarabun', sans-serif;
}

.education-slide h3 {
  color: #ffffff;
  font-weight: 600;
}

.education-slide p {
  font-size: 16px;
  margin-bottom: 6px;
  color: #cccccc;
}
.education-carousel .v-carousel__controls {
  margin-top: 80px;
  position: relative;
  z-index: 1;
}
</style>
