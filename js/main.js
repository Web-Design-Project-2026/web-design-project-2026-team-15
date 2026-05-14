/*  generates product cards on the shop page 
    - Each card includes product image, name, price, and buttons for details and adding to cart
    - "Add to cart" button is disabled if the product is out of stock

*/
const grid = document.getElementById('product-list');

products.forEach(product => {
    const cardButton = product.inStock 
      ? `<button class="btn-primary" onclick="addToCart(${product.id})">Add to cart</button>`
      : `<button class="btn-disabled" disabled>Out of stock</button>`;

    grid.innerHTML += `
        <div class="product-card">
            <div class="product-card__image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-card__body">
              <p class="product-card__name">${product.name}</p>
                <div class="product-card__footer">
                    <span class="product-card__price">${product.price} kr</span>
                <div class="product-card__actions">
                    <a href="product.html?id=${product.id}">
                        <button class="btn-secondary">See details</button>
                    </a>
                    ${cardButton}
                </div>
                </div>
            </div>
        </div>
    `;
});