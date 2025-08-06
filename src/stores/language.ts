import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {
  // 👉 อ่านค่าจาก localStorage ถ้ามี, ถ้าไม่มีให้ใช้ 'TH'
  const currnetedLanguage = ref(localStorage.getItem('language') || 'TH')

  function switchLanguage() {
    // 👉 สลับภาษา
    currnetedLanguage.value = currnetedLanguage.value === 'TH' ? 'ENG' : 'TH'

    // 👉 บันทึกลง localStorage
    localStorage.setItem('language', currnetedLanguage.value)
  }

  return {
    currnetedLanguage,
    switchLanguage,
  }
})
