<script setup lang="ts">
import MenuViewVue from './MenuView.vue'
import buraphaLogo from '../images/Logo_of_Burapha_University.png'
import bdsLogo from '../images/BDSLogo.jpg'
import { computed, ref } from 'vue'
import { useLanguageStore } from '@/stores/language'

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
const educationList = [
  {
    title: { th: 'มหาวิทยาลัยบูรพา', en: 'Burapha University' },
    degree: { th: 'ปริญญาตรี', en: "Bachelor's Degree" },
    major: { th: 'วิทยาการคอมพิวเตอร์', en: 'Computer Science' },
    year: '2021–2025',
    gpa: '2.98',
    image: buraphaLogo,
  },
]
const localizedEducationList = computed(() => {
  return educationList.map((item) => ({
    ...item,
    title: languageStore.currnetedLanguage === 'TH' ? item.title.th : item.title.en,
    degree: languageStore.currnetedLanguage === 'TH' ? item.degree.th : item.degree.en,
    major: languageStore.currnetedLanguage === 'TH' ? item.major.th : item.major.en,
  }))
})
const skills = [
  {
    title: {
      th: '💻 ภาษาโปรแกรม',
      en: '💻 Programming Languages',
    },
    items: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java', 'Go'],
  },
  {
    title: {
      th: '⚙️ เฟรมเวิร์ก',
      en: '⚙️ Frameworks',
    },
    items: ['Vue.js', 'Vuetify', 'Node.js', 'Nest.js', 'React'],
  },
  {
    title: {
      th: '🛠 เครื่องมือพัฒนา',
      en: '🛠 Development Tools',
    },
    items: ['Git', 'GitHub', 'GitLab', 'Postman', 'Docker', 'Visual Studio Code'],
  },
  {
    title: {
      th: '🎨 การออกแบบ UI/UX',
      en: '🎨 UI/UX Design',
    },
    items: ['Figma', 'Canva'],
  },
  {
    title: {
      th: '🗄️ ฐานข้อมูล',
      en: '🗄️ Databases',
    },
    items: ['MySQL', 'SQLite', 'Mongodb'],
  },
]

const localizedSkills = computed(() => {
  return skills.map((item) => ({
    ...item,
    title: languageStore.currnetedLanguage === 'TH' ? item.title.th : item.title.en,
    items: item.items, // ไม่มีแปล skill แสดงว่ามันเหมือนกันอยู่แล้ว
  }))
})
</script>

