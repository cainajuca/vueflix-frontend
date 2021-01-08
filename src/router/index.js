import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '../components/MovieList.vue'
import Cadastro from '../components/Cadastro.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter);

export default 

new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/Login'
        },
        {
            path: '/Login',
            component: Login
        },
        {
            path: '/cadastro',
            // name: 'cadastro',
            component: Cadastro
        },
        {
            path: '/list',
            // name: 'movie-list',
            component: MovieList
        }
    ]
})