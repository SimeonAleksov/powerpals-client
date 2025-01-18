<template>
  <button
    class="button"
    :class="[
      `button--${variant}`,
      `button--${size}`,
      { 'button--loading': loading }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <span v-if="loading" class="button__loader">
      <span class="button__loader-dot"></span>
      <span class="button__loader-dot"></span>
      <span class="button__loader-dot"></span>
    </span>
    <span v-else class="button__content">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  block?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  block: false
})

defineEmits(['click'])
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  min-width: 120px;

  &--block {
    width: 100%;
  }

  &--primary {
    background: linear-gradient(135deg, $color-purple-dark, $color-blue);
    color: $color-background;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba($color-purple-dark, 0.3);
    }

    :root.dark & {
      box-shadow: 0 4px 12px rgba($color-purple-dark, 0.5);
    }
  }

  &--secondary {
    background: $color-cyan;
    color: $color-background;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba($color-cyan, 0.3);
    }
  }

  &--outline {
    background: transparent;
    border: 2px solid $color-primary;
    color: $color-text;

    &:hover:not(:disabled) {
      background: rgba($color-primary, 0.1);
    }

    :root.dark & {
      border-color: $color-cyan;
      color: $color-cyan;

      &:hover:not(:disabled) {
        background: rgba($color-cyan, 0.1);
      }
    }
  }

  &--text {
    background: transparent;
    color: $color-text;
    min-width: auto;

    &:hover:not(:disabled) {
      background: rgba($color-text, 0.1);
    }

    :root.dark & {
      color: $color-text-light;

      &:hover:not(:disabled) {
        background: rgba($color-text-light, 0.1);
      }
    }
  }

  &--sm {
    padding: 8px 16px;
    font-size: 0.875rem;
    height: 32px;
  }

  &--md {
    padding: 10px 20px;
    font-size: 1rem;
    height: 40px;
  }

  &--lg {
    padding: 12px 24px;
    font-size: 1.125rem;
    height: 48px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: $color-background-secondary;
    color: $color-text-light;
    border: none;
    box-shadow: none;
    transform: none;
  }

  &__loader {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
  }

  &__loader-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: currentColor;
    animation: loading 1s infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes loading {
  0%, 100% {
    opacity: 0.5;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
