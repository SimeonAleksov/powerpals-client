<template>
  <div class="get-started">
    <!-- Success View -->
    <div v-if="isCompleted" class="get-started__success">
      <div class="get-started__container">
        <div class="success-card">
          <div class="success-card__icon">✓</div>
          <h2 class="success-card__title">Welcome Aboard!</h2>
          <p class="success-card__message">
            We've sent a confirmation email to <strong>{{ formData.email }}</strong>.
            Please verify your email to complete your registration.
          </p>
          <div class="success-card__next">
            <p>Meanwhile, you can check your inbox or spam folder.</p>
            <UiButton
              variant="primary"
              size="lg"
              @click="goToHome"
            >
              Go to Homepage
            </UiButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Initial View -->
    <div v-else-if="!showForm" class="get-started__hero">
      <div class="get-started__container">
        <h1 class="get-started__title">Level Up Your Gaming Career</h1>
        <p class="get-started__subtitle">Join our community of gamers offering and seeking expert gaming services</p>
        <UiButton
          variant="primary"
          size="lg"
          @click="showForm = true"
        >
          Get Started
        </UiButton>
      </div>
    </div>

    <!-- Form View -->
    <div v-else class="get-started__content">
      <div class="get-started__container">
        <!-- Progress Indicator -->
        <div class="progress-bar">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="progress-bar__step"
            :class="{
              'progress-bar__step--active': currentStep === index,
              'progress-bar__step--completed': currentStep > index
            }"
          >
            <div class="progress-bar__indicator">
              <span v-if="currentStep > index" class="progress-bar__check">✓</span>
              <span v-else>{{ index + 1 }}</span>
            </div>
            <span class="progress-bar__label">{{ step.label }}</span>
          </div>
        </div>

        <!-- Form Steps -->
        <div class="onboarding-form">
          <!-- Step 1: User Type -->
          <div v-if="currentStep === 0" class="onboarding-form__step">
            <h2 class="onboarding-form__title">Choose Your Path</h2>

            <div class="user-types">
              <div
                class="user-types__option"
                :class="{ 'user-types__option--selected': formData.type === 'client' }"
                @click="formData.type = 'client'"
              >
                <span class="user-types__icon">🎮</span>
                <h3 class="user-types__title">I'm looking for help</h3>
                <p class="user-types__description">Find skilled gamers to help you achieve your goals</p>
              </div>

              <div
                class="user-types__option"
                :class="{ 'user-types__option--selected': formData.type === 'provider' }"
                @click="formData.type = 'provider'"
              >
                <span class="user-types__icon">⭐</span>
                <h3 class="user-types__title">I want to offer my services</h3>
                <p class="user-types__description">Share your expertise and earn by helping others</p>
              </div>
            </div>
          </div>

          <!-- Step 2: Basic Info -->
          <div v-if="currentStep === 1" class="onboarding-form__step">
            <h2 class="onboarding-form__title">Basic Information</h2>

            <div class="form-group">
              <label class="form-group__label" for="username">Gaming Username</label>
              <input
                id="username"
                v-model="formData.username"
                type="text"
                class="form-group__input"
                placeholder="Enter your gaming username"
                required
              >
            </div>

            <div class="form-group">
              <label class="form-group__label" for="email">Email Address</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                class="form-group__input"
                placeholder="Enter your email"
                required
              >
            </div>
          </div>

          <!-- Step 3: Gaming Profile -->
          <div v-if="currentStep === 2" class="onboarding-form__step">
            <h2 class="onboarding-form__title">Gaming Profile</h2>

            <div class="form-group">
              <label class="form-group__label">Primary Platform</label>
              <select v-model="formData.platform" class="form-group__select">
                <option value="">Select your platform</option>
                <option value="pc">PC</option>
                <option value="playstation">PlayStation</option>
                <option value="xbox">Xbox</option>
                <option value="nintendo">Nintendo Switch</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-group__label">Games</label>
              <div class="game-tags">
                <button
                  v-for="game in games"
                  :key="game"
                  class="game-tags__item"
                  :class="{ 'game-tags__item--selected': formData.selectedGames.includes(game) }"
                  @click="toggleGame(game)"
                  type="button"
                >
                  {{ game }}
                </button>
              </div>
            </div>
          </div>

          <!-- Step 4: Password -->
          <div v-if="currentStep === 3" class="onboarding-form__step">
            <h2 class="onboarding-form__title">Set Your Password</h2>

            <div class="form-group">
              <label class="form-group__label" for="password">Password</label>
              <div class="form-group__input-wrapper">
                <input
                  id="password"
                  v-model="formData.password"
                  :type="showPassword ? 'text' : 'password'"
                  class="form-group__input"
                  placeholder="Create a secure password"
                  required
                >
                <button
                  type="button"
                  class="form-group__toggle-password"
                  @click="showPassword = !showPassword"
                >
                  {{ showPassword ? '👁️' : '👁️‍🗨️' }}
                </button>
              </div>
              <div class="password-strength" v-if="formData.password">
                <div
                  class="password-strength__bar"
                  :class="passwordStrengthClass"
                ></div>
                <span class="password-strength__text">{{ passwordStrengthText }}</span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-group__label" for="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                v-model="formData.confirmPassword"
                type="password"
                class="form-group__input"
                :class="{ 'form-group__input--error': !passwordsMatch && formData.confirmPassword }"
                placeholder="Confirm your password"
                required
              >
              <span
                v-if="!passwordsMatch && formData.confirmPassword"
                class="form-group__error"
              >
                Passwords don't match
              </span>
            </div>

            <div class="form-group form-group--checkbox">
              <label class="checkbox">
                <input
                  type="checkbox"
                  v-model="formData.termsAccepted"
                >
                <span class="checkbox__text">
                  I accept the Terms of Service and Privacy Policy
                </span>
              </label>
            </div>
          </div>

          <!-- Form Actions -->
          <div class="onboarding-form__actions">
            <UiButton
              v-if="currentStep > 0"
              variant="secondary"
              @click="prevStep"
            >
              Back
            </UiButton>

            <UiButton
              variant="primary"
              @click="currentStep < steps.length - 1 ? nextStep() : completeOnboarding()"
              :disabled="currentStep === 3 && (!passwordsMatch || !formData.termsAccepted)"
            >
              {{ currentStep < steps.length - 1 ? 'Continue' : 'Complete Setup' }}
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const showForm = ref(false)
const currentStep = ref(0)

