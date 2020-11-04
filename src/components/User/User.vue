<template>
  <div class="div">
    <h2>This is User component</h2>
    <br />
    <router-view></router-view>
    <br />
    <button @click="gotohome">go to home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route
    };
  },
  methods: {
    gotohome() {
      this.$router.push({name:'home'});
      console.log(this.id);
    },
    created() {
      
    },
  },
  watch:{
      '$route'(to ){
          this.id=to.params.id
      }
  },

};
</script>

<style scoped>
.div {
  background: #0084ff;
}
h2{
  color:#fcfcfc
}
</style>
