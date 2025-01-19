<template>
  <div class="input-wrapper">
    <label
      v-if="label"
      :for="id"
      class="input__label"
    >
      {{ label }}
      <span v-if="required" class="input__required">*</span>
    </label>

    <div class="input__container">
      <input
        :id="id"
        ref="input"
        v-bind="$attrs"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="[
          'input',
          `input--${size}`,
          {
            'input--error': error,
            'input--success': success,
            'input--disabled': disabled
          }
        ]"
        @input="onInput"
        @blur="onBlur"
        @focus="onFocus"
      >

      <div v-if="$slots.prefix" class="input__prefix">
        <slot name="prefix" />
      </div>

      <div v-if="$slots.suffix" class="input__suffix">
        <slot name="suffix" />
      </div>
    </div>

    <div v-if="error" class="input__error">
      {{ error }}
    </div>
    <div v-if="hint" class="input__hint">
      {{ hint }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  modelValue: string
  label?: string
  placeholder?: string
  type?: string
  size?: 'sm' | 'md' | 'lg'
  error?: string
  success?: boolean
  disabled?: boolean
  required?: boolean
  hint?: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  placeholder: '',
  disabled: false,
  required: false,
  id: `input-${Math.random().toString(36).substr(2, 9)}`
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

const input = ref<HTMLInputElement | null>(null)

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const onBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const onFocus = (event: FocusEvent) => {
  emit('focus', event)
}

// Method to focus input programmatically
const focus = () => {
  input.value?.focus()
}

defineExpose({ focus })
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input {
  width: 100%;
  border: 2px solid $color-border;
  background: $color-background;
  color: $color-text;
  border-radius: $border-radius-md;
  transition: $transition-base;
  font-family: $font-primary;

  &::placeholder {
    color: rgba($color-text-light, 0.5);
  }

  &:hover:not(&--disabled) {
    border-color: rgba($color-primary, 0.5);
  }

  &:focus {
    outline: none;
    border-color: $color-primary;
    box-shadow: 0 0 0 4px rgba($color-primary, 0.1);
  }

  // Sizes
  &--sm {
    padding: 8px 12px;
    font-size: 0.875rem;
  }

  &--md {
    padding: 10px 16px;
    font-size: 1rem;
  }

  &--lg {
    padding: 12px 20px;
    font-size: 1.125rem;
  }

  // States
  &--error {
    border-color: #ef4444;

    &:focus {
      box-shadow: 0 0 0 4px rgba(#ef4444, 0.1);
    }
  }

  &--success {
    border-color: #10b981;

    &:focus {
      box-shadow: 0 0 0 4px rgba(#10b981, 0.1);
    }
  }

  &--disabled {
    background: $color-background-secondary;
    border-color: $color-border;
    color: $color-text-light;
    cursor: not-allowed;
  }
}

.input__container {
  position: relative;
  display: flex;
  align-items: center;
}

.input__label {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  color: $color-text;
}

.input__required {
  color: #ef4444;
  margin-left: 4px;
}

.input__error {
  font-size: 0.875rem;
  color: #ef4444;
}

.input__hint {
  font-size: 0.875rem;
  color: $color-text-light;
}

.input__prefix {
  position: absolute;
  left: 12px;
  color: $color-text-light;
  display: flex;
  align-items: center;

  & + input {
    padding-left: 36px;
  }
}

.input__suffix {
  position: absolute;
  right: 12px;
  color: $color-text-light;
  display: flex;
  align-items: center;

  & + input {
    padding-right: 36px;
  }
}
</style>
