<template>
  <div class="wrapper1 s-b">
    <div class="button-contener">
      <button class="btn btnDefault">Каталог</button>
      <button class="btn btnDefault">Корзина (0)</button>
    </div>
    <!-- <Catalog /> -->
    <Cart />
  </div>

</template>

<script setup>
import Catalog from '@/components/Catalog.vue';
import Cart from '@/components/Cart.vue';

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
