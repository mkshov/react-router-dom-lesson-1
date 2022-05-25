import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditForm = ({getOneProduct, oneProduct, updateProduct}) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const params = useParams()
    useEffect(() => {
        getOneProduct(params.id)
    },[])
    useEffect(() => {
        if(oneProduct){
            setTitle(oneProduct.title)
            setPrice(oneProduct.price)
            setImage(oneProduct.image)
        }
    }, [oneProduct])
    // console.log(oneProduct);
    function handleValues(){
        let editedProduct = {
            title,
            price,
            image
        }
        updateProduct(params.id, editedProduct)
    }
    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' />
            <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Price' />
            <input value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder='Image' />
            <Link to='/'>
            <button onClick={() => handleValues()}>Save</button>
            </Link>
        </div>
    );
};

export default EditForm;