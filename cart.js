// Define a variable to store the cart items
let cart = [];

// Function to add an item to the cart
function addToCart(product) {
    // Check if the product is already in the cart
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        // If the product is already in the cart, increase its quantity
        existingItem.quantity++;
    } else {
        // If the product is not in the cart, add it with a quantity of 1
        cart.push({ ...product, quantity: 1 });
    }

    // Update the cart icon or counter to reflect the number of items in the cart
    updateCartIcon();
}

// Function to update the cart icon or counter
function updateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        // Update the cart icon to display the number of items in the cart
        const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
        cartIcon.textContent = cartItemCount > 0 ? cartItemCount : '';
    }
}

// Example usage:
// Assuming you have a button with an id of "add-to-cart-btn" on your product page
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    // Retrieve product information from the page (you need to customize this based on your HTML structure)
    const productId = 'product123'; // Example product ID
    const productName = 'Example Product'; // Example product name
    const productPrice = 1000; // Example product price

    // Create a product object
    const product = {
        id: productId,
        name: productName,
        price: productPrice
    };

    // Add the product to the cart
    addToCart(product);
});
