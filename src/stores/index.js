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
  persist: {
    paths: ['cart'],
  },
  getters: {
    getProducts: state => state.products,
    getCart: state => state.cart,
    getIsCart: state => state.isCart,
    getDelProd: state => name => state.cart.filter(el => el.name !== name),
    getProductsByName: state => name => state.products.filter(el => el.name === name),
  },
  actions: {
    addProduct(name, quantity) {
      if (quantity !== 0) {
        let obj = {}
        Object.assign(obj, this.getProductsByName(name)[0])
        obj.quantity = quantity
        if (!this.getCart.some(el => el.name === name)) {
          this.cart.push(obj)
        }
        else {
          this.cart.map(el => {
            if (el.name === name) {
              el.quantity += quantity
            }
          })
        }
        this.isCart = false
      }
    },

    delProduct(name) {
      this.cart = this.getDelProd(name)
    },

    delAll() {
      this.cart = []
    }

  },
})

