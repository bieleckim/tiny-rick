<template>
  <div>
    <ContentPlaceholders v-if="!characters.length">
      <ContentPlaceholdersHeading />
    </ContentPlaceholders>

    <TransitionGroup
      name="bounce"
      tag="div"
    >
      <div
        v-for="character in characters"
        :key="character.id"
        class="base-item"
      >
        <CharacterItem :character="character" />
      </div>
    </TransitionGroup>
    <div
      v-if="showLoadMoreButton"
      class="link-container"
    >
      <button
        class="primary-link is-big"
        @click="loadCharacters"
      >
        Show more
      </button>
    </div>
  </div>
</template>

<script>
import CharacterItem from '@/components/CharacterItem.vue'
import { fetchCharacter } from '@/api'

export default {
    components: {
        CharacterItem
    },
    props: {
        ids: {
            type: Array,
            required: true,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            characters: [],
        }
    },
    computed: {
        showLoadMoreButton() {
            return this.ids.length > 0
        }
    },
    mounted() {
        this.loadCharacters()
    },
    methods: {
        async loadCharacters() {
            const ids = this.ids.splice(0, 5).join(',')
            const characters = await fetchCharacter(ids)
            this.characters = this.characters.concat(characters);
        }
    }
}
</script>

<style>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>