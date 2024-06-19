let search = document.getElementById("header__search-onclick");
let barsMenu = document.getElementById("header__bars-link-home");
// let bars = document.getElementById("bars");

function searchOnclick() {
  search.style.height = "45.5px";
  search.style.opacity = "1";
}
function hideBarsMenu() {
  barsMenu.style.visibility = "visible";
  barsMenu.style.height = "380px";
}

// function showBarsMenu() {
//   barsMenu.style.visibility = "visible";
// }

// document.body.addEventListener("click", (e) => {
//   console.log(e.target, bars, e.target !== barsMenu);
//   if (e.target !== barsMenu && e.target === bars) {
//     showBarsMenu();
//   } else {
//     hideBarsMenu();
//   }
// });
