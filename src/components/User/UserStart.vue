<template>
  <div>
    <span>
      <router-link to="/user/1" active-class="active" exact>user 1</router-link>
    </span>
    <span>
      <router-link to="/user/2" active-class="active">User 2</router-link>
    </span>
    <span>
      <router-link to="/user/3" active-class="active">User 3</router-link>
    </span>
    <br>
    <!-- <app-user-detail></app-user-detail> -->
  </div>
</template>

<script>
// import userDetail from './UserDetail'
export default {
    // components:{
    //     appUserDetail:userDetail
    // }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #f8f8f8;
  font-size: 19px;
}
.active {
  color: #0f0f0f !important;
  font-size: 21px;
}
 span{
    float: left;
    margin-left: 20px;
}
</style>
