<template>
  <Component
    :is="component"
    @start="start"
    @summary="summary"
    @startAgain="startAgain"
  />
</template>

<script>
import QuizStart from '@/components/QuizStart.vue'
import QuizQuestions from '@/components/QuizQuestions.vue'
import QuizSummary from '@/components/QuizSummary.vue'

export default {
    data() {
        return {
            component: QuizStart
        }
    },
    methods: {
        start() {
            this.component = QuizQuestions
        },
        summary() {
            this.component = QuizSummary
        },
        startAgain() {
            this.component = QuizStart
        }
    }
}
</script>
