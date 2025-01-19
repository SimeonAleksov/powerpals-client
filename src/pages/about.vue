<template>
  <div class="landing">
    <!-- Hero Section -->
    <section class="landing__hero">
      <div class="landing__container">
        <div class="landing__hero-content">
          <h1 class="landing__title">
            Powering the Future of Gaming Community
          </h1>
          <p class="landing__subtitle">
            We're building a platform where passion meets opportunity, connecting skilled gamers
            with those eager to learn and grow in the gaming world.
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="landing__story">
      <div class="landing__container">
        <div class="landing__story-grid">
          <Card class="landing__story-card">
            <h2>Our Story</h2>
            <p class="landing__story-text">
              PowerPals was born from a simple observation: the gaming community is full of
              untapped talent and knowledge. We saw skilled players who could teach, guide,
              and help others reach their gaming goals.
            </p>
            <p class="landing__story-text">
              Today, we're proud to facilitate thousands of connections between gaming experts
              and enthusiasts, creating opportunities and building a stronger gaming community.
            </p>
          </Card>
          <div class="landing__stats">
            <Card class="landing__stat-card">
              <div class="landing__stat">
                <span class="landing__stat-value">50K+</span>
                <span class="landing__stat-label">Active Users</span>
              </div>
            </Card>
            <Card class="landing__stat-card">
              <div class="landing__stat">
                <span class="landing__stat-value">100+</span>
                <span class="landing__stat-label">Game Titles</span>
              </div>
            </Card>
            <Card class="landing__stat-card">
              <div class="landing__stat">
                <span class="landing__stat-value">98%</span>
                <span class="landing__stat-label">Success Rate</span>
              </div>
            </Card>
            <Card class="landing__stat-card">
              <div class="landing__stat">
                <span class="landing__stat-value">24/7</span>
                <span class="landing__stat-label">Support</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="landing__values">
      <div class="landing__container">
        <h2 class="landing__section-title">What We Stand For</h2>
        <div class="landing__values-grid">
          <Card
            v-for="value in values"
            :key="value.title"
            class="landing__value-card"
          >
            <div class="value-card">
              <span class="value-card__icon">{{ value.icon }}</span>
              <h3 class="value-card__title">{{ value.title }}</h3>
              <p class="value-card__description">{{ value.description }}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="landing__team">
      <div class="landing__container">
        <h2 class="landing__section-title">Meet Our Leadership</h2>
        <div class="landing__team-grid">
          <Card
            v-for="member in team"
            :key="member.name"
            class="landing__team-card"
          >
            <div class="team-card">
              <div class="team-card__avatar">
                <img :src="member.avatar" :alt="member.name">
              </div>
              <h3 class="team-card__name">{{ member.name }}</h3>
              <p class="team-card__role">{{ member.role }}</p>
              <p class="team-card__bio">{{ member.bio }}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Join Section -->
    <section class="landing__join">
      <div class="landing__container">
        <Card class="landing__join-card">
          <div class="landing__join-content">
            <h2>Join Our Journey</h2>
            <p>Be part of the future of gaming community. Whether you're here to learn or teach,
               there's a place for you at PowerPals.</p>
            <div class="landing__join-buttons">
              <Button variant="primary" size="lg">Get Started</Button>
              <Button variant="secondary" size="lg">Become a Provider</Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'

const values = [
  {
    icon: '🤝',
    title: 'Community First',
    description: 'We believe in the power of community. Every feature and decision is made with our users in mind.'
  },
  {
    icon: '🛡️',
    title: 'Trust & Safety',
    description: 'Our platform is built on trust, with robust systems to ensure safe and reliable interactions.'
  },
  {
    icon: '⭐',
    title: 'Excellence',
    description: 'We maintain high standards in everything we do, from our platform to our provider selection.'
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We are constantly pushing boundaries to create better ways for gamers to connect and learn.'
  }
]

const team = [
  {
    name: 'Simeon Aleksov',
    role: 'Chief Executive Officer',
    bio: 'Former pro gamer turned entrepreneur, passionate about creating opportunities in gaming.',
    avatar: '/api/placeholder/150/150'
  },
]
</script>

<style lang="scss" scoped>
.landing {
  min-height: 100vh;
  background: $color-background;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  &__hero {
    padding: 120px 0 80px;
    background: linear-gradient(
      to bottom,
      rgba($color-purple-dark, 0.05),
      rgba($color-cyan-light, 0.05)
    );
    text-align: center;
  }

  &__hero-content {
    max-width: 800px;
    margin: 0 auto;
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

  // Story Section
  &__story {
    padding: 80px 0;
  }

  &__story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__story-card {
    padding: 40px;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 24px;
      color: $color-text;
    }
  }

  &__story-text {
    color: $color-text-light;
    line-height: 1.6;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  &__stat-card {
    padding: 32px;
    text-align: center;
  }

  &__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__stat-value {
    font-size: 2.5rem;
    font-weight: 800;
    color: $color-primary;
    margin-bottom: 8px;
  }

  &__stat-label {
    font-size: 1rem;
    color: $color-text-light;
  }

  // Values Section
  &__values {
    padding: 80px 0;
    background: linear-gradient(
      to bottom,
      rgba($color-purple-dark, 0.05),
      rgba($color-cyan-light, 0.05)
    );
  }

  &__section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 48px;
    color: $color-text;
  }

  &__values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
  }

  &__value-card {
    padding: 32px;
  }

  // Team Section
  &__team {
    padding: 80px 0;
  }

  &__team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
  }

  &__team-card {
    padding: 32px;
  }

  // Join Section
  &__join {
    padding: 80px 0;
  }

  &__join-card {
    padding: 48px;
    text-align: center;
    background: linear-gradient(135deg, rgba($color-purple-dark, 0.05), rgba($color-blue, 0.05));
  }

  &__join-content {
    max-width: 600px;
    margin: 0 auto;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 16px;
      color: $color-text;
    }

    p {
      color: $color-text-light;
      margin-bottom: 32px;
    }
  }

  &__join-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;

    @media (max-width: 640px) {
      flex-direction: column;
    }
  }
}

.value-card {
  text-align: center;

  &__icon {
    font-size: 2.5rem;
    margin-bottom: 16px;
    display: block;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: $color-primary;
  }

  &__description {
    color: $color-text-light;
    line-height: 1.6;
  }
}

.team-card {
  text-align: center;

  &__avatar {
    width: 150px;
    height: 150px;
    margin: 0 auto 24px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 4px;
    color: $color-text;
  }

  &__role {
    font-size: 0.875rem;
    color: $color-primary;
    margin-bottom: 16px;
  }

  &__bio {
    color: $color-text-light;
    line-height: 1.6;
  }
}
</style>
