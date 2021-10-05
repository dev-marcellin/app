<template>
     <!-- <div class="col-sm-4"> -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-end btn" data-bs-toggle="modal" data-bs-target="#exampleModal1" @click="pickId">...</h5>
        <p class="card-text">   <img src="../assets/img/article4.jpeg" alt="err"/> {{nom}} | {{price}} Fcfa</p>
         
      </div>


      <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">information about product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-success">
        

            <form>
  <div class="mb-3">
    
    <input type="button" class="form-control m-3"  value="update" @click="open" >
      <div v-if="statusUpdate">
            <input type="text" v-model="valupdate" class="form-control m-3" placeholder="new description here">
            <input type="Number" v-model="priceUpdate" class="form-control m-3" placeholder="new price here">
       <input type="button" class="form-control m-3"  value="update the product" @click="update">
      </div>

  <div class="mb-3" v-if="statusDelete">
     <input type="button" class="form-control  btn-danger m-3"  value="delete" @click="deleted" data-bs-dismiss="modal">
  </div>
  
  </div>

  
  
 

</form>

    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
       
      </div>
    </div>
  </div>
</div>
 



    </div>




  <!-- </div> -->
</template>

<script>

export default {
 

  props:{nom:String, price:String, images:String, id:String},
  data() {
    return{
      statusUpdate: false,
      statusDelete: true,
      tempoId: '',
      valupdate: '',
      priceUpdate:''
    }
  },

methods:{
  open(){
    this.statusUpdate = true
    this.statusDelete= false
  },

  pickId(){
    this.tempoId = this.id ;
    console.log(this.tempoId);
  },

  update(){
   this.statusUpdate = false
    this.statusDelete= true
     this.$emit("nouvel"
    , {
      id: this.id,
      valeur: this.valupdate,
      price: this.priceUpdate
    });
   
  },

  deleted(){
    console.log("deleted");

     this.$emit("delete"
    , {
      id: this.id,
    });
  }
},
  mounted(){
    console.log(this.image);
  }

}
</script>
