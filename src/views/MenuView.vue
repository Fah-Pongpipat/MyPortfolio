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
/* ===== 💼 Navbar Container ===== */
.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 0 12px;
}

/* ===== 🧭 Menu Wrapper (scrollable if needed) ===== */
.menu-wrapper {
  flex-grow: 1;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
}
.menu-wrapper::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

/* ===== 🧨 Menu Items (v-btn) ===== */
.menu-scroll {
  display: flex;
  flex-direction: row;
  gap: clamp(8px, 2vw, 16px);
  white-space: nowrap;
}

.menu-scroll .v-btn {
  font-weight: 600;
  color: #ffffff;
  font-size: clamp(13px, 2vw, 16px);
  padding: clamp(6px, 1.5vh, 10px) clamp(10px, 2vw, 16px);
  text-transform: none;
  flex-shrink: 0;
  transition: color 0.2s ease;
}

.menu-scroll .v-btn:hover {
  color: #ff66cc;
}

/* ===== 🎯 Icons in Menu ===== */
.menu-scroll .v-icon {
  font-size: clamp(16px, 2.2vw, 20px);
  margin-right: 6px;
}

/* ===== 🖋️ Logo Title ===== */
.v-toolbar-title {
  font-size: clamp(18px, 4vw, 26px);
  font-weight: bold;
  color: #ffffff;
  white-space: nowrap;
  transition: font-size 0.3s ease;
}

/* ===== 📱 Responsive Breakpoints (optional) ===== */
@media (max-width: 600px) {
  .v-toolbar-title {
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
