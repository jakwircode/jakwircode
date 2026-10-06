<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 class="text-7xl font-extrabold text-emerald-400 tracking-tight">404</h1>
    <h2 class="mt-4 text-2xl font-semibold text-neutral-200">Halaman Tidak Ditemukan</h2>
    <p class="mt-2 text-neutral-400 max-w-md">
      Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
    </p>
    <RouterLink 
      to="/" 
      class="mt-6 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-semibold rounded-lg transition-colors text-sm"
    >
      Kembali ke Beranda
    </RouterLink>
  </div>
</template>