const steps = [
  { label: 'Account Type' },
  { label: 'Basic Info' },
  { label: 'Gaming Profile' },
  { label: 'Security' }
]


const games = [
  'League of Legends',
  'Valorant',
  'CS:GO',
  'Dota 2',
  'World of Warcraft',
  'Overwatch',
  'Fortnite',
  'Call of Duty',
  'Apex Legends'
]

const formData = reactive({
  type: '',
  username: '',
  email: '',
  platform: '',
  selectedGames: [] as string[],
  password: '',
  confirmPassword: '',
  termsAccepted: false
})

const toggleGame = (game: string) => {
  const index = formData.selectedGames.indexOf(game)
  if (index === -1) {
    if (formData.selectedGames.length < 5) {
      formData.selectedGames.push(game)
    }
  } else {
    formData.selectedGames.splice(index, 1)
  }
}

const nextStep = () => {
  currentStep.value++
}

const prevStep = () => {
  currentStep.value--
}

const completeOnboarding = () => {
  if (!passwordsMatch.value || !formData.termsAccepted) return

  console.log('Onboarding completed:', formData)
  isCompleted.value = true
}

const isCompleted = ref(false)
const showPassword = ref(false)

const passwordStrength = computed(() => {
  const password = formData.password
  if (!password) return 0

  let strength = 0
  if (password.length >= 8) strength += 25
  if (/[A-Z]/.test(password)) strength += 25
  if (/[0-9]/.test(password)) strength += 25
  if (/[^A-Za-z0-9]/.test(password)) strength += 25

  return strength
})

const passwordStrengthClass = computed(() => {
  const strength = passwordStrength.value
  if (strength <= 25) return 'password-strength__bar--weak'
  if (strength <= 50) return 'password-strength__bar--fair'
  if (strength <= 75) return 'password-strength__bar--good'
  return 'password-strength__bar--strong'
})

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value
  if (strength <= 25) return 'Weak'
  if (strength <= 50) return 'Fair'
  if (strength <= 75) return 'Good'
  return 'Strong'
})

const passwordsMatch = computed(() => {
  if (!formData.confirmPassword) return true
  return formData.password === formData.confirmPassword
})

const goToHome = () => {
  console.log('Navigating to homepage')
}
</script>

