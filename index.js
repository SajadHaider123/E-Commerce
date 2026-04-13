const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Sajad, Backend Server is Running Perfectly!");
});

// Products API (Abhi ke liye dummy data)
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Smart Watch', price: 5000 },
        { id: 2, name: 'Bluetooth Buds', price: 3500 }
    ];
    res.json(products);
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});