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
/* แถบ Navbar */
.v-app-bar {
  box-shadow: 0 2px 10px rgba(255, 0, 255, 0.2);
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* ชื่อเว็บ */
.v-toolbar-title {
  font-size: clamp(18px, 3vw, 26px);
  font-weight: bold;
  white-space: nowrap;
}

/* ปุ่มเมนู */
.v-btn {
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: 0.2s ease;
  color: white;
  font-size: clamp(14px, 2.5vw, 18px);
  padding: 6px 12px;
  text-transform: none;
  min-width: auto;
}

/* ไอคอนซ้ายของปุ่ม */
.v-btn .v-icon {
  font-size: clamp(16px, 2.5vw, 20px);
  margin-right: 6px;
}

/* Hover effect */
.v-btn:hover {
  color: #ff66cc;
}

/* ปรับขนาดพิเศษบนมือถือ */
@media (max-width: 600px) {
  .v-app-bar {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 12px;
  }

  .v-btn {
    width: 100%;
    justify-content: flex-start;
    padding-left: 0;
  }
}
</style>
