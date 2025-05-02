<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat class="navbar">
      <v-container class="menu-container">
        <!-- Logo -->
        <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>

        <!-- แถบเมนูแนวนอนแบบ scroll ได้ถ้าจอแคบ -->
        <div class="menu-wrapper">
          <div class="menu-scroll">
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
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
/* ✅ Container สำหรับแถบเมนู */
.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 0 8px;
}

/* ✅ Wrapper ครอบเมนู (บังคับความกว้าง และ scroll แนวนอนถ้าจอแคบ) */
.menu-wrapper {
  flex-grow: 1;
  overflow-x: auto;
}

/* ✅ Scroll เมนู */
.menu-scroll {
  display: flex;
  flex-direction: row;
  gap: 12px;
  white-space: nowrap;
}

/* ✅ ปุ่มเมนู */
.menu-scroll .v-btn {
  font-weight: bold;
  color: white;
  font-size: clamp(13px, 2.5vw, 16px);
  padding: 6px 10px;
  text-transform: none;
  flex-shrink: 0;
}

.menu-scroll .v-btn:hover {
  color: #ff66cc;
}

.menu-scroll .v-icon {
  font-size: 18px;
  margin-right: 4px;
}

/* ✅ ชื่อโลโก้ */
.v-toolbar-title {
  font-size: clamp(16px, 4vw, 22px);
  white-space: nowrap;
}
</style>
