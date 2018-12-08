<template>
  <RouterLink
    :to="{ name: 'episode', params: { id: episode.id }}"
    class="episode-item"
  >
    <h3 class="episode-item__num">
      Episode {{ episode.episode | episodeNumber | toNumber }}
    </h3>
    <h2 class="episode-item__name">
      {{ episode.name }}
    </h2>
    <span class="episode-item__season-badge">
      Season {{ seasonNumber }}
    </span>
    <slot />
  </RouterLink>
</template>

<script>
export default {
    filters: {
        episodeNumber(episodeCode) {
            return episodeCode.match(/E(\d\d)/)[1]
        },
        toNumber(value) {
            return Number(value)
        }
    },
    props: {
        episode: {
            type: Object,
            required: true
        }
    },
    computed: {
        seasonNumber() {
            return Number(this.episode.episode.match(/S(\d\d)/)[1])
        }
    }
}
</script>
