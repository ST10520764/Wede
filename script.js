const searchBox = document.getElementById("searchBox");
const products = document.querySelectorAll(".product");

searchBox.addEventListener("keyup", () => {
  const query = searchBox.value.toLowerCase();

  products.forEach(product => {
    const text = product.innerText.toLowerCase();
    if (text.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
