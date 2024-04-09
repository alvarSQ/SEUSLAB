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
        <th>
          <p>Количество</p>
        </th>
        <th>
          <p>Стоимость</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in prodStore.getCart" :key="product.name">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>
          <div class="s-b">
            {{ product.quantity * product.price }} <span class="del"
              @click="prodStore.delProduct(product.name)">&#10060;</span>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="itogo">
        <td></td>
        <td></td>
        <td>Итого:</td>
        <td>{{ sumItogo }} руб.</td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
import { computed } from 'vue'
import { useProductsStore } from '@/stores/index.js'
const prodStore = useProductsStore()

const sumItogo = computed(() => prodStore.getCart.reduce((sum, e) => sum + (e.price * e.quantity), 0).toFixed(2))
</script>


<style lang="scss">

.del {
  cursor: pointer;
}

.itogo {
  color: #1F2739;
  background-color: #f7f7f7 !important;
}
</style>
