<template>
  <footer class="footer">
    <div class="container rightAlign">
      <div class="button-footer">
        <button class="btn btnDefault btn-line">Берем</button>
        <button class="btn btnDefault btn-line">Пожалуй откажусь</button>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>


<style lang="scss">
.button-footer {
  display: flex;
  width: 600px;
}

.btn-line {
  margin-bottom: 0;
  margin-left: 20px;
}

.rightAlign {
  display: flex;
  justify-content: flex-end
}

</style>