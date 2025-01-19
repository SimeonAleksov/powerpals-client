<template>
  <Transition name="modal">
    <div v-if="modelValue" class="modal">
      <div class="modal__backdrop" @click="close" />

      <div
        class="modal__content"
        :class="[
          `modal__content--${size}`,
          { 'modal__content--scrollable': scrollable }
        ]"
      >
        <div v-if="$slots.header || title" class="modal__header">
          <slot name="header">
            <h3 class="modal__title">{{ title }}</h3>
          </slot>
          <button class="modal__close" @click="close">
            <X class="modal__close-icon" />
          </button>
        </div>

        <div class="modal__body">
          <slot />
        </div>

        <div v-if="$slots.footer" class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { onMounted, onUnmounted } from 'vue'

interface Props {
  modelValue: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg'
  scrollable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  scrollable: false
})

const emit = defineEmits(['update:modelValue', 'close'])

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

// Handle escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.modelValue) {
    close()
  }
}

// Handle body scroll
const lockScroll = () => {
  document.body.style.overflow = 'hidden'
}

const unlockScroll = () => {
  document.body.style.overflow = ''
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  unlockScroll()
})

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    lockScroll()
  } else {
    unlockScroll()
  }
})
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: $z-index-modal;
  padding: 16px;

  &__backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color-text, 0.2);
    backdrop-filter: blur(8px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__content {
    position: relative;
    background: $color-background;
    border-radius: $border-radius-lg;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05),
      0 0 0 1px rgba(0, 0, 0, 0.05);
    width: 100%;
    max-height: calc(100vh - 32px);
    display: flex;
    flex-direction: column;
    transform-origin: center center;

    &--sm {
      max-width: 400px;
    }

    &--md {
      max-width: 560px;
    }

    &--lg {
      max-width: 720px;
    }

    &--scrollable {
      .modal__body {
        overflow-y: auto;
      }
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid $color-border;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    color: $color-text;
    line-height: 1.4;
  }

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: $border-radius-md;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: $transition-base;
    color: $color-text-light;
    margin-left: 16px;

    &:hover {
      background: rgba($color-text, 0.05);
      color: $color-text;
    }
  }

  &__close-icon {
    width: 20px;
    height: 20px;
  }

  &__body {
    padding: 24px;
    flex: 1;
    line-height: 1.6;
    color: $color-text;

    p {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__footer {
    padding: 20px 24px;
    border-top: 1px solid $color-border;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
  }
}

// Transitions
.modal-enter-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  .modal__content {
    transition:
      transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .modal__backdrop {
    transition:
      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      backdrop-filter 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.modal-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  .modal__content {
    transition:
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .modal__backdrop {
    transition:
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      backdrop-filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.modal-enter-from {
  opacity: 0;

  .modal__backdrop {
    opacity: 0;
    backdrop-filter: blur(0px);
  }

  .modal__content {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
}

.modal-leave-to {
  opacity: 0;

  .modal__backdrop {
    opacity: 0;
    backdrop-filter: blur(0px);
  }

  .modal__content {
    opacity: 0;
    transform: scale(0.98) translateY(10px);
  }
}

:root.dark .modal {
  &__content {
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.2),
      0 4px 6px -2px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  &__backdrop {
    background: rgba($color-text, 0.4);
  }

  &__close {
    &:hover {
      background: rgba($color-text-light, 0.1);
    }
  }
}
</style>
