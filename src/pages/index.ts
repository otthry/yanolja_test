import Home from '@pages/home'
import About from '@src/pages/about'
import List from '@pages/list'
import Login from '@pages/login'
import Topics from '@pages/topics'
import Swiper from '@pages/swiper'

const routerPage = [
    {
        name : 'Home',
        link:'/',
        component:Home 
    },
    {
        name : 'About',
        link:'/about',
        component:About
    },
    {
        name : 'List',
        link:'/list',
        component:List
    },
    {
        name : 'Login',
        link:'/login',
        component:Login,
        hiddenMenu : true
    },
    {
        name : 'Topics',
        link:'/topics',
        component:Topics
    }, 
    {
        name : 'Topics',
        link:'/topics/:topicId',
        component:Topics,
        hiddenMenu : true
    }, 
    {
        name : 'Swiper',
        link:'/swiper',
        component:Swiper
    }
]
export { About,List,Login,Topics,Swiper,routerPage}
