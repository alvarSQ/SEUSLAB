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
      <tr v-for="product in products" :key="product.name">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>
          <div class="action s-b">
            <div class="keys" :class="{ displayNone: !isCalc }" @click="clickCalc">
              <div class="key_cell">7</div>
              <div class="key_cell">8</div>
              <div class="key_cell">9</div>
              <div class="key_cell">4</div>
              <div class="key_cell">5</div>
              <div class="key_cell">6</div>
              <div class="key_cell">1</div>
              <div class="key_cell">2</div>
              <div class="key_cell">3</div>
              <div class="key_cell">0</div>
              <div class="key_cell gridSpan2"> &#9668;</div>
            </div>
            <CalcSvg class="calc cursor-pointer" @click="isCalc = !isCalc" @blur="isCalc = false" />
            <template v-if="isCart">
              <div class="number">
                <template v-for="productInCart in cart" :key="productInCart.name">
                  <template v-if="productInCart.name === product.name">
                    {{ productInCart.quantity }}
                  </template>
                  <template v-else-if="productInCart.quantity">

                  </template>
                </template>
              </div>
            </template>
            <template v-else>
              <div class="number"></div>
            </template>
            <div class="btn-count cursor-pointer" @click="plused(product.name)">
              +
            </div>
            <div class="btn-count minus cursor-pointer" @click="minused(product.name)">
              &minus;
            </div>
            <CartSvg class="calc cursor-pointer" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import CalcSvg from './svg/calcSvg.vue'
import CartSvg from './svg/cartSvg.vue'
import { ref, computed, watch } from 'vue'

const cart = ref([])
const products = ref([
  {
    name: 'Продукт №1',
    price: 111.11
  },
  {
    name: 'Продукт №2',
    price: 222.22
  },
  {
    name: 'Продукт №3',
    price: 333.33
  },
  {
    name: 'Продукт №4',
    price: 444.44
  }
])
const isCalc = ref(false)
const quantity = ref(0)
const name = ref('Продукт №1')
const isCart = ref(false)

const plused = (name) => {
  let obj = null
  if (!cart.value.some(el => el.name === name)) {
    obj = products.value.filter(el => el.name === name)
    obj[0].quantity = 0
    obj[0].sum = obj[0].price * obj[0].quantity
    cart.value.push(...obj)
  }
  cart.value.map(el => {
    if (el.name === name) {
      el.quantity += 1
    }
  })
}


// const plused = (id) => {
//   return products.value.map(el => {
//     if (el.id === id) {
//       el.quantity +=1
//     }    
//   })
// }

const minused = (name) => {
  return products.value.map(el => {
    if (el.quantity > 0) {
      if (el.name === name) {
        el.quantity = el.quantity - 1
      }
    }
  })
}

const quantityed = computed(() => {
  let obj = null
  if (cart.value[0]) {
    obj = cart.value.filter(el => el.name === name.value)
    if (name.value === obj[0].name) {
      return obj[0].quantity
    }
  }
  else {
    return 0
  }
  return 0
})

watch(
  () => cart.value,
  () => {
    isCart.value = true
    console.log(cart.value);
  },
  { deep: true }
)



</script>

<style lang="scss">
.cursor-pointer {
  cursor: pointer;
}

.displayNone {
  display: none !important;
}

.gridSpan2 {
  grid-column: span 2;
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
  z-index: 2;
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

// input[type="number"]::-webkit-inner-spin-button,
// input[type="number"]::-webkit-outer-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }

.wTitle {
  width: 50%;
}

.wAction {
  width: 400px;
}

.calc {
  width: 50px;
  height: 50px;
  fill: white;
}

.cart {
  width: 50px;
  height: 50px;
}

.container-table {
  text-align: left;
  overflow: hidden;
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
