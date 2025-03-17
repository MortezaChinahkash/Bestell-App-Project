function renderDishes() {
    getFromLocalStorage();
  for (let i = 0; i < 5; i++) {
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
  for (let i = 5; i < 10; i++) {
    let priceRef = dishes[i].price.toFixed(2);
    let sidecourseRef = document.getElementById("sidecourseEntry");
    sidecourseRef.innerHTML += /*html*/ `
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

}

function printCart() {

    let cartEntry = document.getElementById("registerEntry");
    let totalPriceContainer = document.getElementById("totalPrice");
    let totalPrice = 0;
    let totalWDelivery = totalPrice + 5; 
    let isCartEmpty = true;
    cartEntry.innerHTML = "";
    for (let i = 0; i < dishes.length; i++) {
        if (dishes[i].amount > 0) {
            isCartEmpty = false;
            let calculatedPrice = dishes[i].amount * dishes[i].price;
            totalPrice += calculatedPrice;
            cartEntry.innerHTML += /*html*/ `
            <h3 class="margin_lr">${dishes[i].name}</h3>
            <div class="price_amount margin_lr">
                <div class="amount">
                    <button onclick="removeOneDish(${i})">-</button>
                    <p class="margin_lr">${dishes[i].amount}x</p>
                    <button onclick="addToCart(${i})">+</button>
                </div>
                <div class="price">
                    <p id="calculateTotal${i}">${calculatedPrice.toFixed(2)}</p><p>€</p>
                    <button onclick="deleteDishFromCart(${i})">DEL</button>
                </div>
            </div>
            <hr>
            `;
        }
        
    }

    if (!isCartEmpty) {
        totalPriceContainer.innerHTML = `
        <p>Zwischensumme: ${totalPrice.toFixed(2)}€</p>
        <p>Lieferkosten: 5,00€ </p>
        <p>Gesamt: ${totalWDelivery.toFixed(2)}€</p>
        `;
    } else {
        totalPriceContainer.innerHTML = "";
    }
    localStorage.setItem(`Check-Out`, JSON.stringify(dishes));
}

function removeOneDish(i) {
    let item = dishes[i];
    if (!item.amount) {
      item.amount > 0;
    }
    item.amount -= 1;
    printCart();
    localStorage.setItem(`Check-Out`, JSON.stringify(dishes));

}
function deleteDishFromCart(i) {
        let item = dishes[i];
        item.amount = 0;
        printCart();
        localStorage.setItem(`Check-Out`, JSON.stringify(dishes));

}
function addToCart(i) {
    let item = dishes[i];
    if (!item.amount) {
      item.amount = 0;
    }
    item.amount += 1;
    printCart();
    localStorage.setItem(`Check-Out`, JSON.stringify(dishes));

  }
function getFromLocalStorage() {
    let storedDishes = JSON.parse(localStorage.getItem("Check-Out")) || [];
  
  if (storedDishes.length > 0) {
    dishes = storedDishes;
  }
  printCart();
}  