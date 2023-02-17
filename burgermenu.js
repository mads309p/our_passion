const btn = document.querySelector(".toggle-btn");

const menu = document.querySelector(".main-menu");

function toggleMenu() {
  menu.classList.toggle("shown");

  const menuShown = menu.classList.contains("shown");

  if (menuShown) {
    console.log(menuShown);

    btn.textContent = "luk";
  } else {
    console.log(menuShown);

    btn.textContent = "menu";
  }
}

btn.addEventListener("click", toggleMenu);
