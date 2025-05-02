<script setup lang="ts"></script>

<template>
  <v-container
    class="fill-height d-flex flex-column justify-center align-center text-center intro-section"
  >
    <div class="slide-down-wrapper">
      <!-- รูปภาพ -->
      <div class="avatar-wrapper">
        <v-avatar size="400" class="mb-4">
          <img src="@/images/Cool-Fah.jpg" alt="My Profile Picture" />
        </v-avatar>
      </div>

      <!-- ข้อความทักทาย -->
      <div class="intro-text">
        <h1 class="intro-title mb-2">สวัสดีครับ ผมชื่อ Pongpipat Siangsai</h1>
        <p class="intro-desc mb-6">
          ยินดีต้อนรับเข้าสู่เว็บไซต์ผลงานของผม<br />
          ที่นี่คุณจะได้พบกับประสบการณ์ การเรียนรู้ และโปรเจกต์ที่ผมได้ลงมือพัฒนาด้วยความตั้งใจ
        </p>
      </div>

      <!-- ปุ่มต่อ -->
      <v-btn class="fancy-button" @click="$router.push('/about-me')">ดูเพิ่มเติม</v-btn>
    </div>
  </v-container>
</template>

<style scoped>
/* พื้นหลัง + ฟอนต์ */
.intro-section {
  background-color: #000;
  color: white;
  font-family: 'Prompt', sans-serif;
  padding: 24px 16px;
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* สไลด์เข้า */
.slide-down-wrapper {
  animation: slideDown 1s ease-out;
  max-width: 100%;
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

/* หัวข้อ */
.intro-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 34px;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(160, 32, 240, 0.3);
  margin-bottom: 16px;
}

/* คำอธิบาย */
.intro-desc {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.8;
  color: #dddddd;
  max-width: 90%;
  margin: 0 auto 32px;
}

/* ปุ่ม */
.fancy-button {
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: white;
  background: linear-gradient(135deg, #00f0ff, #a020f0);
  border-radius: 28px;
  text-transform: none;
  box-shadow:
    0 0 10px #00f0ff,
    0 0 20px #a020f0;
  transition: all 0.3s ease-in-out;
}

.fancy-button:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow:
    0 0 15px #00f0ff,
    0 0 30px #a020f0,
    0 0 40px rgba(160, 32, 240, 0.5);
}

/* Avatar glow */
.avatar-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
}

.avatar-wrapper::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 102, 255, 0.4),
    rgba(136, 84, 208, 0.3),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 0;
  filter: blur(3px);
}

.v-avatar {
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  max-width: 460px;
  box-shadow:
    0 0 25px rgba(255, 102, 255, 0.4),
    0 0 45px rgba(136, 84, 208, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .intro-title {
    font-size: 26px;
  }

  .intro-desc {
    font-size: 15px;
  }

  .fancy-button {
    font-size: 15px;
    padding: 10px 24px;
  }
}

@media (max-width: 480px) {
  .intro-title {
    font-size: 22px;
  }

  .intro-desc {
    font-size: 14px;
    line-height: 1.6;
  }

  .fancy-button {
    font-size: 14px;
    padding: 10px 20px;
  }
}
</style>
