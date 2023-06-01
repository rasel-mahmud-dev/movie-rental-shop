import React, {useEffect, useRef} from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useQuery} from "@apollo/client";
import {GET_HOME_SLIDER_MOVIES, GET_MOVIES} from "../../graphql/queries.js";
import staticPath from "../../utils/staticPath.js";

import "./homPage.scss"
import {Button} from "antd";
import {useBoundStore} from "../../zustand/store.js";
import {PlusOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";


const HomePage = () => {

    const sliderRef = useRef()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        console.log(sliderRef)
    }, [sliderRef])


    const slidersMovies = [
        {
            title: "The Earth ",
            images: ["slider1.jpg", "slider2.jpg", "slider3.jpg"],
            summary: "Dictumst facilisi iaculis magna venenatis eget cursus mus odio. Posuere pede porttitor nam vehicula turpis congue justo nibh dapibus etiam. Nullam hendrerit rutrum curae venenatis fames dictum eleifend cubilia feugiat. Lobortis curabitur blandit tellus rhoncus vel consectetur sodales cubilia consectetuer volutpat. Mauris magna habitasse curae donec ante fames adipiscing mus curabitur.\n" +
                "\n" +
                "Viverra dui curae torquent ex tristique aliquam nullam aptent letius. Maximus sociosqu nam potenti quam ultrices dictum imperdiet semper parturient fermentum. Nisi tempor class euismod suspendisse praesent nisl placerat malesuada. Id cursus consectetur bibendum tristique phasellus nisi dui semper lectus ridiculus ultrices."
        },
        {
            title: "The End of Game ", images: ["slider3.jpg"], summary: `Morbi curabitur cras diam nam lacinia lectus pede dignissim a. Odio non mattis a tincidunt donec quam convallis. Class magnis fusce bibendum et sociosqu proin ultricies. Volutpat habitasse pede pulvinar lacus dictum ipsum potenti tempor nulla porttitor. Augue magnis mattis himenaeos praesent ipsum. Purus ipsum lorem mus arcu ad. Laoreet cras dis suspendisse class pede non libero est. Eros magna aliquet tincidunt nibh platea vitae eu donec mattis posuere et.

Consectetur metus nisi dictum finibus pulvinar montes lacinia. Curae molestie feugiat turpis mus pretium finibus montes. Vel aliquet ad egestas consequat montes potenti risus hac. Enim ut risus leo dictumst orci fusce senectus ligula hendrerit elementum. Praesent finibus natoque accumsan ac odio sem suspendisse maecenas lacus vitae.`
        },
        {title: "Destiny ", images: ["slider2.jpg", "slider3.jpg"]},
    ]

    let {data, loading, error} = useQuery(GET_HOME_SLIDER_MOVIES)


    let moviesResult = useQuery(GET_MOVIES)

    const {movies, setMovies} = useBoundStore(state => state)


    useEffect(() => {

        if (moviesResult.data && moviesResult.data.getMovies) {
            setMovies(moviesResult.data.getMovies || [])
        }

    }, [moviesResult])


    function handleAddToCart(movie){

    }


    return (
        <div>


            <div className="home-slider">

                <Slider {...settings} ref={sliderRef}>
                    {slidersMovies.map(item => (
                        <div className="slider-item">


                            <div className="slider-item-image">
                                <img src={staticPath(item.images[0])} alt=""/>
                            </div>
                        </div>
                    ))}
                </Slider>


                <div>
                    <div className="slider-content">
                        <div className="inner">
                            <h1>{slidersMovies[0].title}</h1>
                            <p>{slidersMovies[0].summary}</p>

                            <div className="flex items-center gap-x-4 mt-8">
                                <Button>Buy Now</Button>
                                <Button>My List</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="container">

                <div className="flex movie-category">
                    <li className="active">Featured</li>
                    <li> Movies</li>
                    <li>Shows</li>
                </div>



                <div className="movies">
                    {movies.map(movie => (
                        <div className="movie-card">
                            <Link to={`/movie/${movie.id}`}>
                                <img src={staticPath(movie?.images?.[0])} alt=""/>
                            </Link>
                            <h4 className="video-title">{movie.title}</h4>

                            <div className="flex items-center gap-x-2 meta">
                                <span>{new Date(movie.releasedYear).getFullYear()}</span>
                                <span>{movie.genres} </span>
                            </div>

                            <div className="action">
                                <div className="icon-plus">
                                    <PlusOutlined onClick={()=>handleAddToCart(movie)} />
                                </div>
                                <div className="icon-plus">
                                    <PlusOutlined />
                                </div>
                                <div className="icon-plus">
                                    <PlusOutlined />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default HomePage;