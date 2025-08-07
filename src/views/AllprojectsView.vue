<script setup lang="ts">
import MenuViewVue from './MenuView.vue'
import { computed, ref } from 'vue'
import ConverEmotion from '../images/project/Conver emotion.jpg'
import Emotion1 from '../images/project/emotion-1.jpg'
import Emotion2 from '../images/project/emotion-2.jpg'
import Emotion3 from '../images/project/emotion-3.jpg'
import Emotion4 from '../images/project/emotion-4.jpg'
import Emotion5 from '../images/project/emotion-5.jpg'

import ConverMusic from '../images/project/Conver-Music.jpg'
import MusicF1 from '../images/project/music-1.jpg'
import MusicF2 from '../images/project/music-2.jpg'
import MusicF3 from '../images/project/music-3.jpg'
import MusicF4 from '../images/project/music-4.jpg'

import ConverWeather from '../images/project/Conver-weather.jpg'
import WT1 from '../images/project/weath-1.jpg'
import WT2 from '../images/project/weath-2.jpg'
import WT3 from '../images/project/weath-3.jpg'
import WT4 from '../images/project/weath-4.jpg'

import ConverBuu from '../images/project/Conver-Buu.jpg'
import Buu1 from '../images/project/Buu-1.jpg'
import Buu2 from '../images/project/Buu-2.jpg'
import Buu3 from '../images/project/Buu-3.jpg'
import Buu4 from '../images/project/Buu-4.jpg'
import Buu5 from '../images/project/Buu-5.jpg'
import Buu6 from '../images/project/Buu-6.jpg'
import Buu7 from '../images/project/Buu-7.jpg'
import Buu8 from '../images/project/Buu-8.jpg'
import Buu9 from '../images/project/Buu-9.jpg'
import Buu10 from '../images/project/Buu-10.jpg'
import Buu11 from '../images/project/Buu-11.jpg'
import Buu12 from '../images/project/Buu-12.jpg'
import Buu13 from '../images/project/Buu-13.jpg'

