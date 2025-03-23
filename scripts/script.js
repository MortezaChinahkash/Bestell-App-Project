function renderDishes() {
  getFromLocalStorage();
  for (let i = 0; i < 5; i++) {
      let priceRef = dishes[i].price.toFixed(2);
      let priceRefReplace = priceRef.replace(".", ",");
      let maincourseRef = document.getElementById("maincourseEntry");
      maincourseRef.innerHTML += renderDishesHTMLTemplate(i, priceRefReplace);
  }
  renderSideDishes();
}

function renderSideDishes() {
  for (let i = 5; i < 10; i++) {
      let priceRef = dishes[i].price.toFixed(2).replace(".", ",");
      let sidecourseRef = document.getElementById("sidecourseEntry");
      sidecourseRef.innerHTML += renderSideDishesHTMLTemplate(i, priceRef);
  }
}

function printCart() {
  let cartEntry = document.getElementById("registerEntry");
  let totalPriceContainer = document.getElementById("totalPrice");
  let totalPrice = 0;
  let isCartEmpty = true;
  cartEntry.innerHTML = "";
  let respMenu = document.getElementById("respMenuContainer");
  respMenu.innerHTML = "";
  for (let i = 0; i < dishes.length; i++) {
      if (dishes[i].amount > 0) {
          isCartEmpty = false;
          let calculatedPrice = dishes[i].amount * dishes[i].price;
          totalPrice += calculatedPrice;
          let calculatedPriceEnd = calculatedPrice.toFixed(2).replace(".", ",");
          cartEntry.innerHTML += printCartHTMLTemplate(i, calculatedPriceEnd);
          respMenu.innerHTML += printCartHTMLTemplate(i, calculatedPriceEnd);
      }
  }
  cartEmpty(totalPriceContainer, totalPrice, isCartEmpty);
}


function cartEmpty(totalPriceContainer, totalPrice, isCartEmpty) {
  let totalWDeliveryCalc = totalPrice + 5;
  let totalWDelivery = totalWDeliveryCalc.toFixed(2).replace(".", ",");
  let totalPrices = totalPrice.toFixed(2).replace(".", ",");
  if (!isCartEmpty) {
      document.getElementById("respMenuCheckout").innerHTML = ""
      document.getElementById("respMenuCheckout").innerHTML += totalSumHTMLTemplate(totalPrices, totalWDelivery);
      totalPriceContainer.innerHTML = totalSumHTMLTemplate(totalPrices, totalWDelivery);
  } else {
      let placeOrderButton = document.getElementById("placeOrder");
      if (placeOrderButton) {
          placeOrderButton.classList.add("d_none");
      }
      noItemsinCart(totalPriceContainer);
      localStorage.setItem(`Check-Out`, JSON.stringify(dishes));
  }
  printCartLogoPrice(totalWDelivery)
}

function printCartLogoPrice(totalWDelivery){
  let logoPrice = document.getElementById("respMenuPrice")
  logoPrice.innerHTML = /*html*/ `
  <p class="price_next_to_logo">${totalWDelivery}€</p>
  <img onclick="openCloseRespMenu()" class="shopping_bag"src="./assets/PNG/shopping_bag_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png">
  `
}

function noItemsinCart(totalPriceContainer) {
  document.getElementById("registerEntry").innerHTML = `
  <p class="margin_lr textalign"> Zurzeit befinden sich keine Artikel in Ihrem Warenkorb!</p>`;
  totalPriceContainer.innerHTML = "";
  document.getElementById("respMenuCheckout").innerHTML = `
  <p class="margin_lr textalign"> Zurzeit befinden sich keine Artikel in Ihrem Warenkorb!</p>`;
}

function removeOneDish(i) {
  let item = dishes[i];
  if (item.amount > 0) {
      item.amount -= 1;
  }
  printCart();
  localStorage.setItem("Check-Out", JSON.stringify(dishes));
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

