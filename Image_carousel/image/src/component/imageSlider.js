import ImageData from "./imagedata"
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai';
import { useState } from "react";

const ImageSlider =()=>{
    const [current,SetCurrent] = useState(0)
    const length = ImageData.length

    const prevSlide=()=>{
        if(current === 0){
            SetCurrent(length-1)
        }else{
            SetCurrent(current-1)
        }
    }
    const nextSlide =()=>{
        if(current === length-1){
            SetCurrent(0)
        }else{
            SetCurrent(current+1)
        }
    }

    return(
        <section className="slider">
            <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide}></AiOutlineArrowLeft>
            <AiOutlineArrowRight className="rightArrow" onClick={nextSlide}></AiOutlineArrowRight>
            {ImageData.map((data,index)=>{
                return(
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === current && 
                        (
                        <div>
                            <img src={data.image} alt={data.title} className="image"></img>
                            <p>{data.title}</p>
                        </div>
                        )}
                        
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider 