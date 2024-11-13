import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/home/Home.vue'
import UsersList from '../views/users/List.vue'
import UsersForm from '../views/users/Form.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/users',
        name: 'ListUsers',
        component: UsersList
    },
    {
        path: '/users/:id',
        name: 'UsersForm',
        component: UsersForm,
        props: true
    },
    {
        path: '/users/create',
        name: 'UsersCreate',
        component: UsersForm
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;