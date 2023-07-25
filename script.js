const cardWrapper = document.querySelector(".card-wrapper");

const model = [
  {
    image: "./Images/IMG 1.jpg",
    name: "Periuta",
    price: "Pret: 300$",
  },
  {
    image: "./Images/IMG2.jpeg",
    name: "Name 2",
    price: "Pret: 50$",
  },
  {
    image: "./Images/IMG3.jpeg",
    name: "Name 3",
    price: "Pret: 70$",
  },
  {
    image: "./Images/IMG4.jpeg",
    name: "Name 4",
    price: "Pret: 35$",
  },
  {
    image: "./Images/IMG5.jpeg",
    name: "Name 5",
    price: "Pret: 256$",
  },
  {
    image: "./Images/IMG6.jpeg",
    name: "Name 6",
    price: "Pret: 39.99$",
  },
  {
    image: "./Images/IMG7.jpeg",
    name: "Name 7",
    price: "Pret: 24.99$",
  },
  {
    image: "./Images/IMG8.jpeg",
    name: "Name 8",
    price: "Pret: 194.99$",
  },
  {
    image: "./Images/IMG9.jpeg",
    name: "Name 9",
    price: "Pret: 5$",
  },
];

for (let i = 0; i < model.length; i++) {
  const div = document.createElement("div");
  div.classList.add("card");
  const image = document.createElement("img");
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
  button.innerHTML = "Adauga in cos";
  div.appendChild(button);
}
