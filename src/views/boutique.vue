<template>
   <div>
        <p>les articles</p>

        <div class="container">

           <div class="row">
  <div class="col-sm-4">
    <div class="card backAdd btn file" @click="add">
      <div class="card-body ">
        <h5 class="card-title"></h5>
        <p class="card-text "> <br>  <h1 class="add ">+ </h1>  <h5 class="add btn " data-bs-toggle="modal" data-bs-target="#exampleModal">Add product</h5> </p>
       
       
        
      </div>
    </div>
  </div>


  <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">information about product colis</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-success">
        

            <form>
  <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="nom">
  
  </div>
  <div class="mb-3">
    Description <br>
      <textarea name="" id="" cols="25" rows="5" class="form-control" v-model="description"></textarea>
  </div>

  <div class="mb-3">
    price <br>
       <input type="Number" class="form-control" v-model="price"> 
       <input type="file" @change="uploadFile" ref="file" class="m-3" fullPath>
  </div>
  
 
  <input type="button" class="btn btn-primary" @click="submitFile" value="enregistrer">
</form>

    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
       
      </div>
    </div>
  </div>
</div>
 
   <div v-for="product in products " :key="product.id" class="col-sm-4">

   <product @delete="deleted" @nouvel="update1" :nom="product.name" :price="product.price" :images="product.img" :id="product.id" > </product>
   </div>
   
   
</div>

        </div>
   </div>
</template>

<script>
import product from "../components/product.vue"
export default {

   components:{product},
   data() {
      return {
        nom:'',
        description:'',
        price: 0,
         images: 'null',

         products : [{id:1, name:"article1",price:"2000", img:"/img/article1.jpg"},{id:2, name:"article2",price:"300", img:"../assets/img/article2.jpg"},{id:3, name:"article3",price:"400", img:"../assets/img/rticle3.jpg"},{id:4, name:"article4",price:"500", img:"../assets/img/article4.jpeg"}]
      }
   },

   methods:{
      add(){
         console.log("addddd");
        
      },

      update1({id, valeur, price}){
        for(let i=0; i<this.products.length; i++){
          if(this.products[i].id == id ){
            this.products[i].name = valeur
             this.products[i].price = price
          }
        }
        console.log(id+"  "+valeur);
      },

      deleted({id}){
        console.log("delllll");
        for(let i=0; i<this.products.length; i++){
          if(this.products[i].id == id ){ 
              var index = this.products.indexOf(this.products[i]);

               this.products.splice(index, 1);
          }
        }

      },

      uploadFile(){
         console.log("uploadFile-----------");
          this.images = this.$refs.file.files[0];
          // relativePath = File.webkitRelativePath URL.createObjectURL(this.$refs.file.target.files[0])
         //console.log("----"+URL.createObjectURL(this.$refs.file.target.files[0]));
         console.log(this.product[2]);
         console.log(this.images);
      },

     
         submitFile() {
        const formData = new FormData();
        formData.append('file', this.images);
        console.log(formData);
      this.products.unshift({
        id: this.products.length+1,
        name: this.nom,
        price: this.price
      })
         }
   }
}
</script>