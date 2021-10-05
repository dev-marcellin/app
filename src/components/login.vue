<template>
  <div class="container py-5">
    <div class="row align-items-center">
      <div class="col image"></div>

      <div class="col shadow">
        <form class="form-con col-md-2 mx-3 me-2">
          <h4 class="text-center m-4">Connectez vous à votre compte</h4>
          <br /><br />
          <div class="row row-cols-1 row-cols-md-1 g-4">
            <div class="mb-3">
              <input
                type="text"
                class="form-control con"
                v-model="login"
                placeholder="votre login"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control con"
                v-model="password"
                placeholder="votre mot de passe"
              />
            </div>
          </div>

          <br />
          <input
            type="button"
            class="btn orangeColor form-control"
            @click="enregistrer"
            value="connexion"
          />
          <br />
          <br />
          <p class="bg-danger" v-if="message"> nom d'utilisateur ou mot de passe incorrecte</p>
          <br />
          <p class="text-end">mot de passe oublie ?</p>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "app",

  data() {
    return {
     
      login: "",
      password: "",
      role: "",
      id: "",
      message: false
    };
  },
  methods: {
    enregistrer() {
      const login = { login: this.login, mdp: this.password };
    //   axios
    //     .post("http://localhost:5000/api/user/login", login)
    //     .then((response) => {
    //       console.log(response);
    //       this.role = response.data.status;
    //       this.id = response.data.user;

    //       this.$store.commit("setuser", this.id);

    //       sessionStorage.setItem("scolisRole", this.role);
    //       sessionStorage.setItem("scolisId", this.id);

         this.$emit("submit", {
            login: this.login,
            pwd: this.password,
          
          });

          
    },
  },
};
</script>

<style>
</style>