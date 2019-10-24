<template>
  <fieldset>
    <legend>商品列表</legend>
    <ul>
      <li v-for="item in products" :key="item.id">
        <b>{{item.title}}</b>
        --------------
        <b>{{item.price}}元</b>
        --------------
       <b>库存:{{item.inventory}}件</b>
        <button :disabled="!item.inventory" @click="ADD_PDT(item)">添加至购物车</button>
      </li>
    </ul>
  </fieldset>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("shop", ["products"])
  },
  methods: {
    ...mapActions("shop", ["GET_PDT"]),
    ...mapActions("card",['ADD_PDT'])
  },
  created() {
    this.GET_PDT()
  }
};
</script>