fetch("") //jeg skal bruge et link til at fetche, men jeg kan ikke få lov til at fedte rundt i min url.
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  //fanger min template
  const template = document.querySelector("template").content;
  //her vil jeg gerne clone / lave copy
  const clone = template.cloneNode(true);
  //nu vil jeg have mulighed for at ændre mit indhold
  //jeg skal kunne ændre mit indhold her, men det kræver at der er et link. Hvilket link skal jeg have?
  //appende
  document.querySelector("forside_grid_1-1-1").appendChild(clone);
}
