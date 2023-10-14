<template>
    <div>
        <h1>Posts in# {{ route.params.tag }}</h1>   
        <PostList :posts="posts"  v-if="posts"/>    
    </div>
</template>

<script setup>
import PostList from './PostList.vue'
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const posts = ref(null)

</script>