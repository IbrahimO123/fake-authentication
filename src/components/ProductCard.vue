<template>
  <v-responsive>
    <v-row>
      <v-col v-for="product in products" sm="6" md="4" lg="3" cols="12" :key="product.title">
        <v-card>
          <v-img :src="product.images[0]" height="200px" cover></v-img>
          <template v-slot:title> {{ product.title }} </template>
          <template v-slot:subtitle>
            <p>{{ product.brand }}</p>
            <span>{{ product.category }}</span>
          </template>
          <template v-slot:text
            ><div>
              <div>{{ product.description.substring(0, 20) }} ...</div>
              <div class="text-body-2">
                <span>Price: {{ product.price }}</span>
                <span class="mx-5">Stock: {{ product.stock }}</span>
              </div>
            </div>
          </template>
          <template v-slot:actions>
            <v-btn color="text-deep-purple-darken-1 bg-deep-purple-lighten-5" append-icon="mdi-plus" ><small>Add</small></v-btn>
            <v-btn color="primary" ><small>View</small></v-btn>
            <v-btn color="primary" ><small>Buy Now</small></v-btn>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
