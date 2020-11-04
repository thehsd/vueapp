<template>
    <div>
<div class="header">
    <span>
        <router-link to="/" active-class="active" exact >Home</router-link>
    </span>
    <span>
        <router-link to="/user/" active-class="active">Users</router-link>
    </span>
   
    
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
a{
text-decoration: none;
color: #585858;
font-size: 19px;
}
.header{
    width:100%;
    height: 40px;

}
.header > span{
    float: left;
    margin-left: 20px;
}
.active{
    color: #0f0f0f !important;
    font-size: 21px;
}
</style>