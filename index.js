//STATE
const freelancerArray = [
  {
    name: "Alice",
    occupation: "writer",
    startingPrice: "$30",
  },
  {
    name: "Bob",
    occupation: "teacher",
    startingPrice: "$50",
  },
  {
    name: "Carol",
    occupation: "programmer",
    startingPrice: "$70",
  },
];

//function for CardHeader
function createCardHeader(name) {
  const cardHeader = document.createElement("div");
  const h1 = document.createElement("h1");
  const text = document.createTextNode(name);

  cardHeader.className = "cardHeader";
  h1.append(text);
  cardHeader.appendChild(h1);

  return cardHeader;
}

//function for CardBody
function createCardBody(occupation) {
  const cardBody = document.createElement("div");
  const text = document.createTextNode(occupation);

  cardBody.className = "cardBody";
  cardBody.appendChild(text);

  return cardBody;
}

//function for CardFooter
function createCardFooter(startingPrice) {
  const cardFooter = document.createElement("div");
  const text = document.createTextNode(startingPrice);

  cardFooter.className = "cardfooter";
  cardFooter.appendChild(text);

  return cardFooter;
}

//create functions for each part of the body
function createCard(freelancer) {
  const card = document.createElement("div");
  card.className = "card";

  const cardHeader = createCardHeader(freelancer.name);
  const cardBody = createCardBody(freelancer.occupation);
  const cardFooter = createCardFooter(freelancer.startingPrice);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  const grid = document.querySelector(".grid");
  grid.appendChild(card);
}

//create a loop for Each

function start() {
  freelancerArray.forEach((freelancer) => {
    createCard(freelancer);
  });
}
start();
