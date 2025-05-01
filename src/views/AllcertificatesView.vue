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
    title: 'Basic SQL',
    image: CerSQl,
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

    <v-main class="bg-black py-12">
      <div class="fade-in-wrapper">
        <v-container>
          <h2 class="text-center text-white mb-8 display-1 font-weight-bold">Certificates</h2>
          <v-row dense>
            <v-col v-for="(cert, index) in certificates" :key="index" cols="12" sm="6" md="4">
              <v-card class="mx-auto" color="#1e1e1e" dark elevation="5" @click="openDialog(cert)">
                <v-img :src="cert.image" height="200px" cover></v-img>
                <v-card-title>{{ cert.title }}</v-card-title>
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
.career-goal {
  font-size: 30px;
  line-height: 1.8;
  color: #ffffff;
  font-weight: 400;
  text-align: justify;
  max-width: 1800px;
  margin: 0 auto;
}

.v-img {
  cursor: pointer;
}
.v-card-text {
  text-align: center;
  color: #ccc;
}

/* เอฟเฟกต์ fade-in */
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
