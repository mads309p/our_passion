const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");

fetch(`https://t7vin-9963.restdb.io/rest/t7vin?q={"type":"${type}"}`, {
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
  // copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".name").textContent = t7vin.name;
  // copy.querySelector(".information").textContent = t7vin.blend + t7vin.year;
  // copy.querySelector(".price_discount").textContent = t7vin.discount;
  copy.querySelector(".price").textContent = t7vin.onebottleprice;
  // copy.querySelector(".price_discount_2").textContent = t7vin.onebottleprice;
  if (!t7vin.soldout) {
    copy.querySelector(".productcontainer>p").remove();
  }
  document.querySelector(".grid_1-1-1-1").appendChild(copy);
}
