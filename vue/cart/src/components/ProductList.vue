<template>
    <ul>
        <li 
            v-for="product in products" 
            :key="product.id"
        >
            {{ product.title }} - {{ currency(product.price) }} 
            <br>
            <button
                :disabled = "!product.inventory"
                @click = "addProductToCart(product)"
            >Add to cart</button>
        </li>
    </ul>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue' 
import { currency } from '../currency'
const store = useStore() // 状态树
const products = computed(() => store.state.products.all)
const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product)
console.log(products)
store.dispatch('products/getAllProducts') // 派一个工作
</script>

<style lang="scss" scoped>

</style>