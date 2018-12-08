<template>
  <ul class="episodes__list">
    <template v-if="isLoading">
      <li
        v-for="i in 3"
        :key="i"
      >
        <ContentPlaceholders class="episodes__fake-item">
          <ContentPlaceholdersHeading />
        </ContentPlaceholders>
      </li>
    </template>
    <template v-else>
      <li
        v-for="episode in episodes"
        :key="episode.id"
      >
        <slot :episode="episode" />
      </li>
    </template>
  </ul>
</template>

<script>
export default {
    props: {
        episodes: {
            type: Array,
            reguired: true,
            default() {
                return [];
            }
        },
        isLoading: {
            type: Boolean,
            required: true
        }
    }
}
</script>
