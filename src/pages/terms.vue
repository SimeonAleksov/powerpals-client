<template>
  <div class="terms">
    <nav class="terms__nav">
      <div class="terms__nav-content">
        <h2>On This Page</h2>
        <ul>
          <li v-for="section in sections" :key="section.id">
            <a :href="`#${section.id}`">{{ section.title }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="terms__main">
      <div class="terms__header">
        <h1>Terms of Service</h1>
        <time>Last updated: January 19, 2025</time>
      </div>

      <div class="terms__content">
        <section v-for="section in sections" :key="section.id" :id="section.id">
          <h2>{{ section.title }}</h2>
          <p v-if="section.content">{{ section.content }}</p>
          <ul v-if="section.list">
            <li v-for="item in section.list" :key="item">{{ item }}</li>
          </ul>
          <p v-if="section.additionalContent">{{ section.additionalContent }}</p>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: 'By accessing and using PowerPals ("the Platform"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the Platform.'
  },
  {
    id: 'registration',
    title: '2. User Registration',
    content: 'To use our services, you must:',
    list: [
      'Be at least 13 years of age',
      'Register with valid information',
      'Maintain account security',
      'Notify us of unauthorized activity',
      'Keep information updated',
      'Not create multiple accounts'
    ]
  },
  {
    id: 'services',
    title: '3. Service Provider Terms',
    content: 'Service Providers must:',
    list: [
      'Be at least 18 years old',
      'Verify identity and qualifications',
      'Maintain accurate service descriptions',
      'Complete services professionally',
      'Maintain minimum satisfaction ratings',
      'Accept platform payment terms',
      'Report violations promptly'
    ]
  },
  {
    id: 'clients',
    title: '4. Client Terms',
    list: [
      'Provide accurate booking information',
      'Communicate professionally',
      'Pay through platform only',
      'Follow cancellation policies',
      'Respect provider schedules',
      'Report issues promptly'
    ]
  },
  {
    id: 'payments',
    title: '5. Payments and Refunds',
    list: [
      'All payments process through platform',
      'Service fees non-refundable',
      'Refunds within 48 hours only',
      'Disputes handled by support',
      'Chargebacks may suspend account'
    ]
  },
  {
    id: 'conduct',
    title: '6. Code of Conduct',
    list: [
      'Treat others with respect',
      'No harassment or discrimination',
      'No inappropriate content',
      'No exploiting vulnerabilities',
      'Report violations'
    ]
  },
  {
    id: 'property',
    title: '7. Intellectual Property',
    content: 'PowerPals retains all rights to platform content. Users may not copy or distribute without permission.'
  },
  {
    id: 'termination',
    title: '8. Termination',
    content: 'We reserve the right to terminate accounts for violations, fraud, or at our discretion.'
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability',
    content: 'PowerPals is not liable for service quality, user behavior, or technical issues.'
  },
  {
    id: 'changes',
    title: '10. Changes to Terms',
    content: 'We may update terms at any time. Users will be notified of significant changes.'
  }
]
onMounted(() => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute('href'))
      target?.scrollIntoView({ behavior: 'smooth' })
    })
  })

  // Intersection Observer for active section highlighting
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.terms__nav a, .privacy__toc a')

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
  }

  const highlightNav = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active')
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active')
          }
        })
      }
    })
  }

  const observer = new IntersectionObserver(highlightNav, observerOptions)
  sections.forEach(section => observer.observe(section))

  // Scroll-based animations for sections
  const revealSection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section--visible')
      }
    })
  }

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  })

  sections.forEach(section => {
    section.classList.add('section--hidden')
    sectionObserver.observe(section)
  })

  // Cleanup
  onUnmounted(() => {
    observer.disconnect()
    sectionObserver.disconnect()
  })
})
</script>

<style lang="scss" scoped>
.terms {
  background: $color-background;
  padding: 40px 0;
  display: grid;
  grid-template-columns: 280px 1fr;
  max-width: 1200px;
  margin: 0 auto;
  gap: 64px;
  padding: 40px 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  &__nav {
    position: sticky;
    top: 24px;
    height: fit-content;

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__nav-content {
    padding: 24px;
    background: rgba($color-purple-dark, 0.03);
    border-radius: 12px;

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 16px;
      color: $color-text;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 8px;
    }

    a {
      color: $color-text-light;
      text-decoration: none;
      font-size: 0.875rem;
      transition: all 0.2s;
      padding: 4px 0;
      display: block;

      &:hover {
        color: $color-primary;
      }
    }
  }

  &__header {
    margin-bottom: 48px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba($color-purple-dark, 0.1);

    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      color: $color-text;
      margin-bottom: 16px;
    }

    time {
      color: $color-text-light;
      font-size: 0.875rem;
    }
  }

  &__content {
    section {
      margin-bottom: 48px;
      scroll-margin-top: 24px;

      h2 {
        font-size: 1.75rem;
        font-weight: 600;
        color: $color-primary;
        margin-bottom: 24px;
      }

      p {
        color: $color-text;
        line-height: 1.6;
        margin-bottom: 16px;
      }

      ul {
        list-style: none;
        padding-left: 8px;
        margin: 16px 0;

        li {
          color: $color-text;
          line-height: 1.6;
          margin-bottom: 12px;
          padding-left: 24px;
          position: relative;

          &::before {
            content: "•";
            position: absolute;
            left: 8px;
            color: $color-primary;
          }
        }
      }
    }
  }
}
.section--hidden {
  opacity: 0;
  transform: translateY(30px);
  transition: none;
}

.section--visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

// Active navigation state
.terms__nav a.active,
.privacy__toc a.active {
  color: $color-primary;
  background: rgba($color-purple-dark, 0.05);
  font-weight: 500;
}
</style>
