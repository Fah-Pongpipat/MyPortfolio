<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="menu-fade-wrapper">
    <h1 class="menu-title">เลือกสิ่งที่คุณสนใจ</h1>

    <v-container class="menu-section fill-height py-16" fluid>
      <v-row justify="center" align="center" class="menu-grid" dense>
        <v-col cols="12" sm="6" md="3" class="d-flex">
          <v-card class="menu-card" @click="goTo('/education')" elevation="10">
            <h3>Education</h3>
            <v-icon size="50">mdi-school</v-icon>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="d-flex">
          <v-card class="menu-card" @click="goTo('/all-project')" elevation="10">
            <h3>Projects</h3>
            <v-icon size="50">mdi-folder-multiple</v-icon>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="d-flex">
          <v-card class="menu-card" @click="goTo('/certificates')" elevation="10">
            <h3>Certificates</h3>
            <v-icon size="50">mdi-certificate</v-icon>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="d-flex">
          <v-card class="menu-card" @click="goTo('/contact')" elevation="10">
            <h3>Contact</h3>
            <v-icon size="50">mdi-email</v-icon>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.menu-fade-wrapper {
  background-color: #000;
  color: white;
  animation: fadeIn 1.2s ease-out;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.menu-title {
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 40px;
}

/* เมนูการ์ด */
.menu-card {
  background: linear-gradient(145deg, #1c1c1c, #2d2d2d);
  color: white;
  padding: 30px 20px;
  border-radius: 16px;
  transition: 0.3s ease;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.menu-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(255, 0, 255, 0.3);
}

.menu-card h3 {
  margin-bottom: 12px;
  font-weight: 600;
}

/* แอนิเมชันเฟดเข้า */
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
