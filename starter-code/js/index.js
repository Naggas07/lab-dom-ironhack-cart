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
  const div = document.createElement('div')
  div.classList.add('quantity')
  const label = document.createElement('label')
  label.innerText('QTY')
  const input = document.createElement('input')
  input.setAttribute("type", "number")
  .setAttribute("value","0")
  .setAttribute("min","0")
  div.appendChild(label)
  div.appendChild(input)

  return div

}

function createDeleteButton(){
  const div = document.createElement('div')
  div.classList.add('delete')

  const button = document.createElement('button')
  button.classList.add('btn-delete', 'btn')
  button.innerText('Delete')
  div.appendChild(button)

  return div
}

function createQuantityNode(){
  const div = document.createElement('div')
  div.classList.add('total-price')
  div.innerText('0')
  return div
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

  const divName = document.createElement('div')
  divName.classList.add('name')
  divName.innerText(itemName)

  const divPrice = document.createElement('div')
  divPrice.classList.add('price')
  divPrice.innerHTML('$<span>' + itemUnitPrice + '</span>')

  const divContainer = document.querySelector('.container')
  const divProduct = document.createElement('div')
  divProduct.classList.add('product')
  divProduct.appendChild(divName)
  divProduct.appendChild(divPrice)
  divProduct.appendChild(createQuantityInput())
  divProduct.appendChild(createQuantityNode())
  divProduct.appendChild(createDeleteButton())
  divContainer.appendChild(divProduct)
}

function createNewItem(){
  const name = document.getElementById('nameInput').value
  const price = document.getElementById('priceInput').value
  createNewItemRow(name,price)
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
