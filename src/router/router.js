//Configuracion estandar 
import { createRouter, createWebHashHistory } from 'vue-router'
/*
import BienvenidaPage from "../modules/pokemon/pages/BienvenidaPage"
import JuegoPage from "../modules/pokemon/pages/JuegoPage"
import PremiosPage from "../modules/pokemon/pages/PremiosPage"
import PruebaPage from "../modules/pokemon/pages/PruebaPage"
import NoEncontradaPage from "../modules/pokemon/pages/NoEncontradaPage"
*/

const routes = [
    {
        path: "/",
        component: ()=> import('../modules/pokemon/pages/BienvenidaPage')
    },
    {
        path: "/juego",
        component: ()=> import('../modules/pokemon/pages/JuegoPage')
    },
    {
        path: "/premios",
        component: ()=> import('../modules/pokemon/pages/PremiosPage')
    },
    {
        path: "/prueba",
        component:  ()=>import('../modules/pokemon/pages/PruebaPage')
    },
    {
        path: "/:pathMatch(.*)*",
        component:  ()=>import('../modules/pokemon/pages/NoEncontradaPage')
    }

]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router