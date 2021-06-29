import React, {useEffect, useState} from 'react'
import Image from './Image';

const ApiFetch = () => {

    const API_KEY = 'kjX9X2nu71fmlxkhB7DccRsS0zOXdhiG';
    const [categories, setCategories] = useState(['horror', 'love']);
    const [configFetch, setConfigFetch] = useState({
        CATEGORIA: 'pokemon',
        LIMIT: 5
    })
    const {CATEGORIA, LIMIT} = configFetch;

    const [images, setImages] = useState([])

    const getData = async () => {
        const data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${CATEGORIA}&limit=${LIMIT}`);
        const result = await data.json();
        return result;
    }

    const [categoryInput, setCategoryInput] = useState("");

    useEffect(() => {
        getData().then( datos => {
            let imagesArray = []
            datos.data.forEach((data) => {
                imagesArray.push(data.images.downsized_still.url)
            })
            setImages(imagesArray)
        });
        return () => {
            
        }
    }, [CATEGORIA])

    const handleClickCategory = (category) => {
        setConfigFetch({
            ...configFetch,
            CATEGORIA: category
        })
    }

    const handleChangeInput = ({target}) => {
        setCategoryInput(target.value);
    }

    const handleSaveCategory = () => {
        setCategories([
            ...categories,
            categoryInput
        ]);
        setConfigFetch({
            ...configFetch,
            CATEGORIA: categoryInput
        });
        setCategoryInput("");
    }

    return (
        <div className="container">
            <div className="row pt-3">
                <ul className="col-6">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            onClick= {() => {handleClickCategory(category)}}
                            className="mb-1"
                        >
                            <button 
                                className="btn btn-secondary btn-sm"
                            >
                            {category}
                            </button >
                        </li>
                    ))}
                </ul>
                <div className="col-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Categoría"
                        value= {categoryInput}
                        onChange= {handleChangeInput}
                    ></input>
                </div>
                <div className="col-3">
                    <button
                        className="btn btn-success"
                        onClick= {handleSaveCategory}
                    >Nueva
                    </button>
                </div>
            </div>
            <div className="row d-flex flex-column align-items-center">
            {
                images.map((image, index) => {
                    return (
                        <Image
                            key= {index}
                            image= {image}
                            number= {index}
                        >
                        </Image>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ApiFetch