<template>
  <header class="base-item__header">
    <img
      :src="character.image"
      class="base-item__img"
    >
    <div class="base-item__header-content">
      <h3 class="base-item__title">
        {{ character.name }}
      </h3>
      <span class="base-item__subtitle">
        {{ character.species }} from {{ character.location.name }}
      </span>
    </div>
  </header>
</template>

<script>
export default {
    props: {
        character: {
            type: Object,
            required: true
        }
    }
}
</script>
