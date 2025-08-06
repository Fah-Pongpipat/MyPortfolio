<script setup lang="ts">
import MenuViewVue from './MenuView.vue'
import { ref } from 'vue'
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

import ConverBMI from '../images/project/Conver-BMI.jpg'
import BMI1 from '../images/project/BMI-1.jpg'
import BMI2 from '../images/project/BMI-2.jpg'
import BMI3 from '../images/project/BMI-3.jpg'
import BMI4 from '../images/project/BMI-4.jpg'
import BMI5 from '../images/project/BMI-5.jpg'

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
const projects = [
  {
    title: 'ระบบจองหอสมุด (BUU Library)',
    cover: ConverBuu,
    images: [Buu1, Buu2, Buu3, Buu4, Buu5, Buu6, Buu7, Buu8, Buu9, Buu10, Buu11, Buu12, Buu13],
    description:
      'ระบบจองห้องหอสมุดที่พัฒนาระหว่างการฝึกงาน 4 เดือน ณ สำนักหอสมุด มหาวิทยาลัยบูรพา โดยระบบรองรับการจองห้องประชุมและห้องอ่านหนังสือ พร้อมฟีเจอร์เพิ่มเติม เช่น การเพิ่มวันหยุด การสั่งอาหารสำหรับห้องประชุม และการจัดการสิทธิ์ผู้ใช้ โดยผมรับผิดชอบพัฒนา Backend, เชื่อมต่อฐานข้อมูล, ออกแบบ API และ Deploy ขึ้นใช้งานจริงบนเซิร์ฟเวอร์ของหอสมุด',
  },
  {
    title: 'Classify Emotions',
    cover: ConverEmotion,
    images: [Emotion1, Emotion2, Emotion3, Emotion4, Emotion5],
    description: `โปรเจกต์นี้เป็นการพัฒนา AI สำหรับจำแนกอารมณ์ของมนุษย์จากภาพใบหน้า โดยสามารถแยกแยะได้ทั้งหมด 5 อารมณ์ ได้แก่ โกรธ เศร้า เฉยๆ มีความสุข และประหลาดใจ ถูกออกแบบขึ้นเพื่อประยุกต์ใช้งานในหลายด้าน เช่น การวิเคราะห์ความรู้สึกของลูกค้า (Sentiment Analysis), การติดตามสุขภาพจิต และการสร้างเกมที่ควบคุมด้วยใบหน้า

ระบบนี้พัฒนาโดยใช้ภาษา Python และไลบรารี Deep Learning อย่าง PyTorch, torchvision และ Pillow ด้านการประมวลผลข้อมูลใช้ NumPy และ Matplotlib ร่วมกับการพัฒนาใน VS Code ตัวโมเดลใช้โครงข่าย Convolutional Neural Network (CNN) พร้อมฟังก์ชัน Loss แบบ Categorical Cross-Entropy และ Optimizer แบบ Adam โดยใช้ Activation Function คือ Softmax เพื่อให้สามารถจำแนกอารมณ์ได้อย่างแม่นยำ

โครงการนี้เป็นส่วนหนึ่งของวิชา Deep Learning แสดงให้เห็นถึงความเข้าใจทั้งเชิงทฤษฎีและการนำไปใช้งานจริงของโมเดล AI ในงานด้านการจดจำและวิเคราะห์อารมณ์มนุษย์`,
  },
  {
    title: 'ระบบฟังเพลง Spotifuu',
    cover: ConverMusic,
    images: [MusicF1, MusicF2, MusicF3, MusicF4],
    description: `Spotifuu เป็นเว็บไซต์ฟังเพลงออนไลน์ที่พัฒนาขึ้นในช่วงปีที่ 3 ของการเรียนมหาวิทยาลัย 
โดยมีฟีเจอร์หลักคือการเล่นเพลงจากรายการที่จัดไว้ล่วงหน้า พร้อมระบบแสดงรายชื่อเพลงและหน้าควบคุมการเล่นเพลงอย่างครบถ้วน 
ในโปรเจกต์นี้ผมรับผิดชอบทั้งในส่วนของ Backend และ Frontend โดยมีหน้าที่ในการพัฒนา API สำหรับจัดการข้อมูลเพลงและผู้ใช้งาน 
รวมถึงออกแบบหน้าเว็บให้สามารถใช้งานได้อย่างลื่นไหลและรองรับการเล่นเพลงแบบเรียลไทม์`,
  },
  {
    title: 'โปรแกรมเช็คค่า BMI',
    cover: ConverBMI,
    images: [BMI1, BMI2, BMI3, BMI4, BMI5],
    description:
      'โปรเจกต์นี้เป็นเว็บแอปพลิเคชันสำหรับคำนวณค่า BMI (Body Mass Index) ซึ่งพัฒนาด้วย HTML, CSS และ JavaScript ในช่วงเริ่มต้นของการเรียนรู้การพัฒนาเว็บไซต์ ตัวระบบจะรับค่าน้ำหนักและส่วนสูงจากผู้ใช้งาน เพื่อนำไปคำนวณค่า BMI และแสดงผลลัพธ์พร้อมกับสถานะร่างกาย เช่น น้ำหนักน้อยเกินไป ปกติ หรืออ้วนเกินไป เป็นโปรเจกต์ที่ช่วยฝึกพื้นฐานด้านการออกแบบและการคำนวณเชิงตรรกะด้วย JavaScript',
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
      <v-container class="fade-in">
        <h2 class="header-project-title">My Projects</h2>

        <v-row dense class="project-grid" justify="center">
          <v-col
            v-for="(project, index) in projects"
            :key="index"
            cols="12"
            md="4"
            @click="openDialog(project)"
          >
            <v-card class="project-card" dark>
              <v-img :src="project.cover" height="200px" cover></v-img>
              <div class="project-title">{{ project.title }}</div>
            </v-card>
          </v-col>
        </v-row>

        <!-- ✅ Dialog with Carousel -->
        <v-dialog v-model="dialog" max-width="1000px">
          <v-card color="#121212" dark>
            <v-carousel height="400" hide-delimiter-background show-arrows>
              <v-carousel-item v-for="(img, idx) in selectedProject.images" :key="idx">
                <v-img :src="img" contain height="100%"></v-img>
              </v-carousel-item>
            </v-carousel>

            <v-card-text class="mt-4 text-subtitle-1">
              <h3 class="font-weight-bold mb-2">{{ selectedProject.title }}</h3>
              <p>{{ selectedProject.description }}</p>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
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
