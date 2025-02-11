<template>
  <div
    class="card"
    :class="[
      `card--${variant}`,
      { 'card--hover': hover }
    ]"
  >
    <div v-if="$slots.header" class="card__header">
      <slot name="header" />
    </div>
    <div class="card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'outline' | 'flat'
  hover?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  hover: false
})
</script>

<style lang="scss" scoped>
.card {
  background: $color-background;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;

  &--default {
    box-shadow: 0 4px 6px rgba($color-purple-dark, 0.1);

    :root.dark & {
      background: $color-background-secondary;
      box-shadow: 0 4px 6px rgba($color-purple-dark, 0.2);
    }
  }

  &--outline {
    border: 2px solid $color-border;

    :root.dark & {
      border-color: rgba($color-cyan, 0.2);
    }
  }

  &--flat {
    background: $color-background-secondary;

    :root.dark & {
      background: rgba($color-purple-dark, 0.2);
    }
  }

  &--hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba($color-purple-dark, 0.15);

    :root.dark & {
      box-shadow: 0 8px 15px rgba($color-purple-dark, 0.3);
    }
  }

  &__header {
    padding: $spacing-lg;
    border-bottom: 1px solid $color-border;
  }

  &__body {
    padding: $spacing-lg;
  }

  &__footer {
    padding: $spacing-lg;
    border-top: 1px solid $color-border;
  }
}
</style>
