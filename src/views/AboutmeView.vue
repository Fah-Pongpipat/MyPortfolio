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
    year: '2017–2020',
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
    title: '🗄️ ฐานข้อมูล (Databases)', // ✅ แก้ชื่อให้ชัดเจน + เพิ่มไอคอน
    items: ['MySQL', 'SQLite', 'Mongodb'],
  },
]
</script>

<template>
  <v-app>
    <!-- Bar Menu -->
    <v-app-bar app color="black" dark flat>
      <MenuViewVue></MenuViewVue>
    </v-app-bar>

    <!-- Carousel Section -->
    <v-main class="bg-black fade-in">
      <v-container class="pa-12 text-white">
        <h2 class="text-center mb-8 display-1 font-weight-bold">ประวัติการศึกษา</h2>

        <v-carousel
          hide-delimiter-background
          height="480"
          cycle
          show-arrows
          class="education-carousel"
        >
          <v-carousel-item v-for="(item, index) in educationList" :key="index">
            <div class="education-slide d-flex flex-column align-center justify-center text-center">
              <v-avatar size="200" class="mb-6 mt-8 neon-avatar" style="border: 4px solid white">
                <img :src="item.image" alt="education image" />
              </v-avatar>
              <h3 class="text-h5 font-weight-bold">{{ item.degree }}</h3>
              <p class="text-subtitle-1">{{ item.title }}</p>
              <p v-if="item.major">📘 {{ item.major }}</p>
              <p>🗕️ {{ item.year }}</p>
              <p>📊 GPA: {{ item.gpa }}</p>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-container>
      <!-- Skills -->
      <v-container class="my-12 fade-in">
        <h2 class="text-center font-weight-bold mb-8">ทักษะที่เชี่ยวชาญ</h2>

        <v-row dense>
          <v-col
            class="blackground-v-card"
            cols="12"
            md="6"
            lg="4"
            v-for="(category, index) in skills"
            :key="index"
          >
            <v-card class="pa-4 h-100 glow-background" color="#1e1e1e" dark elevation="4">
              <h3 class="text-h6 mb-4">{{ category.title }}</h3>
              <div class="d-flex flex-wrap gap-2">
                <v-chip
                  v-for="(skill, i) in category.items"
                  :key="i"
                  color="cyan"
                  text-color="black"
                  class="ma-1"
                >
                  {{ skill }}
                </v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- Goals -->
      <v-container class="my-12 goal-section fade-in">
        <v-icon size="40" color="cyan" class="mb-2">mdi-target</v-icon>
        <h2 class="font-weight-bold mb-4">เป้าหมายของฉัน</h2>
        <p class="career-goal">
          ผมมีความมุ่งมั่นที่จะทำงานในตำแหน่ง Backend Developer หรือ Frontend Developer
          เพราะผมสนใจทั้งด้านการพัฒนาโครงสร้างระบบและการออกแบบประสบการณ์ผู้ใช้ โดยเฉพาะในส่วนของ
          Backend ผมมีความสนใจในกระบวนการเขียนโปรแกรมที่เกี่ยวข้องกับการออกแบบ API,
          การเชื่อมต่อกับฐานข้อมูล และการสร้างระบบที่มีประสิทธิภาพและปลอดภัย
          ผมเชื่อว่าความเข้าใจในทั้งสองฝั่งจะช่วยให้ผมสามารถพัฒนาระบบที่ตอบโจทย์ผู้ใช้งานได้อย่างรอบด้าน
        </p>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
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

.career-goal {
  font-size: 20px;
  line-height: 1.8;
  color: #ffffff;
  font-weight: 400;
  text-align: justify;
  max-width: 1800px;
  margin: 0 auto;
}

.goal-section {
  background-color: #121212;
  border-radius: 16px;
  padding: 40px;
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

.neon-avatar {
  border: 4px solid #00ffff;
  box-shadow:
    0 0 12px #00ffff,
    0 0 24px #00ffff,
    0 0 36px rgba(0, 255, 255, 0.5);
  transition: 0.3s ease;
}

.blackground-v-card {
  border: 2px solid #99f3bc;
  box-shadow:
    0 0 12px #6febd6,
    0 0 22px #1dd417,
    0 0 36px rgba(158, 247, 155, 0.5);
  transition: 0.3s ease;
}

html,
body,
#app {
  background-color: black;
  margin: 0;
  height: 100%;
}

.education-carousel .v-carousel__controls {
  margin-top: 80px;
  position: relative;
  z-index: 1;
}

.education-slide {
  padding-bottom: 60px;
}

.v-avatar img {
  object-fit: cover;
  border-radius: 50%;
}
</style>
