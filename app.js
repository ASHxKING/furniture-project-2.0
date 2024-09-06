const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Static folder for serving CSS, images, and JS files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoutes = require('../furniture-ecommerce-node/routes/index');
app.use('/', indexRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
