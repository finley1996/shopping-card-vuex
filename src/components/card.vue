<template>
  <fieldset>
    <legend>购物车</legend>
    <ul>
      <li v-for="item in shopcard" :key="item.id">
        <b>{{item.title}}</b>
        --------------
        <b>{{item.price}}元</b>
        --------------
        <b>{{item.count}}件</b>
      </li>
    </ul>
    <h2>总价：{{TOTAL.toFixed(2)}}</h2>
  </fieldset>
</template>

<script>
import { mapState,mapGetters} from "vuex";
export default{
computed: {
    ...mapState('card',['shopcard']),
    ...mapGetters('card',['TOTAL'])
}
}
</script>