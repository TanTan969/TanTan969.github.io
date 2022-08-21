<template>
  <div class="container">
    <h2>All Products</h2>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Catagories
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><button class="dropdown-item" type="button" v-for="(item, index) in catagories" :key="index" @click="getProductsByCatagories(item)">{{item}}</button></li>
    
  </ul>
</div>

    <div class="row">
    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 my-2" v-for="(item, index) in products" :key="index">
      <div class="card" style="width: 18rem;">
        <img :src="item.image" class="card-img-top" alt="" style="height:300px">
        <div class="card-body">
          <p class="card-text h4" style="text-align:left !important">{{item.title}}</p>
          <p class="card-text h4" style="text-align:left !important">price: ${{item.price}}</p>
          <router-link :to="`/detail/${item.id}`" class="btn btn-primary">Detail</router-link>
          
        </div>
      </div>

    </div>
  </div>
  </div>
  
</template>
<script>
const axios = require('axios');


export default {
  name: 'ContactView',
  data() {
    return {
      products:[],
      catagories:[]


    }
  },

  mounted(){
    this.getProducts();
    this.getCatagories();
 

  },

  methods:{
    getProducts(){
      axios.get('/products')
      .then(response=>{
        this.products = response.data
        console.log(response)
      })
    },

    getCatagories(){
      axios.get('/products/categories')
      .then(response=>{
      this.catagories = response.data
      console.log(response)
    })
      
    },

    getProductsByCatagories(name){
     
      axios.get('/products/category/'+name)
      .then(response=>{
      this.products = response.data
      console.log(response)
    })
      
    },

  }
  
  
}
</script>