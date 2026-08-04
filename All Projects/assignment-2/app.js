const getAllProducts = () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
    .then((res) => res.json())
    .then((data) => {
    //   loadAllProduct(data);
    console.log(data);
    });
};

const loadAllProduct = (data) => {
  const container = document.getElementById("product-container");

  data.forEach((drink) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}" > <div class="card-body"> <h5 class="card-title">${drink.strDrink}</h5> <p class="card-text"> ${drink.strCategory} | ${drink.strAlcoholic} </p> <p class="card-text"> <strong>Glass:</strong> ${drink.strGlass} </p> <button class="btn btn-primary"> View Details </button> </div>
        `;

    container.appendChild(div);
  });
};

getAllProducts();
