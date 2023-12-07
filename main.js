const urlApi = "https://cataas.com/cat/";

async function randomCat() {
  const response = await fetch("https://cataas.com/cat?json=true");
  return urlApi + (await response.json())._id;
}

let catUrlsPromises = [];

for (let index = 0; index < 3; index++) {
  catUrlsPromises.push(randomCat());
}
const catUrls = await Promise.all(catUrlsPromises);

catUrls.forEach(catUrl => {
  const element = document.createElement("img");
  element.setAttribute("src", catUrl);
  const container = document.getElementById("container");
  container.appendChild(element);
});



