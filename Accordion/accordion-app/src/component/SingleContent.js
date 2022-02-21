import { useState } from "react"
import { AiOutlinePlus,AiOutlineMinusCircle } from "react-icons/ai";

const SingleContent =({title,description}) =>{
    const [showContent,setShowcontent] = useState(false)
    return(
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setShowcontent(!showContent)}>
                    {showContent ? <AiOutlineMinusCircle></AiOutlineMinusCircle> : <AiOutlinePlus></AiOutlinePlus>}
                </button>

            </header>
            {showContent && <p>{description}</p>}     

        </article>
    )
}

export default SingleContent