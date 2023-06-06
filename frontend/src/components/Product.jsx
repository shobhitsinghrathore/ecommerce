import React from 'react'
import { Card,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
const Product = ({product}) => {

  return (
    <Card classnaame="my-3 p-3 rounded" > 
    <Link to={`/product/${product._id}`}>
    <Image src ={product.image} alt={product.name} fluid/>
    </Link>

    <Card.Body>
        <Link to = {`/product/${product._id}`}>
            <Card.Title as="div" className='product-title'>
              ${product.name}
            </Card.Title>
        </Link>
        <Card.Text as = 'div'>
          <Rating value ={product.rating} text={`${product.numReviews}reviews`}/>
        </Card.Text>
        <Card.Text as = "h3">
           ${product.price}
        </Card.Text>
    </Card.Body>
      
    </Card>
  )
}

export default Product

