<template lang="">
    <Header />
    <router-view></router-view>
    <Footer />
</template>
<script setup>
import Header from './home/common/Header.vue';
import Footer from './home/common/Footer.vue';
</script>