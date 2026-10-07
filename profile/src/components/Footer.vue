<script setup lang="ts">
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#0b4251] border-t border-[#166479] text-neutral-200 text-sm mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      <!-- Main Footer Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        
        <!-- Kolom 1: Brand Info & Informasi Kontak (Tanpa Ikon) -->
        <div class="col-span-2 md:col-span-1 space-y-3">
          <RouterLink to="/" class="inline-block text-xl font-bold tracking-tight">
            <span class="text-white">Jakwir</span><span class="text-[#ffc107]">Code</span>
          </RouterLink>
          <p class="text-neutral-300 text-xs leading-relaxed">
            {{ $t('footer.tagline') }}
          </p>
          
          <div class="pt-2 border-t border-[#166479]/60 space-y-1 text-xs text-neutral-300">
            <p>{{ $t('footer.address') }}</p>
            <p>
              <a href="mailto:info@jakwircode.com" class="hover:text-[#ffc107] transition-colors">
                info@jakwircode.com
              </a>
            </p>
            <p>
              <a href="https://wa.me/+6287882974378" target="_blank" rel="noopener noreferrer" class="hover:text-[#ffc107] transition-colors">
                +62 878-8297-4378
              </a>
            </p>
          </div>
        </div>

        <!-- Kolom 2: Navigasi -->
        <div class="col-span-1 space-y-3">
          <h3 class="text-[#ffc107] font-semibold text-xs uppercase tracking-wider">
            {{ $t('footer.navigation') }}
          </h3>
          <ul class="space-y-2 text-xs">
            <li>
              <RouterLink to="/solutions" class="hover:text-[#ffc107] transition-colors">
                {{ $t('nav.solutions') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/products" class="hover:text-[#ffc107] transition-colors">
                {{ $t('nav.products') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio" class="hover:text-[#ffc107] transition-colors">
                {{ $t('nav.portfolio') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="hover:text-[#ffc107] transition-colors">
                {{ $t('nav.about') }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Kolom 3: Fokus Solusi -->
        <div class="col-span-1 space-y-3">
          <h3 class="text-[#ffc107] font-semibold text-xs uppercase tracking-wider">
            {{ $t('footer.focus') }}
          </h3>
          <ul class="space-y-2 text-xs text-neutral-300">
            <li>{{ $t('footer.focus_items.software') }}</li>
            <li>{{ $t('footer.focus_items.mobile') }}</li>
            <li>{{ $t('footer.focus_items.iot') }}</li>
            <li>{{ $t('footer.focus_items.cloud') }}</li>
          </ul>
        </div>

        <!-- Kolom 4: Hubungi Kami & CTA -->
        <div class="col-span-2 md:col-span-1 space-y-3 bg-[#072c37] md:bg-transparent p-4 md:p-0 rounded-xl border border-[#166479] md:border-none">
          <h3 class="text-[#ffc107] font-semibold text-xs uppercase tracking-wider">
            {{ $t('footer.contact_title') }}
          </h3>
          <p class="text-xs text-neutral-300 leading-relaxed">
            {{ $t('footer.contact_desc') }}
          </p>
          <div class="pt-1">
            <RouterLink 
              to="/contact" 
              class="inline-flex items-center justify-center w-full md:w-auto px-4 py-2 bg-[#0f5062] hover:bg-[#166479] text-[#ffc107] border border-[#ffc107]/30 rounded-lg text-xs font-semibold transition-colors"
            >
              {{ $t('footer.cta_button') }} &rarr;
            </RouterLink>
          </div>
        </div>

      </div>

      <!-- Bottom Bar: Copyright & Legalitas -->
      <div class="mt-10 pt-6 border-t border-[#166479]/60 flex flex-col-reverse sm:flex-row items-center justify-between text-xs text-neutral-300 gap-4 text-center sm:text-left">
        <p>&copy; {{ currentYear }} JakwirCode. {{ $t('footer.rights') }}</p>
        <div class="flex items-center gap-4">
          <RouterLink to="/terms" class="hover:text-[#ffc107] transition-colors">
            {{ $t('footer.terms') }}
          </RouterLink>
          <RouterLink to="/privacy" class="hover:text-[#ffc107] transition-colors">
            {{ $t('footer.privacy') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>