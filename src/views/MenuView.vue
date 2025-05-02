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
  padding: 0 16px;
}

.menu-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
}

.menu-wrapper .v-btn {
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: 0.2s ease;
  color: white;
  font-size: 16px;
  white-space: nowrap;
  padding: 6px 12px;
}

.menu-wrapper .v-btn:hover {
  color: #ff66cc;
}

.v-toolbar-title {
  font-size: 20px;
  white-space: nowrap;
  padding-right: 16px;
}

@media (max-width: 768px) {
  .v-toolbar-title {
    font-size: 18px;
  }

  .menu-wrapper .v-btn {
    font-size: 14px;
    padding: 4px 8px;
  }
}

@media (max-width: 480px) {
  .v-toolbar-title {
    font-size: 16px;
  }

  .menu-wrapper .v-btn {
    font-size: 13px;
    padding: 3px 6px;
  }
}

@media (min-width: 1200px) {
  .v-toolbar-title {
    font-size: 24px;
  }

  .menu-wrapper .v-btn {
    font-size: 18px;
    padding: 8px 16px;
  }
}
</style>
