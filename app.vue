<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
    }
  ]
})
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

// Section Reveal Animation
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Sections will fade in one by one
.terms__content section,
.privacy__content section {
  animation: fadeInUp 0.6s ease-out both;
}

// Stagger the sections
@for $i from 1 through 10 {
  .terms__content section:nth-child(#{$i}),
  .privacy__content section:nth-child(#{$i}) {
    animation-delay: #{$i * 0.1}s;
  }
}

// Smooth scroll behavior
html {
  scroll-behavior: smooth;
}

// Navigation hover effects
.terms__nav a,
.privacy__toc a {
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 12px;
    right: 12px;
    height: 2px;
    background: $color-primary;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
}

// Header gradient animation
@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.privacy__header h1,
.terms__header h1 {
  background-size: 200% auto;
  animation: gradientFlow 8s ease infinite;
}

// Sidebar sticky transition
.terms__nav,
.privacy__aside {
  transition: transform 0.3s ease;

  &.is-sticky {
    transform: translateY(20px);
  }
}
</style>
