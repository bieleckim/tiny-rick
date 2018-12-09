<template>
  <header class="header">
    <RouterLink
      to="/"
      class="header__logo"
    >
      <Logo />
    </RouterLink>

    <button
      class="header__nav-trigger"
      @click="toggleMenu"
    >
      <HamburgerIcon v-if="!isMenuDisplayed" />
      <CloseIcon v-else />
    </button>

    <nav
      class="header__nav"
      :class="{'is-visible': isMenuDisplayed}"
    >
      <RouterLink
        class="header__nav-link"
        to="/"
      >
        Episodes
      </RouterLink>
      <RouterLink
        class="header__nav-link"
        to="/quiz"
      >
        Quiz
      </RouterLink>
    </nav>
  </header>
</template>

<script>
import Logo from '@/assets/logo.svg'
import HamburgerIcon from '@/assets/icon-menu.svg'
import CloseIcon from '@/assets/icon-close.svg'

export default {
  components: {
    Logo,
    HamburgerIcon,
    CloseIcon
  },
  data() {
    return {
      isMenuDisplayed: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuDisplayed = !this.isMenuDisplayed
    }
  }
}
</script>
