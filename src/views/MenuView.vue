<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat class="navbar">
      <v-container class="d-flex align-center justify-space-between pa-2 flex-wrap">
        <!-- Logo -->
        <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>

        <!-- เมนูแนวนอน -->
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
.navbar {
  box-shadow: 0 2px 10px rgba(255, 0, 255, 0.2);
  padding-left: 12px;
  padding-right: 12px;
}

/* ปุ่มในเมนู */
.menu-wrapper .v-btn {
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: 0.2s ease;
  color: white;
  font-size: 16px;
  padding: 8px 12px;
}

.menu-wrapper .v-btn:hover {
  color: #ff66cc;
}

/* Responsive ปรับขนาดปุ่มและจัดเรียง */
@media (max-width: 1024px) {
  .v-toolbar-title {
    font-size: 20px;
  }

  .menu-wrapper {
    gap: 6px;
    justify-content: flex-end;
  }

  .menu-wrapper .v-btn {
    font-size: 14px;
    padding: 6px 10px;
  }

  .menu-wrapper .v-icon {
    font-size: 18px;
    margin-right: 4px;
  }
}

@media (max-width: 600px) {
  .v-toolbar-title {
    font-size: 16px;
  }

  .menu-wrapper {
    gap: 4px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .menu-wrapper .v-btn {
    font-size: 13px;
    padding: 4px 8px;
  }
}
</style>
