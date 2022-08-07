const app = Vue.createApp({
    data() {
      return {
        students:[
            {name: 'Mg Mg',age: 20,gender: 'male'},
            {name: 'Su Su',age: 18,gender: 'female'},
            {name: 'Aung Aung',age: 23,gender: 'male'}
                ],
        message:""
      }
    },

    methods: {
        detail(room){
            let n = --room;
            alert(`My name is ${this.students[n].name} and I.m ${this.students[n].age} years old`)
        }
    }

  })