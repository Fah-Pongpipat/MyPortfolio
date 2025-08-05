<script setup lang="ts"></script>

<template>
  <v-container
    fluid
    class="fill-height d-flex flex-column justify-center align-center text-center intro-section minimal-bg"
  >
    <div class="slide-down-wrapper">
      <!-- รูปภาพ -->
      <div class="avatar-wrapper">
        <v-avatar size="350" class="mb-4">
          <img src="@/images/Cool-Fah.jpg" alt="My Profile Picture" />
        </v-avatar>
      </div>

      <!-- ข้อความทักทาย -->
      <div class="intro-text">
        <h1 class="intro-title-hello mb-2">สวัสดีครับ 👋 ยินดีต้อนรับเข้าสู่เว็บไซต์เล็กๆ ของผม</h1>
        <h2 class="intro-title mb-2">ผมชื่อ พงษ์พิพัฒน์ เสี่ยงสาย</h2>

        <p class="intro-desc mb-4">
          ที่นี่คือพื้นที่เล็กๆ ที่ผมตั้งใจสร้างขึ้น
          เพื่อเล่าเรื่องราวการเดินทางในสายงานพัฒนาเว็บไซต์ของผมครับ ไม่ว่าจะเป็นโปรเจกต์ที่เคยทำ
          ความรู้ที่ได้เรียนรู้ระหว่างทาง หรือไอเดียที่กำลังทดลองอยู่
        </p>

        <!-- <p class="intro-desc mb-4">
          ลองนึกว่าคุณกำลังเดินเข้ามาใน workspace ของผม แล้วผมขอพาคุณเดินชมสิ่งต่างๆ
          ที่ผมอยากเล่าให้ฟัง 🛠️✨
        </p> -->

        <p class="intro-desc mb-6">
          ถ้าพร้อมแล้ว…<br />
          เชิญคลิกที่ปุ่ม <strong>ดูเพิ่มเติม</strong>, เพื่อจะได้รู้จัก
          <strong>ตัวผมเพิ่มเติม</strong> หรือจะแวะมาทักทายกันก็ยินดีเสมอนะครับ 🙌
        </p>
      </div>

      <!-- ปุ่มต่อไป -->
      <div class="justify-center d-flex">
        <v-btn class="cafe-button centered-btn" @click="$router.push('/about-me')">
          ดูเพิ่มเติม
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700&family=Itim&display=swap');

/* พื้นหลังแนวมินิมอล ฟ้าอ่อน ชมพูอ่อน ขาว */
.minimal-bg {
  background: linear-gradient(135deg, #e3f0ff 0%, #ffe3f6 50%, #ffffff 100%);
  min-height: 100dvh;
  position: relative;
  overflow: hidden;
  z-index: 0;
}

/* วงกลมตกแต่งพื้นหลัง */
.minimal-bg::before,
.minimal-bg::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  opacity: 0.35;
  pointer-events: none;
}
.minimal-bg::before {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, #b3e5fc 60%, #e3f0ff 100%);
  top: -120px;
  left: -120px;
}
.minimal-bg::after {
  width: 340px;
  height: 340px;
  background: radial-gradient(circle, #f8bbd0 60%, #ffe3f6 100%);
  bottom: -100px;
  right: -100px;
}

/* โครงหลักหน้า intro */
.intro-section {
  font-family: 'Itim', 'Kanit', cursive, sans-serif;
  padding: 24px 16px;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  z-index: 2;
}

/* เนื้อหาทั้งหมดข้างใน */
.slide-down-wrapper {
  animation: slideDown 1s ease-out;
  width: 100%;
  max-width: 700px;
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
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
.intro-title-hello {
  font-family: 'Itim', 'Kanit', cursive, sans-serif;
  font-weight: 700;
  font-size: clamp(26px, 6vw, 30px);
  color: #4e2e0e;
  text-shadow:
    0 2px 12px #fff8,
    0 0 2px #ffe3f6;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.intro-title {
  font-family: 'Itim', 'Kanit', cursive, sans-serif;
  font-weight: 700;
  font-size: clamp(26px, 6vw, 28px);
  color: #4e2e0e;
  text-shadow:
    0 2px 12px #fff8,
    0 0 2px #ffe3f6;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

/* คำอธิบาย */
.intro-desc {
  font-family: 'Itim', 'Kanit', cursive, sans-serif;
  font-size: clamp(17px, 4vw, 22px);
  font-weight: 400;
  line-height: 1.9;
  color: #5d4037;
  margin: 0 auto 32px;
  max-width: 90%;
  text-shadow:
    0 1px 8px #fff7,
    0 0 2px #e3f0ff;
}

/* ปุ่มใหม่ */
.cafe-button {
  padding: 12px 36px;
  font-size: 20px;
  font-family: 'Itim', 'Kanit', cursive, sans-serif;
  font-weight: 700;
  color: #5b3e65; /* ม่วงเข้มนิดๆ อ่านง่าย */
  background: linear-gradient(90deg, #fbeaff 0%, #e0f7fa 100%);
  border-radius: 32px;
  text-transform: none;
  box-shadow:
    0 4px 16px rgba(255, 192, 203, 0.3),
    0 2px 8px rgba(173, 216, 230, 0.2);
  transition: all 0.25s ease;
  letter-spacing: 1px;
  border: 2px solid #ee2f72; /* ขอบสีชมพูอ่อน */
}

/* จัดตำแหน่งปุ่มให้ตรงกลาง */
.centered-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 50px;
  background-color: #e29191;
}

.cafe-button:hover {
  background: linear-gradient(90deg, #ffd6ec 0%, #d6f5ff 100%);
  color: #3a2e4f;
  transform: translateY(-2px) scale(1.05);
  box-shadow:
    0 8px 28px rgba(255, 182, 193, 0.45),
    0 4px 12px rgba(173, 216, 230, 0.3);
}

/* กรอบเรืองแสงรูปภาพ */
.avatar-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto 24px;
  width: 100%;
  max-width: 370px;
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
    rgba(255, 224, 178, 0.18),
    rgba(255, 152, 0, 0.1),
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
  max-width: 350px;
  aspect-ratio: 1 / 1;
  box-shadow:
    0 0 25px rgba(255, 224, 178, 0.18),
    0 0 45px rgba(255, 152, 0, 0.12);
}
</style>
