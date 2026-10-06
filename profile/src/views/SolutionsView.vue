<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { supabase } from '../lib/supabaseClient'

interface Service {
  id: string
  slug: string
  icon?: string
  title_id: string
  title_en: string
  title_zh: string
  desc_id: string
  desc_en: string
  desc_zh: string
  features_id?: string[]
  features_en?: string[]
  features_zh?: string[]
  is_active?: boolean
}

const { locale } = useI18n()
const services = ref<Service[]>([])
const isLoading = ref(true)
const fetchError = ref<string | null>(null)
const searchQuery = ref('')

// Helper terjemahan dinamis
function getLocalizedField(item: Service, field: 'title' | 'desc'): string
function getLocalizedField(item: Service, field: 'features'): string[]
function getLocalizedField(item: Service, field: 'title' | 'desc' | 'features'): string | string[] {
  const currentLang = locale.value as 'id' | 'en' | 'zh'
  const key = `${field}_${currentLang}` as keyof Service
  return (item[key] || item[`${field}_id` as keyof Service] || (field === 'features' ? [] : '')) as string | string[]
}

// Fetch data dari Supabase
const fetchServices = async () => {
  isLoading.value = true
  fetchError.value = null

  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)

    // Jika tabel belum ada atau terjadi error database
    if (error) {
      console.warn('Tabel Supabase belum tersedia atau kosong:', error.message)
      services.value = []
      return
    }

    services.value = data || []
  } catch (err: any) {
    console.warn('Gagal terhubung atau tabel belum dibuat:', err.message)
    services.value = [] // Pastikan array kosong agar soft empty state yang tampil
  } finally {
    isLoading.value = false
  }
}

// Computed filter pencarian judul, deskripsi, dan fitur
const filteredServices = computed(() => {
  if (!searchQuery.value.trim()) return services.value
  const query = searchQuery.value.toLowerCase().trim()
  
  return services.value.filter(service => {
    const title = String(getLocalizedField(service, 'title')).toLowerCase()
    const desc = String(getLocalizedField(service, 'desc')).toLowerCase()
    const features = (getLocalizedField(service, 'features') as string[] || []).join(' ').toLowerCase()
    
    return title.includes(query) || desc.includes(query) || features.includes(query)
  })
})

const clearSearch = () => {
  searchQuery.value = ''
}

onMounted(() => {
  fetchServices()
})
</script>

