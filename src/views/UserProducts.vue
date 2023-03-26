<template>
  <v-container>
    <template v-if="!loading">
      <div>
        <span
          >{{ this.$store.state.user.firstname || "User" }} Products
          <p><small>Checkout Now</small></p>
        </span>
        <div class="under">
          <h3>Under development</h3>
          <h5>Amazing features coming out soon.....</h5>
        </div>
      </div>
      <ProductCard :products="products" />
    </template>
    <template v-else>
      <v-text-field
        color="bg-white text-warning"
        :loading="loading"
        disabled
      ></v-text-field>
      <p class="text-white">Loading... Please wait</p>
    </template>
  </v-container>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "UserProducts",
  components: {
    ProductCard,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style scoped>
.under {
  margin-top: 10rem;
  color:rgb(114, 106, 106);
  display: grid;
  place-items: center;
  text-align: center;
}
</style>
