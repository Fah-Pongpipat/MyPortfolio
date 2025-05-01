<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat>
      <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>

      <v-spacer />

      <v-btn text @click="$router.push('/about-me')">About Me</v-btn>
      <v-btn text @click="$router.push('/all-project')">Projects</v-btn>
      <v-btn text @click="$router.push('/certificates')">Certificates</v-btn>
      <v-btn text @click="$router.push('/blog')">Blog</v-btn>
      <v-btn text @click="$router.push('/contact')">Contact</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.v-app-bar {
  box-shadow: 0 2px 10px rgba(255, 0, 255, 0.2);
}

.v-btn {
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: 0.2s ease;
}

.v-btn:hover {
  color: #ff66cc;
}
</style>