<template>
  <div class="space-y-10 py-6">
    
    <!-- ================= HEADER & SEARCH BAR ================= -->
    <section class="text-center max-w-3xl mx-auto space-y-6">
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b4251]/60 border border-[#166479] text-[#ffc107] text-xs font-semibold">
          <span class="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse"></span>
          {{ $t('solutions.badge') }}
        </div>

        <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ $t('solutions.title') }}
        </h1>

        <p class="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          {{ $t('solutions.subtitle') }}
        </p>
      </div>

      <!-- Input Pencarian Solusi -->
      <div class="max-w-md mx-auto pt-2">
        <div class="relative flex items-center">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            v-model="searchQuery"
            type="text" 
            :placeholder="$t('solutions.search_placeholder')"
            class="w-full pl-10 pr-10 py-2.5 bg-neutral-900/90 border border-[#166479]/60 focus:border-[#ffc107] text-white text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-[#ffc107] transition-all placeholder:text-neutral-500 shadow-inner"
          />
          <button 
            v-if="searchQuery" 
            @click="clearSearch"
            class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-white transition-colors"
            title="Hapus kata kunci"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- ================= CONTENT AREA ================= -->
    <div>
      <!-- 1. SKELETON LOADING STATE -->
      <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="i in 6" 
          :key="i" 
          class="p-6 bg-neutral-900/60 rounded-2xl border border-neutral-800/80 animate-pulse space-y-4"
        >
          <div class="w-12 h-12 rounded-xl bg-neutral-800/80"></div>
          <div class="h-5 bg-neutral-800/80 rounded w-2/3"></div>
          <div class="space-y-2 pt-1">
            <div class="h-3 bg-neutral-800/60 rounded w-full"></div>
            <div class="h-3 bg-neutral-800/60 rounded w-4/5"></div>
          </div>
        </div>
      </div>

      <!-- 2A. EMPTY STATE: HASIL PENCARIAN TIDAK DITEMUKAN -->
      <div 
        v-else-if="services.length > 0 && filteredServices.length === 0" 
        class="max-w-md mx-auto my-8 p-8 bg-neutral-900/80 rounded-3xl border border-neutral-800 text-center space-y-4 shadow-xl backdrop-blur-sm"
      >
        <div class="w-14 h-14 mx-auto rounded-2xl bg-[#0b4251]/30 border border-[#166479]/40 flex items-center justify-center text-[#ffc107]">
          <svg class="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div class="space-y-1.5">
          <h3 class="text-base font-bold text-white">
            {{ $t('solutions.empty_search_title') }}
          </h3>
          <p class="text-xs text-neutral-400 leading-relaxed max-w-xs mx-auto">
            {{ $t('solutions.empty_search_desc') }} <span class="text-[#ffc107] font-semibold">"{{ searchQuery }}"</span>.
          </p>
        </div>

        <button 
          @click="clearSearch"
          class="px-4 py-2 bg-[#0b4251] hover:bg-[#166479] text-[#ffc107] border border-[#ffc107]/30 text-xs font-semibold rounded-xl transition-colors"
        >
          {{ $t('solutions.reset_search') }}
        </button>
      </div>

      <!-- 2B. EMPTY STATE: DATABASE KOSONG -->
      <div 
        v-else-if="services.length === 0" 
        class="max-w-lg mx-auto my-8 p-8 sm:p-10 bg-gradient-to-b from-neutral-900/80 to-[#0b4251]/20 rounded-3xl border border-[#166479]/40 text-center space-y-5 shadow-xl backdrop-blur-sm"
      >
        <div class="w-16 h-16 mx-auto rounded-2xl bg-[#0b4251]/40 border border-[#166479]/50 flex items-center justify-center text-[#ffc107] relative">
          <div class="absolute inset-0 bg-[#ffc107]/10 rounded-2xl blur-lg"></div>
          <svg class="w-8 h-8 relative z-10 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-bold text-white">
            {{ $t('solutions.empty_db_title') }}
          </h3>
          <p class="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto">
            {{ $t('solutions.empty_db_desc') }}
          </p>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <RouterLink 
            to="/contact" 
            class="w-full sm:w-auto px-5 py-2.5 bg-[#ffc107] hover:bg-[#e0a800] text-neutral-950 text-xs font-bold rounded-xl shadow-md transition-colors"
          >
            {{ $t('solutions.custom_consult') }} &rarr;
          </RouterLink>
          <button 
            @click="fetchServices" 
            class="w-full sm:w-auto px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium rounded-xl border border-neutral-700 transition-colors"
          >
            {{ $t('solutions.reload') }}
          </button>
        </div>
      </div>

      <!-- 3. DATA SERVICES GRID -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="service in filteredServices" 
          :key="service.id"
          class="p-6 bg-neutral-900/90 rounded-2xl border border-neutral-800 hover:border-[#ffc107]/60 transition-all flex flex-col justify-between group"
        >
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-xl bg-[#0b4251] border border-[#166479] flex items-center justify-center text-[#ffc107] text-xl font-bold group-hover:scale-105 transition-transform">
              <span v-if="service.icon">{{ service.icon }}</span>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <div class="space-y-2">
              <h3 class="text-base font-bold text-white group-hover:text-[#ffc107] transition-colors">
                {{ getLocalizedField(service, 'title') }}
              </h3>
              <p class="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                {{ getLocalizedField(service, 'desc') }}
              </p>
            </div>

            <div v-if="getLocalizedField(service, 'features')?.length" class="flex flex-wrap gap-1.5 pt-2">
              <span 
                v-for="(feature, idx) in (getLocalizedField(service, 'features') as string[])" 
                :key="idx"
                class="px-2.5 py-1 rounded-md bg-[#0b4251]/50 border border-[#166479]/60 text-[11px] text-neutral-300"
              >
                {{ feature }}
              </span>
            </div>
          </div>

          <div class="pt-6 mt-4 border-t border-neutral-800/80">
            <RouterLink 
              :to="`/contact?service=${service.slug}`" 
              class="inline-flex items-center text-xs font-semibold text-[#ffc107] hover:underline gap-1"
            >
              {{ $t('solutions.discuss_solution') }} &rarr;
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>