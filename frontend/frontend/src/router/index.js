import { createRouter, createWebHistory } from 'vue-router'
import AllPosts from '../components/AllPosts.vue'
import Post from '../components/Post.vue'
import Author from '../components/Author.vue'
import PostsByTag from '../components/PostsByTag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'allposts',
      component: AllPosts
    },
    {
      path: '/tag/:tag',
      name: 'tag',
      component: PostsByTag
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: Post
    },
    {
      path: '/author/:username',
      name: 'author',
      component: Author
    },
  ]
})

export default router
