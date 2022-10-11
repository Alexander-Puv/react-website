import React from "react";
import { useState } from "react";
import { TopBlogData } from "../../../utils/TopBlogData";
import Blog from "../../UI/blog/Blog";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";
import cl from './PageTop.module.scss';

export default function PageTop({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className={cl.page_top} >
            <h1 className={cl.NW}>Blogs of the week:</h1>
            <div className={cl.slider}>
                <FaArrowAltCircleLeft className={cl.left_arrow} onClick={prevSlide}/>
                <FaArrowAltCircleRight className={cl.right_arrow} onClick={nextSlide}/>
                {TopBlogData.map((info, index) => {
                    return (
                        <div
                            className={`${cl.slide} ${index === current ? cl.active : ''}`}
                            key={index}
                        >
                            {index === current && (
                                <Blog
                                    array={info}
                                    bigBlog
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};