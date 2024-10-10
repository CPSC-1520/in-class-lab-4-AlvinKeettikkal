
// Enter your code below.

let newOrderForm = document.querySelector("#new-order-form");

newOrderForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  
  event.preventDefault();


  let formElements = event.target.elements;
  let orderItemName = formElements["order-item-name"].value.trim();
  let orderItemPrice = parseFloat(formElements["order-item-price"].value.trim());
  let orderSize = formElements["order-size"].value.trim();


  let isFormValid = true;


  let nameInput = formElements["order-item-name"];
  if (isValueNotEmpty(orderItemName)) {
    nameInput.classList.remove("is-invalid");
  } else {
    nameInput.classList.add("is-invalid");
    isFormValid = false;
  }

  
}


// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
      return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$'+orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}