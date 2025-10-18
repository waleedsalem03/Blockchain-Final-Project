const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const merchants = [];
const buyers = [];
const products = [];

app.post('/register-merchant', (req, res) => {
    const { username, password } = req.body;
    merchants.push({ username, password });
    res.json({ message: 'Merchant registered successfully' });
});

app.post('/register-buyer', (req, res) => {
    const { username, password } = req.body;
    buyers.push({ username, password });
    res.json({ message: 'Buyer registered successfully' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = merchants.find((m) => m.username === username && m.password === password) ||
        buyers.find((b) => b.username === username && b.password === password);
    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.post('/add-product', (req, res) => {
    const { name, price } = req.body;
    products.push({ name, price });
    res.json({ message: 'Product added' });
});

app.get('/list-products', (req, res) => {
    res.json(products);
});

app.get('/', (req, res) => {
    res.send('NFT marketplace API');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`NFT backend running on port ${PORT}`);
});