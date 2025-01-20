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
  <section class="landing__why">
    <div class="landing__container">
      <h2 class="landing__section-title">
        Why Choose PowerPals?
        <span class="landing__section-subtitle">The Future of Gaming Services</span>
      </h2>

      <!-- Toggle Buttons -->
      <div class="landing__toggle">
        <button
          class="landing__toggle-btn"
          :class="{ 'is-active': activeView === 'provider' }"
          @click="activeView = 'provider'"
        >
          <Users class="landing__toggle-icon" />
          For Providers
        </button>
        <button
          class="landing__toggle-btn"
          :class="{ 'is-active': activeView === 'client' }"
          @click="activeView = 'client'"
        >
          <UserCircle class="landing__toggle-icon" />
          For Clients
        </button>
      </div>

      <!-- Benefits Content -->
      <Transition
        name="fade"
        mode="out-in"
      >
        <div v-if="activeView === 'provider'" class="landing__benefits" key="provider">
          <div class="landing__benefits-header">
            <Wallet class="landing__benefits-icon" />
            <div>
              <h3 class="landing__benefits-title">Earn More, Grow Faster</h3>
              <p class="landing__benefits-subtitle">Turn your gaming expertise into a thriving business</p>
            </div>
          </div>

          <div class="landing__benefits-grid">
            <Card
              v-for="benefit in providerBenefits"
              :key="benefit.title"
              class="landing__benefit-card"
              hover
            >
              <div class="benefit-card">
                <div class="benefit-card__icon">
                  <component :is="benefit.icon" size="24" />
                </div>
                <div class="benefit-card__content">
                  <h4 class="benefit-card__title">{{ benefit.title }}</h4>
                  <p class="benefit-card__description">{{ benefit.description }}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div v-else class="landing__benefits" key="client">
          <div class="landing__benefits-header">
            <Trophy class="landing__benefits-icon" />
            <div>
              <h3 class="landing__benefits-title">Level Up Your Game</h3>
              <p class="landing__benefits-subtitle">Get expert help to achieve your gaming goals</p>
            </div>
          </div>

          <div class="landing__benefits-grid">
            <Card
              v-for="benefit in clientBenefits"
              :key="benefit.title"
              class="landing__benefit-card"
              hover
            >
              <div class="benefit-card">
                <div class="benefit-card__icon">
                  <component :is="benefit.icon" size="24" />
                </div>
                <div class="benefit-card__content">
                  <h4 class="benefit-card__title">{{ benefit.title }}</h4>
                  <p class="benefit-card__description">{{ benefit.description }}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Transition>

      <!-- Stats Always Visible -->
      <div class="landing__stats-grid">
        <Card v-for="stat in comparisonStats" :key="stat.title" class="landing__stat-card" hover>
          <div class="stat-card">
            <div class="stat-card__icon">
              <component :is="stat.icon" size="32" />
            </div>
            <h4 class="stat-card__title">{{ stat.value }}</h4>
            <p class="stat-card__description">{{ stat.description }}</p>
          </div>
        </Card>
      </div>
    </div>
  </section>

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
import {
  Wallet, Zap, TrendingUp, Shield,
  Diamond, CheckCircle, Target, Lock,
  Percent, Timer, HeadphonesIcon,
  Users, UserCircle, Trophy
} from 'lucide-vue-next'

const activeView = ref('provider')
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

const providerBenefits = [
  {
    icon: Wallet,
    title: 'Industry-Leading Earnings',
    description: 'Start with just 20% platform fees, dropping to as low as 10% as you level up. Early access members enjoy just 5% fees!'
  },
  {
    icon: Zap,
    title: 'Flexible Payouts',
    description: 'Get paid faster with multiple payout options including crypto. Weekly payouts with no minimum threshold.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Support',
    description: 'Access marketing tools, analytics, and coaching to help grow your business and client base.'
  },
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Protected payments, dispute resolution, and dedicated provider support team.'
  }
]

const clientBenefits = [
  {
    icon: Diamond,
    title: 'Premium Service, Fair Prices',
    description: 'Competitive rates with no hidden fees. Pay only for what you need.'
  },
  {
    icon: CheckCircle,
    title: 'Guaranteed Results',
    description: 'Money-back guarantee if your provider doesn\'t deliver as promised.'
  },
  {
    icon: Target,
    title: 'Perfect Match',
    description: 'Advanced matching system pairs you with the ideal provider for your needs.'
  },
  {
    icon: Lock,
    title: 'Account Security',
    description: 'Industry-leading security measures and strict provider verification process.'
  }
]

