<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="space-y-20 md:space-y-28 py-6">
    
    <!-- ================= HERO SECTION ================= -->
    <section class="py-12 md:py-20 text-center max-w-3xl mx-auto space-y-6">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b4251]/60 border border-[#166479] text-[#ffc107] text-xs font-semibold">
        <span class="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse"></span>
        {{ $t('home.hero.badge') }}
      </div>

      <h1 class="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
        {{ $t('home.hero.title_prefix') }}
        <span class="text-[#ffc107] block mt-1">JakwirCode</span>
      </h1>

      <p class="text-neutral-300 text-sm sm:text-base leading-relaxed">
        {{ $t('home.hero.subtitle') }}
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <RouterLink 
          to="/contact" 
          class="w-full sm:w-auto px-7 py-3.5 bg-[#ffc107] hover:bg-[#e0a800] text-neutral-950 font-bold rounded-xl shadow-lg transition-all text-sm"
        >
          {{ $t('home.hero.cta_primary') }} &rarr;
        </RouterLink>
        <RouterLink 
          to="/portfolio" 
          class="w-full sm:w-auto px-7 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-xl transition-all text-sm font-medium"
        >
          {{ $t('home.hero.cta_secondary') }}
        </RouterLink>
      </div>
    </section>

    <!-- ================= BISNIS KAMI (SERVICES) SECTION ================= -->
    <section class="space-y-10">
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-semibold text-[#ffc107] uppercase tracking-widest">
          {{ $t('home.services.badge') }}
        </span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">
          {{ $t('home.services.title') }}
        </h2>
        <p class="text-neutral-400 text-xs sm:text-sm">
          {{ $t('home.services.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Web Dev -->
        <div class="p-6 bg-neutral-900/90 rounded-2xl border border-neutral-800 hover:border-[#ffc107]/60 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-[#0b4251] flex items-center justify-center text-[#ffc107] mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-white mb-2">
            {{ $t('home.services.web_dev.title') }}
          </h3>
          <p class="text-xs text-neutral-400 leading-relaxed">
            {{ $t('home.services.web_dev.desc') }}
          </p>
        </div>

        <!-- Mobile Dev -->
        <div class="p-6 bg-neutral-900/90 rounded-2xl border border-neutral-800 hover:border-[#ffc107]/60 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-[#0b4251] flex items-center justify-center text-[#ffc107] mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-white mb-2">
            {{ $t('home.services.mobile_dev.title') }}
          </h3>
          <p class="text-xs text-neutral-400 leading-relaxed">
            {{ $t('home.services.mobile_dev.desc') }}
          </p>
        </div>

        <!-- IoT Dev -->
        <div class="p-6 bg-neutral-900/90 rounded-2xl border border-neutral-800 hover:border-[#ffc107]/60 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-[#0b4251] flex items-center justify-center text-[#ffc107] mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-white mb-2">
            {{ $t('home.services.iot_dev.title') }}
          </h3>
          <p class="text-xs text-neutral-400 leading-relaxed">
            {{ $t('home.services.iot_dev.desc') }}
          </p>
        </div>

        <!-- Cloud & DevOps -->
        <div class="p-6 bg-neutral-900/90 rounded-2xl border border-neutral-800 hover:border-[#ffc107]/60 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-[#0b4251] flex items-center justify-center text-[#ffc107] mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 00-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-white mb-2">
            {{ $t('home.services.cloud_dev.title') }}
          </h3>
          <p class="text-xs text-neutral-400 leading-relaxed">
            {{ $t('home.services.cloud_dev.desc') }}
          </p>
        </div>

      </div>
    </section>

    <!-- ================= MENGAPA MEMILIH KAMI (WHY CHOOSE US) SECTION ================= -->
    <section class="space-y-10">
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-semibold text-[#ffc107] uppercase tracking-widest">
          {{ $t('home.why_us.badge') }}
        </span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">
          {{ $t('home.why_us.title') }}
        </h2>
        <p class="text-neutral-400 text-xs sm:text-sm">
          {{ $t('home.why_us.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Feature 1 -->
        <div class="flex items-start gap-4 p-5 bg-neutral-900/60 rounded-xl border border-neutral-800">
          <div class="p-2.5 rounded-lg bg-[#0b4251] text-[#ffc107] shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div class="space-y-1">
            <h3 class="text-sm font-bold text-white">
              {{ $t('home.why_us.items.expertise.title') }}
            </h3>
            <p class="text-xs text-neutral-400 leading-relaxed">
              {{ $t('home.why_us.items.expertise.desc') }}
            </p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="flex items-start gap-4 p-5 bg-neutral-900/60 rounded-xl border border-neutral-800">
          <div class="p-2.5 rounded-lg bg-[#0b4251] text-[#ffc107] shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div class="space-y-1">
            <h3 class="text-sm font-bold text-white">
              {{ $t('home.why_us.items.scalable.title') }}
            </h3>
            <p class="text-xs text-neutral-400 leading-relaxed">
              {{ $t('home.why_us.items.scalable.desc') }}
            </p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="flex items-start gap-4 p-5 bg-neutral-900/60 rounded-xl border border-neutral-800">
          <div class="p-2.5 rounded-lg bg-[#0b4251] text-[#ffc107] shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zM4 7a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
            </svg>
          </div>
          <div class="space-y-1">
            <h3 class="text-sm font-bold text-white">
              {{ $t('home.why_us.items.end_to_end.title') }}
            </h3>
            <p class="text-xs text-neutral-400 leading-relaxed">
              {{ $t('home.why_us.items.end_to_end.desc') }}
            </p>
          </div>
        </div>

        <!-- Feature 4 -->
        <div class="flex items-start gap-4 p-5 bg-neutral-900/60 rounded-xl border border-neutral-800">
          <div class="p-2.5 rounded-lg bg-[#0b4251] text-[#ffc107] shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div class="space-y-1">
            <h3 class="text-sm font-bold text-white">
              {{ $t('home.why_us.items.support.title') }}
            </h3>
            <p class="text-xs text-neutral-400 leading-relaxed">
              {{ $t('home.why_us.items.support.desc') }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- ================= CTA BANNER SECTION ================= -->
    <section class="p-8 sm:p-12 bg-gradient-to-r from-[#0b4251] to-[#072c37] rounded-3xl border border-[#166479] text-center space-y-6 shadow-xl">
      <div class="max-w-2xl mx-auto space-y-3">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white">
          {{ $t('home.cta.title') }}
        </h2>
        <p class="text-neutral-300 text-xs sm:text-sm">
          {{ $t('home.cta.subtitle') }}
        </p>
      </div>

      <div>
        <RouterLink 
          to="/contact" 
          class="inline-block px-8 py-3.5 bg-[#ffc107] hover:bg-[#e0a800] text-neutral-950 font-bold rounded-xl shadow-md transition-colors text-sm"
        >
          {{ $t('home.cta.button') }} &rarr;
        </RouterLink>
      </div>
    </section>

  </div>
</template>