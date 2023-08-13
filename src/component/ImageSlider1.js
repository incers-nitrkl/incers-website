import React, { useState } from 'react';
import {SliderData} from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider1'>
            <FaArrowAltCircleLeft className='left-arrow1' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow1' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide1 active' : 'slide1'}
                        key={index}
                    >
                        {index === current && (
                            <a href={slide.reciever} target="_blank" alt="myimg">
                                <img src={slide.image} alt='travel image' className='image1' />
                            </a>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;