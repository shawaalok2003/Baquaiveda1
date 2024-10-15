import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useCart } from './cart/cartContext';
import { WishlistContext } from './wishlist/wishlistContext';
import './Products.css'; // Custom styles for your products page
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'; 

const ProductsPage = () => {
  const { handleAddToCart } = useCart(); // Use addToCart from CartContext
  const { handleAddToWishlist } = useContext(WishlistContext); // Use addToWishlist from WishlistContext

  // Retrieve the JWT token from localStorage
  const token = localStorage.getItem('token'); // Or sessionStorage.getItem('token')

  const productList = [
    { id: 1, name: 'Product 1', price: 100, image: 'Product 1.jpeg', description: 'This is a detailed description of Product 1.' },
    { id: 2, name: 'Product 2', price: 150, image: 'Product 2.jpeg', description: 'This is a detailed description of Product 2.' },
    { id: 3, name: 'Product 3', price: 200, image: 'Product 4.jpeg', description: 'This is a detailed description of Product 3.' },
    { id: 4, name: 'Product 4', price: 100, image: 'Product 5.jpeg', description: 'This is a detailed description of Product 1.' },
    { id: 5, name: 'Product 5', price: 150, image: 'Product 6.jpeg', description: 'This is a detailed description of Product 2.' },
    { id: 6, name: 'Product 6', price: 200, image: 'Product 7.jpeg', description: 'This is a detailed description of Product 3.' },
    { id: 7, name: 'Product 7', price: 100, image: 'Product 8.jpeg', description: 'This is a detailed description of Product 1.' },
    { id: 8, name: 'Product 8', price: 150, image: 'Product 9.jpeg', description: 'This is a detailed description of Product 2.' },
    { id: 9, name: 'Product 9', price: 200, image: 'Product 10.jpeg', description: 'This is a detailed description of Product 3.' },
    { id: 10, name: 'Product 10', price: 100, image: 'Product 11.jpeg', description: 'This is a detailed description of Product 1.' },
    { id: 11, name: 'Product 11', price: 150, image: 'Product 12.jpeg', description: 'This is a detailed description of Product 2.' },
    { id: 12, name: 'Product 12', price: 200, image: 'Product 13.jpeg', description: 'This is a detailed description of Product 3.' },
    { id: 13, name: 'Product 13', price: 100, image: 'Product 14.jpeg', description: 'This is a detailed description of Product 1.' },
  ];

  return (
    <Container className="products-container">
      <Row>
        {productList.map(product => (
          <Col md={4} key={product.id} className="product-column">
            <Card className="product-card">
              <Card.Img variant="top" src={require(`/public/images/${product.image}`)} alt={product.name} className="product-image" />
              <Card.Body>
                <Card.Title className="product-title">{product.name}</Card.Title>
                <Card.Text className="product-description">
                  {product.description}
                </Card.Text>
                <p className="product-price">${product.price}</p>
                <Button variant="primary" onClick={() => {
                  if (token) {
                    handleAddToCart(product.id, product.name, product.price, 1, token);
                    toast.success(`${product.name} added to cart`, {
                      position: "top-right",
                      autoClose: 2000,
                    });
                  } else {
                    console.error('User is not authenticated');
                    window.location.href = '/login'; // Redirect to login if no token
                  }
                }}>
                  Add to Cart
                </Button>
                <Button variant="outline-primary" onClick={() => {
                  if (token) {
                    handleAddToWishlist(product.id, product.name, product.price, token);
                    toast.info(`${product.name} added to wishlist`, {
                      position: "top-right",
                      autoClose: 2000,
                    });
                  } else {
                    console.error('User is not authenticated');
                    window.location.href = '/login';
                  }
                }} className="ml-2">
                  Add to Wishlist
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ProductsPage;