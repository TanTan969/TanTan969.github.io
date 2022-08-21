<template>
  <div v-if="memes.length > 0" class="row">
    <div class="col-md-3" v-for="item in memes" :key="item.id">
      <div class="card" style="width: 18rem; ">
      <img :src="item.url" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
      </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from 'axios';


export default {
  name: 'ContactView',
  data() {
    return {
      memes:[],

    }
  },

  mounted(){
    axios.get('/get_memes')
    .then(response=>{
      this.memes = response.data.data.memes
      
    })

  }
  
}
</script>