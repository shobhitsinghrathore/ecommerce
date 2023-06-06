import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <Card classnaame="my-3 p-3 rounded" > 
    <a href={`/product/${product._id}`}>
        <Card.Img scr={product.image} variant="top"/>
    </a>

    <Card.Body>
        <a href = {`/product/${product._id}`}>
            <Card.Title as="div">
              ${product.name}
            </Card.Title>
        </a>
        <Card.Text as = "h3">
           ${product.price}
        </Card.Text>
    </Card.Body>
      
    </Card>
  )
}

export default Product
