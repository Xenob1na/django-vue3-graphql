<template>
    <div>
        <h1>Recent Posts</h1>
        <PostList :posts="allPosts"  v-if="allPosts"/>
    </div>
</template>

<script setup>
import PostList from './PostList.vue'
import { ref } from 'vue';

const allPosts = ref(null);
</script>