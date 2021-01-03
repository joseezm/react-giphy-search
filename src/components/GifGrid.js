import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const {data: images, loading} = useFetchGifs(category);
    const loadingUrl = 'https://tradinglatam.com/wp-content/uploads/2019/04/loading-gif-png-4.gif';

    return (
        <>
        <h3> {category} </h3>
        {loading && <img src = {loadingUrl}></img>}
        <div className = 'card-grid'>
            { 
                images.map ((img)=> 
                    { return (
                        <GifGridItem 
                            key = {img.id}
                            { ...img }
                        />
                    )
                    }
                )
            }
        </div>
        </>
    )
}
