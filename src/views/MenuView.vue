<script setup lang="ts">
import { ref } from 'vue'
const drawer = ref(false)
</script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat>
      <!-- ปุ่มเมนูแสดงเฉพาะมือถือ -->
      <v-app-bar-nav-icon class="d-sm-none" @click="drawer = !drawer" />

      <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>

      <v-spacer class="d-none d-sm-flex" />

      <!-- เมนูสำหรับหน้าจอใหญ่ -->
      <div class="d-none d-sm-flex">
        <v-btn text @click="$router.push('/about-me')">
          <v-icon left class="mr-2">mdi-account</v-icon>
          About Me
        </v-btn>
        <v-btn text @click="$router.push('/all-project')">
          <v-icon left class="mr-2">mdi-briefcase-variant</v-icon>
          Projects
        </v-btn>
        <v-btn text @click="$router.push('/certificates')">
          <v-icon left class="mr-2">mdi-certificate</v-icon>
          Certificates
        </v-btn>
        <v-btn text @click="$router.push('/contact')">
          <v-icon left class="mr-2">mdi-email</v-icon>
          Contact
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Drawer สำหรับมือถือ -->
    <v-navigation-drawer v-model="drawer" temporary class="d-sm-none">
      <v-list nav>
        <v-list-item @click="$router.push('/about-me')">
          <v-icon left class="mr-2">mdi-account</v-icon> About Me
        </v-list-item>
        <v-list-item @click="$router.push('/all-project')">
          <v-icon left class="mr-2">mdi-briefcase-variant</v-icon> Projects
        </v-list-item>
        <v-list-item @click="$router.push('/certificates')">
          <v-icon left class="mr-2">mdi-certificate</v-icon> Certificates
        </v-list-item>
        <v-list-item @click="$router.push('/contact')">
          <v-icon left class="mr-2">mdi-email</v-icon> Contact
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.v-app-bar {
  box-shadow: 0 2px 10px rgba(255, 0, 255, 0.2);
  padding-left: 16px;
  padding-right: 16px;
}

.v-btn {
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: 0.2s ease;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
}

.v-btn:hover {
  color: #ff66cc;
}

.v-list-item {
  font-weight: 500;
  padding: 12px;
}
</style>
