<template>
  <footer class="footer">
    <div class="footer__content">
      <!-- Brand Section -->
      <div class="footer__brand">
        <h3 class="footer__logo">PowerPals</h3>
        <p class="footer__description">
          Connect with expert gamers for coaching, boosting, and achievements unlocking.
        </p>
      </div>

      <!-- Links Sections -->
      <div class="footer__links">
        <!-- Company -->
        <div class="footer__group">
          <h4 class="footer__group-title">Company</h4>
          <NuxtLink to="/about" class="footer__link">About</NuxtLink>
          <NuxtLink to="/careers" class="footer__link">Careers</NuxtLink>
          <NuxtLink to="/blog" class="footer__link">Blog</NuxtLink>
        </div>

        <!-- Resources -->
        <div class="footer__group">
          <h4 class="footer__group-title">Resources</h4>
          <NuxtLink to="/help" class="footer__link">Help Center</NuxtLink>
          <NuxtLink to="/terms" class="footer__link">Terms of Service</NuxtLink>
          <NuxtLink to="/privacy" class="footer__link">Privacy Policy</NuxtLink>
        </div>

        <!-- Connect -->
        <div class="footer__group">
          <h4 class="footer__group-title">Connect</h4>
          <NuxtLink to="/discord" class="footer__link">Discord</NuxtLink>
          <NuxtLink to="/twitter" class="footer__link">Twitter</NuxtLink>
          <NuxtLink to="/contact" class="footer__link">Contact</NuxtLink>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer__bottom">
      <p class="footer__copyright">
        © {{ new Date().getFullYear() }} PowerPals. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: $spacing-xl * 3 $spacing-xl $spacing-xl;
  background: $color-background;
  border-top: 1px solid $color-border;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: $spacing-xl * 2;
  }

  &__brand {
    max-width: 320px;
  }

  &__logo {
    font-size: 1.5rem;
    font-weight: 600;
    color: $color-purple;
    margin-bottom: $spacing-md;
  }

  &__description {
    color: $color-text-light;
    line-height: 1.6;
    font-size: 0.9375rem;
  }

  &__links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-xl;
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
  }

  &__group-title {
    color: $color-text;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: $spacing-sm;
  }

  &__link {
    color: $color-text-light;
    text-decoration: none;
    font-size: 0.9375rem;
    transition: color 0.3s ease;
    width: fit-content;

    &:hover {
      color: $color-purple;
    }
  }

  &__bottom {
    max-width: 1200px;
    margin: $spacing-xl * 3 auto 0;
    padding-top: $spacing-xl;
    border-top: 1px solid $color-border;
    text-align: center;
  }

  &__copyright {
    color: $color-text-light;
    font-size: 0.875rem;
  }

  // Responsive
  @media (max-width: 768px) {
    padding: $spacing-xl * 2 $spacing-xl $spacing-xl;

    &__content {
      grid-template-columns: 1fr;
    }

    &__brand {
      max-width: 100%;
      text-align: center;
      margin-bottom: $spacing-xl;
    }

    &__links {
      grid-template-columns: repeat(2, 1fr);
      gap: $spacing-xl * 2;
    }

    &__bottom {
      margin-top: $spacing-xl * 2;
    }
  }

  @media (max-width: 480px) {
    &__links {
      grid-template-columns: 1fr;
      text-align: center;
    }

    &__group {
      align-items: center;
    }
  }
}
</style>
