const getProductId = id => {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  inputField.value = "";
  return inputValue;
};

const addProducts = () => {
  const productName = getProductId("name-field");
  const productQuantity = getProductId("quantity-field");
  console.log(productName, productQuantity);
};
