<template>
  <div class="base-item">
    <header class="base-item__header">
      <div class="base-item__header-content">
        <h3 class="base-item__title">
          {{ comment.author }}
        </h3>
        <span class="base-item__subtitle">
          {{ timeAgo }}
        </span>
      </div>
    </header>
  
    <p class="base-item__content">
      {{ comment.content }}
    </p>
  </div>
</template>

<script>
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en')

export default {
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    computed: {
        timeAgo() {
            const date = Date.parse(this.comment.created)
            return timeAgo.format(date)
        }
    }
}
</script>
