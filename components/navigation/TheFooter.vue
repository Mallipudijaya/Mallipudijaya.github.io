<script setup lang="ts">
const defaultSong = {
  track: 'Khalasi',
  artist: 'Coke Studio',
  duration: 0,
  album: 'Unknown Album',
}
const song = defaultSong 
</script>

<template>
  <div class="px-3 mb-3 print:hidden">
    <footer
      class="backdrop-blur-sm z-1 container lg:mx-auto max-w-6xl flex  justify-between flex-wrap  py-3 dark:bg-zinc-900/30 bg-white/30 border border-zinc-300 dark:border-zinc-600 my-6 rounded-full px-8 "
    >
      <div class="flex gap-x-1 overflow-hidden truncate pl-4px items-center">
        <span class="relative flex h-3 w-3 mr-1">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cinder-300 opacity-75"
          />
          <span
            class="relative inline-flex rounded-full h-3 w-3 bg-cinder-400"
          />
        </span>
        Listening to
        <div v-if="pending">
          a song
        </div>
        <div v-else class="truncate overflow-hidden">
          <NuxtLink :to="song.url" class=" underline underline-offset-3 font-medium">
            {{
              song.track
            }}
            by {{ song.artist }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <div class="flex-none">
  <a href="https://github.com/owlnai/resume-site" target="_blank" rel="noopener noreferrer">
    Designed by Unai Mengual
  </a>
  <p>Revised by Jayashree Mallipudi</p>
</div>
      </div>
    </footer>
  </div>
</template>
