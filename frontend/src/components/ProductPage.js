import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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

  // const notify = (productName) => {
  //   toast.success(`${productName} added to cart`, {
  //     position: "top-right",
  //     autoClose: 2000, // Auto close the toast after 2 seconds
  //   });
  // };

  return (
    <Container className="products-page">
      <Row>
        {productList.map(product => (
          <Col md={4} key={product.id} className="product-col">
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front side of the card */}
                <div className="flip-card-front">
                  <img
                    src={require(`/public/images/${product.image}`)}
                    alt={product.name}
                    className="product-image"
                  />
                  <h4 className="product-name">{product.name}</h4>     
                  <p className="product-price">${product.price}</p>
                </div>
                {/* Back side of the card */}
                <div className="flip-card-back">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <button
                    onClick={() => {
                      if (token) {
                        handleAddToCart(product.id, product.name, product.price, 1, token);
                        //notify(product.name);
                      } else {
                        console.error('User is not authenticated');
                        window.location.href = '/login'; // Redirect to login if no token
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                  <Button variant="outline-primary" onClick={() => {
                    if (token) {
                      handleAddToWishlist(product.id, product.name, product.price, token);
                    } else {
                      console.error('User is not authenticated');
                      window.location.href = '/login';
                    }
                  }}>
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <ToastContainer/>
    </Container>
  );
};

export default ProductsPage;
