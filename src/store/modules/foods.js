import axios from 'axios'



const api='http://localhost:3000/foods'

const state={
foods:[
    {
    id: 1,
    title: "cheese burger",
    price: 10,
    imgUrl: "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x500.jpg",
    quantity: 0
    },
    {
    id: 2,
    title: "fish burger",
    price: 15,
    imgUrl: "https://www.kitchensanctuary.com/wp-content/uploads/2014/01/Crispy-Fish-Burger-with-Shoestring-Fries-Recipe-tall-fs.jpg",
    quantity: 0
    }],

    cart:[]

}

const getters={
    allFoods:(state)=>state.foods,
    ShoppingList:(state)=>state.cart

    
}

const actions={

    async fetchFoods({commit}){
        const res= await axios.get(api)
        commit('setFoods',res.data)
    }

}

const mutations={

setFoods:(state,foods)=>(state.foods=foods),
addToCart(state,foods){

   
     const exist=state.cart.find(p=>p.FoodID===foods.FoodID)
     
   
    if(exist){
        exist.FoodQuantity++
       // const totalper=exist.totalPrice = exist.FoodQuantity * exist.FoodPrice;
       // console.log(totalper)
         
         
        
        
    }else{
         state.cart.push(foods)
  
    }

    
}
}



export default {
    state,
    getters,
    actions,
    mutations
}