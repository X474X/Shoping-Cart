const cardWrapper = document.querySelector(".card-wrapper");
const circle = document.querySelector(".circle");
const productNumber = document.querySelector(".cart-number");
const cart = document.querySelector(".cart");
const shoppingList = document.querySelector(".shopping-list");
const close = document.querySelector(".close");
const list = document.querySelector("ul");
const order = document.querySelector(".order");

let listProduct = [];

const model = [
  {
    image: "./Images/IMG 1.jpg",
    name: "Kit Baie Igiena Personala",
    price: "Pret: 300$",
  },
  {
    image: "./Images/IMG2.jpeg",
    name: "Papuci de plaja - Dama",
    price: "Pret: 50$",
  },
  {
    image: "./Images/IMG3.jpeg",
    name: "Birou Stahder",
    price: "Pret: 70$",
  },
  {
    image: "./Images/IMG4.jpeg",
    name: "Echipament pentru a incepe acasa",
    price: "Pret: 35$",
  },
  {
    image: "./Images/IMG5.jpeg",
    name: "Pack pentru avion ",
    price: "Pret: 256$",
  },
  {
    image: "./Images/IMG6.jpeg",
    name: "Smartwatches",
    price: "Pret: 39.99$",
  },
  {
    image: "./Images/IMG7.jpeg",
    name: "da-i viata camerei tale",
    price: "Pret: 24.99$",
  },
  {
    image: "./Images/IMG8.jpeg",
    name: "Unelte de ziua tatalui",
    price: "Pret: 194.99$",
  },
  {
    image: "./Images/IMG9.jpeg",
    name: "Cadou pentru femei",
    price: "Pret: 5$",
  },
];

for (let i = 0; i < model.length; i++) {
  const div = document.createElement("div");
  div.classList.add("card");
  const image = document.createElement("img");
  image.classList.add("card-image");
  image.src = model[i].image;
  div.appendChild(image);
  cardWrapper.appendChild(div);
  const title = document.createElement("h3");
  title.innerHTML = model[i].name;
  div.appendChild(title);
  const span = document.createElement("span");
  span.innerHTML = model[i].price;
  div.appendChild(span);
  const button = document.createElement("button");
  button.addEventListener("click", () => {
    const li = document.createElement("li");
    const image = document.createElement("img");
    const h4 = document.createElement("h4");
    const span = document.createElement("span");
    span.addEventListener("click", () => {
      li.remove();
      productNumber.innerHTML = Number(productNumber.innerHTML) - 1;
      if (Number(productNumber.innerHTML) === 0) {
        circle.style.visibility = "hidden";
      }
    });

    image.src = model[i].image;
    h4.innerHTML = model[i].name;
    span.innerHTML = "✖";
    li.appendChild(image);
    li.appendChild(h4);
    li.appendChild(span);
    list.appendChild(li);

    circle.style.visibility = "visible";
    productNumber.innerHTML = Number(productNumber.innerHTML) + 1;
  });

  button.innerHTML = "Adauga in cos";
  div.appendChild(button);
}

cart.addEventListener("click", () => {
  shoppingList.style.right = "0px";
});

close.addEventListener("click", () => {
  shoppingList.style.right = "-280px";
});

order.addEventListener("click", () => {
  alert("Your order has been placed");
});