import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()
const currentLang = computed(() => languageStore.currnetedLanguage as 'TH' | 'ENG')

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
const projects = [
  {
    title: {
      TH: 'ระบบจองหอสมุด (BUU Library)',
      ENG: 'BUU Library Reservation System',
    },
    cover: ConverBuu,
    images: [Buu1, Buu2, Buu3, Buu4, Buu5, Buu6, Buu7, Buu8, Buu9, Buu10, Buu11, Buu12, Buu13],
    description: {
      TH: `ระบบจองห้องหอสมุดที่พัฒนาระหว่างการฝึกงาน 4 เดือน ณ สำนักหอสมุด มหาวิทยาลัยบูรพา โดยระบบรองรับการจองห้องประชุมและห้องอ่านหนังสือ พร้อมฟีเจอร์เพิ่มเติม เช่น การเพิ่มวันหยุด การสั่งอาหารสำหรับห้องประชุม และการจัดการสิทธิ์ผู้ใช้ โดยผมรับผิดชอบพัฒนา Backend, เชื่อมต่อฐานข้อมูล, ออกแบบ API และ Deploy ขึ้นใช้งานจริงบนเซิร์ฟเวอร์ของหอสมุด`,
      ENG: `A library room reservation system developed during my 4-month internship at the Burapha University Library. The system supports booking meeting and reading rooms, with additional features like adding holidays, ordering food for meeting rooms, and managing user permissions. I was responsible for backend development, database integration, API design, and deployment to the library's server.`,
    },
  },
  {
    title: {
      TH: 'Classify Emotions',
      ENG: 'Classify Emotions',
    },
    cover: ConverEmotion,
    images: [Emotion1, Emotion2, Emotion3, Emotion4, Emotion5],
    description: {
      TH: `โปรเจกต์นี้เป็นการพัฒนา AI สำหรับจำแนกอารมณ์ของมนุษย์จากภาพใบหน้า โดยสามารถแยกแยะได้ทั้งหมด 5 อารมณ์ ได้แก่ โกรธ เศร้า เฉยๆ มีความสุข และประหลาดใจ ถูกออกแบบขึ้นเพื่อประยุกต์ใช้งานในหลายด้าน เช่น การวิเคราะห์ความรู้สึกของลูกค้า (Sentiment Analysis), การติดตามสุขภาพจิต และการสร้างเกมที่ควบคุมด้วยใบหน้า

ระบบนี้พัฒนาโดยใช้ภาษา Python และไลบรารี Deep Learning อย่าง PyTorch, torchvision และ Pillow ด้านการประมวลผลข้อมูลใช้ NumPy และ Matplotlib ร่วมกับการพัฒนาใน VS Code ตัวโมเดลใช้โครงข่าย Convolutional Neural Network (CNN) พร้อมฟังก์ชัน Loss แบบ Categorical Cross-Entropy และ Optimizer แบบ Adam โดยใช้ Activation Function คือ Softmax เพื่อให้สามารถจำแนกอารมณ์ได้อย่างแม่นยำ

โครงการนี้เป็นส่วนหนึ่งของวิชา Deep Learning แสดงให้เห็นถึงความเข้าใจทั้งเชิงทฤษฎีและการนำไปใช้งานจริงของโมเดล AI ในงานด้านการจดจำและวิเคราะห์อารมณ์มนุษย์`,
      ENG: `This project is an AI that classifies human emotions from facial images. It can distinguish five emotions: angry, sad, neutral, happy, and surprised. It’s designed for various applications like customer sentiment analysis, mental health monitoring, and emotion-based gaming.

Built using Python with Deep Learning libraries such as PyTorch, torchvision, and Pillow. Data processing utilized NumPy and Matplotlib. The model is based on a Convolutional Neural Network (CNN), using Categorical Cross-Entropy loss, Adam optimizer, and Softmax activation for accurate classification.

This was developed for a Deep Learning course, demonstrating both theoretical understanding and practical application of AI in human emotion recognition.`,
    },
  },
  {
    title: {
      TH: 'ระบบฟังเพลง Spotifuu',
      ENG: 'Spotifuu Music Streaming System',
    },
    cover: ConverMusic,
    images: [MusicF1, MusicF2, MusicF3, MusicF4],
    description: {
      TH: `Spotifuu เป็นเว็บไซต์ฟังเพลงออนไลน์ที่พัฒนาขึ้นในช่วงปีที่ 3 ของการเรียนมหาวิทยาลัย 
โดยมีฟีเจอร์หลักคือการเล่นเพลงจากรายการที่จัดไว้ล่วงหน้า พร้อมระบบแสดงรายชื่อเพลงและหน้าควบคุมการเล่นเพลงอย่างครบถ้วน 
ในโปรเจกต์นี้ผมรับผิดชอบทั้งในส่วนของ Backend และ Frontend โดยมีหน้าที่ในการพัฒนา API สำหรับจัดการข้อมูลเพลงและผู้ใช้งาน 
รวมถึงออกแบบหน้าเว็บให้สามารถใช้งานได้อย่างลื่นไหลและรองรับการเล่นเพลงแบบเรียลไทม์`,
      ENG: `Spotifuu is an online music streaming platform developed during my third year of university. Its main features include playlist playback, a complete song list, and a real-time music control interface.

I handled both backend and frontend development, built APIs for managing songs and user data, and designed a responsive web interface that delivers smooth, real-time music streaming.`,
    },
  },
  {
    title: {
      TH: 'เว็บไซต์พยากรณ์อากาศ',
      ENG: 'Weather Forecast Website',
    },
    cover: ConverWeather,
    images: [WT1, WT2, WT3, WT4],
    description: {
      TH: `นี้คือโปรเจคต์ที่ผมพัฒนาขึ้นเพื่อทดสอบความรู้พื้นฐานที่ได้เรียนรู้เกี่ยว React,js + JavaScript เพือมาทำเว็บไซต์พยากรณ์อากาศ โดยใช้ API ของ OpenWeatherMap ในการดึงข้อมูลสภาพอากาศปัจจุบัน โดยมีฟีเจอร์หลักๆ ได้แก่ การค้นหาจังหวัดที่ผู้ใช้งานได้เลือก, แสดงสภาพอากาศปัจจุบัน และ ก็ยังแสดงข้อมูลเพิ่มเติมเช่น ความชื้น, ความเร็วลม และอื่นๆ`,
      ENG: `This project was built to apply my basic knowledge of React.js and JavaScript. It’s a weather forecast website that uses the OpenWeatherMap API to fetch real-time weather data.

Key features include city-based search, display of current weather, and additional info like humidity, wind speed, and more.`,
    },
  },
]

