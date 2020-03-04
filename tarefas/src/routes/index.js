import Router from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home'
import Kanban from '@/views/kanban/kanban'

Vue.use(Router)

const routes = [
    {
        name: 'Home',
        path:'/Home',
        component: Home
    },
    {
        name: 'inicio',
        path:'/',
        component: Home
    },
    {
        name:'tarefas',
        path:'/tarefas',
        component: Kanban
    }
]

const router = new Router({routes})

export default router