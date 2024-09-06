document.querySelectorAll('.filter').forEach(item => {
    item.addEventListener('click', function() {
        const category = this.dataset.category;
        const products = document.querySelectorAll('.product-item');

        products.forEach(product => {
            if (category === 'all' || product.dataset.category === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product-item');
        const title = product.querySelector('.card-title').textContent;
        const price = product.querySelector('.card-text').textContent.replace('$', '');

        const productObj = { title, price, quantity: 1 };

        const existingProduct = cart.find(item => item.title === title);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push(productObj);
        }

        alert(`${title} added to cart`);
        updateCartUI();
    });
});

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const total = item.price * item.quantity;
        const row = `<tr>
                        <td>${item.title}</td>
                        <td>$${item.price}</td>
                        <td>${item.quantity}</td>
                        <td>$${total}</td>
                        <td><button class="btn btn-danger remove-from-cart">Remove</button></td>
                    </tr>`;
        cartItems.innerHTML += row;
    });
}
