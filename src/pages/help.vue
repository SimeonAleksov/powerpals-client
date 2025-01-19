<template>
  <div class="help">
    <!-- Hero Section with Search -->
    <section class="help__hero">
      <div class="help__hero-content">
        <h1>How can we help you?</h1>
        <div class="help__search">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search for answers..."
            @input="handleSearch"
          >
          <span class="help__search-icon">🔍</span>
        </div>
        <div v-if="searchResults.length > 0" class="help__search-results">
          <div
            v-for="result in searchResults"
            :key="result.id"
            class="help__search-result"
            @click="scrollToQuestion(result.id)"
          >
            <span class="help__result-category">{{ result.category }}</span>
            <p>{{ result.question }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Quick Nav -->
    <nav class="help__categories">
      <button
        v-for="cat in categories"
        :key="cat"
        class="help__category-btn"
        :class="{ 'help__category-btn--active': activeCategory === cat }"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </nav>

    <!-- FAQ Sections -->
    <div class="help__content">
      <section
        v-for="(items, category) in filteredQuestions"
        :key="category"
        class="help__section"
      >
        <h2>{{ category }}</h2>
        <div class="help__questions">
          <div
            v-for="item in items"
            :key="item.id"
            class="help__question"
            :id="item.id"
          >
            <button
              class="help__question-header"
              @click="toggleQuestion(item.id)"
              :aria-expanded="expandedQuestions.includes(item.id)"
            >
              <span>{{ item.question }}</span>
              <span class="help__question-icon">
                {{ expandedQuestions.includes(item.id) ? '−' : '+' }}
              </span>
            </button>
            <div
              v-show="expandedQuestions.includes(item.id)"
              class="help__answer"
            >
              <p>{{ item.answer }}</p>
              <div v-if="item.relatedLinks" class="help__related">
                <p class="help__related-title">Related articles:</p>
                <ul>
                  <li v-for="link in item.relatedLinks" :key="link.url">
                    <a :href="link.url">{{ link.text }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Still Need Help -->
    <section class="help__contact">
      <div class="help__contact-card">
        <h2>Still Need Help?</h2>
        <p>Our support team is available 24/7 to assist you.</p>
        <div class="help__contact-options">
          <a href="/contact" class="help__contact-btn help__contact-btn--primary">
            Contact Support
          </a>
          <a href="/discord" class="help__contact-btn help__contact-btn--secondary">
            Join Discord
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const activeCategory = ref('All')
const expandedQuestions = ref<string[]>([])

// Categories and questions data
const categories = ['All', 'Getting Started', 'Account', 'Services', 'Payments', 'Safety']

const faqData = {
  'Getting Started': [
    {
      id: 'gs1',
      question: 'How do I get started with PowerPals?',
      answer: 'Sign up for an account, complete your profile, and browse available services. You can start booking gaming sessions with our verified providers immediately.',
      relatedLinks: [
        { text: 'Creating an account', url: '/docs/account-creation' },
        { text: 'Finding the right provider', url: '/docs/finding-providers' }
      ]
    },
    {
      id: 'gs2',
      question: 'What games do you support?',
      answer: 'We support a wide range of popular games across all platforms. Our providers specialize in various genres including FPS, MOBA, MMO, and Battle Royale games.'
    }
  ],
  'Account': [
    {
      id: 'acc1',
      question: 'How do I reset my password?',
      answer: 'Click the "Forgot Password" link on the login page. We\'ll send you an email with instructions to reset your password.'
    },
    {
      id: 'acc2',
      question: 'Can I change my username?',
      answer: 'Yes, you can change your username once every 30 days from your account settings.'
    }
  ],
  'Services': [
    {
      id: 'srv1',
      question: 'What types of services are available?',
      answer: 'We offer coaching, boosting, achievement hunting, and casual gaming companionship services.',
      relatedLinks: [
        { text: 'Service types explained', url: '/docs/services' }
      ]
    }
  ],
  'Payments': [
    {
      id: 'pay1',
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, PayPal, and various local payment methods depending on your region.'
    },
    {
      id: 'pay2',
      question: 'How do refunds work?',
      answer: 'Refund requests can be submitted within 48 hours of service completion. Each case is reviewed by our support team.'
    }
  ],
  'Safety': [
    {
      id: 'saf1',
      question: 'How do you verify providers?',
      answer: 'All providers undergo a thorough verification process including ID verification, gaming credentials check, and background screening.'
    }
  ]
}

// Computed properties and methods
const filteredQuestions = computed(() => {
  if (activeCategory.value === 'All') {
    return faqData
  }
  return {
    [activeCategory.value]: faqData[activeCategory.value]
  }
})

const searchResults = computed(() => {
  if (!searchQuery.value) return []
  const query = searchQuery.value.toLowerCase()
  const results = []

  for (const [category, questions] of Object.entries(faqData)) {
    for (const q of questions) {
      if (
        q.question.toLowerCase().includes(query) ||
        q.answer.toLowerCase().includes(query)
      ) {
        results.push({ ...q, category })
      }
    }
  }
  return results.slice(0, 5)
})

const handleSearch = () => {
  if (searchQuery.value) {
    activeCategory.value = 'All'
  }
}

const toggleQuestion = (id: string) => {
  const index = expandedQuestions.value.indexOf(id)
  if (index === -1) {
    expandedQuestions.value.push(id)
  } else {
    expandedQuestions.value.splice(index, 1)
  }
}

const scrollToQuestion = (id: string) => {
  expandedQuestions.value = [id]
  searchQuery.value = ''
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<style lang="scss" scoped>
.help {
  min-height: 100vh;
  background: $color-background;

  &__hero {
    background: linear-gradient(135deg, rgba($color-purple-dark, 0.05), rgba($color-blue, 0.05));
    padding: 80px 24px;
    text-align: center;
  }

  &__hero-content {
    max-width: 700px;
    margin: 0 auto;
    position: relative;

    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      color: $color-text;
      margin-bottom: 32px;
    }
  }

  &__search {
    position: relative;
    margin-bottom: 16px;

    input {
      width: 100%;
      padding: 16px 24px;
      padding-right: 48px;
      border-radius: 12px;
      border: 2px solid rgba($color-purple-dark, 0.1);
      font-size: 1.125rem;
      background: white;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: $color-primary;
        box-shadow: 0 4px 12px rgba($color-purple-dark, 0.1);
      }
    }
  }

  &__search-icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.25rem;
    color: $color-text-light;
  }

  &__search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-top: 8px;
    z-index: 10;
  }

  &__search-result {
    padding: 16px;
    border-bottom: 1px solid rgba($color-purple-dark, 0.1);
    cursor: pointer;
    transition: all 0.2s ease;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: rgba($color-purple-dark, 0.02);
    }

    p {
      color: $color-text;
      margin: 4px 0;
    }
  }

  &__result-category {
    font-size: 0.75rem;
    color: $color-primary;
    font-weight: 500;
    display: block;
  }

  &__categories {
    display: flex;
    gap: 12px;
    padding: 24px;
    max-width: 900px;
    margin: 0 auto;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__category-btn {
    padding: 8px 16px;
    border-radius: 20px;
    border: none;
    background: none;
    color: $color-text-light;
    font-size: 0.875rem;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;

    &:hover {
      color: $color-primary;
    }

    &--active {
      background: $color-primary;
      color: white;

      &:hover {
        color: white;
        background: darken($color-primary, 5%);
      }
    }
  }

  &__content {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 24px;
  }

  &__section {
    margin-bottom: 48px;

    h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: $color-text;
      margin-bottom: 24px;
    }
  }

  &__questions {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__question {
    border-radius: 12px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  &__question-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    color: $color-text;
    font-weight: 500;
    font-size: 1rem;
  }

  &__question-icon {
    font-size: 1.5rem;
    color: $color-primary;
    font-weight: 300;
  }

  &__answer {
    padding: 0 24px 24px;
    color: $color-text-light;
    line-height: 1.6;
  }

  &__related {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba($color-purple-dark, 0.1);
  }

  &__related-title {
    font-size: 0.875rem;
    font-weight: 500;
    color: $color-text;
    margin-bottom: 8px;
  }

  &__related {
    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 8px;
    }

    a {
      color: $color-primary;
      text-decoration: none;
      font-size: 0.875rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__contact {
    padding: 80px 24px;
    background: linear-gradient(135deg, rgba($color-purple-dark, 0.05), rgba($color-blue, 0.05));
  }

  &__contact-card {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    padding: 48px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: $color-text;
      margin-bottom: 16px;
    }

    p {
      color: $color-text-light;
      margin-bottom: 32px;
    }
  }

  &__contact-options {
    display: flex;
    gap: 16px;
    justify-content: center;

    @media (max-width: 640px) {
      flex-direction: column;
    }
  }

  &__contact-btn {
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    min-width: 160px;

    &--primary {
      background: $color-primary;
      color: white;

      &:hover {
        background: darken($color-primary, 5%);
        transform: translateY(-1px);
      }
    }

    &--secondary {
      background: rgba($color-purple-dark, 0.05);
      color: $color-text;

      &:hover {
        background: rgba($color-purple-dark, 0.1);
        transform: translateY(-1px);
      }
    }
  }
}

// Dark mode adjustments
:root[class~="dark"] {
  .help {
    &__question {
      background: rgba($color-purple-dark, 0.1);
    }

    &__search {
      input {
        background: rgba($color-purple-dark, 0.1);
        border-color: rgba($color-purple-dark, 0.2);
        color: $color-text;

        &:focus {
          border-color: $color-primary;
          background: rgba($color-purple-dark, 0.15);
        }
      }
    }

    &__search-results {
      background: var(--color-bg-primary);
      border: 1px solid rgba($color-purple-dark, 0.2);
    }

    &__search-result {
      border-color: rgba($color-purple-dark, 0.2);

      &:hover {
        background: rgba($color-purple-dark, 0.1);
      }
    }

    &__contact-card {
      background: var(--color-bg-primary);
    }

    &__contact-btn {
      &--secondary {
        background: rgba($color-purple-dark, 0.2);
        color: $color-text;

        &:hover {
          background: rgba($color-purple-dark, 0.3);
        }
      }
    }
  }
}
</style>
