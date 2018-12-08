<template>
  <div 
    v-infinite-scroll="loadEpisodes"
    infinite-scroll-disabled="isLoading"
  >
    <h1 class="episodes__title">
      Episodes
    </h1>

    <div class="episodes__search">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        @input="search"
      >
    </div>

    <EspisodesList
      :episodes="episodes"
      :is-loading="isInitialLoad"
    >
      <EpisodeItem
        slot-scope="{ episode }"
        :episode="episode"
      />
    </EspisodesList>

    <div
      v-if="isScrollLoad"
      class="episodes__loader"
    >
      Loading more
    </div>
  </div>
</template>

<script>
import SearchIcon from '@/assets/icon-search.svg'
import EspisodesList from '@/components/EpisodesList.vue'
import EpisodeItem from '@/components/EpisodeItem.vue'
import { fetchEpisodes } from '@/api'
import { debounce } from 'lodash';
 
export default {
    components: {
        SearchIcon,
        EspisodesList,
        EpisodeItem,
    },
    data() {
        return {
            episodes: [],
            isLoading: false,
            page: 1,
            allPages: 0,
            searchQuery: '',
        }
    },
    computed: {
        isInitialLoad() {
            return this.isLoading && this.page === 1
        },
        isScrollLoad() {
            return this.isLoading && this.page > 1;
        }
    },
    methods: {
        async loadEpisodes() {
            if (this.page !== 1 && this.page > this.allPages) {
                return
            }

            this.isLoading = true
            const episodes = await fetchEpisodes(this.page, this.searchQuery)
            this.allPages = episodes.info.pages
            this.page++
            this.episodes = this.episodes.concat(episodes.results)
            this.isLoading = false
        },
        search: debounce(function(event) {
            this.searchQuery = event.target.value
            this.page = 1
            this.episodes = []
            this.loadEpisodes()
        }, 200)
    }
}
</script>
