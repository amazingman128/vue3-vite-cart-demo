<template>
  <div style="width:600px">
    <h6>
      结算
    </h6>


    <!--    <q-table-->
    <!--        title=""-->
    <!--        :rows="rows"-->
    <!--        :columns="columns"-->
    <!--        row-key="name"-->
    <!--        hide-bottom-->
    <!--        hide-header-->
    <!--    />-->

    <hr>
    <q-table
        title=""
        :rows="rows"
        :columns="columns"
        row-key="name"
        hide-bottom
        hide-header
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.title }}
          </q-td>
          <q-td key="quantity" :props="props">
            {{ props.row.quantity }}
          </q-td>
          <q-td key="price" :props="props">
            {{ props.row.price }}
          </q-td>
          <q-td key="operations" :props="props">
            <q-btn round color="deep-orange" size="sm" label="移除"></q-btn>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script lang="ts" setup>
import {useCartStore} from "./cart";

const cartStore = useCartStore()

const columns = [
  {
    name: 'name',
    label: '产品名称',
    align: 'left',
    field: row => row.title,
    sortable: true
  }, {
    name: 'quantity',
    label: '数量',
    align: 'left',
    field: row => row.quantity,
    sortable: true
  }, {
    name: 'price',
    label: '单价',
    align: 'left',
    field: row => row.price,
    sortable: true
  },
  {
    name: 'money',
    label: '总价',
    align: 'left',
    field: row => row.price * row.quantity,
    sortable: true
  },
  {
    name: 'operations',
    label: '操作',
    align: 'left',
    field: row => {
      1
    }
  },

]

const rows = cartStore.cartProducts
</script>

<style scoped>

</style>
