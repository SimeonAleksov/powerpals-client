<template>
  <div class="privacy">
    <aside class="privacy__aside">
      <div class="privacy__toc">
        <span class="privacy__toc-label">Contents</span>
        <ul>
          <li v-for="section in sections" :key="section.id">
            <a :href="`#${section.id}`">{{ section.title }}</a>
          </li>
        </ul>
      </div>
    </aside>

    <main class="privacy__main">
      <div class="privacy__header">
        <h1>Privacy Policy</h1>
        <time>Last updated: January 19, 2025</time>
        <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use PowerPals.</p>
      </div>

      <div class="privacy__content">
        <section v-for="section in sections" :key="section.id" :id="section.id">
          <div class="privacy__section">
            <h2>{{ section.title }}</h2>
            <template v-if="section.subsections">
              <div v-for="sub in section.subsections" :key="sub.title" class="privacy__subsection">
                <h3>{{ sub.title }}</h3>
                <p v-if="sub.content">{{ sub.content }}</p>
                <ul v-if="sub.list">
                  <li v-for="item in sub.list" :key="item">{{ item }}</li>
                </ul>
              </div>
            </template>
            <p v-if="section.content">{{ section.content }}</p>
            <ul v-if="section.list">
              <li v-for="item in section.list" :key="item">{{ item }}</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const sections = [
  {
    id: 'collection',
    title: '1. Information We Collect',
    subsections: [
      {
        title: 'Personal Information',
        content: 'We collect the following personal information:',
        list: [
          'Name and email address',
          'Gaming profiles and usernames',
          'Payment information',
          'Profile pictures',
          'Communication preferences',
          'Service preferences'
        ]
      },
      {
        title: 'Usage Information',
        content: 'We automatically collect:',
        list: [
          'Login activity and sessions',
          'Service usage statistics',
          'Device information',
          'Location data',
          'Performance metrics'
        ]
      }
    ]
  },
  {
    id: 'use',
    title: '2. How We Use Information',
    list: [
      'Provide and improve services',
      'Process payments',
      'Match users and providers',
      'Send updates and notifications',
      'Prevent fraud',
      'Analyze platform usage',
      'Personalize experience'
    ]
  },
  {
    id: 'sharing',
    title: '3. Information Sharing',
    content: 'We share information with:',
    list: [
      'Service providers and partners',
      'Payment processors',
      'Legal authorities when required',
      'Other users as needed for services'
    ]
  },
  {
    id: 'security',
    title: '4. Data Security',
    list: [
      'Encryption of sensitive data',
      'Regular security audits',
      'Access controls',
      'Secure storage',
      'Incident response procedures'
    ]
  },
  {
    id: 'rights',
    title: '5. Your Rights',
    list: [
      'Access your data',
      'Correct information',
      'Delete account',
      'Export data',
      'Opt out of communications'
    ]
  },
  {
    id: 'cookies',
    title: '6. Cookies and Tracking',
    content: 'We use cookies for:',
    list: [
      'Authentication',
      'Preferences',
      'Analytics',
      'Performance monitoring'
    ]
  },
  {
    id: 'children',
    title: '7. Childrens Privacy',
    content: 'Our services are not intended for users under 13. We do not knowingly collect data from children.'
  },
  {
    id: 'international',
    title: '8. International Transfers',
    content: 'Your data may be processed in different countries with appropriate safeguards.'
  },
  {
    id: 'updates',
    title: '9. Policy Updates',
    content: 'We will notify you of significant changes via email or platform notices.'
  },
  {
    id: 'contact',
    title: '10. Contact Us',
    content: 'Questions about privacy? Contact privacy@powerpals.com or our Data Protection Officer at dpo@powerpals.com.'
  }
]
</script>
<style lang="scss" scoped>
.privacy {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  &__aside {
    position: sticky;
    top: 24px;
    height: fit-content;

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__toc {
    background: linear-gradient(135deg, rgba($color-purple-dark, 0.05), rgba($color-blue, 0.05));
    padding: 32px;
    border-radius: 16px;
  }

  &__toc-label {
    display: block;
    font-weight: 600;
    color: $color-primary;
    margin-bottom: 16px;
    font-size: 1.125rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: $color-text-light;
    text-decoration: none;
    font-size: 0.875rem;
    transition: all 0.2s;
    display: block;
    padding: 6px 12px;
    border-radius: 6px;

    &:hover {
      color: $color-primary;
      background: rgba($color-purple-dark, 0.05);
    }
  }

  &__header {
    max-width: 720px;
    margin-bottom: 64px;

    h1 {
      font-size: 3rem;
      font-weight: 800;
      background: linear-gradient(135deg, $color-purple-dark, $color-blue);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 16px;

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    time {
      display: block;
      color: $color-text-light;
      margin-bottom: 24px;
      font-size: 0.875rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.6;
      color: $color-text-light;

      @media (max-width: 768px) {
        font-size: 1.125rem;
      }
    }
  }

  &__section {
    margin-bottom: 64px;
    max-width: 720px;
    scroll-margin-top: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: $color-text;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 2px solid rgba($color-purple-dark, 0.1);

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }

  &__subsection {
    margin-top: 32px;
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: $color-primary;
      margin-bottom: 16px;
    }
  }

  &__content {
    p {
      color: $color-text;
      line-height: 1.6;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul {
      margin: 16px 0;
      padding-left: 8px;

      li {
        color: $color-text;
        line-height: 1.6;
        margin-bottom: 12px;
        padding-left: 24px;
        position: relative;

        &::before {
          content: "→";
          position: absolute;
          left: 0;
          color: $color-primary;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

// Dark mode adjustments
:root[class~="dark"] {
  .privacy {
    &__toc {
      background: linear-gradient(135deg,
        rgba($color-purple-dark, 0.15),
        rgba($color-blue, 0.15)
      );
    }

    &__section {
      h2 {
        border-bottom-color: rgba($color-purple-dark, 0.2);
      }
    }

    a:hover {
      background: rgba($color-purple-dark, 0.15);
    }

    &__content {
      ul {
        li::before {
          color: $color-cyan;
        }
      }
    }
  }
}
</style>
