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
/* โครงหลักหน้า intro */
.intro-section {
  background-color: #000;
  color: white;
  font-family: 'Prompt', sans-serif;
  padding: 24px 16px;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
}

/* เนื้อหาทั้งหมดข้างใน */
.slide-down-wrapper {
  animation: slideDown 1s ease-out;
  width: 100%;
  max-width: 700px;
  padding: 0 16px;
  box-sizing: border-box;
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
  font-size: clamp(22px, 5vw, 36px);
  color: #fff;
  text-shadow: 0 0 10px rgba(160, 32, 240, 0.3);
  margin-bottom: 16px;
}

/* คำอธิบาย */
.intro-desc {
  font-size: clamp(14px, 4vw, 18px);
  font-weight: 300;
  line-height: 1.8;
  color: #dddddd;
  margin: 0 auto 32px;
  max-width: 90%;
}

/* ปุ่ม */
.fancy-button {
  padding: 12px 28px;
  font-size: clamp(14px, 3.5vw, 16px);
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

/* กรอบเรืองแสงรูปภาพ */
.avatar-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto 24px;
  width: 100%;
  max-width: 460px;
}

.avatar-wrapper::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: radial-gradient(
    circle,
    rgba(255, 102, 255, 0.4),
    rgba(136, 84, 208, 0.3),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 0;
  filter: blur(4px);
}

/* ตัว Avatar */
.v-avatar {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 460px;
  aspect-ratio: 1 / 1;
  box-shadow:
    0 0 25px rgba(255, 102, 255, 0.4),
    0 0 45px rgba(136, 84, 208, 0.3);
}
</style>
