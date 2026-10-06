<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

// Nomor WhatsApp tujuan JakwirCode (Ganti dengan nomor WhatsApp aktif)
const whatsappNumber = '6285123456789'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Menangkap parameter URL jika pengguna datang dari halaman Solusi/Produk/Portofolio
onMounted(() => {
  if (route.query.service) {
    form.value.subject = `Konsultasi Layanan: ${route.query.service}`
  } else if (route.query.product) {
    form.value.subject = `Inquiry Produk: ${route.query.product}`
  } else if (route.query.portfolio) {
    form.value.subject = `Referensi Portofolio: ${route.query.portfolio}`
  }
})

// Fungsi format pesan & redirect ke WhatsApp
const sendToWhatsApp = () => {
  const nameText = form.value.name.trim() ? form.value.name.trim() : '-'
  const emailText = form.value.email.trim() ? form.value.email.trim() : '-'
  const subjectText = form.value.subject.trim() ? form.value.subject.trim() : 'Konsultasi Proyek'
  const messageText = form.value.message.trim() ? form.value.message.trim() : '-'

  const formattedMessage = 
    `Halo JakwirCode, saya ingin berdiskusi mengenai proyek/layanan.\n\n` +
    `*Nama:* ${nameText}\n` +
    `*Email:* ${emailText}\n` +
    `*Subjek/Layanan:* ${subjectText}\n\n` +
    `*Detail Pesan:*\n${messageText}`

  const encodedMessage = encodeURIComponent(formattedMessage)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  window.open(whatsappUrl, '_blank')
}
</script>

<template>
  <div class="space-y-12 py-6">
    
    <!-- ================= HEADER ================= -->
    <section class="text-center max-w-3xl mx-auto space-y-4">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b4251]/60 border border-[#166479] text-[#ffc107] text-xs font-semibold">
        <span class="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse"></span>
        {{ $t('contact.badge') }}
      </div>

      <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        {{ $t('contact.title') }}
      </h1>

      <p class="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
        {{ $t('contact.subtitle') }}
      </p>
    </section>

    <!-- ================= CONTENT GRID ================= -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- FORMULIR VIA WHATSAPP (KIRI) -->
      <div class="lg:col-span-7 p-6 sm:p-8 bg-neutral-900/90 rounded-3xl border border-neutral-800 space-y-6 shadow-xl">
        <div class="space-y-1 border-b border-neutral-800 pb-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <svg class="w-5 h-5 text-[#ffc107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {{ $t('contact.form.title') }}
          </h2>
          <p class="text-xs text-neutral-400">
            Isi formulir berikut untuk langsung terhubung dengan tim kami di WhatsApp.
          </p>
        </div>

        <form @submit.prevent="sendToWhatsApp" class="space-y-4 text-xs">
          <!-- Nama Lengkap -->
          <div class="space-y-1.5">
            <label class="block font-semibold text-neutral-200">
              {{ $t('contact.form.name_label') }} <span class="text-[#ffc107]">*</span>
            </label>
            <input 
              v-model="form.name"
              type="text" 
              required
              :placeholder="$t('contact.form.name_placeholder')"
              class="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-[#ffc107] rounded-xl text-white outline-none transition-colors placeholder:text-neutral-600"
            />
          </div>

          <!-- Email -->
          <div class="space-y-1.5">
            <label class="block font-semibold text-neutral-200">
              {{ $t('contact.form.email_label') }}
            </label>
            <input 
              v-model="form.email"
              type="email" 
              :placeholder="$t('contact.form.email_placeholder')"
              class="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-[#ffc107] rounded-xl text-white outline-none transition-colors placeholder:text-neutral-600"
            />
          </div>

          <!-- Subjek -->
          <div class="space-y-1.5">
            <label class="block font-semibold text-neutral-200">
              {{ $t('contact.form.subject_label') }}
            </label>
            <input 
              v-model="form.subject"
              type="text" 
              :placeholder="$t('contact.form.subject_placeholder')"
              class="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-[#ffc107] rounded-xl text-white outline-none transition-colors placeholder:text-neutral-600"
            />
          </div>

          <!-- Rincian Pesan -->
          <div class="space-y-1.5">
            <label class="block font-semibold text-neutral-200">
              {{ $t('contact.form.message_label') }} <span class="text-[#ffc107]">*</span>
            </label>
            <textarea 
              v-model="form.message"
              rows="4" 
              required
              :placeholder="$t('contact.form.message_placeholder')"
              class="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-[#ffc107] rounded-xl text-white outline-none transition-colors placeholder:text-neutral-600 resize-none"
            ></textarea>
          </div>

          <!-- Tombol Kirim WhatsApp -->
          <button 
            type="submit" 
            class="w-full py-3.5 bg-[#ffc107] hover:bg-[#e0a800] text-neutral-950 font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            {{ $t('contact.form.submit_button') }}
          </button>
        </form>
      </div>

      <!-- KARTU INFO KONTAK LANGSUNG (KANAN) -->
      <div class="lg:col-span-5 space-y-6">
        
        <div class="p-6 sm:p-8 bg-neutral-900/90 rounded-3xl border border-neutral-800 space-y-6 shadow-xl">
          <div class="space-y-1 border-b border-neutral-800 pb-4">
            <h2 class="text-lg font-bold text-white">
              {{ $t('contact.info.title') }}
            </h2>
            <p class="text-xs text-neutral-400 leading-relaxed">
              {{ $t('contact.info.subtitle') }}
            </p>
          </div>

          <div class="space-y-5 text-xs">
            
            <!-- WhatsApp Direct Item -->
            <a 
              :href="`https://wa.me/${whatsappNumber}`" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-start gap-4 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-[#ffc107]/50 transition-colors group"
            >
              <div class="p-2.5 rounded-xl bg-[#0b4251] text-[#ffc107] shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold text-white group-hover:text-[#ffc107] transition-colors">
                  {{ $t('contact.info.wa_direct') }}
                </p>
                <p class="text-neutral-300 font-mono text-[11px] mt-0.5">+62 851-2345-6789</p>
                <p class="text-[10px] text-neutral-400 mt-0.5">{{ $t('contact.info.wa_desc') }}</p>
              </div>
            </a>

            <!-- Email Direct Item -->
            <a 
              href="mailto:contact@jakwircode.com" 
              class="flex items-start gap-4 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-[#ffc107]/50 transition-colors group"
            >
              <div class="p-2.5 rounded-xl bg-[#0b4251] text-[#ffc107] shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="font-bold text-white group-hover:text-[#ffc107] transition-colors">
                  {{ $t('contact.info.email_direct') }}
                </p>
                <p class="text-neutral-300 font-mono text-[11px] mt-0.5">contact@jakwircode.com</p>
              </div>
            </a>

            <!-- Location Item -->
            <div class="flex items-start gap-4 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/80">
              <div class="p-2.5 rounded-xl bg-[#0b4251] text-[#ffc107] shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="font-bold text-white">
                  {{ $t('contact.info.location') }}
                </p>
                <p class="text-neutral-300 text-[11px] mt-0.5">{{ $t('contact.info.location_desc') }}</p>
              </div>
            </div>

            <!-- Hours Item -->
            <div class="flex items-start gap-4 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/80">
              <div class="p-2.5 rounded-xl bg-[#0b4251] text-[#ffc107] shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="font-bold text-white">
                  {{ $t('contact.info.hours') }}
                </p>
                <p class="text-neutral-300 text-[11px] mt-0.5">{{ $t('contact.info.hours_desc') }}</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>
</template>