<template>
<div>
    
    <navbar @deconnexion="decon"> </navbar>
    <p> </p>
  
    <boutique> </boutique>
  
</div>
</template>


<script>
import boutique from "../views/boutique.vue"
import navbar from "./navbar.vue"
export default {

    components: {navbar, boutique},  
    data() {
        
    },

    methods:{
        decon(){
            this.$emit("decon")
        }
    }
}
</script>