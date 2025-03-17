
function renderDishes() {
    getFromLocalStorage();
  for (let i = 0; i < 5; i++) {
    let priceRef = dishes[i].price.toFixed(2);
    let priceRefString = priceRef.toString()
    let priceRefReplace = priceRefString.replace(".", ",")
    let maincourseRef = document.getElementById("maincourseEntry");
    maincourseRef.innerHTML += /*html*/ `
        <div class="dish_selection margin_lr">
            <div class="title_addbtn">
                <h3 class="dish_title">${dishes[i].name}</h3>
                <img onclick="addToCart(${i})" class="add_button" src="./assets/png/add_2_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
            </div>
            <p class="dish_text margin_lr">${dishes[i].description}</p>
            <p class="dish_price margin_lr">${priceRefReplace}€</p>
        </div>
        `;
  }
  for (let i = 5; i < 10; i++) {
    let priceRef = dishes[i].price.toFixed(2);
    let priceRefString = priceRef.toString()
    let priceRefReplace = priceRefString.replace(".", ",")
    let sidecourseRef = document.getElementById("sidecourseEntry");
    sidecourseRef.innerHTML += /*html*/ `
        <div class="dish_selection margin_lr">
            <div class="title_addbtn">
                <h3 class="dish_title">${dishes[i].name}</h3>
                <img onclick="addToCart(${i})" class="add_button" src="./assets/png/add_2_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
            </div>
            <p class="dish_text margin_lr">${dishes[i].description}</p>
            <p class="dish_price margin_lr">${priceRefReplace}€</p>
        </div>
        `;
  }

}

function printCart() {
    let cartEntry = document.getElementById("registerEntry");
    let totalPriceContainer = document.getElementById("totalPrice");
    let totalPrice = 0;
    let isCartEmpty = true;
    cartEntry.innerHTML = "";
    for (let i = 0; i < dishes.length; i++) {
      if (dishes[i].amount > 0) {
        isCartEmpty = false;
        let calculatedPrice = dishes[i].amount * dishes[i].price;
        totalPrice += calculatedPrice;
        let calculatedPriceToFixed = calculatedPrice.toFixed(2)
        let calculatedPriceString = calculatedPriceToFixed.toString()
        let calculatedPriceReplace = calculatedPriceString.replace(".", ",")
        cartEntry.innerHTML += /*html*/ `
        <h3 class="margin_lr">${dishes[i].name}</h3>
        <div class="price_amount margin_lr">
            <div class="amount">
                <img class="add_rmv_btn" onclick="removeOneDish(${i})" src="./assets/png/remove_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
                <p class="margin_lr">${dishes[i].amount}x</p>
                <img class="add_rmv_btn" onclick="addToCart(${i})" src="./assets/png/add_2_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
            </div>
            <div class="price">
                <p id="calculateTotal${i}">${calculatedPriceReplace}</p><p>€</p>
                <img class="add_rmv_btn" onclick="deleteDishFromCart(${i})" src="./assets/png/delete_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
            </div>
        </div>
        `;
      }
    }
  

    if (!isCartEmpty) {
      let totalWDelivery = totalPrice + 5
      let totalWDeliveryFixed = totalWDelivery.toFixed(2) 
      let totalWDeliveryString = totalWDeliveryFixed.toString()
      let totalWDeliveryReplace = totalWDeliveryString.replace(".",",")
      let totalPriceFixed = totalPrice.toFixed(2)
      let totalPriceString = totalPriceFixed.toString()
      let totalPriceReplace = totalPriceString.replace(".",",")
      totalPriceContainer.innerHTML = `
      <hr>
      <p class="checkout_summary">Zwischensumme: ${totalPriceReplace}€</p>
      <p class="checkout_summary">Lieferkosten: 5,00€ </p>
      <p class="checkout_summary_total">Gesamt: ${totalWDeliveryReplace}€</p>
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