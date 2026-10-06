<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="space-y-20 md:space-y-28 py-6">
    
    <!-- ================= HERO SECTION ================= -->
    <section class="text-center max-w-3xl mx-auto space-y-5 py-8">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b4251]/60 border border-[#166479] text-[#ffc107] text-xs font-semibold">
        <span class="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse"></span>
        {{ $t('about.hero.badge') }}
      </div>

      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
        {{ $t('about.hero.title') }}
      </h1>

      <p class="text-neutral-300 text-sm sm:text-base leading-relaxed">
        {{ $t('about.hero.subtitle') }}
      </p>
    </section>

    <!-- ================= SEJARAH & TIMELINE ================= -->
    <section class="space-y-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Story Description Left -->
        <div class="lg:col-span-5 space-y-4">
          <span class="text-xs font-semibold text-[#ffc107] uppercase tracking-widest">
            {{ $t('about.history.badge') }}
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold text-white">
            {{ $t('about.history.title') }}
          </h2>
          <p class="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            {{ $t('about.history.paragraph1') }}
          </p>
          <p class="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            {{ $t('about.history.paragraph2') }}
          </p>
        </div>

        <!-- Timeline Right -->
        <div class="lg:col-span-7 space-y-6">
          <div class="relative pl-6 border-l-2 border-[#166479] space-y-8">
            
            <!-- Milestone 2025 -->
            <div class="relative group">
              <div class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#ffc107] border-4 border-[#121212]"></div>
              <div class="p-5 bg-neutral-900/90 rounded-2xl border border-neutral-800 space-y-2">
                <span class="text-xs font-bold text-[#ffc107] bg-[#0b4251] px-2.5 py-1 rounded-md">
                  {{ $t('about.history.timeline.t1_year') }}
                </span>
                <h3 class="text-base font-bold text-white pt-1">
                  {{ $t('about.history.timeline.t1_title') }}
                </h3>
                <p class="text-xs text-neutral-400 leading-relaxed">
                  {{ $t('about.history.timeline.t1_desc') }}
                </p>
              </div>
            </div>

            <!-- Milestone 2026 -->
            <div class="relative group">
              <div class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#ffc107] border-4 border-[#121212]"></div>
              <div class="p-5 bg-neutral-900/90 rounded-2xl border border-neutral-800 space-y-2">
                <span class="text-xs font-bold text-[#ffc107] bg-[#0b4251] px-2.5 py-1 rounded-md">
                  {{ $t('about.history.timeline.t2_year') }}
                </span>
                <h3 class="text-base font-bold text-white pt-1">
                  {{ $t('about.history.timeline.t2_title') }}
                </h3>
                <p class="text-xs text-neutral-400 leading-relaxed">
                  {{ $t('about.history.timeline.t2_desc') }}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- ================= VISI & MISI SECTION ================= -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Visi -->
      <div class="p-8 bg-gradient-to-br from-[#0b4251]/50 to-neutral-900 rounded-3xl border border-[#166479] space-y-4">
        <div class="w-12 h-12 rounded-xl bg-[#0b4251] flex items-center justify-center text-[#ffc107]">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white">
          {{ $t('about.vision_mission.vision_title') }}
        </h3>
        <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed">
          {{ $t('about.vision_mission.vision_desc') }}
        </p>
      </div>

      <!-- Misi -->
      <div class="p-8 bg-neutral-900 rounded-3xl border border-neutral-800 space-y-4">
        <div class="w-12 h-12 rounded-xl bg-[#0b4251] flex items-center justify-center text-[#ffc107]">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white">
          {{ $t('about.vision_mission.mission_title') }}
        </h3>
        <ul class="space-y-2.5 text-xs sm:text-sm text-neutral-300">
          <li class="flex items-start gap-2">
            <span class="text-[#ffc107] font-bold">✓</span>
            <span>{{ $t('about.vision_mission.m1') }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-[#ffc107] font-bold">✓</span>
            <span>{{ $t('about.vision_mission.m2') }}</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-[#ffc107] font-bold">✓</span>
            <span>{{ $t('about.vision_mission.m3') }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- ================= TIM INTI SECTION (3 FOUNDERS) ================= -->
    <section class="space-y-10">
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-semibold text-[#ffc107] uppercase tracking-widest">
          {{ $t('about.team.badge') }}
        </span>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">
          {{ $t('about.team.title') }}
        </h2>
        <p class="text-neutral-400 text-xs sm:text-sm">
          {{ $t('about.team.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Member 1: Fadlian Yusuf -->
        <div class="p-6 bg-neutral-900/90 rounded-2xl border border-neutral-800 hover:border-[#ffc107]/60 transition-all space-y-4 group">
          <div class="flex items-center gap-4">
            <img 
              src="https://api.dicebear.com/10.x/notionists-neutral/svg?seed=Fadlian%20Yusuf" 
              alt="Fadlian Yusuf" 
              class="w-14 h-14 rounded-2xl bg-[#0b4251] border border-[#166479] shrink-0 object-cover p-1 shadow-inner"
            />
            <div>
              <h3 class="text-base font-bold text-white group-hover:text-[#ffc107] transition-colors">
                {{ $t('about.team.members.fadlian.name') }}
              </h3>
              <p class="text-xs text-[#ffc107] font-medium mt-0.5">
                {{ $t('about.team.members.fadlian.role') }}
              </p>
            </div>
          </div>
          <p class="text-xs text-neutral-400 leading-relaxed">
            {{ $t('about.team.members.fadlian.bio') }}
          </p>
        </div>

        <!-- Member 2: Mohammad Maulana Ikhsan -->
        <div class="p-6 bg-neutral-900/90 rounded-2xl border border-neutral-800 hover:border-[#ffc107]/60 transition-all space-y-4 group">
          <div class="flex items-center gap-4">
            <img 
              src="https://api.dicebear.com/10.x/notionists-neutral/svg?seed=Mohammad%20Maulana%20Ikhsan" 
              alt="Mohammad Maulana Ikhsan" 
              class="w-14 h-14 rounded-2xl bg-[#0b4251] border border-[#166479] shrink-0 object-cover p-1 shadow-inner"
            />
            <div>
              <h3 class="text-base font-bold text-white group-hover:text-[#ffc107] transition-colors">
                {{ $t('about.team.members.ikhsan.name') }}
              </h3>
              <p class="text-xs text-[#ffc107] font-medium mt-0.5">
                {{ $t('about.team.members.ikhsan.role') }}
              </p>
            </div>
          </div>
          <p class="text-xs text-neutral-400 leading-relaxed">
            {{ $t('about.team.members.ikhsan.bio') }}
          </p>
        </div>

        <!-- Member 3: Faiz Ahnaf Maulana -->
        <div class="p-6 bg-neutral-900/90 rounded-2xl border border-neutral-800 hover:border-[#ffc107]/60 transition-all space-y-4 group">
          <div class="flex items-center gap-4">
            <img 
              src="https://api.dicebear.com/10.x/notionists-neutral/svg?seed=Faiz%20Ahnaf%20Maulana" 
              alt="Faiz Ahnaf Maulana" 
              class="w-14 h-14 rounded-2xl bg-[#0b4251] border border-[#166479] shrink-0 object-cover p-1 shadow-inner"
            />
            <div>
              <h3 class="text-base font-bold text-white group-hover:text-[#ffc107] transition-colors">
                {{ $t('about.team.members.faiz.name') }}
              </h3>
              <p class="text-xs text-[#ffc107] font-medium mt-0.5">
                {{ $t('about.team.members.faiz.role') }}
              </p>
            </div>
          </div>
          <p class="text-xs text-neutral-400 leading-relaxed">
            {{ $t('about.team.members.faiz.bio') }}
          </p>
        </div>

      </div>
    </section>

    <!-- ================= CTA BANNER ================= -->
    <section class="p-8 sm:p-12 bg-gradient-to-r from-[#0b4251] to-[#072c37] rounded-3xl border border-[#166479] text-center space-y-6 shadow-xl">
      <div class="max-w-2xl mx-auto space-y-3">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white">
          {{ $t('about.cta.title') }}
        </h2>
        <p class="text-neutral-300 text-xs sm:text-sm">
          {{ $t('about.cta.description') }}
        </p>
      </div>

      <div>
        <RouterLink 
          to="/contact" 
          class="inline-block px-8 py-3.5 bg-[#ffc107] hover:bg-[#e0a800] text-neutral-950 font-bold rounded-xl shadow-md transition-colors text-sm"
        >
          {{ $t('about.cta.button') }}
        </RouterLink>
      </div>
    </section>

  </div>
</template>