<template>
  <v-app>
    <v-app-bar app color="white" flat class="minimal-appbar">
      <MenuViewVue />
    </v-app-bar>
    <v-main class="minimal-bg fade-in">
      <v-container fluid class="py-12">
        <!-- ROW แรก: ปุ่มเปลี่ยนภาษา อยู่ฝั่งขวาสุด -->
        <v-row>
          <v-col cols="12" class="d-flex justify-end">
            <v-btn class="lang-btn" @click="switchLanguage">
              {{ languageStore.currnetedLanguage }}
            </v-btn>
          </v-col>
        </v-row>

        <!-- overlay loading -->
        <v-overlay v-model="isLoading" class="d-flex align-center justify-center" absolute>
          <v-progress-circular indeterminate size="64" color="pink" />
        </v-overlay>

        <!-- ส่วนหัว -->
        <h2 class="minimal-title mb-10">
          <v-icon color="pink lighten-2" size="36" class="mr-2">mdi-heart</v-icon>
          {{ languageStore.currnetedLanguage === 'TH' ? 'ประวัติการศึกษา' : 'Education History' }}
        </h2>

        <!-- ROW แสดงการศึกษา -->
        <v-row justify="center" align="stretch" class="education-row">
          <v-col
            cols="12"
            md="8"
            lg="6"
            v-for="(item, index) in localizedEducationList"
            :key="index"
            class="d-flex justify-center"
          >
            <v-card class="minimal-card pa-6 mx-auto" elevation="2" rounded="xl">
              <v-row align="center" no-gutters>
                <v-col cols="12" md="4" class="d-flex justify-center align-center">
                  <div class="edu-avatar-wrapper">
                    <v-avatar size="110" class="minimal-avatar">
                      <img :src="item.image" alt="education image" />
                    </v-avatar>
                    <v-icon
                      class="edu-badge-minimal"
                      color="blue lighten-2"
                      size="28"
                      style="position: absolute; bottom: -8px; right: -8px"
                    >
                      mdi-school-outline
                    </v-icon>
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <div class="pl-md-6 pt-4 pt-md-0">
                    <h3 class="minimal-card-title mb-2">
                      {{ item.title }}
                    </h3>
                    <div class="mb-2 d-flex align-center flex-wrap">
                      <v-chip color="pink lighten-4" text-color="pink darken-2" class="mr-2" small>
                        {{ item.degree }}
                      </v-chip>
                      <span v-if="item.major" class="ml-1 minimal-major">
                        {{ languageStore.currnetedLanguage === 'TH' ? 'สาขา : ' : 'Major : ' }}
                        <strong>{{ item.major }}</strong>
                      </span>
                    </div>
                    <div class="mb-2 d-flex align-center">
                      <v-icon left small color="blue lighten-2" class="mr-1">mdi-calendar</v-icon>
                      <span>{{ item.year }}</span>
                    </div>
                    <div class="d-flex align-center">
                      <v-icon left small color="amber lighten-2" class="mr-1">mdi-star-face</v-icon>
                      GPA: <strong class="ml-1">{{ item.gpa }}</strong>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="my-12">
        <h2 class="minimal-title text-center mb-8">
          <v-icon color="blue lighten-2" size="32" class="mr-2">mdi-palette</v-icon>
          {{
            languageStore.currnetedLanguage === 'TH' ? 'ทักษะและความสามารถ' : 'Skills and Abilities'
          }}
        </h2>
        <v-row dense align="stretch">
          <v-col
            v-for="(category, index) in localizedSkills"
            :key="index"
            cols="12"
            md="6"
            lg="4"
            class="d-flex justify-center"
          >
            <v-card
              class="minimal-card skill-card-minimal skill-card-fixed h-100 d-flex flex-column justify-space-between"
              elevation="1"
              rounded="lg"
            >
              <h3 class="minimal-skill-title mb-4 text-center">
                {{ category.title }}
              </h3>
              <div class="d-flex flex-wrap justify-center gap-2 flex-grow-1 align-content-start">
                <v-chip
                  v-for="(skill, i) in category.items"
                  :key="i"
                  class="skill-chip-minimal ma-1"
                  color="blue lighten-5"
                  text-color="blue darken-2"
                  small
                >
                  {{ skill }}
                </v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="my-12 goal-section-minimal modern-goal-section">
        <div class="goal-header d-flex align-center mb-6 justify-center">
          <div class="goal-icon-bg mr-3">
            <v-icon size="36" color="pink lighten-2">mdi-bullseye-arrow</v-icon>
          </div>
          <h2 class="goal-title-minimal">
            {{ languageStore.currnetedLanguage === 'TH' ? 'เป้าหมายของผม' : 'My Goal' }}
          </h2>
        </div>

        <v-card class="goal-card-minimal modern-goal-card" flat>
          <v-card-text class="goal-text-minimal modern-goal-text">
            <span class="goal-highlight">
              {{
                languageStore.currnetedLanguage === 'TH'
                  ? 'ผมมีความมุ่งมั่นที่จะทำงานในตำแหน่ง'
                  : 'I am determined to work as a'
              }}
            </span>
            <strong>Backend Developer</strong>
            {{ languageStore.currnetedLanguage === 'TH' ? ' หรือ ' : ' or ' }}
            <strong>Frontend Developer</strong>
            <br />

            <span class="goal-highlight">
              {{
                languageStore.currnetedLanguage === 'TH'
                  ? 'เพราะผมสนใจทั้งด้านการพัฒนาโครงสร้างระบบและการออกแบบประสบการณ์ผู้ใช้ โดยเฉพาะในส่วนของ'
                  : 'I am passionate about both system architecture and user experience design, especially in the'
              }}
              <strong>Backend</strong>
            </span>

            <span class="goal-highlight">
              {{
                languageStore.currnetedLanguage === 'TH'
                  ? 'ผมมีความสนใจในกระบวนการเขียนโปรแกรมที่เกี่ยวข้องกับการออกแบบ API, การเชื่อมต่อกับฐานข้อมูล และการสร้างระบบที่มีประสิทธิภาพและปลอดภัย'
                  : 'I’m particularly interested in programming processes involving API design, database connectivity, and building efficient and secure systems.'
              }}
            </span>
            <br />

            <span class="goal-highlight">
              {{
                languageStore.currnetedLanguage === 'TH'
                  ? 'ผมเชื่อว่าความเข้าใจในทั้งสองฝั่งจะช่วยให้ผมสามารถพัฒนาระบบที่ตอบโจทย์ผู้ใช้งานได้อย่างรอบด้าน'
                  : 'I believe that understanding both sides allows me to build well-rounded solutions that meet user needs.'
              }}
            </span>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');

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

