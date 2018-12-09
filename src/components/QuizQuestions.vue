<template>
  <section class="quiz">
    <form
      v-if="question"
      class="quiz__form"
    >
      <div class="quiz__container">
        <div class="quiz__image-box quiz__image-box--hideable" />

        <div class="quiz__question-box">
          <div class="quiz__question-info">
            <h1 class="quiz__step">
              Question {{ question.id }}
            </h1>
            <div class="quiz__wizard">
              <span class="quiz__wizard-text">
                {{ questionsLeft }} questions left
              </span>
              <div
                class="quiz__wizard--inner"
                :style="stepBarStyle"
              />
            </div>
            <span class="quiz__question">
              {{ question.value }}
            </span>
          </div>

          <div class="quiz__bottom-panel">
            <template v-if="isTextQuestion">
              <input
                v-model="answer"
                type="text"
                :name="question.value"
                class="quiz__answer quiz__answer--text"
              >

              <button
                class="quiz__button quiz__button--primary"
                @click.prevent="submitAnswer"
              >
                Next
              </button>
            </template>

            <template v-else>
              <label
                v-for="option in question.options"
                :key="option.id"
                class="quiz__answer quiz__answer--select"
              >
                <input
                  v-model="answer"
                  type="radio"
                  :name="question.value"
                  :value="option.id"
                  @change="submitAnswer"
                >
                {{ option.value }}
              </label>
            </template>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { fetchQuestions } from '@/api'
import store from '@/store'

export default {
    data() {
        return {
            questions: [],
            answers: [],
            questionsCount: 0,
            answer: ''
        }
    },
    computed: {
        question() {
            return this.questions[0] || false
        },
        isTextQuestion() {
            return this.question.type === 'text'
        },
        questionsLeft() {
            return this.questions.length
        },
        stepBarStyle() {
            let width = 0
            if (this.answers.length > 0) {
                const singleQuestionWidth = 100 / this.questionsCount
                width = this.answers.length * singleQuestionWidth
            }

            return {
                width: width + '%'
            }
        }
    },
    mounted() {
        this.loadQuestions()
    },
    methods: {
        next() {
            this.$emit('summary')
        },
        async loadQuestions() {
            this.questions = await fetchQuestions()
            this.questionsCount = this.questions.length
        },
        async submitAnswer() {
            this.answers.push({
                questionId: this.question.id,
                answer: this.answer
            })

            this.answer = ''
            this.questions.shift()

            if (this.questions.length === 0) {
                store.dispatch('postQuizAnswers', this.answers);
                this.answers = []
                this.next()
            }
        }
    }
}
</script>
