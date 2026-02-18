// const showProductModal = (product) => {
//   const modalContent = document.getElementById("modal-content");

//   modalContent.innerHTML = `
//     <div class="grid md:grid-cols-2 gap-6 items-center">
      
//       <div class="bg-white p-6 rounded">
//         <img src="${product.image}" class="h-64 mx-auto object-contain" />
//       </div>

//       <div>
//         <h2 class="text-2xl font-bold mb-2">${product.title}</h2>
//         <p class="text-gray-500 mb-3">${product.category}</p>

//         <p class="mb-4 text-sm">
//           ${product.description}
//         </p>

//         <div class="flex items-center justify-between">
//           <span class="text-xl font-bold text-primary">
//             $${product.price}
//           </span>

//           <span class="text-sm">
//             ⭐ ${product.rating.rate} (${product.rating.count})
//           </span>
//         </div>
//       </div>

//     </div>
//   `;