const express = require('express');
const router = express.Router();

// Sample products data
const products = [
    { id: 1, title: 'Elegant Sofa', price: 350, category: 'sofa', image: 'images/sofa.jpg' },
    { id: 2, title: 'Modern Dining Set', price: 500, category: 'dining', image: 'images/dining-set.jpg' },
    { id: 3, title: 'Comfortable Bed', price: 600, category: 'bed', image: 'images/bed.jpg' },
    { id: 4, title: 'Cozy Chair', price: 120, category: 'chair', image: 'images/chair.jpg' }
];

// Home Route
router.get('/', (req, res) => {
    res.render('index', { title: 'Home', featuredProducts: products });
});

// Products Route
router.get('/products', (req, res) => {
    const category = req.query.category || 'all';  // Get category from query string
    let filteredProducts = products;
    
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    res.render('products', { title: 'Products', products: filteredProducts });
});

// Cart Route
router.get('/cart', (req, res) => {
    res.render('cart', { title: 'Cart' });
});

// Search route
router.get('/search', (req, res) => {
    const query = req.query.query;  // Get the search term from the query string
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase())
    );
    res.render('products', { title: 'Search Results', products: filteredProducts });
});

module.exports = router;
