<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat class="navbar">
      <v-container class="menu-container">
        <!-- Logo -->
        <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>

        <!-- เมนูเรียงในแถวเดียว + scroll ได้ถ้าจอแคบ -->
        <div class="menu-wrapper">
          <v-btn text @click="$router.push('/about-me')">
            <v-icon left>mdi-account</v-icon> ABOUT ME
          </v-btn>
          <v-btn text @click="$router.push('/all-project')">
            <v-icon left>mdi-briefcase-variant</v-icon> PROJECTS
          </v-btn>
          <v-btn text @click="$router.push('/certificates')">
            <v-icon left>mdi-certificate</v-icon> CERTIFICATES
          </v-btn>
          <v-btn text @click="$router.push('/contact')">
            <v-icon left>mdi-email</v-icon> CONTACT
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
/* Container หลักของแถบเมนู */
.menu-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: nowrap;
  overflow-x: auto;
}

/* เมนูแนวนอน แบบ scroll ได้ */
.menu-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
  gap: 8px;
  flex: 1;
  justify-content: flex-end;
}

/* ปุ่มเมนู */
.menu-wrapper .v-btn {
  font-weight: bold;
  color: white;
  font-size: clamp(12px, 2.5vw, 16px);
  padding: 6px 12px;
  text-transform: none;
  flex-shrink: 0; /* ป้องกันหดปุ่ม */
  white-space: nowrap;
}

.menu-wrapper .v-btn:hover {
  color: #ff66cc;
}

.menu-wrapper .v-icon {
  font-size: 18px;
  margin-right: 6px;
}

/* ชื่อโลโก้ */
.v-toolbar-title {
  font-size: clamp(16px, 4vw, 22px);
  white-space: nowrap;
}
</style>
