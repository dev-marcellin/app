<template>
   <div>
       <home @decon="out" v-if="status"> </home>
       <login @submit="connexion" v-else> </login>
   </div>
</template>



<script>
import login from "../components/login.vue";
import home from "../components/home.vue"

export default {
components: {login, home},

data(){
    return {
        status: false,
        user: {
            login: "test",
            pass: "test123",
            name: "marco lele",
            photo: "../assets/img/user.jpeg"

        }
    }
},
mounted(){
     if(localStorage.getItem('user') ){
             this.status= true;
              this.$router.push("/home");
             
        }

},
methods: {
    out(){
        console.log("decon out ");
        this.status= false 
    },

    connexion({login , pwd}){
       

        if(login == this.user.login && pwd == this.user.pass){
            this.status= true;
            console.log(login+" "+this.user.login);
              this.$router.push("/home");

             localStorage.setItem("user", this.user.login);

        }
    }
},



}
</script>

<style>

</style>