<template>
  <Modal v-model="isOpen" size="sm">
    <template #header>
      <div class="register__header">
        <h3 class="register__title">Create Account</h3>
        <p class="register__subtitle">Join us today!</p>
      </div>
    </template>

    <form class="register__form" @submit.prevent="handleRegister">
      <div class="register__inputs">
        <Input v-model="formData.firstName" label="First Name" required />
        <Input v-model="formData.lastName" label="Last Name" required />
        <Input v-model="formData.email" label="Email" type="email" required />
        <Input v-model="formData.password" label="Password" type="password" required />
      </div>

      <Button type="submit" variant="primary" size="lg" block>
        Register
      </Button>
    </form>

    <div class="register__footer">
      <p>
        Already have an account?
        <button
          class="register__link"
          @click="handleSignIn"
        >
          Sign in
        </button>
      </p>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/components/ui/Modal.vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'

// Props for v-model
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  isOpen.value = newValue
})

watch(isOpen, (newValue) => {
  emit('update:modelValue', newValue)
})

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
})

const handleRegister = () => {
  console.log('Registering user:', formData.value)
  emit('update:modelValue', false)
}

const handleSignIn = () => {
  emit('update:modelValue', false)
}
</script>

<style lang="scss" scoped>
.register {
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
