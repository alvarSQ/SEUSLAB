<template>
  <div class="wrapper1 s-b">
    <div class="button-contener">
      <button class="btn btnDefault" @click="prodStore.isCart = true">
        Каталог
      </button>
      <button class="btn btnDefault" @click="prodStore.isCart = false">
        Корзина ({{ prodStore.getCart.length }})
      </button>
    </div>
    <Catalog v-if="prodStore.getIsCart" />
    <Cart v-else />
  </div>

</template>

<script setup>
import Catalog from '@/components/Catalog.vue';
import Cart from '@/components/Cart.vue';
import { useProductsStore } from '@/stores/index.js'
const prodStore = useProductsStore()
</script>

<style lang="scss">
.s-b {
  display: flex;
  justify-content: space-between;
}

.button-contener {
  display: flex;
  flex-direction: column;
  width: 200px;
}
</style>
