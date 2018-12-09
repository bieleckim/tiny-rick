<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <Transition
        name="fade"
        mode="out-in"
      >
        <RouterView />
      </Transition>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
}
</script>
