import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsList = ({getProducts, products, deleteProduct}) => {
    const [selectedProduct, setSelectedProduct] = useState('')
    const [hover, setHover] = useState('')
      // console.log(hover);
      useEffect(() => {
        getProducts()
      }, [])
      // console.log(deleteProduct);
    return (
 <>
<div className='container d-flex flex-wrap justify-content-between'>
  {products.map((item) =>(<Card onClick={() => setSelectedProduct(item.id)} onMouseEnter={() => setHover(item.id)} onMouseLeave={() => setHover('')} key={item.id} style={{ width: '18rem',margin:'10px', border: selectedProduct === item.id ? "1px solid black" : "", backgroundColor: hover === item.id ? "rgba(240,240,240)" : "white"}}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>{item.price}$</Card.Text>
    <Link to={`/edit/${item.id}`}>
    <Button variant="primary">Edit</Button>
    </Link>
    <Button onClick={() => deleteProduct(item.id)} variant="danger">Delete</Button>
    <Link to={'/details/' + item.id}>
    <Button variant="secondary">Details</Button>
    </Link>
    </Card.Body>
    </Card>))}
</div>
      </>

    );
};

export default ProductsList;