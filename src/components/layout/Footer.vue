<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__main">
        <div class="footer__brand">
          <h3 class="footer__logo">PowerPals</h3>
          <p class="footer__description">
            Connect with expert gamers for coaching, boosting, and achievements unlocking.
          </p>
        </div>

        <div class="footer__links">
          <div class="footer__group">
            <h4 class="footer__group-title">Company</h4>
            <NuxtLink to="/about" class="footer__link">About</NuxtLink>
            <NuxtLink to="/careers" class="footer__link">Careers</NuxtLink>
            <NuxtLink to="/blog" class="footer__link">Blog</NuxtLink>
          </div>

          <div class="footer__group">
            <h4 class="footer__group-title">Resources</h4>
            <NuxtLink to="/help" class="footer__link">Help Center</NuxtLink>
            <NuxtLink to="/terms" class="footer__link">Terms of Service</NuxtLink>
            <NuxtLink to="/privacy" class="footer__link">Privacy Policy</NuxtLink>
          </div>

          <div class="footer__group">
            <h4 class="footer__group-title">Connect</h4>
            <NuxtLink to="/discord" class="footer__link">Discord</NuxtLink>
            <NuxtLink to="/twitter" class="footer__link">Twitter</NuxtLink>
            <NuxtLink to="/contact" class="footer__link">Contact</NuxtLink>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ new Date().getFullYear() }} PowerPals. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(to bottom, transparent, rgba($color-purple-dark, 0.05));
  padding: 64px 24px 24px;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__main {
    display: grid;
    grid-template-columns: 1.5fr repeat(3, 1fr);
    gap: 64px;
    margin-bottom: 64px;
  }

  &__brand {
    max-width: 300px;
  }

  &__logo {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, $color-purple-dark, $color-blue);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
  }

  &__description {
    color: $color-text-light;
    line-height: 1.6;
  }

  &__links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  &__group-title {
    font-weight: 600;
    margin-bottom: 20px;
    color: $color-text;
  }

  &__link {
    display: block;
    text-decoration: none;
    color: $color-text-light;
    margin-bottom: 12px;
    transition: color 0.3s ease;

    &:hover {
      color: $color-primary;
    }
  }

  &__bottom {
    padding-top: 24px;
    border-top: 1px solid rgba($color-primary, 0.1);
    text-align: center;
  }

  &__copyright {
    color: $color-text-light;
    font-size: 0.875rem;
  }
}
</style>
