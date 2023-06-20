
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
// import Rating from '../components/Rating'
import { useGetProductsQuery } from '../slices/productsApislice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const {data:products, isLoading, error} = useGetProductsQuery();
  
  return (
    <>
    
    {isLoading? (
      <Loader/>
    ) : error? (<Message variant ='danger'>{error?.data?.message || error.error}</Message>) : (<>
     <h1>Latest Products</h1>
     <Row>
      {/* {console.log(products)} */}
        {products.map((product)=>(
           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
               <Product product={product}/>
               {/* <Rating product={product}/> */}
           </Col>
        ))}
     </Row>
    </>)}
     
    </>
  )
};

export default HomeScreen;
