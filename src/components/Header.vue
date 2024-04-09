<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <h1>{{ prodStore.getIsCart ? 'Каталог' : 'Корзина' }}</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useProductsStore } from '@/stores/index.js'
const prodStore = useProductsStore()
</script>
