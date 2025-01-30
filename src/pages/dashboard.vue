<template>
    <div class="dashboard">
      <!-- Sidebar -->
      <aside class="dashboard__sidebar">
        <ul class="dashboard__sidebar-list">
          <li 
            v-for="menuItem in menuItems" 
            :key="menuItem.id" 
            :class="['dashboard__sidebar-item', { 'dashboard__sidebar-item--active': menuItem.id === activeMenu }]"
            @click="selectMenu(menuItem.id)"
          >
            {{ menuItem.name }}
          </li>
        </ul>
      </aside>
  
      <!-- Main Content -->
      <main class="dashboard__content">
        <header class="dashboard__content-header">
          <div class="dashboard__content-title-section">
            <h1 class="dashboard__content-title">{{ activeMenuName }}</h1>
            <div class="dashboard__content-tabs">
              <button 
                v-for="tab in tabs" 
                :key="tab.id" 
                :class="['dashboard__content-tab', { 'dashboard__content-tab--active': tab.id === activeTab }]"
                @click="selectTab(tab.id)"
              >
                {{ tab.name }}
              </button>
            </div>
          </div>
          <button class="dashboard__content-new-proposal button button--primary">+ New Proposal</button>
        </header>
  
        <div class="dashboard__filters">
          <div class="dashboard__filters-buttons">
            <button 
              v-for="filter in filters" 
              :key="filter.id" 
              :class="['dashboard__filters-button', { 'dashboard__filters-button--active': filter.id === activeFilter }]"
              @click="applyFilter(filter.id)"
            >
              {{ filter.name }}
            </button>
          </div>
          <input type="text" class="dashboard__filters-search" placeholder="Search..." v-model="searchQuery" />
        </div>
  
        <section class="dashboard__list">
          <div 
            class="dashboard__list-item" 
            v-for="item in filteredItems" 
            :key="item.id"
          >
            <img :src="item.image" :alt="item.title" class="dashboard__list-item-image" />
            <div class="dashboard__list-item-content">
              <h3 class="dashboard__list-item-title">{{ item.title }}</h3>
              <p class="dashboard__list-item-details">{{ item.details }}</p>
            </div>
            <p class="dashboard__list-item-price">{{ item.price }}</p>
            <span class="dashboard__list-item-status">{{ item.status }}</span>
            <button class="dashboard__list-item-menu">...</button>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const menuItems = ref([
    { id: 1, name: 'Home' },
    { id: 2, name: 'Jobs' },
    { id: 3, name: 'Calendar' },
    { id: 4, name: 'Performance' },
    { id: 5, name: 'Proposals' },
  ]);
  
  const tabs = ref([
    { id: 'proposals', name: 'Proposals' },
    { id: 'templates', name: 'Templates' },
    { id: 'settings', name: 'Settings' },
  ]);
  
  const filters = ref([
    { id: 'all', name: 'All' },
    { id: 'opened', name: 'Opened' },
    { id: 'draft', name: 'Draft' },
    { id: 'sent', name: 'Sent' },
  ]);
  
  const items = ref([
    {
      id: 1,
      title: 'London Road, Sheffield, UK',
      details: 'Travis Rosario | Created by: Plabon | Today, 1:00 pm',
      price: '$1,200.00',
      status: 'Sent',
      image: 'path/to/image1.jpg',
    },
    {
      id: 2,
      title: 'New York Drive, CA, USA',
      details: 'Aileen Foley | Created by: Plabon | 2 days ago',
      price: '$3,450.00',
      status: 'Sent',
      image: 'path/to/image2.jpg',
    },
    {
      id: 3,
      title: 'California 1, Malibu, CA, USA',
      details: 'Briar House | Created by: Alex | 4 days ago',
      price: '$2,600.00',
      status: 'Sent',
      image: 'path/to/image3.jpg',
    },
  ]);
  
  const activeMenu = ref(5);
  const activeTab = ref('proposals');
  const activeFilter = ref('all');
  const searchQuery = ref('');
  
  const selectMenu = (menuId) => {
    activeMenu.value = menuId;
  };
  
  const selectTab = (tabId) => {
    activeTab.value = tabId;
  };
  
  const applyFilter = (filterId) => {
    activeFilter.value = filterId;
  };
  
  const filteredItems = computed(() => {
    let filtered = items.value;
  
    if (activeFilter.value !== 'all') {
      filtered = filtered.filter(item => item.status.toLowerCase() === activeFilter.value);
    }
  
    if (searchQuery.value) {
      filtered = filtered.filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
    }
  
    return filtered;
  });
  
  const activeMenuName = computed(() => {
    return menuItems.value.find(menu => menu.id === activeMenu.value)?.name || '';
  });
  </script>
  
  <style lang="scss" scoped>
  
  .dashboard {
    display: flex;
    height: 100vh;
    background: var(--color-bg-secondary);
  
    &__sidebar {
      width: 250px;
      background: var(--color-bg-primary);
      padding: $spacing-lg;
      border-right: 1px solid var(--color-border);
  
      &-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
  
      &-item {
        padding: $spacing-md;
        cursor: pointer;
        border-radius: $border-radius-sm;
        margin-bottom: $spacing-sm;
        font-weight: 500;
        color: var(--color-text-primary);
        transition: var(--transition-base);
  
        &--active,
        &:hover {
          background: var(--color-border);
        }
      }
    }
  
    &__content {
      flex: 1;
      padding: $spacing-lg;
      background: var(--color-bg-primary);
      color: var(--color-text-primary);
  
      &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: $spacing-lg;
      }
  
      &-title-section {
        display: flex;
        flex-direction: column;
      }
  
      &-tabs {
        display: flex;
        gap: $spacing-sm;
        margin-top: $spacing-sm;
      }
  
      &-tab {
        padding: $spacing-sm $spacing-md;
        background: var(--color-bg-secondary);
        border: 1px solid var(--color-border);
        border-radius: $border-radius-sm;
        cursor: pointer;
        transition: var(--transition-base);
  
        &--active {
          background: var(--color-primary);
          color: #fff;
        }
      }
    }
  
    &__filters {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: $spacing-lg;
  
      &-buttons {
        display: flex;
        gap: $spacing-sm;
      }
  
      &-button {
        padding: $spacing-sm $spacing-md;
        background: var(--color-bg-secondary);
        border: 1px solid var(--color-border);
        border-radius: $border-radius-sm;
        cursor: pointer;
        transition: var(--transition-base);
  
        &--active {
          background: var(--color-primary);
          color: #fff;
        }
      }
  
      &-search {
        padding: $spacing-sm;
        border: 1px solid var(--color-border);
        border-radius: $border-radius-sm;
      }
    }
  
    &__list {
      display: flex;
      flex-direction: column;
      gap: $spacing-sm;
  
      &-item {
        display: flex;
        align-items: center;
        padding: $spacing-md;
        border: 1px solid var(--color-border);
        border-radius: $border-radius-md;
        transition: var(--transition-base);
  
        &:hover {
          background: var(--color-bg-secondary);
        }
  
        &-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: $spacing-md;
        }
  
        &-content {
          flex: 1;
        }
  
        &-title {
          font-size: $font-size-h3;
          font-weight: bold;
        }
  
        &-details {
          font-size: $font-size-base;
          color: var(--color-text-secondary);
        }
  
        &-price {
          font-size: $font-size-h3;
          font-weight: bold;
          margin-right: $spacing-md;
        }
  
        &-status {
          font-size: $font-size-base;
          color: var(--color-secondary);
          font-weight: bold;
        }
  
        &-menu {
          background: none;
          border: none;
          font-size: $font-size-base;
          cursor: pointer;
          color: var(--color-text-secondary);
  
          &:hover {
            color: var(--color-text-primary);
          }
        }
      }
    }
  }
  
  .button {
    padding: $spacing-md $spacing-xl;
    border-radius: $border-radius-full;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition-base);
    border: none;
  
    &--primary {
      background: linear-gradient(135deg, $color-purple 0%, $color-blue 100%);
      color: white;
  
      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba($color-purple, 0.25);
      }
  
      &:active {
        transform: translateY(0);
      }
  
      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }
    }
  }
  </style>
  