function productConstructor (itemCode,product,typeProduct){
    this.itemCode = itemCode;
    this.product = product;
    this.typeProduct = typeProduct;
}

const localCatto = new productCatalog ("BM_01","image/icon_twitter.svg","bookmark");

function productCatalog(data){
    this.itemCode =data.itemCode;
    this.product = data.product;
    this.typeProduct = data.typeProduct;
}

productCatalog.prototype.render = function(){
    const card = document.createElement("div");
    card.innerHTML = `
    <p class="cardtext">${this.itemCode}</p>
    <img src="${this.product}">
    <p class="cardtext">${this.typeProduct}</p>
    `
}