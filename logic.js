const mocktails = [
  {
    name: "Ljetni osvjezivac",
    desc: "Mjesavina limete, mente i gazirane vode.",
    price: 3.5,
    rating: 7.8,
  },
  {
    name: "Grozdjani bliss",
    desc: "Sok od crnog grozdja, menta i limun.",
    price: 4.0,
    rating: 6.3,
  },
  {
    name: "Narandzin snop",
    desc: "Svjezi sok od narandze, malo meda i menta.",
    price: 3.7,
    rating: 8.2,
  },
  {
    name: "Tropski raj",
    desc: "Kokosovo mlijeko, ananas i banana bez alkohola.",
    price: 7.5,
    rating: 3.7,
  },
  {
    name: "Ledeni caj",
    desc: "Fuzetea breskva, crni caj i hibiskus.",
    price: 3.6,
    rating: 9.6,
  },
  {
    name: "Ruzina magla",
    desc: "Sirup od ruze, limunada i svjeze latice.",
    price: 12.0,
    rating: 3.4,
  },
  {
    name: "Borovnicki uzitak",
    desc: "Borovnice, lavanda i limun u gaziranoj vodi.",
    price: 5.3,
    rating: 1.1,
  },
];

let numberOfDrinks = 7;
function tableMaker() {
  const tableHeadElement = document.getElementById("thead");
  const newTrHeadElement = document.createElement("tr");
  const newTdIndexElement = document.createElement("td");
  newTdIndexElement.innerHTML = "Rb.";
  newTrHeadElement.appendChild(newTdIndexElement);

  const newTdNameElement = document.createElement("td");
  newTdNameElement.innerHTML = "name";
  newTrHeadElement.appendChild(newTdNameElement);

  const newTdPriceElement = document.createElement("td");
  newTdPriceElement.innerHTML = "price";
  newTrHeadElement.appendChild(newTdPriceElement);

  const newTdRatingElement = document.createElement("td");
  newTdRatingElement.innerHTML = "rating";
  newTrHeadElement.appendChild(newTdRatingElement);

  const newTdOptionElement = document.createElement("td");
  newTdOptionElement.innerHTML = "option";
  newTrHeadElement.appendChild(newTdOptionElement);

  tableHeadElement.appendChild(newTrHeadElement);

  for (let i = 0; i < numberOfDrinks; i++) {
    const tableBodyElement = document.getElementById("tbody");
    const newTrElement = document.createElement("tr");
    const newTdNumberElement = document.createElement("td");
    newTdNumberElement.innerHTML = i + 1 + ".";
    newTrElement.appendChild(newTdNumberElement);

    const newTdNameElement = document.createElement("td");
    newTdNameElement.innerHTML = mocktails[i].name;
    newTrElement.appendChild(newTdNameElement);

    const newTdPriceElement = document.createElement("td");
    newTdPriceElement.innerHTML = mocktails[i].price;
    newTrElement.appendChild(newTdPriceElement);

    const newTdRateElement = document.createElement("td");
    newTdRateElement.innerHTML = mocktails[i].rating;
    newTrElement.appendChild(newTdRateElement);

    const newTdDeleteElement = document.createElement("td");

    const newDeleteButtonElement = document.createElement("button");
    newDeleteButtonElement.innerHTML = "Delete";
    newDeleteButtonElement.onclick = function () {
      newTrElement.remove();
    };
    newTdDeleteElement.appendChild(newDeleteButtonElement);

    newTrElement.appendChild(newTdDeleteElement);

    tableBodyElement.appendChild(newTrElement);
  }
  location.refresh();
}

function test() {}
