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
document.getElementById("contactForm").addEventListener("submit", function(event) {
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Message validation
  const message = document.getElementById("message").value.trim();
  if (message === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty.";
    valid = false;
  } else {
    document.getElementById("messageError").textContent = "";
  }

  // Prevent submission if invalid
  if (!valid) {
    event.preventDefault();
  }
});
