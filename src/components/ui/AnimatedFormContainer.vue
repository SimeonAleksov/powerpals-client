<template>
  <Transition
    enter-active-class="animate-in"
    leave-active-class="animate-out"
  >
    <div v-if="show" class="form-container">
      <slot></slot>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.form-container {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.animate-in {
  animation: slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-out {
  animation: slideOut 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
