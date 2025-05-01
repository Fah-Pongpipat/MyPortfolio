<script setup lang="ts">
import MenuViewVue from './MenuView.vue'
</script>

<template>
  <v-app>
    <v-app-bar app color="black" dark flat>
      <MenuViewVue />
    </v-app-bar>

    <v-main class="bg-contact">
      <v-container class="fade-in py-16 text-center">
        <!-- ส่วนหัวต้อนรับ -->
        <h2 class="font-weight-bold text-h4 mb-2 text-white">ยินดีที่ได้รู้จักครับ 👋</h2>
        <p class="text-subtitle-1 mb-12 text-white">
          หากคุณสนใจร่วมงาน หรือต้องการพูดคุยเกี่ยวกับเทคโนโลยี<br />
          สามารถติดต่อผ่านช่องทางด้านล่างได้เลยครับ 🙏
        </p>

        <!-- กล่องข้อมูลการติดต่อ -->
        <v-card class="mx-auto pa-8 contact-card" max-width="500" flat>
          <div class="text-h5 font-weight-bold mb-2">Your Name</div>
          <div class="text-subtitle-2 mb-6">Fullstack Developer</div>

          <div class="mb-4 text-left d-flex align-center">
            <img src="../images/telephone.png" alt="phone" class="icon" />
            <div class="ml-4">
              <div class="font-weight-medium">Phone</div>
              <div class="text-grey-lighten-1">098-993-5941</div>
            </div>
          </div>

          <div class="mb-4 text-left d-flex align-center">
            <img src="../images/email.png" alt="email" class="icon" />
            <div class="ml-4">
              <div class="font-weight-medium">Email</div>
              <div class="text-grey-lighten-1">pongpipat.workchat@hotmail.com</div>
            </div>
          </div>

          <!-- <div class="mb-4 text-left d-flex align-center">
            <img src="../images/line.png" alt="line" class="icon" />
            <div class="ml-4">
              <div class="font-weight-medium">Line</div>
              <div class="text-grey-lighten-1">https://line.me/ti/p/yourline</div>
            </div>
          </div>

          <div class="mb-4 text-left d-flex align-center">
            <img src="../images/github-sign.png" alt="github" class="icon" />
            <div class="ml-4">
              <div class="font-weight-medium">GitHub</div>
              <div class="text-grey-lighten-1">https://github.com/yourusername</div>
            </div>
          </div> -->

          <!-- Social icons clickable -->
          <div class="d-flex justify-center mt-8">
            <a href="https://web.facebook.com/pongpipat.saingsat/" target="_blank">
              <img src="../images/facebook.png" alt="Facebook" class="social-icon" />
            </a>
            <a href="https://line.me/ti/p/wzvx7xnMsx" target="_blank">
              <img src="../images/line.png" alt="LINE" class="social-icon" />
            </a>
            <a href="https://github.com/Fah-Pongpipat" target="_blank">
              <img src="../images/github-sign.png" alt="GitHub" class="social-icon" />
            </a>
            <a href="mailto:pongpipat.workchat@hotmail.com" target="_blank">
              <img src="../images/sent.png" alt="EMAIL" class="social-icon" />
            </a>
          </div>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.bg-contact {
  background-color: #000;
}

.contact-card {
  background-color: #fff;
  color: #333;
  border-radius: 16px;
  text-align: left;
}

.icon {
  width: 28px;
  height: 28px;
}

.social-icon {
  width: 24px;
  height: 24px;
  margin: 0 12px;
  filter: grayscale(100%);
  transition: 0.3s ease;
}

.social-icon:hover {
  filter: none;
  transform: scale(1.1);
}

.fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
