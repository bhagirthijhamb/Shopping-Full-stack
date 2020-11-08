const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Instantiate an empty express app
const app = express();


// Middleware

// Add middleware to parse the body pf the request
app.use(bodyParser.json());

// app.get('*', (req, res) => {
//     console.log('are we still...')
// })

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

app.listen(4000, () => {
    console.log('Server running on port 4000...');
})