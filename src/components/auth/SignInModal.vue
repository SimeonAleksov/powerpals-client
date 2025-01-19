<template>
  <Modal v-model="isOpen" size="sm">
    <template #header>
      <div class="signin__header">
        <h3 class="signin__title">Welcome back</h3>
        <p class="signin__subtitle">Sign in to your account</p>
      </div>
    </template>

    <form class="signin__form" @submit.prevent="handleSubmit">
      <div class="signin__inputs">
        <Input
          v-model="email"
          label="Email"
          type="email"
          required
          :error="errors.email"
        >
          <template #prefix>
            <Mail class="input__icon" />
          </template>
        </Input>

        <Input
          v-model="password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          required
          :error="errors.password"
        >
          <template #prefix>
            <Lock class="input__icon" />
          </template>
          <template #suffix>
            <div
              class="input__icon input__icon--clickable"
              @click="showPassword = !showPassword"
            >
              <Eye v-if="!showPassword" />
              <EyeOff v-else />
            </div>
          </template>
        </Input>
      </div>

      <div class="signin__options">
        <div class="signin__remember">
          <input
            type="checkbox"
            id="remember"
            v-model="rememberMe"
            class="signin__checkbox"
          >
          <label for="remember">Remember me</label>
        </div>
        <button
          type="button"
          class="signin__forgot"
          @click="handleForgotPassword"
        >
          Forgot password?
        </button>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        :loading="loading"
        block
      >
        Sign In
      </Button>

      <div class="signin__divider">
        <span>or continue with</span>
      </div>

      <div class="signin__social">
        <Button variant="outline" block>
          <template #prefix>
            <img
              src="/google.svg"
              alt="Google"
              class="signin__social-icon"
            >
          </template>
          Google
        </Button>
      </div>
    </form>

    <div class="signin__footer">
      <p>
        Don't have an account?
        <button
          class="signin__link"
          @click="handleCreateAccount"
        >
          Create one
        </button>
      </p>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Lock, Eye, EyeOff } from 'lucide-vue-next'
import Modal from '@/components/ui/Modal.vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'

interface Props {
  modelValue: boolean
}

const emit = defineEmits(['update:modelValue'])

const isOpen = defineModel<boolean>()

// Form state
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const loading = ref(false)
const errors = ref({
  email: '',
  password: ''
})

// Handlers
const handleSubmit = async () => {
  loading.value = true
  errors.value = { email: '', password: '' }

  try {
    // Add your authentication logic here
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Success
    isOpen.value = false
  } catch (error) {
    errors.value.email = 'Invalid email or password'
  } finally {
    loading.value = false
  }
}

const handleForgotPassword = () => {
  // Handle forgot password flow
  console.log('Forgot password')
}

const handleCreateAccount = () => {
  // Handle create account flow
  console.log('Create account')
}
</script>

<style lang="scss" scoped>
.signin {
  &__header {
    text-align: center;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    color: $color-text;
    margin-bottom: 4px;
  }

  &__subtitle {
    font-size: 0.875rem;
    color: $color-text-light;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
  }

  &__remember {
    display: flex;
    align-items: center;
    gap: 8px;
    color: $color-text;
  }

  &__checkbox {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 2px solid $color-border;
    cursor: pointer;

    &:checked {
      background-color: $color-primary;
      border-color: $color-primary;
    }
  }

  &__forgot {
    color: $color-primary;
    font-weight: 500;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: $transition-base;

    &:hover {
      color: darken($color-primary, 10%);
      text-decoration: underline;
    }
  }

  &__divider {
    position: relative;
    text-align: center;
    margin: 8px 0;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
      background: $color-border;
    }

    span {
      position: relative;
      background: $color-background;
      padding: 0 16px;
      color: $color-text-light;
      font-size: 0.875rem;
    }
  }

  &__social {
    display: flex;
    gap: 12px;
  }

  &__social-icon {
    width: 20px;
    height: 20px;
  }

  &__footer {
    text-align: center;
    margin-top: 24px;
    font-size: 0.875rem;
    color: $color-text-light;
  }

  &__link {
    color: $color-primary;
    font-weight: 500;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: $transition-base;

    &:hover {
      color: darken($color-primary, 10%);
      text-decoration: underline;
    }
  }
}
</style>
