<template>
  <div class="landing">
    <!-- Hero Section -->
    <section class="landing__hero">
      <div class="landing__container">
        <div class="landing__hero-content">
          <h1 class="landing__title">
            Your Gaming Success Partner
          </h1>
          <p class="landing__subtitle">
            Connect with expert gamers for coaching, boosting, and achievements unlocking.
            From casual gaming to competitive ranks - we've got you covered.
          </p>
        </div>

        <Card class="landing__early-access">
          <h2>Get Early Access</h2>
          <p>Join the waitlist and get special perks when we launch!</p>
          <div class="landing__early-form">
            <input
              type="email"
              placeholder="Enter your email"
              class="landing__input"
            >
            <Button variant="primary">Join Waitlist</Button>
          </div>
          <div class="landing__perks">
            <span class="landing__perk">✨ First month free</span>
            <span class="landing__perk">🎮 Priority matching</span>
            <span class="landing__perk">🎁 Early bird rewards</span>
          </div>
        </Card>
      </div>
    </section>

    <!-- Services Section -->
    <section class="landing__services">
      <div class="landing__container">
        <h2 class="landing__section-title">Gaming Services</h2>
        <div class="landing__services-grid">
          <Card
            v-for="service in services"
            :key="service.title"
            hover
            class="landing__service-card"
          >
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </Card>
        </div>
      </div>
    </section>

<section class="landing__provider">
  <div class="landing__container">
    <h2 class="landing__section-title">Join Our Community</h2>

    <div class="landing__provider-grid">
      <!-- Providers Column -->
      <Card class="landing__provider-card" variant="flat">
        <div class="provider-card">
          <h3 class="provider-card__title">Gaming Experts</h3>
          <p class="provider-card__subtitle">Turn Your Skills Into Income</p>

          <ul class="provider-card__list">
            <li>Set your own rates and schedule</li>
            <li>Build your reputation with reviews</li>
            <li>Access global gaming community</li>
            <li>Secure payments and support</li>
          </ul>

          <div class="provider-card__stats">
            <div class="provider-card__stat">
              <span class="provider-card__stat-value">$500+</span>
              <span class="provider-card__stat-label">Weekly Average</span>
            </div>
            <div class="provider-card__stat">
              <span class="provider-card__stat-value">1000+</span>
              <span class="provider-card__stat-label">Active Providers</span>
            </div>
          </div>

          <Button variant="secondary" size="lg" class="provider-card__cta">
            Become a Provider
          </Button>
        </div>
      </Card>

      <!-- Clients Column -->
      <Card class="landing__provider-card" variant="flat">
        <div class="provider-card">
          <h3 class="provider-card__title">Gaming Enthusiasts</h3>
          <p class="provider-card__subtitle">Level Up Your Gaming</p>

          <ul class="provider-card__list">
            <li>Learn from verified experts</li>
            <li>Flexible scheduling options</li>
            <li>Guaranteed satisfaction</li>
            <li>24/7 customer support</li>
          </ul>

          <div class="provider-card__stats">
            <div class="provider-card__stat">
              <span class="provider-card__stat-value">50+</span>
              <span class="provider-card__stat-label">Games Supported</span>
            </div>
            <div class="provider-card__stat">
              <span class="provider-card__stat-value">98%</span>
              <span class="provider-card__stat-label">Success Rate</span>
            </div>
          </div>

          <Button variant="primary" size="lg" class="provider-card__cta">
            Find Your Provider
          </Button>
        </div>
      </Card>
    </div>
  </div>
</section>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'

const services = [
  {
    title: 'Pro Coaching',
    description: 'One-on-one sessions with top-ranked players. Learn strategies, improve mechanics, and master your favorite games.'
  },
  {
    title: 'Achievement Hunting',
    description: 'Unlock those hard-to-get achievements with help from experienced completionists.'
  },
  {
    title: 'Rank Boosting',
    description: 'Reach your desired competitive rank with our skilled boosters. Safe and reliable.'
  },
  {
    title: 'Game Companions',
    description: 'Find friendly players to team up with for better gaming experience.'
  }
]
</script>
<style lang="scss" scoped>
.landing {
  min-height: 100vh;
  background: $color-background;

  // Container
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  // Hero Section
  &__hero {
    padding: 80px 0;
    background: linear-gradient(
      to bottom,
      rgba($color-purple-dark, 0.05),
      rgba($color-cyan-light, 0.05)
    );

    .landing__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
  }

  &__hero-content {
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  &__title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 24px;
    background: linear-gradient(135deg, $color-purple-dark, $color-blue);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  &__subtitle {
    font-size: 1.25rem;
    color: $color-text-light;
    line-height: 1.6;
  }

  // Early Access Section
  &__early-access {
    padding: 32px;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 12px;
      color: $color-text;
    }

    p {
      color: $color-text-light;
      margin-bottom: 24px;
    }
  }

  &__early-form {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;

    @media (max-width: 640px) {
      flex-direction: column;
    }
  }

  &__input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid $color-border;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: $color-primary;
    }
  }

  &__perks {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  &__perk {
    font-size: 0.875rem;
    color: $color-text-light;
  }

  // Services Section
  &__services {
    padding: 80px 0;
  }

  &__section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 48px;
    color: $color-text;
  }

  &__services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  &__service-card {
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 16px;
      color: $color-primary;
    }

    p {
      color: $color-text-light;
      line-height: 1.6;
    }
  }

  // Provider Section
  &__provider {
    padding: 80px 0;
    background: linear-gradient(
      to bottom,
      rgba($color-purple-dark, 0.05),
      rgba($color-cyan-light, 0.05)
    );
  }

  &__provider-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__provider-card {
    height: 100%;
  }
}

.provider-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px;

  &__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 8px;
    background: linear-gradient(135deg, $color-purple-dark, $color-blue);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__subtitle {
    font-size: 1.25rem;
    color: $color-text-light;
    margin-bottom: 32px;
  }

  &__list {
    list-style: none;
    margin-bottom: 32px;
    flex-grow: 1;

    li {
      padding-left: 28px;
      position: relative;
      margin-bottom: 16px;
      color: $color-text;

      &::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: $color-primary;
      }
    }
  }

  &__stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
    padding: 24px;
    background: rgba($color-purple-dark, 0.05);
    border-radius: 12px;
  }

  &__stat {
    text-align: center;
  }

  &__stat-value {
    display: block;
    font-size: 1.75rem;
    font-weight: 700;
    color: $color-primary;
    margin-bottom: 4px;
  }

  &__stat-label {
    font-size: 0.875rem;
    color: $color-text-light;
  }

  &__cta {
    width: 100%;
  }
}
</style>
