import Home from '@pages/home'
import About from '@src/pages/about'
import List from '@pages/list'
import Login from '@pages/login'
import Topics from '@pages/topics'
import Swiper from '@pages/swiper'

const routerPage = [
    {
        link:'/',
        component:Home
    },
    {
        link:'/about',
        component:About
    },
    {
        link:'/list',
        component:List
    },
    {
        link:'/login',
        component:Login
    },
    {
        link:'/topics',
        component:Topics
    }, 
    {
        link:'/topics/:topicId',
        component:Topics
    }, 
    {
        link:'/swiper',
        component:Swiper
    }
]
export { About,List,Login,Topics,Swiper,routerPage}
