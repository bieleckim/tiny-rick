<template>
  <section class="quiz">
    <div class="quiz__container">
      <img
        :src="quizSummary.image"
        class="quiz__image-box quiz__image-box--fixed"
      >

      <div class="quiz__text-box">
        <header class="quiz__header">
          <h1 class="quiz__character-name">
            {{ quizSummary.name }}
          </h1>
          <h2>Find out which character from the series you are</h2>
        </header>

        <div class="quiz__bottom-panel">
          <button
            class="quiz__button quiz__button--primary"
            @click="startAgain"
          >
            Start again
          </button>
        
          <RouterLink to="/">
            <button class="quiz__button quiz__button--secondary">
              Back to home
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            summary: {}
        }
    },
    computed: {
        ...mapGetters([
        'quizSummary',
        ])
    },
    methods: {
        startAgain() {
            this.$emit('startAgain')
        }
    }
}
</script>
