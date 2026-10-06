<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { supabase } from '../lib/supabaseClient'

interface Portfolio {
  id: string
  slug: string
  category: 'web' | 'mobile' | 'iot' | 'cloud' | string
  title_id: string
  title_en: string
  title_zh: string
  desc_id: string
  desc_en: string
  desc_zh: string
  client_name?: string
  image_url?: string
  technologies?: string[]
  project_url?: string
  is_active?: boolean
}

const { locale } = useI18n()
const portfolios = ref<Portfolio[]>([])
const isLoading = ref(true)
const fetchError = ref<string | null>(null)
const searchQuery = ref('')
const selectedCategory = ref('all')

// Daftar Kategori Filter
const categories = [
  { id: 'all', labelKey: 'portfolio.categories.all', defaultLabel: 'Semua' },
  { id: 'web', labelKey: 'portfolio.categories.web', defaultLabel: 'Web & SaaS' },
  { id: 'mobile', labelKey: 'portfolio.categories.mobile', defaultLabel: 'Mobile App' },
  { id: 'iot', labelKey: 'portfolio.categories.iot', defaultLabel: 'IoT & Embedded' },
  { id: 'cloud', labelKey: 'portfolio.categories.cloud', defaultLabel: 'Cloud & Infra' },
]

// Helper terjemahan dinamis
const getLocalizedField = (item: Portfolio, field: 'title' | 'desc'): string => {
  const currentLang = locale.value as 'id' | 'en' | 'zh'
  const key = `${field}_${currentLang}` as 'title_id' | 'title_en' | 'title_zh' | 'desc_id' | 'desc_en' | 'desc_zh'
  return item[key] || item[`${field}_id` as 'title_id' | 'desc_id'] || ''
}

// Fetch data portofolio dari Supabase
const fetchPortfolios = async () => {
  isLoading.value = true
  fetchError.value = null

  try {
    const { data, error } = await supabase
      .from('portfolios')
      .select('*')
      .eq('is_active', true)

    // Jika tabel belum ada atau terjadi error database
    if (error) {
      console.warn('Tabel Supabase belum tersedia atau kosong:', error.message)
      portfolios.value = []
      return
    }

    portfolios.value = data || []
  } catch (err: any) {
    console.warn('Gagal terhubung atau tabel belum dibuat:', err.message)
    portfolios.value = [] // Pastikan array kosong agar soft empty state yang tampil
  } finally {
    isLoading.value = false
  }
}

// Computed filter kategori & kata kunci pencarian
const filteredPortfolios = computed(() => {
  return portfolios.value.filter(item => {
    // Filter Kategori
    const matchesCategory = selectedCategory.value === 'all' || item.category === selectedCategory.value
    
    // Filter Pencarian
    if (!searchQuery.value.trim()) return matchesCategory

    const query = searchQuery.value.toLowerCase().trim()
    const title = String(getLocalizedField(item, 'title')).toLowerCase()
    const desc = String(getLocalizedField(item, 'desc')).toLowerCase()
    const client = String(item.client_name || '').toLowerCase()
    const tech = (item.technologies || []).join(' ').toLowerCase()

    const matchesSearch = title.includes(query) || desc.includes(query) || client.includes(query) || tech.includes(query)

    return matchesCategory && matchesSearch
  })
})

const clearSearch = () => {
  searchQuery.value = ''
}

const selectCategory = (catId: string) => {
  selectedCategory.value = catId
}

onMounted(() => {
  fetchPortfolios()
})
</script>

