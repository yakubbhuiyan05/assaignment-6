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

  data.forEach((category) => {
    const btn = document.createElement("button");
    btn.classList = "btn btn-outline btn-sm";
    btn.innerText = category;

    btn.onclick = () => loadCategoryProducts(category);

    categoryContainer.appendChild(btn);
  });
};

// Load Products By Category
const loadCategoryProducts = async (category) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  const data = await res.json();
  displayProducts(data);
};

// Load Single Product Details
const loadProductDetails = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    showProductModal(data);
  } catch (error) {
    console.log(error);
  }
};

// Display Products
const displayProducts = (products) => {
  productContainer.innerHTML = "";

  products.forEach((product) => {
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
          <button id="" class="btn btn-outline btn-sm" onclick="loadProductDetails(${product.id})">
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

// display Product Inside Modal
const showProductModal = (product) => {
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <div class="grid md:grid-cols-2 gap-6 items-center">
      
      <div class="bg-white p-6 rounded">
        <img src="${product.image}" class="h-64 mx-auto object-contain" />
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-2">${product.title}</h2>
        <p class="text-gray-500 mb-3">${product.category}</p>

        <p class="mb-4 text-sm">
          ${product.description}
        </p>

        <div class="flex items-center justify-between">
          <span class="text-xl font-bold text-primary">
            $${product.price}
          </span>

          <span class="text-sm">
            ⭐ ${product.rating.rate} (${product.rating.count})
          </span>
        </div>
      </div>

    </div>
  `;

  document.getElementById("product_modal").showModal();
};

loadProducts();
loadCategories();
