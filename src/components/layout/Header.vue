<template>
  <header class="header">
    <nav class="header__nav">
      <NuxtLink to="/" class="header__logo">
        <span class="header__logo-gradient">PowerPals</span>
      </NuxtLink>

      <div class="header__menu">
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
        <Button variant="text" size="sm">Sign In</Button>
        <Button variant="primary" size="sm">Get Started</Button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'

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
  z-index: 50;
  background: rgba($color-background, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba($color-primary, 0.1);

  &__nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.5rem;
  }

  &__logo-gradient {
    background: linear-gradient(135deg, $color-purple-dark, $color-blue);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__menu {
    display: flex;
    gap: 32px;
  }

  &__menu-item {
    text-decoration: none;
    color: $color-text;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: $color-primary;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>
