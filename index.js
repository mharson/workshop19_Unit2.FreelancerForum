const freelancerArray = [
  { id: 1, name: "Alice", startingPrice: 30, occupation: "writer" },
  { id: 2, name: "Bob", startingPrice: 50, occupation: "teacher" },
  { id: 3, name: "Carol", startingPrice: 70, occupation: "programmer" },
  { id: 4, name: "Dr. Slice", startingPrice: 25, occupation: "gardener" },
  { id: 5, name: "Dr. Pressure", startingPrice: 51, occupation: "programmer" },
  {
    id: 6,
    name: "Prof. Possibility",
    startingPrice: 43,
    occupation: "teacher",
  },
  { id: 7, name: "Prof. Prism", startingPrice: 81, occupation: "teacher" },
  { id: 8, name: "Dr. Impulse", startingPrice: 43, occupation: "teacher" },
  { id: 9, name: "Prof. Spark", startingPrice: 76, occupation: "programmer" },
  { id: 10, name: "Dr. Wire", startingPrice: 47, occupation: "teacher" },
  { id: 11, name: "Prof. Goose", startingPrice: 72, occupation: "driver" },
];
const randomArray = [];
let average = 0;
const title = document.querySelector("#title");
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
// function start() {
//   freelancerArray.forEach((freelancer) => {
//     createCard(freelancer);
//   });
// }
// start();
const addFreelancerIntervalId = setInterval(addFreelancer, 2000);
function addFreelancer() {
  let index = Math.floor(Math.random() * freelancerArray.length);
  //get a random freelancer
  const freelancer = freelancerArray[index];
  //delete freelancer randomly selected from freelancerArray
  freelancerArray.splice(index, 1);
  //calculate average of randomly selected freelancers.
  randomArray.push(freelancer);
  average =
    randomArray.reduce(
      (acc, currentItem) => acc + currentItem.startingPrice,
      0
    ) / randomArray.length;
  title.innerText = `The avg revenue of the rates was: ${average.toFixed(2)}`;
  // freelancerArray.push({name, occupation, startingPrice});
  if (freelancerArray.length < 1) {
    clearInterval(addFreelancerIntervalId);
  }
  createCard(freelancer);
}
