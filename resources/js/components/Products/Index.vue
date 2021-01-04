<template>
    <div class="py-5 px-10">
        <table class="text-left m-4" style="border-collapse:collapse">
        <thead>
            <tr>
                <th class="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Produits</th>
                <th class="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Fiche produit</th>
            </tr>
        </thead>
        <tbody>
            <tr class="hover:bg-blue-lightest" v-for="product in products" :key="product.id">
                <td class="py-4 px-6 border-b border-grey-light">{{ product.name }}</td>
                <td class="py-4 px-6 border-b border-grey-light text-center">
                    <router-link :to="{name: 'products.show', params: {slug: product.slug}}">📦 Voir le produit</router-link>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        }
    }
}
</script>
