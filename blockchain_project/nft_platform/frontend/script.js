document.addEventListener('DOMContentLoaded', () => {
    const merchantForm = document.getElementById('merchantForm');
    if (merchantForm) {
        merchantForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const username = document.getElementById('merchantUsername').value;
            const password = document.getElementById('merchantPassword').value;
            try {
                const response = await fetch('http://localhost:5000/register-merchant', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                const message = document.getElementById('merchantMessage');
                message.textContent = data.message || data.error;
            } catch (error) {
                console.error('Error registering merchant:', error);
            }
        });
    }
    const buyerForm = document.getElementById('buyerForm');
    if (buyerForm) {
        buyerForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const username = document.getElementById('buyerUsername').value;
            const password = document.getElementById('buyerPassword').value;
            try {
                const response = await fetch('http://localhost:5000/register-buyer', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                const message = document.getElementById('buyerMessage');
                message.textContent = data.message || data.error;
            } catch (error) {
                console.error('Error registering buyer:', error);
            }
        });
    }
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            try {
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                const message = document.getElementById('loginMessage');
                message.textContent = data.message || data.error;
            } catch (error) {
                console.error('Error logging in:', error);
            }
        });
    }
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const name = document.getElementById('productName').value;
            const price = parseFloat(document.getElementById('productPrice').value);
            try {
                const response = await fetch('http://localhost:5000/add-product', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, price })
                });
                const data = await response.json();
                const message = document.getElementById('productMessage');
                message.textContent = data.message || data.error;
                // Reload the product list after adding
                loadProducts();
            } catch (error) {
                console.error('Error adding product:', error);
            }
        });
    }
    const productList = document.getElementById('productList');
    async function loadProducts() {
        if (productList) {
            try {
                const response = await fetch('http://localhost:5000/list-products');
                const data = await response.json();
                productList.innerHTML = '';
                data.forEach((item) => {
                    const li = document.createElement('li');
                    li.textContent = `${item.name} - Price: ${item.price}`;
                    productList.appendChild(li);
                });
            } catch (error) {
                console.error('Error loading products:', error);
            }
        }
    }
    loadProducts();
});