import { FaHome,FaUserAlt,FaShoppingCart ,FaUserSecret} from 'react-icons/fa';

const MenuData = [
    {
        title:"Home",
        path:"/",
        icon:<FaHome></FaHome>
    },
    {
        title:"Login",
        path:"/member",
        icon:<FaUserAlt></FaUserAlt>
    },
    {
        title:"Store",
        path:"/store",
        icon:<FaShoppingCart></FaShoppingCart>
    },
    {
        title:"Admin",
        path:"/admin",
        icon:<FaUserSecret></FaUserSecret>
    }

]



export default MenuData