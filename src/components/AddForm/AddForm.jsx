import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddForm = ({addProduct}) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    function handleValues() {
        let newProduct = {
            title,
            price,
            image
        }
        addProduct(newProduct);
        // console.log(newProduct);
    }

    return (
        <div>
            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' />
            <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Price' />
            <input onChange={(e) => setImage(e.target.value)} type="text" placeholder='Image' />
            <Link to='/'>
            <button onClick={() => handleValues()}>Save</button>
            </Link>
        </div>
    );
};

export default AddForm;