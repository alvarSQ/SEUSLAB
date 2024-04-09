import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
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
    ],
    cart: [],
    isCart: true,
    isInCart: false
  }),
  getters: {
    getProducts: state => state.products,
    getCart: state => state.cart,
    getIsCart: state => state.isCart,
    getDelProd: state => name => state.cart.filter(el => el.name !== name),
    getQuantityNull: state => state.cart.filter(el => el.quantity !== 0),
  },
  actions: {
    plused(name) {
      let obj = {}
      if (!this.getCart.some(el => el.name === name)) {
        Object.assign(obj, this.getProducts.filter(el => el.name === name)[0])
        obj.quantity = 0
        this.cart.push(obj)
      }
      this.cart.map(el => {
        if (el.name === name) {
          el.quantity += 1
        }
      })
    },

    minused(name) {
      this.cart.map(el => {
        if (el.quantity > 0) {
          if (el.name === name) {
            el.quantity = el.quantity - 1
          }
        }
      })
      this.cart = this.getQuantityNull
    },

    delProduct(name) {
      this.cart = this.getDelProd(name)
    },

    delAll() {
      this.cart = []
    }

  },
})

