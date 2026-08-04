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
        <h2>${product.title.slice(0, 10)}</h2>
        <p><strong>Price:</strong> $${product.price}</p>
        <p>
          ⭐ ${product.rating.rate} 
          (${product.rating.count} reviews)
         </p>
        <button onclick="single_product('${product.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
        <button onclick="handleAddToCart('${product.title}', ${product.price}), updateTotal()">Add to Cart</button>
      </div>
    `;
    container.appendChild(div);
  });
};

const handleAddToCart = (title, price) => {
  const container = document.getElementById("cart-main-container");

  const div = document.createElement("div");
  div.classList.add("cart-info");

  div.innerHTML = `
  <p>${title.slice(0, 9)}</p>
  <h3 class="price">${price}</h3>
  `;

  // console.log(typeof(price));

  container.appendChild(div);
};

const updateTotal = () => {
  const allPrice = document.getElementsByClassName("price");

  let count_item = 0;
  let count = 0;
  for (const element of allPrice) {
    count = count + parseFloat(element.innerText);
    count_item += 1;
  }

  document.getElementById("count").innerText = count_item;
  document.getElementById("total").innerText = count.toFixed(2);
};

const single_product = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const modalContainer = document.createElement("div");

      modalContainer.innerHTML = `
      <div 
          class="modal fade" 
          id="exampleModal" 
          tabindex="-1" 
          aria-labelledby="exampleModalLabel" 
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">

              <!-- Modal Header -->
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  ${data.title}
                </h1>

                <button 
                  type="button" 
                  class="btn-close" 
                  data-bs-dismiss="modal" 
                  aria-label="Close"
                ></button>
              </div>

              <!-- Modal Body -->
              <div class="modal-body">

                <div class="text-center">

                  <img 
                    src="${data.image}" 
                    alt="${data.title}" 
                    width="200"
                    class="mb-3"
                  >

                  <h3>${data.title}</h3>

                  <p>
                    <strong>Category:</strong> 
                    ${data.category}
                  </p>

                  <p>
                    ${data.description}
                  </p>

                  <h4>
                    Price: $${data.price}
                  </h4>

                  <p>
                    <strong>Rating:</strong> 
                    ${data.rating.rate} ⭐
                  </p>

                  <p>
                    <strong>Reviews:</strong> 
                    ${data.rating.count}
                  </p>

                </div>

              </div>

              <!-- Modal Footer -->
              <div class="modal-footer">

                <button 
                  type="button" 
                  class="btn btn-secondary" 
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button 
                  type="button" 
                  class="btn btn-primary"
                   onclick="handleAddToCart('${data.title}', ${data.price}), updateTotal()"
                >
                  Add to Cart
                </button>

              </div>

            </div>
          </div>
        </div>
      `;

      document.body.appendChild(modalContainer);
      const modalElement = document.getElementById("exampleModal");
      const modal = new bootstrap.Modal(modalElement);

      modal.show();

      modalElement.addEventListener("hidden.bs.modal", () => {
        modalContainer.remove();
      });
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

loadAllProduct();
