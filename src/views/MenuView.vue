<script setup lang="ts"></script>

<template>
  <v-app>
    <!-- Responsive Navbar -->
    <v-app-bar app color="black" dark flat class="navbar">
      <v-container class="d-flex align-center justify-space-between pa-0">
        <!-- Logo / Title -->
        <v-toolbar-title class="font-weight-bold">My Portfolio</v-toolbar-title>

        <!-- Desktop Menu -->
        <div class="d-none d-md-flex">
          <v-btn text @click="$router.push('/about-me')">
            <v-icon left class="mr-2">mdi-account</v-icon>
            About Me
          </v-btn>
          <v-btn text @click="$router.push('/all-project')">
            <v-icon left class="mr-2">mdi-briefcase-variant</v-icon>
            Projects
          </v-btn>
          <v-btn text @click="$router.push('/certificates')">
            <v-icon left class="mr-2">mdi-certificate</v-icon>
            Certificates
          </v-btn>
          <v-btn text @click="$router.push('/contact')">
            <v-icon left class="mr-2">mdi-email</v-icon>
            Contact
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
}

/* ปุ่มใน Navbar */
.v-btn {
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: 0.2s ease;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
}

.v-btn:hover {
  color: #ff66cc;
}

/* 🔽 Mobile */
@media (max-width: 600px) {
  .v-toolbar-title {
    font-size: 18px;
  }

  .v-btn {
    font-size: 14px;
    padding: 6px 10px;
  }

  .v-icon {
    font-size: 18px !important;
    margin-right: 4px !important;
  }

  .navbar {
    padding-left: 8px;
    padding-right: 8px;
  }
}

/* 🔼 Desktop */
@media (min-width: 960px) {
  .v-toolbar-title {
    font-size: 24px;
  }

  .navbar {
    padding-left: 32px;
    padding-right: 32px;
  }

  .v-btn {
    font-size: 18px;
    padding: 10px 20px;
  }
}
</style>
