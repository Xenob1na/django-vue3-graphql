<template>
    <router-link 
    :to="`/author/${author.user.username}`"
    >
        {{ displayName }}
    </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    author: {
        type: Object,
        required: true
    }
})

const displayName = computed(() => {
    return (
        author.user.firstName.value && 
        author.user.lastName.value && 
        `${author.user.firstName.value} ${author.user.lastName.value}`
    ) || `${author.user.username.value}`
})
</script>