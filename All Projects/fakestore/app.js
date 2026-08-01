alert("Welcome To Fake-Store");

const loadAllProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      displayProducts(data);
      //   console.log(data);
    });
};

const displayProducts = (products) => {
  const container = document.getElementById("product-container");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("single-product");
    div.innerHTML = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}" width="150">

        <h2>${product.title}</h2>

        <p><strong>Category:</strong> ${product.category}</p>

        <p>${product.description.slice(0, 100)}...</p>

        <p><strong>Price:</strong> $${product.price}</p>

        <p><strong>Rating:</strong> ${product.rating.rate} ⭐ (${product.rating.count} reviews)</p>

        <button>Buy Now</button>
        <button>Add to Cart</button>
      </div>
    `;
    container.appendChild(div);
  });
};

loadAllProduct();
