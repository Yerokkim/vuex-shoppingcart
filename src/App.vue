<template>
  <div id="app">
  <!--  <Products :foods="foods"/>-->
  <h1>dssk</h1>

  <Products/>
  <Cart/>
  </div>
</template>

<script>

//import axios from 'axios'
import Products from './components/Products'
import Cart from './components/Cart'


export default {
  name: 'app',
  data(){
    return {
      foods:[]
    }
  },
  components: {
    Products,
    Cart
    

   
  }/*

  created(){
    axios.get('http://localhost:3000/foods')
     .then(res=> (this.foods = res.data))
  }
  */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
