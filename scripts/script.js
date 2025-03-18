function renderDishes() {
    getFromLocalStorage();
  for (let i = 0; i < 5; i++) {
    let priceRef = dishes[i].price.toFixed(2);
    let priceRefString = priceRef.toString()
    let priceRefReplace = priceRefString.replace(".", ",")
    let maincourseRef = document.getElementById("maincourseEntry");
    maincourseRef.innerHTML += renderDishesHTMLTemplate(i, priceRefReplace)
  }
    renderSideDishes()
}

function renderSideDishes(){
  for (let i = 5; i < 10; i++) {
    let priceRef = dishes[i].price.toFixed(2);
    let priceRefString = priceRef.toString()
    let priceRefReplace = priceRefString.replace(".", ",")
    let sidecourseRef = document.getElementById("sidecourseEntry");
    sidecourseRef.innerHTML += renderSideDishesHTMLTemplate(i, priceRefReplace)
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
        cartEntry.innerHTML +=printCartHTMLTemplate(i, calculatedPriceReplace)
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
      totalPriceContainer.innerHTML = totalSumHTMLTemplate(totalPriceReplace, totalWDeliveryReplace) 
    } else {
    let placeOrderButton = document.getElementById("placeOrder");
    if (placeOrderButton) {
    placeOrderButton.classList.add("d_none");
}
      totalPriceContainer.innerHTML = /*html*/ `
      <p class="margin_lr textalign"> Zurzeit befinden sich keine Artikel in Ihrem Warenkorb!</p>`;
    }
    localStorage.setItem(`Check-Out`, JSON.stringify(dishes));
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