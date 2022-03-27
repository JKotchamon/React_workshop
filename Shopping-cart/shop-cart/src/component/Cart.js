// component manage  Cart
import CartData from "../data/CartData"
import CartItem from "./CartItem"
const Cart=()=>{
    return(
        <div className="shopping-cart">
            <div className="title">Cart List</div>
            {CartData.map((data)=>{
                return <CartItem key={data.id} {...data} ></CartItem>
            })}

            <div className="footer">Total</div>

        </div>

    )
}

export default Cart