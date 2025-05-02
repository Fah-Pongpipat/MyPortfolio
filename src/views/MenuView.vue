<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat class="navbar">
      <v-container class="menu-container">
        <!-- Logo -->
        <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>

        <!-- เมนูเรียงแนว Responsive -->
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
/* ✅ Container สำหรับเมนู */
.menu-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

/* ✅ เมนูแนวนอน (wrap เมื่อจอแคบ) */
.menu-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;
}

/* ✅ ปุ่มเมนู */
.menu-wrapper .v-btn {
  font-weight: bold;
  color: white;
  font-size: clamp(12px, 2.5vw, 16px);
  padding: 6px 10px;
  text-transform: none;
  white-space: nowrap;
}

.menu-wrapper .v-btn:hover {
  color: #ff66cc;
}

.menu-wrapper .v-icon {
  font-size: 18px;
  margin-right: 6px;
}

/* ✅ โลโก้ปรับขนาดได้ */
.v-toolbar-title {
  font-size: clamp(16px, 4vw, 22px);
  white-space: nowrap;
}

/* ✅ แสดงเมนูชิดกลางเมื่อจอแคบ */
@media (max-width: 600px) {
  .menu-container {
    justify-content: center;
    text-align: center;
  }

  .menu-wrapper {
    justify-content: center;
  }

  .v-toolbar-title {
    width: 100%;
    text-align: center;
    margin-bottom: 4px;
  }
}
</style>
