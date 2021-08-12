import React, {useState, useRef, useEffect} from 'react'

import {HeroContainer, HeroWrapper, HeroSlide, HeroSlider, HeroImage,
HeroContent,  SliderButtons,PrevArrow, NextArrow} from '../HeroSection/HeroElements' 


const HeroSection = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(()=> {
        const nextSlide = () =>{
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 3000)

        return function () {
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        }
    }, [current,length]
    );

    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current + 1)

        
    };

    const prevSlide = () =>{
        setCurrent(current === 0 ? length -1 : current -1)
       
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    return (
        <HeroContainer >
          <HeroWrapper>
            {slides.map((slide, index) => {
                return(
                    <HeroSlide key ={index}>
                        {index === current && (
                             <HeroSlider>
                             <HeroImage src = {slide.image} alt={slide.alt} />
                             <HeroContent>
                                    
                             </HeroContent>
                         </HeroSlider>
                        )}
                       
                    </HeroSlide>
                )
            })}
            <SliderButtons>
                <PrevArrow onClick= {prevSlide}/>
                <NextArrow onClick= {nextSlide}/>

            </SliderButtons>
          </HeroWrapper>
        </HeroContainer>
    )
}

export default HeroSection
