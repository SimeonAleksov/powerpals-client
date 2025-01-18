<template>
  <div class="landing">
    <div class="landing__hero">
      <h1 class="landing__title">Your Gaming Success Partner</h1>
      <p class="landing__subtitle">
        Connect with expert gamers for coaching, boosting, and achievements unlocking.
        From casual gaming to competitive ranks - we've got you covered.
      </p>
      <div class="landing__cta">
        <button class="button button--primary">Join Early Access</button>
      </div>
    </div>

    <div class="landing__services">
      <h2 class="landing__section-title">Gaming Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <h3 class="service-card__title">Pro Coaching</h3>
          <p class="service-card__description">
            One-on-one sessions with top-ranked players. Learn strategies, improve mechanics,
            and master your favorite games.
          </p>
        </div>
        <div class="service-card">
          <h3 class="service-card__title">Achievement Hunting</h3>
          <p class="service-card__description">
            Unlock those hard-to-get achievements with help from experienced completionists.
          </p>
        </div>
        <div class="service-card">
          <h3 class="service-card__title">Rank Boosting</h3>
          <p class="service-card__description">
            Reach your desired competitive rank with our skilled boosters. Safe and reliable.
          </p>
        </div>
        <div class="service-card">
          <h3 class="service-card__title">Game Companions</h3>
          <p class="service-card__description">
            Find friendly players to team up with for better gaming experience.
          </p>
        </div>
      </div>
    </div>

    <div class="landing__providers">
      <h2 class="landing__section-title">Become a Provider</h2>
      <div class="provider-info">
        <div class="provider-info__content">
          <h3>Turn Your Gaming Skills Into Income</h3>
          <ul class="provider-info__list">
            <li>Set your own rates and schedule</li>
            <li>Build your reputation with reviews</li>
            <li>Access a global gaming community</li>
            <li>Secure payments and support</li>
          </ul>
          <button class="button button--secondary">Apply as Provider</button>
        </div>
      </div>
    </div>

    <div class="landing__signup">
      <div class="signup-form">
        <h2>Get Early Access</h2>
        <p>Be the first to know when PowerPals launches. Early members get special perks!</p>
        <div class="signup-form__input-group">
          <input type="email" placeholder="Enter your email" class="signup-form__input">
          <button class="button button--primary">Join Waitlist</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba($color-purple-dark, 0.05) 0%, rgba($color-cyan-light, 0.05) 100%);

  &__hero {
    padding: $spacing-xl * 3 $spacing-xl $spacing-xl * 2;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__title {
    font-size: $font-size-h1;
    font-weight: 800;
    background: linear-gradient(135deg, $color-purple-dark, $color-blue);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: $spacing-xl;
  }

  &__subtitle {
    font-size: $font-size-h3;
    color: $color-text-light;
    max-width: 800px;
    margin: 0 auto $spacing-xl;
    line-height: 1.5;
  }

  &__section-title {
    text-align: center;
    font-size: $font-size-h2;
    color: $color-text;
    margin-bottom: $spacing-xl * 2;
  }

  &__services, &__providers, &__signup {
    padding: $spacing-xl * 2;
    max-width: 1200px;
    margin: 0 auto;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-xl;
}

.service-card {
  background: $color-background;
  padding: $spacing-xl;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba($color-purple-dark, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba($color-purple-dark, 0.15);
  }

  &__title {
    color: $color-primary;
    font-size: 1.5rem;
    margin-bottom: $spacing-md;
  }

  &__description {
    color: $color-text-light;
    line-height: 1.6;
  }
}

.provider-info {
  background: linear-gradient(135deg, $color-purple-dark, $color-blue);
  padding: $spacing-xl;
  border-radius: 16px;
  color: $color-background;

  &__content {
    max-width: 600px;
    margin: 0 auto;
  }

  &__list {
    list-style-type: none;
    margin: $spacing-xl 0;

    li {
      margin: $spacing-md 0;
      padding-left: $spacing-md;
      position: relative;

      &::before {
        content: "✓";
        position: absolute;
        left: -$spacing-md;
        color: $color-aqua-light;
      }
    }
  }
}

.signup-form {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: $spacing-xl;
  background: $color-background;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba($color-purple-dark, 0.1);

  h2 {
    color: $color-primary;
    margin-bottom: $spacing-md;
  }

  p {
    color: $color-text-light;
    margin-bottom: $spacing-xl;
  }

  &__input-group {
    display: flex;
    gap: $spacing-md;
    margin-top: $spacing-xl;
  }

  &__input {
    flex: 1;
    padding: $spacing-md;
    border: 2px solid rgba($color-purple-dark, 0.2);
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: $color-primary;
    }
  }
}

.button {
  padding: $spacing-md $spacing-xl;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;

  &--primary {
    background: linear-gradient(135deg, $color-purple-dark, $color-blue);
    color: $color-background;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba($color-purple-dark, 0.3);
    }
  }

  &--secondary {
    background: rgba($color-background, 0.1);
    color: $color-background;
    border: 2px solid $color-background;

    &:hover {
      background: rgba($color-background, 0.2);
      transform: translateY(-2px);
    }
  }
}

@media (max-width: 768px) {
  .signup-form__input-group {
    flex-direction: column;
  }

  .landing__title {
    font-size: 2.5rem;
  }

  .landing__subtitle {
    font-size: 1.25rem;
  }
}
</style>
