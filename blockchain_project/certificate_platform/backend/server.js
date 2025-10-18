const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const users = [];
const certificates = {};

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.json({ message: 'Registered successfully' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});


app.post('/issue', (req, res) => {
    const { id, hash } = req.body;
    certificates[id] = { hash, issuer: 'authority' };
    res.json({ message: 'Certificate stored' });
});


app.post('/verify', (req, res) => {
    const { id, hash } = req.body;
    if (certificates[id] && certificates[id].hash === hash) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

app.get('/', (req, res) => {
    res.send('Certificate verification API');
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Certificate backend running on port ${PORT}`);
});