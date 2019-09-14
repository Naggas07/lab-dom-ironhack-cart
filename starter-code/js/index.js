function deleteItem(e){
  e.target.parentNode.parentNode.remove()
}


// Que me devuelva el precio unitario de cada producto
function getPriceByProduct(itemNode){
  const productUnit = itemNode.querySelector(".quantity input").value
  const productUnitPrice = itemNode.querySelector(".price span").innerText
  return productUnit * parseInt(productUnitPrice)
  
}

// Actualiza el precio total de producto
function updatePriceByProduct(price, index){
  const productPrices = document.querySelectorAll('.total-price')[index]
  productPrices.innerText = `$${price}`

}

//Suma de todos de todo los productos
function getTotalPrice() {
  const totalProducts = Array.from(document.querySelectorAll(".product"))
  const totalPrices = totalProducts.reduce((acc, product) => acc + getPriceByProduct(product),0)
  
  totalProducts.forEach((e, i) => updatePriceByProduct(getPriceByProduct(e), i))
  document.querySelector('h2 span').innerText = totalPrices
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
