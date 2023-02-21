fetch("")
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
  //appende
  document.querySelector("forside_grid_1-1-1").appendChild(clone);
}
