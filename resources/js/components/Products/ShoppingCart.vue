<template>
  <div class="container mx-auto">
    <div class="flex shadow-md">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">{{ totalProduct }} produits dans votre panier</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Détails du produit</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantité</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Prix</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        <div v-for="(product, index) in getCart" :key="index" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5">
            <div class="w-20">
              <img class="h-24" src="https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="">
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{{ product.name }}</span>
              <span class="text-gray-500 text-xs">{{ product.description }}</span>
              <a href="#" @click="$store.commit('removeProductToCart', index)" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Supprimer du panier</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">

            <span class="mx-2 border text-center w-8" v-text="product.qty"></span>

          </div>
          <span class="text-center w-1/5 font-semibold text-sm">{{ product.price / 100 }}</span>
          <span class="text-center w-1/5 font-semibold text-sm">{{ (product.price * product.qty) / 100 }}</span>
        </div>


        <router-link :to="{name: 'products.index'}" class="flex font-semibold text-indigo-600 text-sm mt-10"><svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Revenir faire les courses</router-link>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Informations</h1>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Prix total</span>
            <span>{{ totalPrice / 100 }} €</span>
          </div>
          <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Passer à la caisse</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    computed: {

        getCart() {
            return this.$store.state.cart;
        },

        totalProduct() {
            return this.$store.state.cart.reduce((acc, current) => acc + current.qty, 0);
        },

        totalPrice() {
            return this.$store.state.cart.reduce((acc, current) => acc + current.price * current.qty, 0);
        }
    }
}
</script>
