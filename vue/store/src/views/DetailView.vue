<template>
  <div class="card mb-3 my-6" style="max-width: 540px; display: block; margin: 0px auto;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="product.image" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <p class="card-text"><small class="text-muted">{{product.description}}</small></p>
        <input type="number" name="qty" id="qty" min="1" v-model="qty">
        <button type="byrron" class="btn btn-primary" @click="addCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
const axios = require('axios');
export default {
name: "DetailView", 
data() {
    return {
      product:[],
      qty:1,

    }
  },

  mounted(){
    this.index=this.$route.params.id
    axios.get(`/products/${this.index}`)
    .then(response=>{
      this.product = response.data
      console.log(response)
    })
   
   

  },
  
  methods:{

    addCart(product){
      let cartArr=[];
      let status=false;
      let cart = localStorage.getItem('cart');
      if(!cart){
        cartArr=new Array();
       
      }
      else{
        cartArr=JSON.parse(cart);
      }
      product.qty=this.qty;
      for(let item of cartArr){
        if(item.id==product.id){
          item.qty += product.qty
          status=true;
        }
      }
      if(!status){
        cartArr.push(product)
      }
      
      localStorage.setItem('cart',JSON.stringify(cartArr))
    }
    
    
    
  }
}
</script>
