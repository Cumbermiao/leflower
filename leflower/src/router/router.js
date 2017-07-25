import Vue from "vue"

import Router from 'vue-router'

import Home from '@/components/App/Home/Home'
import Types from "@/components/App/Types/Types"
import Car from "@/components/App/Car/Car"
import User from "@/components/App/User/User"
import More from "@/components/App/More/More"

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },{
            path:'/types',
            name:'Types',
            component:Types
        },{
            path:'/car',
            name:'Car',
            component:Car
        },{
            path:'/user',
            name:'User',
            component:User
        },{
            path:'/more',
            name:'More',
            component:More
        }
    ]
})