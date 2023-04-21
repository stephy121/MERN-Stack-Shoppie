import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return { state };
  }
};
function HomeScreen() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, []);

  const brands = ['Face Care', 'Hair Care', 'Skin Care'];

  const renderProductsByBrand = (brand) => {
    const filteredProducts = products.filter(
      (product) => product.category === brand
    );
    return (
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    );
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div>
      <div className="carousel-container">
        <Carousel
          showArrows
          autoPlay
          interval={5000}
          showThumbs={false}
          infiniteLoop
        >
          {brands.map((brand, index) => (
            <div key={index} onClick={() => handleBrandClick(brand)}>
              <img
                src={`/images/${brand.replace(' ', '-')}-banner.jpg`}
                alt={brand}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <h1>{selectedBrand || 'Featured Products'}</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger"> {error} </MessageBox>
        ) : selectedBrand ? (
          renderProductsByBrand(selectedBrand)
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
