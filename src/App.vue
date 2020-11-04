<template>
  <div>
    <router-view name="header-top"> </router-view>
    <router-view> </router-view>
    <router-view name="header-bottom"> </router-view>
  </div>
</template>

<script>
// import Header from "./components/Header";
export default {
  // components: {
    // appHeader: Header,
  // },
};
</script>

<style scoped></style>
