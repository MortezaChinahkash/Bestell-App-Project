function renderDishes() {
  for (let i = 0; i < dishes.length; i++) {
    let priceRef = dishes[i].price.toFixed(2);
    let maincourseRef = document.getElementById("maincourseEntry");
    maincourseRef.innerHTML += /*html*/ `
        <div class="dish_selection margin_lr">
            <div class="title_addbtn">
                <h3 class="dish_title">${dishes[i].name}</h3>
                <button onclick="addToCart(${i})" class="add_button">+</button>
            </div>
            <p class="dish_text margin_lr">${dishes[i].description}</p>
            <p class="dish_price margin_lr">${priceRef}€</p>
        </div>
        `;
  }
  for (let i = 0; i < sidedishes.length; i++) {
    let priceRef = sidedishes[i].price.toFixed(2);
    let sidecourseRef = document.getElementById("sidecourseEntry");
    sidecourseRef.innerHTML += /*html*/ `
        <div class="dish_selection margin_lr">
            <div class="title_addbtn">
                <h3 class="dish_title">${sidedishes[i].name}</h3>
                <button onclick="addToCart(${i})" class="add_button">+</button>
            </div>
            <p class="dish_text margin_lr">${sidedishes[i].description}</p>
            <p class="dish_price margin_lr">${priceRef}€</p>
        </div>
        `;
  }
}
function addToCart(i) {
  let item = dishes[i];

  if (!item.amount) {
    item.amount = 0;
  }
  item.amount += 1;

  printCart();
}

function printCart() {
  let cartEntry = document.getElementById("registerEntry");
  cartEntry.innerHTML = "";

  for (let i = 0; i < dishes.length; i++) {
    if (dishes[i].amount > 0) {
    let calculatedPrice = dishes[i].amount * dishes[i].price;
    cartEntry.innerHTML += /*html*/ `
    <h3 class="margin_lr">${dishes[i].name}</h3>
    <div class="price_amount margin_lr">
        <div class="amount">
            <button>-</button>
            <p class="margin_lr">${dishes[i].amount}x</p>
            <button onclick="addToCart(${i})">+</button>
        </div>
        <div class="price">
            <p>${calculatedPrice.toFixed(2)}€</p>
            <button>DEL</button>
        </div>
    </div>
      `;
    }
  }
}