.modern-goal-section {
  background: linear-gradient(120deg, #e3f0ff 60%, #ffe3f6 100%);
  border-radius: 32px;
  box-shadow: 0 6px 32px 0 #e3f2fd99;
  padding: 48px 32px 40px 32px;
  max-width: 800px;
  margin: 0 auto 48px auto;
  position: relative;
  overflow: hidden;
}
.goal-header {
  position: relative;
  z-index: 2;
}
.goal-icon-bg {
  background: linear-gradient(135deg, #f8bbd0 60%, #e3f0ff 100%);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px #f8bbd055;
}
.goal-title-minimal {
  font-size: 1.7rem;
  font-weight: 700;
  color: #e75480;
  font-family: 'Quicksand', 'Prompt', 'Sarabun', sans-serif;
  letter-spacing: 1px;
}
.modern-goal-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  box-shadow: 0 2px 16px #b3e5fc33;
  border: 1.5px solid #f8bbd0;
  margin-top: 18px;
  padding: 0;
}
.modern-goal-text {
  font-size: 1.15rem;
  line-height: 2.1;
  color: #374151;
  font-family: 'Quicksand', 'Prompt', 'Sarabun', sans-serif;
  padding: 36px 32px 32px 32px;
  text-align: center;
  background: transparent;
  border-radius: 20px;
  position: relative;
  z-index: 2;
}
.goal-highlight {
  display: inline-block;
  background: linear-gradient(90deg, #e3f0ff 60%, #ffe3f6 100%);
  border-radius: 12px;
  padding: 2px 10px;
  margin: 0 0 6px 0;
  color: #2196f3;
  font-weight: 600;
  font-size: 1.08em;
}
@media (max-width: 600px) {
  .modern-goal-section {
    padding: 24px 6px 24px 6px;
  }
  .modern-goal-text {
    padding: 18px 6px 18px 6px;
    font-size: 1rem;
  }
  .goal-title-minimal {
    font-size: 1.2rem;
  }
  .goal-icon-bg {
    width: 40px;
    height: 40px;
  }
}

.skill-card-fixed {
  width: 100%;
  max-width: 370px;
  min-width: 270px;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}

.minimal-bg {
  /* พื้นหลังไล่เฉดสีฟ้าอ่อน ชมพูอ่อน และขาว */
  background: linear-gradient(135deg, #e3f0ff 0%, #ffe3f6 50%, #ffffff 100%);
  min-height: 100vh;
  font-family: 'Quicksand', 'Prompt', 'Sarabun', sans-serif;
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

.v-main {
  position: relative;
  z-index: 2;
}

.minimal-appbar {
  box-shadow: none;
  border-bottom: 1.5px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.95);
}

.minimal-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #e75480;
  letter-spacing: 1px;
  font-family: 'Quicksand', 'Prompt', 'Sarabun', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.education-row {
  gap: 24px 0;
}

.minimal-card {
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 4px 24px 0 #f3e8ee;
  border: 1.5px solid #f3e8ee;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}
.minimal-card:hover {
  box-shadow: 0 8px 32px 0 #f8bbd0;
  border-color: #f8bbd0;
}

.edu-avatar-wrapper {
  position: relative;
  display: inline-block;
}
.minimal-avatar {
  border: 3px solid #f8bbd0;
  background: #fff;
  box-shadow: 0 2px 12px #f8bbd055;
  padding: 4px;
}
.edu-badge-minimal {
  background: #fff;
  border-radius: 50%;
  border: 2px solid #b3e5fc;
  box-shadow: 0 0 6px #b3e5fc80;
}

.minimal-card-title {
  color: #374151;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Quicksand', 'Prompt', 'Sarabun', sans-serif;
}

.minimal-major {
  color: #7b809a;
  font-size: 1rem;
}

.skill-card-minimal {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 12px #e3f2fd;
  border: 1.5px solid #e3f2fd;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}
.skill-card-minimal:hover {
  box-shadow: 0 6px 24px #b3e5fc;
  border-color: #b3e5fc;
}
.minimal-skill-title {
  color: #2196f3;
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 1.1rem;
  font-family: 'Quicksand', 'Prompt', 'Sarabun', sans-serif;
}
.skill-chip-minimal {
  border-radius: 999px;
  font-weight: 500;
  font-size: 14px;
  background-color: #e3f2fd !important;
  color: #1976d2 !important;
  transition: all 0.2s;
  box-shadow: 0 0 4px #b3e5fc55;
}
.skill-chip-minimal:hover {
  background-color: #f8bbd0 !important;
  color: #e75480 !important;
}

.goal-section-minimal {
  background: #fff;
  border-radius: 20px;
  padding: 40px 24px;
  box-shadow: 0 2px 16px #f8bbd055;
  border: 1.5px solid #f8bbd0;
  max-width: 900px;
  margin: 0 auto;
}
.goal-title-minimal {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e75480;
  font-family: 'Quicksand', 'Prompt', 'Sarabun', sans-serif;
}
.goal-card-minimal {
  background: #fff;
  border: none;
  box-shadow: none;
  padding: 0;
}
.goal-text-minimal {
  font-size: 1.1rem;
  line-height: 1.9;
  color: #374151;
  text-align: justify;
  font-family: 'Quicksand', 'Prompt', 'Sarabun', sans-serif;
}
.goal-text-minimal strong {
  color: #e75480;
  font-weight: 700;
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
</style>