const comparisonStats = [
  {
    icon: Percent,
    value: '50% Lower Fees',
    description: 'Compared to industry average'
  },
  {
    icon: Timer,
    value: '2x Faster',
    description: 'Order completion time'
  },
  {
    icon: HeadphonesIcon,
    value: '24/7',
    description: 'Live support available'
  }
]
</script>
<style lang="scss" scoped>
.landing {
  min-height: 100vh;
  background: $color-background;

  &__why {
    padding: 120px 0;
    background: radial-gradient(
      circle at top right,
      rgba($color-purple-dark, 0.08),
      rgba($color-purple-dark, 0.02) 50%,
      transparent
    );
  }

 &__toggle {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 64px;
    padding: 8px;
    border-radius: 16px;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
  &__toggle-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 32px;
    border-radius: 12px;
    font-weight: 600;
    color: $color-primary;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    background: transparent;

    &:hover {
      color: $color-text;

      @media (prefers-color-scheme: dark) {
        color: $color-primary;
        background: rgba($color-purple-dark, 0.2);
      }
    }

    &.is-active {
      background: white;
      color: $color-text;
      border-color: rgba($color-purple-dark, 0.1);
      box-shadow: 0 4px 20px rgba($color-purple-dark, 0.1);

      @media (prefers-color-scheme: dark) {
        background: rgba($color-purple-dark, 0.3);
        color: white;
        border-color: rgba($color-purple-dark, 0.4);
        box-shadow: 0 4px 20px rgba(black, 0.2);
      }
    }
    }


  &__toggle-icon {
    width: 20px;
    height: 20px;
    opacity: 0.7;
    transition: opacity 0.3s ease;

    .is-active & {
      opacity: 1;
    }

    @media (prefers-color-scheme: dark) {
      color: $color-text-light;

      .is-active & {
        color: white;
      }
    }
  }

  &__benefits {
    max-width: 800px;
    margin: 0 auto 80px;
  }

  &__benefits-header {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 48px;
    padding: 32px;
    border-radius: 16px;
    background: linear-gradient(
      135deg,
      rgba($color-purple-dark, 0.05),
      rgba($color-blue, 0.05)
    );
  }

  &__benefits-icon {
    width: 48px;
    height: 48px;
    padding: 12px;
    border-radius: 12px;
    background: white;
    color: $color-primary;
    box-shadow: 0 4px 20px rgba($color-purple-dark, 0.1);

    @media (prefers-color-scheme: dark) {
      background: rgba($color-purple-dark, 0.3);
      box-shadow: 0 4px 20px rgba(black, 0.2);
    }
  }

  &__benefits-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 4px;
    background: linear-gradient(135deg, $color-purple-dark, $color-blue);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__benefits-subtitle {
    color: $color-text-light;
    font-size: 1.125rem;
  }

  &__benefits-grid {
    display: grid;
    gap: 24px;
  }

  &__benefit-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;

    &:hover {
      transform: translateY(-2px);
      border-color: rgba($color-purple-dark, 0.1);
      background: linear-gradient(
        135deg,
        rgba($color-purple-dark, 0.02),
        rgba($color-blue, 0.02)
      );
    }
  }

  &__section-title {
    text-align: center;
    margin-bottom: 80px;
  }

  &__section-subtitle {
    display: block;
    font-size: 1.25rem;
    font-weight: 400;
    color: $color-text-light;
    margin-top: 8px;
  }

  &__why-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 80px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  }

  &__benefits-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 32px;
    color: $color-text;

    background: linear-gradient(135deg, $color-purple-dark, $color-blue);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__benefits-subtitle {
    display: block;
    font-size: 1.125rem;
    font-weight: 400;
    color: $color-text-light;
    margin-top: 4px;
    -webkit-text-fill-color: $color-text-light;
  }

  &__benefits-grid {
    display: grid;
    gap: 24px;
  }

  &__benefit-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;

    &:hover {
      transform: translateY(-2px);
      border-color: rgba($color-purple-dark, 0.1);
      background: linear-gradient(
        135deg,
        rgba($color-purple-dark, 0.02),
        rgba($color-blue, 0.02)
      );
    }
  }

  &__stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__stat-card {
    text-align: center;
    padding: 40px 24px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;

    &:hover {
      transform: translateY(-2px);
      border-color: rgba($color-purple-dark, 0.1);
      background: linear-gradient(
        135deg,
        rgba($color-purple-dark, 0.02),
        rgba($color-blue, 0.02)
      );
    }
  }

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

.benefit-card {
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(
      135deg,
      rgba($color-purple-dark, 0.1),
      rgba($color-blue, 0.1)
    );
    color: $color-primary;

    @media (prefers-color-scheme: dark) {
      background: rgba($color-purple-dark, 0.2);
      color: lighten($color-primary, 10%);
    }
  }
}

.stat-card {
  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 16px;
    margin-bottom: 24px;
    background: linear-gradient(
      135deg,
      rgba($color-purple-dark, 0.1),
      rgba($color-blue, 0.1)
    );
    color: $color-primary;

    @media (prefers-color-scheme: dark) {
      background: rgba($color-purple-dark, 0.2);
      color: lighten($color-primary, 10%);
    }
  }
}

// Transition animations
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
