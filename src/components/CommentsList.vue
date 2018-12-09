<template>
  <section class="comments">
    <CommentForm
      :episode-id="episodeId"
      @commentWasAdded="loadComments"
    />
    <CommentItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </section>
</template>

<script>
import CommentItem from '@/components/CommentItem.vue'
import CommentForm from '@/components/CommentForm.vue'
import { fetchComments } from '@/api'

export default {
    components: {
        CommentItem,
        CommentForm
    },
    props: {
        episodeId: {
            type: [String, Number],
            required: true
        }
    },
    data() {
        return {
            comments: []
        }
    },
    mounted() {
        this.loadComments()
    },
    methods: {
        async loadComments() {
            const comments = await fetchComments(this.episodeId)
            this.comments = comments.results
        }
    }
}
</script>
