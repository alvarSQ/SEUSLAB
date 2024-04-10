<template>
  <tr>
    <td>
      <slot name="name" />
    </td>
    <td>
      <slot name="price" />
    </td>
    <td>
      <div class="action s-b" v-click-outside="onClickOutside">
        <CalcSvg class="calc" @click="isCalc = !isCalc" />
        <div class="keys" ref="keysList" :class="{ displayNone: !isCalc }" @click="calcKey">
          <div class="key_cell">7</div>
          <div class="key_cell">8</div>
          <div class="key_cell">9</div>
          <div class="key_cell">4</div>
          <div class="key_cell">5</div>
          <div class="key_cell">6</div>
          <div class="key_cell">1</div>
          <div class="key_cell">2</div>
          <div class="key_cell">3</div>
          <div class="key_cell gridSpan3">0</div>
        </div>
        <div class="number">
          {{ quantityNum }}
        </div>
        <div class="btn-count" @click="countPluse">
          +
        </div>
        <div class="btn-count minus" @click="countMinus">
          &minus;
        </div>
        <CartSvg class="calc" @click="prodStore.addProduct(props.name, quantityNum)" />
      </div>
    </td>
  </tr>
</template>

<script setup>
import CalcSvg from '@/components/svg/calcSvg.vue'
import CartSvg from '@/components/svg/cartSvg.vue'
import { ref } from 'vue'
import { useProductsStore } from '@/stores/index.js'
const prodStore = useProductsStore()

const props = defineProps({
  name: {
    type: String,
    required: true,
  }
})

const keysList = ref(null)
const quantityNum = ref(0)
const isCalc = ref(false)

const calcKey = (e) => {
  if (e.target.className !== 'keys') {    
    quantityNum.value = Number(e.target.innerText)
  }
}

const countPluse = () => {
  if (typeof (quantityNum.value) === 'string') {
    quantityNum.value = Number(quantityNum.value)
  }
  quantityNum.value += 1
}

const countMinus = () => {
  if (quantityNum.value > 0) {
    quantityNum.value = quantityNum.value - 1
  }
}

const onClickOutside = () => {
  isCalc.value = false
}

</script>

<style lang="scss">
.displayNone {
  display: none !important;
}

.gridSpan3 {
  grid-column: span 3;
}

.key_cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 800;
  cursor: pointer;
  border: 1px solid #1F2739;
}

.keys {
  position: absolute;
  z-index: 1;
  top: 50px;
  left: 6px;
  width: 213px;
  height: 290px;
  padding: 10px;
  color: #1F2739;
  background-color: rgb(240, 245, 255);
  display: grid;
  gap: 5% 5%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

.btn-count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 60px;
  cursor: pointer;
  border: 1px solid white;
}

.action {
  position: relative;
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  color: #1F2739;
  background-color: white;
}

.calc {
  width: 50px;
  height: 50px;
  fill: white;
  cursor: pointer;
}

.cart {
  width: 50px;
  height: 50px;
}
</style>
