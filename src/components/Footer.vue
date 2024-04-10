<template>
  <footer class="footer">
    <div class="container flex-end">
      <div class="button-footer">
        <button class="btn btnDefault btn-line" @click="inJson(); prodStore.delAll(); prodStore.isCart = true">
          Берем
        </button>
        <button class=" btn btnDefault btn-line" @click="prodStore.delAll(); prodStore.isCart = true">
          Пожалуй откажусь
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useProductsStore } from '@/stores/index.js'
const prodStore = useProductsStore()

const inJson = () => {
  let arrObj = []
  let obj = {}
  Object.assign(arrObj, prodStore.getCart)
  arrObj.map(el => {
    el.sum = el.price * el.quantity
  })
  obj.allSum = prodStore.getCart.reduce((sum, e) => sum + (e.price * e.quantity), 0).toFixed(2)
  arrObj.push(obj)
  console.log(JSON.stringify(arrObj, null, '\t'));
}
</script>

<style lang="scss">
.flex-end {
  display: flex;
  justify-content: flex-end;
}

.button-footer {
  display: flex;
  width: 600px;
  margin-top: 20px;
}

.btn-line {
  margin-bottom: 0;
  margin-left: 20px;
}

.btn-line {
  margin-bottom: 0;
  margin-left: 20px;
}

</style>