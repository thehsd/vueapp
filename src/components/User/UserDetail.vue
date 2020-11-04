<template>
  <div>
    <p>user id : {{$route.params.id}}</p>
    <br>
      <router-link :to="{name : 'userEdit' , params:{id :$route.params.id}}" >user edit</router-link>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>

</style>
