//show list cart each item
import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteIcon from '../image/delete-icn.svg'
import { MyCartContext } from '../management/context'

const CartItem =({id,name,image_url,price,quantity})=>{
    const {removeItem,toggleQuantity,formatNumber} = MyCartContext()

    return(
        <div className="item">
            <div className="product_image">
                <img src={image_url} alt=""></img>
            </div>
            <div className="description">
                <span>{name}</span>
                <span>Price {formatNumber(price)} Bath </span>
            </div>
            <div className="quantity">
                <button className='plus-btn' onClick={()=>toggleQuantity(id,"increment")}>
                    <img src={plus} alt=""></img>
                </button>
                <input type="text" value={quantity} disabled></input>
                <button className='minus-btn' onClick={()=>toggleQuantity(id,"decrement")}>
                    <img src={minus} alt=""></img>
                </button>
            </div>
            <div className='total-price'>
                {formatNumber(quantity * price)}

            </div>
            <div className='remove' onClick={()=>removeItem(id)}>
                <img src={deleteIcon} alt=""></img>
            </div>


        </div>
    )

}

export default CartItem