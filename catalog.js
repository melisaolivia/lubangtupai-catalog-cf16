document.addEventListener("DOMContentLoaded", function (event) {

    function Artist(name, instagram, twitter, pixiv){
        this.name = name;
        this.instagram = instagram;
        this.twitter = twitter;
        this.pixiv = pixiv;
    }
    
    
    function SocialLinksComponent(data) {
      this.name = data.name;
      this.instagram = data.instagram;
      this.twitter = data.twitter;
      this.pixiv = data.pixiv;
    }
    
    SocialLinksComponent.prototype.render = function() {
      var componentEl = document.createElement('div');
      componentEl.innerHTML = `
        <hr class="horizontal-lined">
        <p class="Artist Name">Artist : ${this.name}</p>
        <p>Artist Info : </p>`
    
        if (this.instagram) {
        componentEl.innerHTML += `
        <a href="https://www.instagram.com/${this.instagram}" target="_blank"><img src= "image/icon_instagram.svg">${this.instagram}</a>
        `}
        if (this.twitter) {
        componentEl.innerHTML += `
        <a href="https://twitter.com/${this.twitter}" target="_blank"><img src= "image/icon_twitter.svg">${this.twitter}</a>
        `}
        if (this.pixiv) {
        componentEl.innerHTML += `
        <a href="https://www.pixiv.net/${this.pixiv}" target="_blank"><img src= "image/icon_pixiv.svg">${this.pixiv}</a>
        `}
      componentEl.classList.add('sosmedLink');
      return componentEl;
    };
    ////////////
    function productConstructor (itemCode,product,typeProduct){
        this.itemCode = itemCode;
        this.product = product;
        this.typeProduct = typeProduct;
    }
    
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
        card.classList.add("productCatalog");
        return card;
    }

    ////////////////////////////////////////////////////////
    const localCatto = new Artist("@localcatto","localcatto","localcatto","localcatto");
    const cattoLink = new SocialLinksComponent(localCatto);
    const cattoSosmed = cattoLink.render();
    const CattoBM1 = new productConstructor ("BM_01","image/icon_twitter.svg","bookmark");
    const CattoBookMark1 = new productCatalog(CattoBM1);

    
    const localCattoCatalog = this.getElementsByClassName("localCattoCatalog")
    localCattoCatalog.appendChild(cattoSosmed);
    localCattoCatalog.appendChild(CattoBookMark1);
    ///////
    const pastelwortell = new Artist ("@pastelwortell","pastelwortell","pastelwortell");
    const pastelwortellLink = new SocialLinksComponent(pastelwortell);
    const pastelwortellSosmed = pastelwortellLink.render();
    document.body.appendChild(pastelwortellSosmed);
    
})

