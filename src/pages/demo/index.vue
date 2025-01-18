<template>
  <div class="demo">
    <h2>Button Examples</h2>
    <div class="demo__buttons">
      <Button>Default Button</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="text">Text</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>

    <h2>Card Examples</h2>
    <div class="demo__cards">
      <Card hover>
        <template #header>
          <h3>Card Title</h3>
        </template>
        <p>This is a default card with hover effect.</p>
        <template #footer>
          <Button variant="primary" size="sm">Action</Button>
        </template>
      </Card>

      <Card variant="outline">
        <template #header>
          <h3>Outlined Card</h3>
        </template>
        <p>This is an outlined card.</p>
      </Card>

      <Card variant="flat">
        <p>This is a flat card without header or footer.</p>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
</script>

<style lang="scss" scoped>
.demo {
  padding: $spacing-xl;

  &__buttons {
    display: flex;
    gap: $spacing-md;
    flex-wrap: wrap;
    margin-bottom: $spacing-xl * 2;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-xl;
  }
}
</style>
