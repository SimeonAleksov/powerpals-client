<template>
  <header class="header">
    <nav class="header__nav">
      <NuxtLink to="/" class="header__logo">PowerPals</NuxtLink>

      <!-- Desktop Menu -->
      <div class="header__menu header__menu--desktop">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="header__menu-item"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="header__actions">
        <button class="header__theme-toggle" @click="toggleTheme">
          <span v-if="isDark" class="header__theme-icon">🌞</span>
          <span v-else class="header__theme-icon">🌙</span>
        </button>

        <!-- Desktop Actions -->
        <div class="header__buttons header__buttons--desktop">
    <Button variant="text" size="sm" @click="showSignIn = true">
      Sign In
    </Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="header__mobile-toggle" @click="toggleMobileMenu">
          <span class="header__mobile-icon"></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="header__mobile" :class="{ 'header__mobile--open': isMobileMenuOpen }">
      <div class="header__mobile-content">
        <div class="header__mobile-links">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="header__mobile-item"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
        <div class="header__mobile-buttons">
          <Button variant="text" block @click="closeMobileMenu">Sign In</Button>
          <Button variant="primary" block @click="closeMobileMenu">Get Started</Button>
        </div>
      </div>
    </div>
  </header>
  <SignInModal v-model="showSignIn" />
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
const { isDark, toggleTheme } = useTheme()
import { ref } from 'vue'
import SignInModal from '@/components/auth/SignInModal.vue'

const isMobileMenuOpen = ref(false)
const showSignIn = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close mobile menu on route change
watch(() => useRoute().fullPath, () => {
  closeMobileMenu()
})

const menuItems = [
  { label: 'Services', path: '/services' },
  { label: 'Become a Provider', path: '/become-provider' },
  { label: 'About', path: '/about' },
]
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: $z-index-header;
  background: $color-background;
  border-bottom: 1px solid $color-border;
  height: 64px;

  &__nav {
    max-width: $container-max-width;
    height: 100%;
    margin: 0 auto;
    padding: 0 $container-padding;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    color: $color-purple;
    transition: $transition-base;
    z-index: $z-index-header + 1;

    &:hover {
      color: darken($color-purple, 10%);
    }
  }

  &__menu {
    display: flex;
    gap: 32px;
    margin-left: 48px;

    &--desktop {
      @media (max-width: $breakpoint-md) {
        display: none;
      }
    }
  }

  &__menu-item {
    text-decoration: none;
    color: $color-text-light;
    font-size: 0.9375rem;
    font-weight: 500;
    padding: 8px 0;
    transition: $transition-base;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: $color-purple;
      transition: $transition-base;
    }

    &:hover, &.router-link-active {
      color: $color-text;

      &::after {
        width: 100%;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__buttons {
    display: flex;
    gap: 16px;

    &--desktop {
      @media (max-width: $breakpoint-md) {
        display: none;
      }
    }
  }

  &__theme-toggle {
    padding: 8px;
    border-radius: $border-radius-md;
    cursor: pointer;
    background: transparent;
    border: none;
    color: $color-text;
    transition: $transition-base;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;

    &:hover {
      background: rgba($color-purple, 0.1);
    }
  }

  &__mobile-toggle {
    display: none;
    width: 24px;
    height: 24px;
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    z-index: $z-index-header + 1;

    @media (max-width: $breakpoint-md) {
      display: block;
    }
  }

  &__mobile-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 2px;
    background-color: $color-text;
    transition: $transition-base;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: $color-text;
      transition: $transition-base;
    }

    &::before {
      top: -8px;
    }

    &::after {
      top: 8px;
    }

    .header__mobile--open & {
      background-color: transparent;

      &::before {
        transform: rotate(45deg);
        top: 0;
      }

      &::after {
        transform: rotate(-45deg);
        top: 0;
      }
    }
  }

  &__mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: $color-background;
    padding: 80px $spacing-xl $spacing-xl;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: $z-index-header;
    overflow-y: auto;

    &--open {
      transform: translateX(0);
    }
  }

  &__mobile-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__mobile-links {
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;
  }

  &__mobile-item {
    font-size: 1.25rem;
    color: $color-text;
    text-decoration: none;
    padding: $spacing-md 0;
    transition: $transition-base;

    &:hover {
      color: $color-purple;
    }
  }

  &__mobile-buttons {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    margin-top: auto;
  }
}
</style>
