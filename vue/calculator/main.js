const app = Vue.createApp({
  data() {
    return {
     header: "BMI calculator",
     feet: "",
     inches: "",
     pounds: "",
     result: " ",
     color: "",
     cata1: "Underweight = <18.5",
     cata2: "Normal weight = 18.5–24.9",
     cata3: "Overweight = 25–29.9",
     cata4: "Obesity = BMI of 30 or greater"
    }
  },


  methods:{
    calculation(foot,inch,weight){
      ttl_inches=(foot*12)+inch;
      bmi=(weight/ttl_inches/ttl_inches)*703;
      console.log(bmi);

      if(bmi<=18.5){
        this.result="You are underweight";
        this.color="color:blue"
        
      }

      else if(bmi>18.5 && bmi<=24.9){
        this.result="You are normal weight.";
        this.color="color:green"
      }

      else if(bmi>=25 && bmi<=29.9){
        this.result="You are over weight.";
        this.color="color:orange"
      }

      else if(bmi>=30.0){
        this.result="You are obesity.";
        this.color="color:red";
      }

      else{
        this.result="Error you havn't enter you height or weight!"
        
      }

      

      
      
  }
  }
})