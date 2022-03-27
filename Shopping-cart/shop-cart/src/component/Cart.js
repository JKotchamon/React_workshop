// component manage  Cart

import CartItem from "./CartItem"
import { MyCartContext } from "../management/context"
const Cart=()=>{
    const {cart,total,formatNumber} = MyCartContext()
    if(cart.length === 0){
        //NO cart list
        return(
            <div className="shopping-cart">
                <div className="empty"> Your shopping cart is empty </div>
            </div>
        )
    }else{
        return(
            <div className="shopping-cart">
                <div className="title">Cart List</div>
                {cart.map((data)=>{
                    return <CartItem key={data.id} {...data} ></CartItem>
                })}
    
                <div className="footer">Total {formatNumber(total)} Bath</div>
    
            </div>
    
        )
    }
}

export default Cart