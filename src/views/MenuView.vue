<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat class="navbar">
      <v-container class="d-flex align-center justify-space-between pa-0 flex-wrap">
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
  padding-left: 16px;
  padding-right: 16px;
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
  padding: 6px 10px;
  text-transform: none;
  white-space: nowrap; /* ป้องกันตัดบรรทัดในปุ่ม */
}

.menu-wrapper .v-btn:hover {
  color: #ff66cc;
}

.menu-wrapper .v-icon {
  font-size: 18px;
  margin-right: 6px;
}

/* Desktop ใหญ่ */
@media (min-width: 1200px) {
  .menu-wrapper .v-btn {
    font-size: 18px;
    padding: 10px 16px;
  }
}

/* Tablet */
@media (max-width: 960px) {
  .v-toolbar-title {
    font-size: 20px;
  }

  .menu-wrapper {
    justify-content: center;
    gap: 6px;
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
  }

  .menu-wrapper {
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px;
  }

  .menu-wrapper .v-btn {
    font-size: 13px;
    padding: 4px 6px;
  }
}
</style>