<style lang="scss" scoped>
.get-started {
  padding: $spacing-2xl 0;
  background: linear-gradient(
    180deg,
    rgba($color-purple, 0.03) 0%,
    rgba($color-cyan, 0.03) 100%
  );

  &__container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 $spacing-xl;
  }

  &__hero {
    text-align: center;
    padding: $spacing-3xl 0;
  }

  &__title {
    font-size: clamp(2.5rem, 5vw, $font-size-h1);
    font-weight: 800;
    color: $color-text;
    margin-bottom: $spacing-xl;
    background: linear-gradient(135deg, $color-purple 0%, $color-blue-light 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__subtitle {
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    color: $color-text-light;
    margin-bottom: $spacing-2xl;
    line-height: 1.6;
  }

  &__content {
    max-width: 560px;
    margin: 0 auto;
    padding: 0 $spacing-xl;
  }
}

// Progress Bar Block
.progress-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: $spacing-2xl;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 24px;
    left: 40px;
    right: 40px;
    height: 2px;
    background: var(--color-border);
    z-index: 0;
  }

  &__step {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    flex: 1;

    &--active {
      .progress-bar__indicator {
        background: $color-purple;
        color: white;
      }
      .progress-bar__label {
        color: $color-text;
      }
    }

    &--completed {
      .progress-bar__indicator {
        background: $color-cyan;
        color: white;
      }
    }
  }

  &__indicator {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--color-bg-secondary);
    color: var(--color-text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin-bottom: $spacing-sm;
    transition: $transition-base;
  }

  &__label {
    font-size: 0.875rem;
    color: $color-text-light;
    transition: $transition-base;
  }
}

// User Types Block
.user-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: $spacing-xl;
  margin: $spacing-xl 0;

  &__option {
    padding: $spacing-xl;
    border: 2px solid var(--color-border);
    border-radius: $border-radius-lg;
    text-align: center;
    cursor: pointer;
    transition: $transition-base;

    &:hover {
      transform: translateY(-2px);
      border-color: $color-purple;
    }

    &--selected {
      border-color: $color-purple;
      background: linear-gradient(
        135deg,
        rgba($color-purple, 0.1) 0%,
        rgba($color-blue, 0.1) 100%
      );
    }
  }

  &__icon {
    font-size: 2rem;
    margin-bottom: $spacing-md;
    display: block;
  }

  &__title {
    color: $color-text;
    margin-bottom: $spacing-md;
    font-size: 1.25rem;
    font-weight: 600;
  }

  &__description {
    color: $color-text-light;
    font-size: 0.875rem;
    line-height: 1.6;
  }
}

// Form Block
.onboarding-form {
  background: var(--color-bg-primary);
  border-radius: $border-radius-lg;
  padding: $spacing-2xl;
  box-shadow: 0 8px 32px rgba($color-purple, 0.08);
  border: 1px solid var(--color-border);

  &__title {
    font-size: $font-size-h3;
    color: $color-text;
    margin-bottom: $spacing-2xl;
    font-weight: 600;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: $spacing-md;
    margin-top: $spacing-2xl;
  }
}

// Form Group Block
.form-group {
  margin-bottom: $spacing-xl;

  &__label {
  &__input-wrapper {
    position: relative;
  }

  &__toggle-password {
    position: absolute;
    right: $spacing-md;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: $spacing-sm;
    color: var(--color-text-secondary);
  }

  &__error {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: $spacing-sm;
    display: block;
  }

  &--checkbox {
    margin-top: $spacing-xl;
  }
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: $color-text-light;
    margin-bottom: $spacing-sm;
  }

  &__input,
  &__select {
    width: 100%;
    padding: $spacing-md;
    border: 1.5px solid var(--color-border);
    border-radius: $border-radius-md;
    font-size: 1rem;
    background: var(--color-bg-primary);
    color: $color-text;
    transition: $transition-base;

    &::placeholder {
      color: $color-text-light;
      opacity: 0.5;
    }

    &:focus {
      outline: none;
      border-color: $color-purple;
      box-shadow: 0 0 0 3px rgba($color-purple, 0.1);
    }
  }

  &__select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
  }
}

// Game Tags Block
.game-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-sm;
  margin-top: $spacing-sm;

  &__item {
    padding: $spacing-sm $spacing-md;
    border-radius: $border-radius-full;
    border: 1.5px solid var(--color-border);
    font-size: 0.875rem;
    background: none;
    color: $color-text;
    cursor: pointer;
    transition: $transition-base;

    &:hover {
      border-color: $color-purple;
    }

    &--selected {
      background: $color-purple;
      color: white;
      border-color: $color-purple;
    }
  }
}
// Button Block
.button {
  padding: $spacing-md $spacing-xl;
  border-radius: $border-radius-full;
  font-weight: 600;
  cursor: pointer;
  transition: $transition-base;
  border: none;

  &--primary {
    background: linear-gradient(135deg, $color-purple 0%, $color-blue 100%);
    color: white;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba($color-purple, 0.25);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }

  &--secondary {
    background: var(--color-bg-secondary);
    color: $color-text;
    border: 1.5px solid var(--color-border);

    &:hover {
      background: var(--color-bg-primary);
    }
  }

  &--lg {
    padding: $spacing-md $spacing-2xl;
    font-size: 1.125rem;
  }
}

