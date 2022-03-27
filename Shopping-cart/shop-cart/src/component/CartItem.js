//show list cart each item
import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteIcon from '../image/delete-icn.svg'
const CartItem =({id,name,image_url,price,quantity})=>{
    return(
        <div className="item">
            <div className="product_image">
                <img src={image_url} alt=""></img>
            </div>
            <div className="description">
                <span>{name}</span>
                <span>Price {price} Bath </span>
            </div>
            <div className="quantity">
                <button className='plus-btn'>
                    <img src={plus} alt=""></img>
                </button>
                <input type="text" value={quantity} disabled></input>
                <button className='minus-btn'>
                    <img src={minus} alt=""></img>
                </button>
            </div>
            <div className='total-price'>
                {quantity * price}

            </div>
            <div className='remove'>
                <img src={deleteIcon}></img>
            </div>


        </div>
    )

}

export default CartItem