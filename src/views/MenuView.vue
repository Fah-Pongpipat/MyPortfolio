<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat class="navbar">
      <v-container class="d-flex align-center justify-space-between pa-0 flex-wrap">
        <!-- Logo -->
        <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>

        <!-- Menu (แสดงตลอด ไม่ซ่อนในมือถือ) -->
        <div class="menu-wrapper d-flex flex-wrap justify-end">
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
/* พื้นหลัง bar + เงา */
.navbar {
  background-color: black;
  box-shadow: 0 2px 10px rgba(255, 0, 255, 0.2);
  padding: 0 12px;
}

/* ปุ่มเมนู */
.menu-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

.menu-wrapper .v-btn {
  font-weight: bold;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
}

.menu-wrapper .v-btn:hover {
  color: #ff66cc;
}

/* ไอคอนในปุ่ม */
.menu-wrapper .v-icon {
  margin-right: 6px;
}

/* ขนาดจอ: Tablet */
@media (max-width: 960px) {
  .v-toolbar-title {
    font-size: 20px;
  }

  .menu-wrapper .v-btn {
    font-size: 14px;
    padding: 6px 12px;
  }

  .menu-wrapper .v-icon {
    font-size: 18px;
    margin-right: 4px;
  }
}

/* ขนาดจอ: มือถือ */
@media (max-width: 600px) {
  .v-toolbar-title {
    font-size: 16px;
  }

  .menu-wrapper {
    justify-content: center;
    gap: 4px;
    padding-top: 8px;
    flex-wrap: wrap;
  }

  .menu-wrapper .v-btn {
    font-size: 13px;
    padding: 4px 8px;
  }

  .menu-wrapper .v-icon {
    font-size: 16px;
  }
}

/* ขนาดจอ: Desktop ใหญ่ */
@media (min-width: 1200px) {
  .v-toolbar-title {
    font-size: 24px;
  }

  .menu-wrapper .v-btn {
    font-size: 18px;
    padding: 10px 20px;
  }
}
</style>
