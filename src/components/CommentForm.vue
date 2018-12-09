<template>
  <form class="comments__form">
    <textarea
      v-model="comment.content"
      placeholder="Your comment here"
    />
    <div class="comments__bar">
      <input
        v-model="comment.author"
        type="text"
        placeholder="Username"
      >
      <button
        type="submit"
        @click.prevent="postComment"
      >
        <PlusIcon />
      </button>
    </div>
  </form>
</template>

<script>
import PlusIcon from '@/assets/icon-add.svg'
import { postComment } from '@/api'

export default {
    components: {
        PlusIcon
    },
    props: {
        episodeId: {
            type: [String, Number],
            required: true
        }
    },
    data() {
        return {
            comment: {
                author: '',
                content: ''
            }
        }
    },
    methods: {
        async postComment() {
            await postComment(this.episodeId, this.comment)
            this.comment.content = this.comment.author = ''
            this.$emit('commentWasAdded')
        }
    }
}
</script>