// Dark mode enhancements
.dark {
  .success-card {
    background: rgba($color-purple-dark, 0.1);
    backdrop-filter: blur(12px);
  }
  .get-started {
    background: linear-gradient(
      180deg,
      rgba($color-purple, 0.1) 0%,
      rgba($color-cyan-light, 0.1) 100%
    );
  }

  .onboarding-form {
    background: rgba($color-purple-dark, 0.1);
    backdrop-filter: blur(12px);
    border-color: var(--color-border);
  }

  .form-group {
    &__input,
    &__select {
      background: var(--color-bg-secondary);
      border-color: var(--color-border);
      color: var(--color-text-primary);

      &:focus {
        border-color: $color-purple;
        box-shadow: 0 0 0 3px rgba($color-purple, 0.2);
      }

      &::placeholder {
        color: var(--color-text-secondary);
      }
    }
  }

  .game-tags__item {
    background: var(--color-bg-secondary);
    border-color: var(--color-border);
    color: var(--color-text-primary);

    &--selected {
      background: $color-purple;
      border-color: $color-purple;
      color: white;
    }

    &:hover:not(&--selected) {
      border-color: $color-purple;
      background: var(--color-bg-primary);
    }
  }

  .user-types__option {
    background: var(--color-bg-secondary);
    border-color: var(--color-border);

    &--selected {
      background: linear-gradient(
        135deg,
        rgba($color-purple, 0.2) 0%,
        rgba($color-blue, 0.2) 100%
      );
      border-color: $color-purple;
    }

    &:hover:not(&--selected) {
      border-color: $color-purple;
      background: var(--color-bg-primary);
    }
  }

  .progress-bar {
    &__indicator {
      background: var(--color-bg-secondary);
      color: var(--color-text-secondary);
    }

    &__label {
      color: var(--color-text-secondary);
    }

    &::before {
      background: var(--color-border);
    }
  }

  .button {
    &--secondary {
      background: var(--color-bg-secondary);
      color: var(--color-text-primary);
      border-color: var(--color-border);

      &:hover {
        background: var(--color-bg-primary);
      }
    }
  }
}

// Responsive adjustments
@media (max-width: $breakpoint-md) {
  .get-started {
    padding: $spacing-xl $spacing-md;

    &__container {
      padding: 0 $spacing-lg;
    }
  }

  .progress-bar {
    &::before {
      left: 20px;
      right: 20px;
    }

    &__label {
      font-size: 0.75rem;
    }
  }

  .onboarding-form {
    padding: $spacing-xl;
  }

  .user-types {
    grid-template-columns: 1fr;
  }

  .onboarding-form__actions {
    flex-direction: column-reverse;
    gap: $spacing-md;

    .button {
      width: 100%;
      text-align: center;
    }
  }
}

// Animations
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

// Utility classes
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  cursor: pointer;

  input {
    width: 20px;
    height: 20px;
    accent-color: $color-purple;
  }

  &__text {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }
}
.password-strength {
  margin-top: $spacing-sm;

  &__bar {
    height: 4px;
    background: var(--color-bg-secondary);
    border-radius: $border-radius-full;
    overflow: hidden;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      transition: $transition-base;
    }

    &--weak::after {
      width: 25%;
      background: #ef4444;
    }

    &--fair::after {
      width: 50%;
      background: #f59e0b;
    }

    &--good::after {
      width: 75%;
      background: #10b981;
    }

    &--strong::after {
      width: 100%;
      background: #059669;
    }
  }

  &__text {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin-top: $spacing-xs;
    display: block;
  }
}
.success-card {
  background: var(--color-bg-primary);
  border-radius: $border-radius-lg;
  padding: $spacing-3xl;
  text-align: center;
  box-shadow: 0 8px 32px rgba($color-purple, 0.08);
  border: 1px solid var(--color-border);
  max-width: 560px;
  margin: 0 auto;

  &__icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, $color-purple, $color-blue);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: white;
    margin: 0 auto $spacing-xl;
  }

  &__title {
    font-size: $font-size-h2;
    color: var(--color-text-primary);
    margin-bottom: $spacing-lg;
  }

  &__message {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    margin-bottom: $spacing-2xl;
    line-height: 1.6;

    strong {
      color: var(--color-text-primary);
    }
  }

  &__next {
    padding-top: $spacing-xl;
    border-top: 1px solid var(--color-border);

    p {
      color: var(--color-text-secondary);
      margin-bottom: $spacing-xl;
    }
  }
}
</style>
