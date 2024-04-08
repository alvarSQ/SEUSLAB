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
      <tr>
        <td>Продукт1</td>
        <td>333.33</td>
        <td>333.33</td>
        <td>
          <div class="s-b">
            333.33 <span class="del">&#10060;</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>Продукт1</td>
        <td>333.33</td>
        <td>333.33</td>
        <td>
          <div class="s-b">
            333.33 <span class="del">&#10060;</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>Продукт1</td>
        <td>333.33</td>
        <td>333.33</td>
        <td>
          <div class="s-b">
            333.33 <span class="del">&#10060;</span>
          </div>
        </td>
      </tr>
      <tr class="itogo">
        <td></td>
        <td></td>
        <td>Итого:</td>
        <td>24 589.36</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
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
