fetch("https://t7vin-9963.restdb.io/rest/t7vin/63ea39a0aa860750000548a4", {
  method: "get",
  headers: {
    "x-apikey": "63ea0132478852088da6813e",
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".info_box .info").textContent = product.blend;
  document.querySelector(".info_box .year").textContent = product.year;
  document.querySelector(".info_box .alkohol").textContent = product.percentage2;
  document.querySelector(".info_box .price").textContent = product.onebottleprice;
  document.querySelector(".information .type").textContent = product.type;
  document.querySelector(".information .year").textContent = product.year;
  document.querySelector(".information .indhold").textContent = product.blend;
  document.querySelector(".information .alkohol").textContent = product.percentage2;
  document.querySelector(".information .land").textContent = product.country;
}
