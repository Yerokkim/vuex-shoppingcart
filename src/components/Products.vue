<template>
<div id="Products">
<h1>Products</h1>
    <div class="container">

        <div class="product-card">
            <div class="items" v-for="(food,index) in allFoods" v-bind:food="food"
                     v-bind:key="food.id">
                 <img class="foodImg" v-bind:src="food.imgUrl"/>
                <h4>{{food.title}}</h4>
                <p>{{food.price}}€</p>
               
                <button :class="index" class="minus" @click="decrease(food)">-</button>
                {{food.quantity}}
                <button :class="index" class="add" @click="increase(food)">+</button>
                <AddToCart 
               
                :food-id="food.id"
                :price="food.price"
                :title="food.title"
                :quantity="food.quantity"/>

               
            </div>

        </div>

    </div>

</div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';
import AddToCart from './AddToCart'


export default {
    name:'Products',
   // props:['foods'],
    data(){
        return{
         
        }
    },
    components:{
        AddToCart
    },
    methods:{
        ...mapActions(['fetchFoods'])
    },
    computed:mapGetters(['allFoods']),
    created(){
        this.fetchFoods()
    }
    
}
</script>

<style scoped>

.foodImg{
    width: 200px;
    height: auto;
}
</style>