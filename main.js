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

randomCat();
const id1 = await randomCat();
const id2 = await randomCat();
const id3 = await randomCat();

const element = document.createElement("img");
element.setAttribute("src", createURL(id1));
const container = document.getElementById("container");
container.appendChild(element);
