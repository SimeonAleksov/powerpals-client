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
        <svg
          class="signin__social-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
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
