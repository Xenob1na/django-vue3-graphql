<template>
    <div v-if="author">
        <h1>{{ displayName }}</h1>
        <a 
        :href="author.website"
        target="_blank"
        rel="noopener noreferrer"
        >
            Website
        </a>
        <p>{{ author.bio }}</p>
        
        <h3>Posts by {{ displayName }}</h3>
        <PostList :posts="author.postSet" :showAuthor="false" />
    </div>
</template>

<script setup>
import PostList from './PostList.vue'
import { ref, computed } from 'vue';

const author = ref(null);

const displayName = computed(() => {
    return (
        author.user.firstName.value && 
        author.user.lastName.value && 
        `${author.user.firstName.value} ${author.user.lastName.value}`
    ) || `${author.user.username.value}`
})
</script>