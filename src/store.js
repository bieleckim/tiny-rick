import Vue from 'vue'
import Vuex from 'vuex'
import { postQuizAnswers } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: {
      summary: {}
    }
  },
  getters: {
    quizSummary: (state) => {
      return state.quiz.summary
    }
  },
  mutations: {
    updateQuizSummary(state, summary) {
      state.quiz.summary = summary
    }
  },
  actions: {
    async postQuizAnswers ({ commit }, answers) {
      const summary = await postQuizAnswers(answers)
      commit('updateQuizSummary', summary)
    }
  }
})
