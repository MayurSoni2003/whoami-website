const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Routes
app.use('/api/products', productRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'WhoAmI API Server is running',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        success: false,
        error: 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 WhoAmI API Server running on http://localhost:${PORT}`);
    console.log(`📊 API Endpoints:`);
    console.log(`   - GET  /api/products`);
    console.log(`   - GET  /api/products/:id`);
    console.log(`   - GET  /api/products/category/:category`);
    console.log(`   - GET  /api/products/categories`);
    console.log(`   - POST /api/products/reload\n`);
});
