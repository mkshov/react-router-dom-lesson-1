import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = ({getOneProduct, oneProduct}) => {
    const [loading,setLoading] = useState(true)
    const params = useParams()
    // console.log(params);
    useEffect(() => {
        getOneProduct(params.id)
        setTimeout(() => {setLoading(false)},2000)
    }, [])
    if(loading){
        return <Spinner animation="border" />
    }
    return (
        <div className='container'>{oneProduct ?         <div>
            <div>{oneProduct.title}</div>
            <div>{oneProduct.price}</div>
            <img src={oneProduct.image} alt="" />
        </div> : <Spinner animation="border" />}</div>
    );
};

export default Details;