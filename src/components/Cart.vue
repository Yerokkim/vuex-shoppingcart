<template>
    <div>

        <h1>Cart</h1>
        <div v-for="list in ShoppingList" 
          v-bind:key="list.id">
            {{list.FoodName}}
            {{list.FoodPrice}}€
            <div>

            {{list.FoodQuantity}}
           
           
            </div>
            

        </div>

        <h4>Total:</h4><span>{{Total}}</span>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
    name:"Cart",
    data(){
        return{
      
        }
    },
    computed: {
        ...mapGetters(['ShoppingList']),
     Total(){
    let cart = this.$store.getters.ShoppingList;
      return cart.reduce((accum, item) => accum + item.FoodQuantity*item.FoodPrice, 0)


    }
        
       },
    
    methods:{
    
        }
        }
    
    

</script>


<style scoped>

</style>