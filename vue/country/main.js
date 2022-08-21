const app = Vue.createApp({
    data() {
      return {
        countries:Array(),
        region:"africa",
        
      }
    },

    mounted(){
      if(this.region=="all"){
        axios.get("https://restcountries.com/v3.1/all")
        .then(response=>{
        console.log(response.data);
      this.countries = response.data;
      })
        }

      else if(this.region=='africa') {
        axios.get(`https://restcountries.com/v3.1/region/africa`)
        .then(response=>{
          console.log(response.data);
        this.countries = response.data;
      })
      
        }
  
      else{
        console.log('error')
      }
    },
  
  
    method: {
      changeCountry(event){
        this.region=event.target.value;
        console.log(event.target.value)
        
      }
    }
      })


    