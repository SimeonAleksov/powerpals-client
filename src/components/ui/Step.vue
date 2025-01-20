<template>
  <div class="stepper">
    <div class="stepper-container">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="step-item"
        :class="{
          'active': currentStep >= index,
          'completed': currentStep > index
        }"
      >
        <div class="step-indicator">
          <span v-if="currentStep > index" class="step-check">✓</span>
          <span v-else>{{ index + 1 }}</span>
        </div>
        <div class="step-label">{{ step.label }}</div>
        <div v-if="index < steps.length - 1" class="step-connector"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
    // Expected format: [{ label: 'Step 1' }, { label: 'Step 2' }]
  },
  currentStep: {
    type: Number,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.stepper {
  width: 100%;
  padding: $spacing-lg 0;

  .stepper-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: $container-max-width;
    margin: 0 auto;
    padding: 0 $container-padding;
  }

  .step-item {
    display: flex;
    align-items: center;
    position: relative;
    flex: 1;

    &.active {
      .step-indicator {
        background-color: $color-purple;
        color: var(--color-bg-primary);
      }

      .step-label {
        color: var(--color-text-primary);
      }
    }

    &.completed {
      .step-indicator {
        background-color: $color-cyan;
      }

      .step-connector {
        background-color: $color-cyan;
      }
    }
  }

  .step-indicator {
    width: 32px;
    height: 32px;
    border-radius: $border-radius-full;
    background-color: var(--color-bg-secondary);
    color: var(--color-text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    transition: $transition-base;
  }

  .step-label {
    margin-left: $spacing-md;
    color: var(--color-text-secondary);
    font-weight: 500;
    transition: $transition-base;
  }

  .step-connector {
    position: absolute;
    top: 50%;
    left: 48px;
    right: 0;
    height: 2px;
    background-color: var(--color-bg-secondary);
    transition: $transition-base;
  }
}
</style>
