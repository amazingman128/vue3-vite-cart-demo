<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./store/ShoppingCart.vue";

</script>

<template>
  <q-layout>
    <q-page-container class="content-lg-around">
      <q-page class="fixed fixed-content full-width">
        <h4>Pinia-购物车示例</h4>
        <hr>
        <ProductList></ProductList>
        <ShoppingCart></ShoppingCart>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
