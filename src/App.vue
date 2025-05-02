<script setup lang="ts"></script>

<template>
  <v-app class="auto-screen">
    <v-main class="no-scroll">
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
/* ให้แสดงผลพอดีจอทั้งหมด */
.auto-screen {
  background-color: #000 !important;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ป้องกันไม่ให้เกิด scroll บนหน้าแรก */
.no-scroll {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ให้ router-view เต็มจอด้วย */
:deep(.v-container),
:deep(.v-main__wrap),
:deep(#app > div) {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