<template>
  <div class="space-y-10 py-6">
    
    <!-- ================= HEADER, SEARCH & FILTER ================= -->
    <section class="text-center max-w-3xl mx-auto space-y-6">
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b4251]/60 border border-[#166479] text-[#ffc107] text-xs font-semibold">
          <span class="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse"></span>
          {{ $t('portfolio.badge') }}
        </div>

        <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {{ $t('portfolio.title') }}
        </h1>

        <p class="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          {{ $t('portfolio.subtitle') }}
        </p>
      </div>

      <!-- Input Pencarian -->
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
            :placeholder="$t('portfolio.search_placeholder')"
            class="w-full pl-10 pr-10 py-2.5 bg-neutral-900/90 border border-[#166479]/60 focus:border-[#ffc107] text-white text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-[#ffc107] transition-all placeholder:text-neutral-500 shadow-inner"
          />
          <button 
            v-if="searchQuery" 
            @click="clearSearch"
            class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-white transition-colors"
            :title="$t('portfolio.reset_search')"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Filter Kategori Tabs -->
      <div class="flex flex-wrap items-center justify-center gap-2 pt-2">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectCategory(cat.id)"
          :class="[
            'px-4 py-2 rounded-xl text-xs font-semibold transition-all border',
            selectedCategory === cat.id
              ? 'bg-[#ffc107] text-neutral-950 border-[#ffc107] shadow-md'
              : 'bg-neutral-900/80 text-neutral-300 border-neutral-800 hover:border-[#166479] hover:text-white'
          ]"
        >
          {{ $te(cat.labelKey) ?$t(cat.labelKey) : cat.defaultLabel }}
        </button>
      </div>
    </section>

    <!-- ================= CONTENT AREA ================= -->
    <div>
      <!-- 1. SKELETON LOADING STATE -->
      <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="i in 6" 
          :key="i" 
          class="bg-neutral-900/60 rounded-2xl border border-neutral-800/80 animate-pulse overflow-hidden space-y-4"
        >
          <div class="h-44 bg-neutral-800/80 w-full"></div>
          <div class="p-5 space-y-3">
            <div class="h-4 bg-neutral-800/80 rounded w-2/3"></div>
            <div class="h-3 bg-neutral-800/60 rounded w-full"></div>
            <div class="h-3 bg-neutral-800/60 rounded w-4/5"></div>
            <div class="flex gap-2 pt-2">
              <div class="h-5 w-14 bg-neutral-800/50 rounded-md"></div>
              <div class="h-5 w-16 bg-neutral-800/50 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2A. EMPTY STATE: HASIL PENCARIAN / FILTER KATEGORI TIDAK DITEMUKAN -->
      <div 
        v-else-if="portfolios.length > 0 && filteredPortfolios.length === 0" 
        class="max-w-md mx-auto my-8 p-8 bg-neutral-900/80 rounded-3xl border border-neutral-800 text-center space-y-4 shadow-xl backdrop-blur-sm"
      >
        <div class="w-14 h-14 mx-auto rounded-2xl bg-[#0b4251]/30 border border-[#166479]/40 flex items-center justify-center text-[#ffc107]">
          <svg class="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>

        <div class="space-y-1.5">
          <h3 class="text-base font-bold text-white">
            {{ $t('portfolio.empty_search_title') }}
          </h3>
          <p class="text-xs text-neutral-400 leading-relaxed max-w-xs mx-auto">
            {{ $t('portfolio.empty_search_desc') }}
          </p>
        </div>

        <div class="pt-1 flex justify-center gap-2">
          <button 
            @click="clearSearch(); selectCategory('all')"
            class="px-4 py-2 bg-[#0b4251] hover:bg-[#166479] text-[#ffc107] border border-[#ffc107]/30 text-xs font-semibold rounded-xl transition-colors"
          >
            {{ $t('portfolio.reset_search') }}
          </button>
        </div>
      </div>

      <!-- 2B. EMPTY STATE: DATABASE KOSONG -->
      <div 
        v-else-if="portfolios.length === 0" 
        class="max-w-lg mx-auto my-8 p-8 sm:p-10 bg-gradient-to-b from-neutral-900/80 to-[#0b4251]/20 rounded-3xl border border-[#166479]/40 text-center space-y-5 shadow-xl backdrop-blur-sm"
      >
        <div class="w-16 h-16 mx-auto rounded-2xl bg-[#0b4251]/40 border border-[#166479]/50 flex items-center justify-center text-[#ffc107] relative">
          <div class="absolute inset-0 bg-[#ffc107]/10 rounded-2xl blur-lg"></div>
          <svg class="w-8 h-8 relative z-10 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-bold text-white">
            {{ $t('portfolio.empty_db_title') }}
          </h3>
          <p class="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto">
            {{ $t('portfolio.empty_db_desc') }}
          </p>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <RouterLink 
            to="/contact" 
            class="w-full sm:w-auto px-5 py-2.5 bg-[#ffc107] hover:bg-[#e0a800] text-neutral-950 text-xs font-bold rounded-xl shadow-md transition-colors"
          >
            {{ $t('portfolio.custom_order') }} &rarr;
          </RouterLink>
          <button 
            @click="fetchPortfolios" 
            class="w-full sm:w-auto px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium rounded-xl border border-neutral-700 transition-colors"
          >
            {{ $t('portfolio.reload') }}
          </button>
        </div>
      </div>

      <!-- 3. DATA PORTFOLIO GRID -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="item in filteredPortfolios" 
          :key="item.id"
          class="bg-neutral-900/90 rounded-2xl border border-neutral-800 hover:border-[#ffc107]/60 transition-all flex flex-col justify-between overflow-hidden group"
        >
          <div>
            <!-- Banner / Image Preview -->
            <div class="relative h-48 bg-neutral-950 overflow-hidden border-b border-neutral-800">
              <img 
                v-if="item.image_url" 
                :src="item.image_url" 
                :alt="getLocalizedField(item, 'title')"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0b4251]/40 to-neutral-950 text-[#ffc107]/40">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              <!-- Badge Kategori Overlay -->
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#0b4251]/90 border border-[#166479] text-[#ffc107] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                {{ item.category }}
              </span>
            </div>

            <!-- Card Content -->
            <div class="p-6 space-y-3">
              <div v-if="item.client_name" class="text-[11px] font-semibold text-[#ffc107] uppercase tracking-wider">
                {{ item.client_name }}
              </div>

              <h3 class="text-base font-bold text-white group-hover:text-[#ffc107] transition-colors leading-snug">
                {{ getLocalizedField(item, 'title') }}
              </h3>

              <p class="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                {{ getLocalizedField(item, 'desc') }}
              </p>

              <!-- Tech Stack Pills -->
              <div v-if="item.technologies?.length" class="flex flex-wrap gap-1.5 pt-2">
                <span 
                  v-for="(tech, idx) in item.technologies" 
                  :key="idx"
                  class="px-2.5 py-1 rounded-md bg-[#0b4251]/40 border border-[#166479]/50 text-[10px] text-neutral-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Footer Link -->
          <div class="p-6 pt-0 mt-2 flex items-center justify-between">
            <RouterLink 
              :to="`/contact?portfolio=${item.slug}`" 
              class="inline-flex items-center text-xs font-semibold text-[#ffc107] hover:underline gap-1"
            >
              {{ $t('portfolio.build_like_this') }} &rarr;
            </RouterLink>

            <a 
              v-if="item.project_url" 
              :href="item.project_url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-[11px] text-neutral-400 hover:text-white transition-colors"
            >
              {{ $t('portfolio.visit_link') }} ↗
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>