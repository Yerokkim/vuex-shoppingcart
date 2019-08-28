<template>
<div>

    <button class="add-to-cart" @click="addToCart">Add to cart</button>
</div>
    
</template>

<script>
export default {
    name:"AddToCart",
    props:{
          FoodId:String,
           price:String,
           title:String,
           quantity:String
          
       
      
    },
    data(){
        return{
            foods:{
            FoodName:this.title,
            FoodPrice:this.price,
            FoodID:this.FoodId,
            FoodQuantity:1
            }
        }
    },
    methods:{
        addToCart(){
            this.$store.commit('addToCart',this.foods)
        }
    }
}
</script>

<style>

</style>