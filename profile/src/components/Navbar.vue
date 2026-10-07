<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'

const isMobileMenuOpen = ref(false)

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="bg-[#0b4251] backdrop-blur-md border-b border-[#166479] text-white sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Brand Logo -->
      <RouterLink to="/" class="text-xl font-bold tracking-tight" @click="closeMobileMenu">
        <span class="text-white">Jakwir</span><span class="text-[#ffc107]">Code</span>
      </RouterLink>

      <!-- Desktop Links -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
        <RouterLink to="/" class="text-neutral-200 hover:text-[#ffc107] transition-colors [&.router-link-active]:text-[#ffc107]">
          {{ $t('nav.home') }}
        </RouterLink>
        <RouterLink to="/solutions" class="text-neutral-200 hover:text-[#ffc107] transition-colors [&.router-link-active]:text-[#ffc107]">
          {{ $t('nav.solutions') }}
        </RouterLink>
        <RouterLink to="/products" class="text-neutral-200 hover:text-[#ffc107] transition-colors [&.router-link-active]:text-[#ffc107]">
          {{ $t('nav.products') }}
        </RouterLink>
        <RouterLink to="/portfolio" class="text-neutral-200 hover:text-[#ffc107] transition-colors [&.router-link-active]:text-[#ffc107]">
          {{ $t('nav.portfolio') }}
        </RouterLink>
        <RouterLink to="/about" class="text-neutral-200 hover:text-[#ffc107] transition-colors [&.router-link-active]:text-[#ffc107]">
          {{ $t('nav.about') }}
        </RouterLink>
      </nav>

      <!-- Desktop Right Items -->
      <div class="hidden md:flex items-center gap-3">
        <LanguageSwitcher />
        <RouterLink 
          to="/contact" 
          class="px-4 py-2 bg-[#ffc107] hover:bg-[#e0a800] text-[#0b4251] font-semibold rounded-lg transition-colors text-xs"
        >
          {{ $t('nav.contact') }}
        </RouterLink>
      </div>

      <!-- Mobile Hamburger & Language Switcher -->
      <div class="flex items-center gap-2 md:hidden">
        <LanguageSwitcher />
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          type="button" 
          class="p-2 rounded-lg text-neutral-200 hover:text-white hover:bg-[#166479] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-[#0b4251] border-b border-[#166479] px-4 pt-2 pb-6 space-y-3">
      <RouterLink 
        to="/" 
        @click="closeMobileMenu"
        class="block py-2 text-neutral-200 hover:text-[#ffc107] text-base font-medium [&.router-link-active]:text-[#ffc107]"
      >
        {{ $t('nav.home') }}
      </RouterLink>
      <RouterLink 
        to="/solutions" 
        @click="closeMobileMenu"
        class="block py-2 text-neutral-200 hover:text-[#ffc107] text-base font-medium [&.router-link-active]:text-[#ffc107]"
      >
        {{ $t('nav.solutions') }}
      </RouterLink>
      <RouterLink 
        to="/products" 
        @click="closeMobileMenu"
        class="block py-2 text-neutral-200 hover:text-[#ffc107] text-base font-medium [&.router-link-active]:text-[#ffc107]"
      >
        {{ $t('nav.products') }}
      </RouterLink>
      <RouterLink 
        to="/portfolio" 
        @click="closeMobileMenu"
        class="block py-2 text-neutral-200 hover:text-[#ffc107] text-base font-medium [&.router-link-active]:text-[#ffc107]"
      >
        {{ $t('nav.portfolio') }}
      </RouterLink>
      <RouterLink 
        to="/about" 
        @click="closeMobileMenu"
        class="block py-2 text-neutral-200 hover:text-[#ffc107] text-base font-medium [&.router-link-active]:text-[#ffc107]"
      >
        {{ $t('nav.about') }}
      </RouterLink>
      <div class="pt-2">
        <RouterLink 
          to="/contact" 
          @click="closeMobileMenu"
          class="block text-center w-full py-2.5 bg-[#ffc107] hover:bg-[#e0a800] text-[#0b4251] font-semibold rounded-lg transition-colors text-sm"
        >
          {{ $t('nav.contact') }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>