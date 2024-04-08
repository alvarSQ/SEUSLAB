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
      <tr>
        <td>Продукт1</td>
        <td>333.33</td>
        <td>
          <div class="action s-b">
            <div class="keys displayNone">
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
            <CalcSvg class="calc" />
            <input type="number">
            <div class="btn-count">
              +
            </div>
            <div class="btn-count minus">
              &minus;
            </div>
            <CartSvg class="calc" />
          </div>
        </td>
      </tr>
      <tr>
        <td>Продукт2</td>
        <td>444.44</td>
        <td>
          <div class="action s-b">
            <CalcSvg class="calc" />
            <input type="number">
            <div class="btn-count">
              +
            </div>
            <div class="btn-count minus">
              &minus;
            </div>
            <CartSvg class="calc" />
          </div>
        </td>
      </tr>



    </tbody>
  </table>
</template>

<script setup>
import CalcSvg from './svg/calcSvg.vue'
import CartSvg from './svg/cartSvg.vue'
</script>

<style lang="scss">
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

  input {
    width: 100px;
    height: 50px;
    text-align: center;
  }
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

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
