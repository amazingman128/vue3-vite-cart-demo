<template>
  <h4>购物车</h4>
  <div style="width:600px">
    <q-list bordered>
      <q-item clickable v-ripple v-for="item in productStore.all">
        <q-item-section> {{ item.title }}-{{ item.price }}-{{ item.inventory }}</q-item-section>
        <q-item-section>
          <q-btn @click="cartStore.addProductToCart(item)" class="glossy" rounded color="deep-orange" label="添加到购物车"/>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts" setup>
import {useProductStore} from '../store/products'
import {useCartStore} from "../store/cart";

const cartStore = useCartStore()

const productStore = useProductStore()

//加载所有数据
productStore.loadAllProducts()


</script>

<style scoped>

</style>
