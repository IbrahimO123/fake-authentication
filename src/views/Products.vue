<template>
  <v-container>
    <template v-if="!loading">
      <div>

       <span><h3>Products</h3></span>
        <span>Welcome {{ this.$store.state.user.firstname || "User" }}
          <p><small>Take time to look through our products</small></p>
        </span>
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
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  components: {
    ProductCard,
  },
  mounted() {
    this.validateUser();
    this.$store.commit("setDisplayButton", true);
    this.loading = true;
    this.fetchProduts();
  },
  computed: {
    displayButton: {
      get() {
        return this.$store.state.displayButton;
      },
    },
  },
  methods: {
    validateUser() {
      if (
        !this.$store.state.user.email &&
        !this.$store.state.user.password &&
        !this.$store.state.user.firstname &&
        !this.$store.state.user.lastname
      ) {
        this.$router.replace("/");
        return;
      }
    },
    async fetchProduts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      this.products = await data.products;
      this.loading = false;
    },
  },
};
</script>

<style></style>
