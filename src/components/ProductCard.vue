<template>
  <v-responsive>
    <v-row>
      <v-col v-for="product in products" md="4" cols="12" :key="product.title">
        <v-card>
          <v-img :src="product.images[0]" height="200px" cover></v-img>
          <template v-slot:title> {{ product.title }} </template>
          <template v-slot:subtitle>
            <p>{{ product.brand }}</p>
            <span>{{ product.category }}</span>
          </template>
          <template v-slot:text
            ><div>
              <div>{{ product.description.substring(0, 30) }} ...</div>
              <div class="text-body-2">
                <span>Price: {{ product.price }}</span>
                <span class="mx-5">Stock: {{ product.stock }}</span>
              </div>
            </div>
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
