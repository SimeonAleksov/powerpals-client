<!-- src/pages/components.vue -->
<template>
  <div class="demo">
    <div class="demo__container">
      <!-- Typography Section -->
      <section class="demo__section">
        <h1 class="demo__title">Components</h1>
        <p class="demo__description">Collection of UI components for PowerPals platform</p>
      </section>

      <!-- Buttons Section -->
      <section class="demo__section">
        <h2 class="demo__subtitle">Buttons</h2>

        <div class="demo__group">
          <h3 class="demo__label">Variants</h3>
          <div class="demo__buttons">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="text">Text</Button>
          </div>
        </div>

        <div class="demo__group">
          <h3 class="demo__label">Sizes</h3>
          <div class="demo__buttons">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </div>

        <div class="demo__group">
          <h3 class="demo__label">States</h3>
          <div class="demo__buttons">
            <Button variant="primary" loading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </div>
      </section>

      <!-- Inputs Section -->
      <section class="demo__section">
        <h2 class="demo__subtitle">Inputs</h2>


        <div class="demo__group">
          <h3 class="demo__label">Basic</h3>
          <div class="demo__inputs">
            <Input
              v-model="demoEmail"
              label="Email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div class="demo__group">
          <h3 class="demo__label">States</h3>
          <div class="demo__inputs">
            <Input
              v-model="demoError"
              label="Error State"
              error="This field is required"
            />
            <Input
              v-model="demoSuccess"
              label="Success State"
              success
            />
            <Input
              v-model="demoDisabled"
              label="Disabled State"
              disabled
              placeholder="Cannot edit this"
            />
          </div>
        </div>

        <div class="demo__group">
          <h3 class="demo__label">With Hint</h3>
          <div class="demo__inputs">
            <Input
              v-model="demoHint"
              label="Username"
              hint="This will be your public display name"
            />
          </div>
        </div>


        <div class="demo__group">
          <h3 class="demo__label">With Icons</h3>
          <div class="demo__inputs">
            <Input v-model="demoSearch" placeholder="Search...">
              <template #prefix>🔍</template>
            </Input>
          </div>
        </div>
      </section>

      <!-- Cards Section -->
      <section class="demo__section">
        <h2 class="demo__subtitle">Cards</h2>

        <div class="demo__grid">
          <Card>
            <h3>Default Card</h3>
            <p>This is a basic card component with default styling.</p>
          </Card>

          <Card hover>
            <h3>Hover Card</h3>
            <p>This card has a hover effect.</p>
          </Card>

          <Card variant="outline">
            <h3>Outline Card</h3>
            <p>This is a card with outline variant.</p>
          </Card>

          <Card variant="flat">
            <h3>Flat Card</h3>
            <p>This is a card with flat variant.</p>
          </Card>
        </div>
      </section>
<section class="demo__section">
  <h2 class="demo__subtitle">Modals</h2>

  <div class="demo__group">
    <div class="demo__buttons">
      <Button @click="showBasicModal = true">Basic Modal</Button>
      <Button @click="showScrollableModal = true">Scrollable Modal</Button>
      <Button @click="showLargeModal = true">Large Modal</Button>
    </div>

    <!-- Basic Modal -->
    <Modal
      v-model="showBasicModal"
      title="Basic Modal"
    >
      <p>This is a basic modal with header and footer.</p>
      <template #footer>
        <Button variant="text" @click="showBasicModal = false">Cancel</Button>
        <Button variant="primary" @click="showBasicModal = false">Confirm</Button>
      </template>
    </Modal>

    <!-- Scrollable Modal -->
    <Modal
      v-model="showScrollableModal"
      title="Scrollable Content"
      scrollable
    >
      <div style="height: 1000px; padding: 20px;">
        <p>This modal has scrollable content.</p>
        <p>Scroll down to see more...</p>
        <p>Bottom of the modal</p>
      </div>
      <template #footer>
        <Button variant="text" @click="showScrollableModal = false">Close</Button>
      </template>
    </Modal>

    <!-- Large Modal -->
    <Modal
      v-model="showLargeModal"
      title="Large Modal"
      size="lg"
    >
      <div class="demo__modal-content">
        <h4>This is a large modal</h4>
        <p>It can be used for more complex content.</p>
      </div>
      <template #footer>
        <Button variant="text" @click="showLargeModal = false">Cancel</Button>
        <Button variant="primary" @click="showLargeModal = false">Save Changes</Button>
      </template>
    </Modal>
  </div>
</section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Card from '@/components/ui/Card.vue'
import Modal from '@/components/ui/Modal.vue'

// Demo states
const demoEmail = ref('')
const demoError = ref('')
const demoSuccess = ref('')
const demoDisabled = ref('')
const demoHint = ref('')
const demoSearch = ref('')
const showBasicModal = ref(false)
const showScrollableModal = ref(false)
const showLargeModal = ref(false)
</script>

<style lang="scss" scoped>
.demo {
  min-height: 100vh;
  background: $color-background;
  padding: 40px 0;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  &__section {
    margin-bottom: 64px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: $color-text;
  }

  &__description {
    font-size: 1.125rem;
    color: $color-text-light;
    margin-bottom: 48px;
  }

  &__subtitle {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 32px;
    color: $color-text;
    padding-bottom: 12px;
    border-bottom: 1px solid $color-border;
  }

  &__group {
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__label {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 16px;
    color: $color-text-light;
  }

  &__buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
  }

  &__inputs {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 12px;
      color: $color-text;
    }

    p {
      color: $color-text-light;
      line-height: 1.6;
    }
  }
}
</style>
