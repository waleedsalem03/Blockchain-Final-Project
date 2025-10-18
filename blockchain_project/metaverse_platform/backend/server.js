const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const users = [];

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


app.get('/', (req, res) => {
    res.send('Metaverse platform API');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Metaverse backend running on port ${PORT}`);
});