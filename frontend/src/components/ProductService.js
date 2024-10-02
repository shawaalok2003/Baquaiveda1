// frontend/src/services/productService.js
import axios from 'axios';

// Add a product
export const addProduct = async (productData, token) => {
    try {
        const response = await axios.post('http://localhost:8080/products/add', productData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// Get all products
export const getAllProducts = async () => {
    try {
        const response = await axios.get('http://localhost:8080/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
