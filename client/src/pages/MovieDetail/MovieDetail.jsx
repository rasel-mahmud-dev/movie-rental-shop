import React, {useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_MOVIE} from "../../graphql/queries.js";
import {useParams} from "react-router-dom";
import staticPath from "../../utils/staticPath.js";
import {Button} from "antd";

const MovieDetail = () => {

    const {movieId } = useParams()

    const {data}  = useQuery(GET_MOVIE, {
        variables: {
            movieId: movieId
        }
    })

    useEffect(()=>{
        console.log(data)
    }, [data])

    return (
        <div className="container">


            {data && data.getMovie && (
                <div className="my-10">
                    <div className="grid grid-cols-12 gap-x-10">
                        <div className="col-span-4">
                            <img  className="w-full" src={staticPath(data?.getMovie?.images?.[0])} alt=""/>
                        </div>
                        <div className="col-span-8">
                            <h1 className="text-5xl uppercase text-white ">{data.getMovie.title}</h1>
                            <h5 className="text-white ">${data.getMovie.price}</h5>
                            <p className="text-white ">{data.getMovie.summary}</p>

                            <div className="flex items-center gap-x-4 pt-4">
                                <Button>Buy Now</Button>
                                <Button>Add To Cart</Button>

                            </div>

                        </div>
                    </div>
                </div>
            )}

            
        </div>
    );
};

export default MovieDetail;