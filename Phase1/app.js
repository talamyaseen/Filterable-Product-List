const products = [
    { name: "Phone", category: "Electronics", price: 1000 },
    { name: "T-shirt", category: "Clothing", price: 50 },
    { name: "Laptop", category: "Electronics", price: 3000 },
    { name: "Jeans", category: "Clothing", price: 70 }
];

const filterButtons = document.querySelectorAll('.filter-buttons button');
const productGrid = document.querySelector('.product-list');

function displayProducts(productsToShow) {
    productGrid.innerHTML = ''; 
    productsToShow.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productGrid.appendChild(productElement);
    });
}

displayProducts(products);

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.innerText;
        if (category === 'All') {
            displayProducts(products); 
        } else {
            const filteredProducts = products.filter(product => product.category === category);
            displayProducts(filteredProducts);
        }
    });
});
