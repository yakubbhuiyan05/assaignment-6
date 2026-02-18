// Select Containers
const productContainer = document.getElementById("product-container");
const categoryContainer = document.getElementById("category-container");


// Load All Products
const loadProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  displayProducts(data);
};

// Load Categories
const loadCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();

  data.forEach(category => {
    const btn = document.createElement("button");
    btn.classList = "btn btn-outline btn-sm";
    btn.innerText = category;

    btn.onclick = () => loadCategoryProducts(category);

    categoryContainer.appendChild(btn);
  });
};


// Display Products
const displayProducts = (products) => {
  productContainer.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList = "card bg-base-100 shadow-xl";

    card.innerHTML = `
      <figure class="bg-white p-6 h-64 flex items-center justify-center">
        <img src="${product.image}" 
             class="max-h-full object-contain" />
      </figure>

      <div class="card-body">
        <h2 class="card-title text-base">
          ${product.title.slice(0, 40)}...
        </h2>

        <p class="font-bold text-lg">$${product.price}</p>

        <div class="card-actions justify-between">
          <button class="btn btn-outline btn-sm">
            Details
          </button>
          <button class="btn btn-primary btn-sm">
            Add
          </button>
        </div>
      </div>
    `;

    productContainer.appendChild(card);
  });
};

// Load Products By Category
const loadCategoryProducts = async (category) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await res.json();
  displayProducts(data);
};


loadProducts();
loadCategories();
