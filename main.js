const prenoms = [
  "Fabio",
  "Romain",
  "Sylvestre",
  "Yaakov",
  "Louis",
  "Olivia",
  "Georgina",
  "Clément",
  "Cléfranchise",
]

const urlApi = "https://cataas.com/cat"
//says/text

async function randomCat() {
  const response = await fetch(`${urlApi}?json=true`)
  return `${urlApi}/${(await response.json())._id}`
}

let catUrlsPromises = []

for (let index = 0; index < prenoms.length; index++) {
  catUrlsPromises.push(randomCat())
}
const catUrls = await Promise.all(catUrlsPromises)

prenoms.forEach((prenom, pos) => {
  catUrls[pos] = catUrls[pos] + `/says/${prenom}?fontColor=white`
  const element = document.createElement("img")
  element.setAttribute("src", catUrls[pos])
  const container = document.getElementById("container")
  container.appendChild(element)
})