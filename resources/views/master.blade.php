<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Panier E-Commerce VueJS & Laravel</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <div id="app">
        <nav class="py-5 px-10">
            <ul class="flex">
                <li class="mr-5 font-semibold"><router-link :to="{name : 'products.index'}">Accueil</router-link></li>
                <li class="font-semibold"><router-link :to="{name: 'products.shopping'}">Mon Panier <span v-text="this.$store.state.cart.length"></span></router-link></li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
