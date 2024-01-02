const url = "https://fakestoreapi.com/products";
const productsDiv = document.getElementById("products-container");
const spinner = document.getElementById("spinner");
async function getProducts() {
  console.log("fetching!");
  const res = await fetch(url);
  console.log("getting json!");
  const data = await res.json();

  console.log("rendering item on screen...");
  data.forEach((product) => {
    productsDiv.innerHTML += `<div class="card" >
                                    <h3>${product.title}</h3>
                                    <h4>${product.price}</h4>
                                    <img width="80px" src="${product.image}" />
                             </div>`;
  });

  hideSpinner();
}

console.log("getting products from server...");
getProducts();
console.log("finished getting products");
const number = 2;
const otherNumber = 10;
console.log(number + otherNumber);
console.log("done!");

function hideSpinner() {
  spinner.style.display = "none";
}
