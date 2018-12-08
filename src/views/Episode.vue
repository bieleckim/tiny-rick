<template>
  <div>
    <h1>Episode</h1>

    <RouterLink
      to="/"
      class="go-back-link"
    >
      <ArrowIcon />
      Search results
    </RouterLink>

    <template v-if="episode">
      <div class="episode__content">
        <div class="episode__left-col">
          <div class="episode-details">  
            <EpisodeItem :episode="episode">
              <div class="episode-info">
                <span class="episode-info__label">
                  Air date
                </span>
                <span class="episode-info__value">
                  {{ episode.air_date }}
                </span>
              </div>
            </EpisodeItem>
          </div>
          <h2>Characters</h2>

          <div class="characters-list">
            <CharactersList :ids="charactersIds" />
          </div>
        </div>
                
        <div class="episode__right-col">
          <h2>Comments</h2>
          <!-- Comments -->
        </div>
      </div>
    </template>
    <template v-else>
      <ContentPlaceholders>
        <ContentPlaceholdersHeading />
      </ContentPlaceholders>
    </template>
  </div>
</template>

<script>
import ArrowIcon from '@/assets/icon-arrow-left.svg'
import EpisodeItem from '@/components/EpisodeItem.vue'
import CharactersList from '@/components/CharactersList.vue'
import { fetchEpisode } from '@/api'

export default {
    components: {
        ArrowIcon,
        EpisodeItem,
        CharactersList
    },
    props: {
        id: {
            type: [String, Number],
            required: true
        }
    },
    data() {
        return {
            episode: false,
            charactersIds: []
        }
    },
    mounted() {
        this.loadEpisode()
    },
    methods: {
        async loadEpisode() {
            this.episode = await fetchEpisode(this.id)
            this.charactersIds = this.episode.characters
            .map(characterUrl => characterUrl.match(/\/(\d+)$/)[1])
        }
    }
}
</script>
