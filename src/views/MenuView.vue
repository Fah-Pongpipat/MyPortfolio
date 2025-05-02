<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat class="navbar">
      <v-container class="menu-container">
        <!-- Logo -->
        <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>

        <!-- เมนู -->
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
  padding-left: 16px;
  padding-right: 16px;
}

/* ✅ ตัวห่อเมนูทั้งหมด + logo */
.menu-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

/* ✅ เมนูยืดได้และห่อ */
.menu-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;
  max-width: 100%;
}

/* ปุ่มเมนู */
.menu-wrapper .v-btn {
  font-weight: bold;
  color: white;
  font-size: 15px;
  padding: 6px 10px;
  text-transform: none;
  white-space: nowrap;
  transition: 0.3s;
}

.menu-wrapper .v-btn:hover {
  color: #ff66cc;
}

.menu-wrapper .v-icon {
  font-size: 18px;
  margin-right: 6px;
}

/* Title responsive */
@media (max-width: 600px) {
  .v-toolbar-title {
    font-size: 16px;
  }

  .menu-wrapper .v-btn {
    font-size: 13px;
    padding: 4px 8px;
  }
}
</style>
