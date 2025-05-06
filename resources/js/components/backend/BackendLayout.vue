<template lang="">
    <div class="wrapper">
        <Sidebar v-if="isNotFound === false" />
        <div class="main">
            <Header v-if="isNotFound === false" />
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

import Sidebar from './common/Sidebar.vue';
import Header from './common/Header.vue'

const route = useRoute();
const isNotFound = route.name === 'admin.404'
</script>