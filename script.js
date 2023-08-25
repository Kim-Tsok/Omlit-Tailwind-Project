let orders = document.querySelectorAll(".btn");
let cart = document.getElementById("order id");
let dropdown = document.getElementById("order numb");
let cartItems = 0;
dropdown.innerHTML = `<span class="font-bold text-lg" >${cartItems} Items</span>
<span class="text-info">Subtotal: $999</span>
<div class="card-actions">
  <button class="btn bg-[#e5b526] hover:bg-[#e59832] btn-block text-white rounded-full">View cart</button>
</div>`;
cart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
<span class="badge badge-sm indicator-item">${cartItems}</span>`;

orders.forEach((order) => {
	order.onclick = () => {
		let cartItem = cartItems++;
		cart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
<span class="badge badge-sm indicator-item">${cartItem}</span>`;
		dropdown.innerHTML = `<span class="font-bold text-lg" >${cartItem} Items</span>
<span class="text-info">Subtotal: $999</span>
<div class="card-actions">
  <button class="btn bg-[#e5b526] hover:bg-[#e59832] btn-block text-white rounded-full">View cart</button>
</div>`;
	};
});
