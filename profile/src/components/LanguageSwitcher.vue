<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)
const switcherRef = ref<HTMLElement | null>(null)

const languages = [
  { code: 'id', label: 'ID', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'zh', label: 'ZH', name: '中文', flag: '🇨🇳' },
]

const currentLanguage = computed(() => {
  return languages.find((lang) => lang.code === locale.value) ?? languages[0]!
})

const selectLanguage = (code: string) => {
  locale.value = code
  localStorage.setItem('user_locale', code)
  isOpen.value = false
}

// Menutup dropdown jika klik di luar area komponen
const handleClickOutside = (event: MouseEvent) => {
  if (switcherRef.value && !switcherRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  const savedLocale = localStorage.getItem('user_locale')
  if (savedLocale && languages.some((l) => l.code === savedLocale)) {
    locale.value = savedLocale
  }
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="switcherRef" class="relative inline-block text-left">
    <!-- Trigger Button -->
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-xs font-medium text-neutral-200 transition-colors"
    >
      <span>{{ currentLanguage.flag }}</span>
      <span>{{ currentLanguage.label }}</span>
      <svg
        class="w-3.5 h-3.5 text-neutral-400 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-44 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl py-1 z-50"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="selectLanguage(lang.code)"
        class="w-full flex items-center justify-between px-3 py-2 text-xs text-left text-neutral-300 hover:bg-neutral-800 hover:text-emerald-400 transition-colors"
        :class="{ 'text-emerald-400 font-semibold bg-neutral-800/50': locale === lang.code }"
      >
        <span class="flex items-center gap-2">
          <span>{{ lang.flag }}</span>
          <span>{{ lang.name }}</span>
        </span>
        <span v-if="locale === lang.code" class="text-emerald-400">✓</span>
      </button>
    </div>
  </div>
</template>