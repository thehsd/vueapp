<template>
    <div>
        <h2>This is User component</h2>
        <br>
        <p>this is weofhkfdjvh sdfgheiguhdskfvhdfkvhaevighasdlkfhdf</p>
<br>
<button @click="gotohome">go to home</button>
    </div>
</template>

<script>
    export default {
        methods:{
            gotohome(){
                this.$router.push('/home')
            }
        }
    }
</script>

<style  scoped>
*{
    background: red;
}
</style>