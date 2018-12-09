<template>
  <section class="quiz">
    <div class="quiz__container">
      <div class="quiz__image-box quiz__image-box--flexible" />
      <div class="quiz__text-box">
        <header class="quiz__header">
          <h1>Which character are you?</h1>
          <h2>Find out which character from the series you are</h2>
        </header>
        <div class="quiz__bottom-panel">
          <button
            class="quiz__button quiz__button--primary"
            @click="start"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    methods: {
        start() {
            this.$emit('start')
        }
    }
}
</script>
