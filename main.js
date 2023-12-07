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
  "Toto"
]

const urlApi = "https://cataas.com/cat"

async function randomCat() {
  const response = await fetch(`${urlApi}?json=true`)
  return `${urlApi}/${(await response.json())._id}`
}

function createImg(url) {
  const element = document.createElement("img")
  element.setAttribute("src", url)
  const container = document.getElementById("container")
  container.appendChild(element)
}

const catUrls = await Promise.all(prenoms.map(() => randomCat()))
  
prenoms.forEach((prenom, pos) => {
  const finalUrl = catUrls[pos] + `/says/${prenom}?fontColor=white`
  createImg(finalUrl)
})