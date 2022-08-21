<template>
  <div class="cart">
    <section v-if="cart.length > 0">
        <table class="table">
            <thead>

            </thead>
            <tbody>

            </tbody>
        </table>
    </section>
    <section v-else>
        <h2 class="text-center">Empty Cart</h2>
    </section>
  </div>
</template>

<script>

export default {
name: "DetailView", 
data() {
    return {
      cart:[],
     

    }
  },

  mounted(){
    let cartArr;
    let cart = localStorage.getItem('cart')
    if(cart){
        cartArr=JSON.parse(cart);
    }
    this.cart=cartArr
  },
  
  methods:{

    
    
  }
}
</script>
