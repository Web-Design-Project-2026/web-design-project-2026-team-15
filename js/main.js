const products = {
    1: {
        title: "Airpods Pro 3",
        images: [
            "../img/airpods.png",
            "../img/airpods2.png"
        ],
        description: "Experience sound like never before with the AirPods Pro (3rd Generation) — designed for students who want focus, comfort, and premium audio every day.<br>With advanced Active Noise Cancellation, you can block out distractions and stay fully immersed in your studies, music, or calls. Switch to Transparency Mode when you need to stay aware of your surroundings — perfect for campus life.<br>The improved ergonomic design ensures a secure and comfortable fit, even during long study sessions. Powered by enhanced audio technology, these earbuds deliver crisp highs, deep bass, and crystal-clear voice quality.",
        price: "$249.00"
    },
    2: {
        title: "Book",
        images: [
            "../img/image.png",
            "../img/image2.png"
        ],
        description: "Super ordinateur pour les étudiants",
        price: "999€"
    },
    3: {
        title: "Lol",
        images: [
            "../img/image.png",
            "../img/image2.png"
        ],
        description: "Super ordinateur pour les étudiants",
        price: "999€"
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products[id];

if (product) {
    document.getElementById("title").textContent = product.title;
    document.getElementById("image1").src = product.images[0];
    document.getElementById("image2").src = product.images[1];
    document.getElementById("description").innerHTML = product.description;
    document.getElementById("price").textContent = product.price;
} else {
    document.body.innerHTML = "<h1>Produit introuvable</h1>";
}