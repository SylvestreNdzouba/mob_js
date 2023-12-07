const urlApi = "https://cataas.com/cat/";

async function randomCat() {
  const response = await fetch("https://cataas.com/cat?json=true");
  const data = await response.json();
  console.log(data);
  return data._id;
}

function createURL(id) {
  return urlApi + id;
}

let catIds = [];

for (let index = 0; index < 3; index++) {
  catIds.push(randomCat());
}
catIds = await Promise.all(catIds);

catIds.forEach(catId => {
  const element = document.createElement("img");
  element.setAttribute("src", createURL(catId));
  const container = document.getElementById("container");
  container.appendChild(element);
});



