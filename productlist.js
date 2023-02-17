fetch(" https://t7vin-9963.restdb.io/rest/t7vin", {
  method: "get",
  headers: {
    "x-apikey": "63ea0132478852088da6813e",
  },
})
  .then((e) => e.json())
  .then(showWines);

function showWines(wines) {
  console.log(wines);
  wines.forEach(showWine);
}

function showWine(t7vin) {
  const template = document.querySelector("#templatevin").content;
  const copy = template.cloneNode(true);
  //copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".name").textContent = t7vin.name;
  copy.querySelector(".information").textContent = t7vin.blend + t7vin.year;
  copy.querySelector(".price").textContent = t7vin.sixbottleprice + " DKK" + t7vin.onebottleprice + " DKK";
  document.querySelector(".grid_1-1-1-1").appendChild(copy);
}

// function showProduct(product) {
//   document.querySelector("h2").textContent = product.category;
//   //fang template
//   const template = document.querySelector("#productTemplate").content;
//   //lav en kopi
//   const copy = template.cloneNode(true);
//   //ændre indhold
//   copy.querySelector(".product h4").textContent = product.productdisplayname;
//   copy.querySelector(".product .brand").textContent = product.brandname;
//   copy.querySelector(".product .type").textContent = product.articletype;
//   copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
//   copy.querySelector(".product .price").textContent = product.price;
//   copy.querySelector(".product .price_discount").textContent = product.price;

//   let newPrice = product.price - (product.price * product.discount) / 100;
//   newPrice = newPrice.toFixed(0);

//   if (product.soldout) {
//     //produktet er udsolgt
//     copy.querySelector("article").classList.add("soldOut");
//   }
//   if (product.discount) {
//     //produktet er sat ned
//     copy.querySelector("article").classList.add("onSale");
//     copy.querySelector(".procent").textContent = product.discount;
//     copy.querySelector(".price").textContent = newPrice;
//   }

//   copy.querySelector(".read_more").setAttribute("href", `product.html?id=${product.id}`);

//   //appende
//   document.querySelector(".template").appendChild(copy);
// }
