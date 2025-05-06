<template>
    <component :is="layout" >
        <router-view></router-view>
    </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import BackendLayout from './backend/BackendLayout.vue';
import FrontendLayout from './frontend/FrontendLayout.vue';

const route = useRoute();
const layout = computed(() => {
    if( route.path.startsWith('/admin') ){
        return BackendLayout;
    }
    return FrontendLayout;
})
</script>