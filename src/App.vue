<template>
  <div class="wapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <RouterView />
      </div>
    </div>
    <Footer v-if="!prodStore.getIsCart" />
  </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useProductsStore } from '@/stores/index.js'
const prodStore = useProductsStore()
</script>