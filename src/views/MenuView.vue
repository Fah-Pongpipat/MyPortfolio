<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat>
      <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>

      <v-spacer />

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
      <!-- <v-btn text @click="$router.push('/blog')">
        <v-icon left class="mr-2">mdi-notebook-edit</v-icon>
        Blog
      </v-btn> -->
      <v-btn text @click="$router.push('/contact')">
        <v-icon left class="mr-2">mdi-email</v-icon>
        Contact
      </v-btn>
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
  color: white;
}

.v-btn:hover {
  color: #ff66cc;
}
</style>
