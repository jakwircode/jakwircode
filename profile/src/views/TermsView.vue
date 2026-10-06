<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 space-y-10">
    
    <!-- HEADER -->
    <section class="text-center space-y-4 border-b border-neutral-800 pb-8">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b4251]/60 border border-[#166479] text-[#ffc107] text-xs font-semibold">
        {{ $t('terms.badge') }}
      </div>

      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        {{ $t('terms.title') }}
      </h1>

      <p class="text-xs text-neutral-400 font-mono">
        {{ $t('terms.last_updated') }}
      </p>
    </section>

    <!-- CONTENT BODY -->
    <article class="space-y-8 text-neutral-300 text-xs sm:text-sm leading-relaxed">
      
      <!-- Intro -->
      <div class="p-5 bg-neutral-900/60 rounded-2xl border border-neutral-800 text-neutral-300">
        {{ $t('terms.intro') }}
      </div>

      <!-- Section 1 -->
      <section class="space-y-2">
        <h2 class="text-base font-bold text-white text-emerald-400/90">
          {{ $t('terms.s1_title') }}
        </h2>
        <p class="text-neutral-400">
          {{ $t('terms.s1_p1') }}
        </p>
      </section>

      <!-- Section 2 -->
      <section class="space-y-2">
        <h2 class="text-base font-bold text-white text-emerald-400/90">
          {{ $t('terms.s2_title') }}
        </h2>
        <p class="text-neutral-400">
          {{ $t('terms.s2_p1') }}
        </p>
        <p class="text-neutral-400">
          {{ $t('terms.s2_p2') }}
        </p>
      </section>

      <!-- Section 3 -->
      <section class="space-y-2">
        <h2 class="text-base font-bold text-white text-emerald-400/90">
          {{ $t('terms.s3_title') }}
        </h2>
        <p class="text-neutral-400">
          {{ $t('terms.s3_p1') }}
        </p>
        <p class="text-neutral-400">
          {{ $t('terms.s3_p2') }}
        </p>
      </section>

      <!-- Section 4 -->
      <section class="space-y-2">
        <h2 class="text-base font-bold text-white text-emerald-400/90">
          {{ $t('terms.s4_title') }}
        </h2>
        <p class="text-neutral-400">
          {{ $t('terms.s4_p1') }}
        </p>
        <p class="text-neutral-400">
          {{ $t('terms.s4_p2') }}
        </p>
      </section>

      <!-- Section 5 -->
      <section class="space-y-2">
        <h2 class="text-base font-bold text-white text-emerald-400/90">
          {{ $t('terms.s5_title') }}
        </h2>
        <p class="text-neutral-400">
          {{ $t('terms.s5_p1') }}
        </p>
      </section>

      <!-- Section 6 -->
      <section class="space-y-2">
        <h2 class="text-base font-bold text-white text-emerald-400/90">
          {{ $t('terms.s6_title') }}
        </h2>
        <p class="text-neutral-400">
          {{ $t('terms.s6_p1') }}
        </p>
      </section>

    </article>

    <!-- BOTTOM FOOTER LINK -->
    <div class="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
      <p class="text-neutral-500">
        {{ $t('terms.footer') }}
      </p>
      <RouterLink 
        to="/contact" 
        class="text-[#ffc107] hover:underline font-semibold"
      >
        {{ $t('terms.footer_link') }} &rarr;
      </RouterLink>
    </div>

  </div>
</template>