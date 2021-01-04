require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'products.index',
            component: () => import('./components/Products/Index.vue')
        },
        {
            path: '/product/:slug',
            name: 'products.show',
            component: () => import('./components/Products/Show.vue')
        },
        {
            path: '/shoppingCart',
            name: 'products.shopping',
            component: () => import('./components/Products/ShoppingCart.vue')
        }
    ]
});

const store = new Vuex.Store({
    state: {
        cart: [],
        products: []
    },

    mutations: {
        setProducts(state, products) {
            state.products = products;
        },

        addProductToCart(state, product) {

            const duplicatedProductIndex = state.cart.findIndex(item => item.id === product.id);

            if (duplicatedProductIndex !== -1) {
                state.cart[duplicatedProductIndex].qty++;
                return;
            }

            product.qty = 1;
            state.cart.push(product);
        },

        removeProductToCart(state, index) {
            state.cart.splice(index, 1);
        },
    },

    actions: {
        getProducts({ commit }) {
            axios.get('/api/products')
                .then((response) => {
                    commit('setProducts', response.data)
                })
                .catch((error) => console.error(error))
        },
    },

});

const app = new Vue({
    router,
    store,
    el: '#app',
    created() {
        store.dispatch('getProducts').then(() => {}).catch((error) => console.error(error));
    }
});