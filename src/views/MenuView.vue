<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat class="navbar">
      <v-container class="d-flex align-center justify-space-between flex-wrap pa-0">
        <!-- Logo -->
        <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>

        <!-- เมนูแนวนอน -->
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
.navbar {
  box-shadow: 0 2px 10px rgba(255, 0, 255, 0.2);
  padding: 0 12px;
}

/* Wrapper สำหรับเมนู */
.menu-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  max-width: 100%;
}

/* ปุ่มเมนู */
.menu-wrapper .v-btn {
  font-weight: bold;
  font-size: 16px;
  color: white;
  padding: 6px 10px;
  text-transform: none;
  white-space: nowrap;
  flex: 1 0 auto;
}

.menu-wrapper .v-btn:hover {
  color: #ff66cc;
}

.menu-wrapper .v-icon {
  font-size: 18px;
  margin-right: 6px;
}

/* === Responsive === */

/* Desktop ใหญ่ */
@media (min-width: 1200px) {
  .v-toolbar-title {
    font-size: 24px;
  }

  .menu-wrapper {
    justify-content: flex-end;
  }

  .menu-wrapper .v-btn {
    font-size: 18px;
    padding: 8px 16px;
  }
}

/* Tablet */
@media (max-width: 960px) {
  .v-toolbar-title {
    font-size: 20px;
  }

  .menu-wrapper {
    justify-content: center;
  }

  .menu-wrapper .v-btn {
    font-size: 15px;
    padding: 6px 8px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .v-toolbar-title {
    font-size: 18px;
    width: 100%;
    text-align: center;
    margin-bottom: 8px;
  }

  .menu-wrapper {
    justify-content: center;
    gap: 6px;
    flex-wrap: wrap;
  }

  .menu-wrapper .v-btn {
    font-size: 13px;
    padding: 5px 6px;
  }
}
</style>