const dialog = ref(false)
const selectedProject = ref(projects[0])

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const openDialog = (project: any) => {
  selectedProject.value = project
  dialog.value = true
}
</script>

<template>
  <v-app>
    <!-- ✅ Bar Menu -->
    <v-app-bar app color="black" dark flat>
      <MenuViewVue />
    </v-app-bar>

    <!-- ✅ Project List -->
    <v-main class="minimal-bg py-12">
      <v-container fluid class="fade-in">
        <!-- ปุ่มเปลี่ยนภาษา -->
        <v-row>
          <v-col cols="12" class="d-flex justify-end">
            <v-btn class="lang-btn position-btn" @click="switchLanguage">
              {{ languageStore.currnetedLanguage }}
            </v-btn>
          </v-col>
        </v-row>

        <!-- Loading -->
        <v-overlay v-model="isLoading" class="d-flex align-center justify-center" absolute>
          <v-progress-circular indeterminate size="64" color="pink" />
        </v-overlay>

        <!-- หัวข้อ "My Projects" -->
        <h2 class="minimal-title mb-10">
          <v-icon color="blue lighten-2" size="36" class="mr-2">mdi-folder-search-outline</v-icon>
          {{ languageStore.currnetedLanguage === 'TH' ? 'โปรเจกต์ของฉัน' : 'My Projects' }}
        </h2>

        <!-- Cards -->
        <v-row dense class="project-grid" justify="center">
          <v-col
            v-for="(project, index) in projects"
            :key="index"
            cols="12"
            md="4"
            @click="openDialog(project)"
          >
            <v-card class="project-card" dark>
              <v-img :src="project.cover" height="200px" cover />
              <div class="project-title">
                {{ project.title[currentLang] }}
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Dialog -->
        <v-dialog v-model="dialog" max-width="1000px">
          <v-card
            color="#121212"
            dark
            style="max-height: 90vh; display: flex; flex-direction: column"
          >
            <!-- รูป Carousel -->
            <v-carousel height="300" hide-delimiter-background show-arrows>
              <v-carousel-item v-for="(img, idx) in selectedProject.images" :key="idx">
                <v-img :src="img" contain height="100%" />
              </v-carousel-item>
            </v-carousel>

            <!-- Scrollable content -->
            <div style="overflow-y: auto; padding: 16px; max-height: 300px">
              <h3 class="font-weight-bold mb-2">
                {{ selectedProject.title[currentLang] }}
              </h3>
              <p>
                {{ selectedProject.description[currentLang] }}
              </p>
            </div>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.scrollable-text::-webkit-scrollbar {
  width: 6px;
}
.scrollable-text::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}
.scrollable-text::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}

.minimal-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #e97ae9;
  letter-spacing: 1px;
  font-family: 'Quicksand', 'Prompt', 'Sarabun', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ปุ่ม Languages */
.lang-btn-wrapper {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 999;
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
.position-btn {
  top: 15px;
  right: 24px;
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

.project-grid {
  row-gap: 32px;
  column-gap: 24px;
}

.project-card {
  border-radius: 20px;
  overflow: hidden;
  transition: 0.4s ease;
  box-shadow:
    0 0 8px rgba(0, 255, 255, 0.2),
    0 0 16px rgba(160, 32, 240, 0.1);
}

.project-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow:
    0 0 10px #00f0ff,
    0 0 20px #a020f0,
    0 0 30px rgba(160, 32, 240, 0.4);
}

.project-title {
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: white;
  padding: 12px;
  background-color: #1e1e1e;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.header-project-title {
  font-size: 42px;
  font-weight: 800;
  text-align: center;
  color: transparent;
  background-image: linear-gradient(to right, #00fff7, #a020f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1.5px;
  margin-bottom: 40px;
  text-shadow:
    0 0 10px rgba(0, 255, 255, 0.2),
    0 0 20px rgba(160, 32, 240, 0.3);
}

.v-dialog .v-card-text {
  color: #ccc;
}
</style>
