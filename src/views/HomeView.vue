<script setup lang="ts"></script>

<template>
  <v-container
    class="fill-height d-flex flex-column justify-center align-center text-center intro-section"
  >
    <!-- ครอบทั้งหมดด้วย slide down wrapper -->
    <div class="slide-down-wrapper">
      <!-- รูปภาพพร้อมแสงพื้นหลัง -->
      <div class="avatar-wrapper">
        <v-avatar size="480" class="mb-4">
          <img src="@/images/Cool-Fah.jpg" alt="My Profile Picture" />
        </v-avatar>
      </div>

      <!-- คำกล่าวทักทาย -->
      <div class="intro-text">
        <h1 class="text-h4 font-weight-bold mb-2">สวัสดีครับ ผมชื่อ Fah 555</h1>
        <p class="text-subtitle-1 mb-4">Welcome to My Portfolio</p>
      </div>

      <!-- ปุ่มไปหน้าถัดไป -->
      <v-btn class="glow-button" color="primary" large @click="$router.push('/about-me')">
        ดูเพิ่มเติม
      </v-btn>
    </div>
  </v-container>
</template>

<style scoped>
/* พื้นหลังดำทั้งหน้า */
.intro-section {
  background-color: #000;
  color: white;
  overflow: hidden;
}

/* แอนิเมชัน slide-down */
.slide-down-wrapper {
  animation: slideDown 1s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* เอฟเฟกต์แสงอวกาศหลังรูป */
.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-wrapper::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 460px;
  height: 460px;
  background: radial-gradient(
    circle,
    rgba(255, 102, 255, 0.4),
    rgba(136, 84, 208, 0.3),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 0;
  filter: blur(2px);
}

.v-avatar {
  position: relative;
  z-index: 1;
  box-shadow:
    0 0 25px rgba(255, 102, 255, 0.4),
    0 0 45px rgba(136, 84, 208, 0.3);
}

/* ปุ่มแบบมีแสงและมิติ */
.glow-button {
  position: relative;
  z-index: 1;
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.2),
    0 0 15px rgba(255, 105, 180, 0.5),
    0 0 25px rgba(255, 105, 180, 0.4);
  transition: all 0.3s ease;
  border-radius: 12px;
}

.glow-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.3),
    0 0 25px rgba(255, 105, 180, 0.7),
    0 0 35px rgba(255, 105, 180, 0.6);
}
</style>
