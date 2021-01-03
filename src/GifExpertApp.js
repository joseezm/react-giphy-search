import React , {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Dragon Ball Z"]);

    return (
        <>
            <h1>Giphy Search App</h1>
            <AddCategory setCategories = {setCategories} /> 
            <hr/> 
            <ol>
                {categories.map( (category) => {
                    return <GifGrid key = {category} category = {category}/>
                })}
            </ol>
        </>
    )
}

export default GifExpertApp;
