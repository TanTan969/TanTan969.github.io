<template>
    <h2>{{name}}</h2>
</template>

<script>
export default {
    name: 'TestingPart',
    data(){
    return{
        name: 'Ye Phone Paing'
    }
},
    methods:{
        reverse(){
            this.name=this.name.split('').reverse('').join('');
        }
    }
}


</script>