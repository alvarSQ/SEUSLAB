<template>
  <table class="container-table">
    <thead>
      <tr>
        <th class="wTitle">
          <p>Наименование</p>
        </th>
        <th>
          <p>Цена</p>
        </th>
        <th class="wAction">
          <p>Действия</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <ProductCard v-for="product in prodStore.getProducts" :key="product.name" :name="product.name">
        <template v-slot:name>
          {{ product.name }}
        </template>
        <template v-slot:price>
          {{ product.price }}
        </template>
      </ProductCard>
    </tbody>
  </table>
</template>

<script setup>
import ProductCard from '@/components/UI/ProductCard.vue'
import { useProductsStore } from '@/stores/index.js'
const prodStore = useProductsStore()
</script>

<style lang="scss">
.wTitle {
  width: 50%;
}

.wAction {
  width: 400px;
}

.container-table {
  text-align: left;
  width: 80%;
  display: table;
  padding: 0 0 8em 0;
  color: white;

  td {
    font-weight: normal;
    font-size: 22px;
  }

  th p {
    font-weight: bold;
    font-size: 18px;
    text-align: left;
    color: white;
  }

  td,
  th {
    padding-bottom: 2%;
    padding-top: 2%;
    padding-left: 2%;
  }

  tr:nth-child(odd) {
    background-color: #323C50;
  }

  tr:nth-child(even) {
    background-color: #2C3446;
  }

  th {
    background-color: #1F2739;
  }
}
</style>
