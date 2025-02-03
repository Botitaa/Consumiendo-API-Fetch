const itemList = document.getElementById("itemList");

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    data.results.forEach((item) => {
      itemList.innerHTML += `
      <li>
      <img src="${item.image}" alt="${item.name}">
      <p>Name: <strong>${item.name}</strong></p>
      <p><strong>${item.gender}</strong> | ${item.status}</p> 
      </li>`;
    });
  });

async function fetchingData() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const list = await response.json();
    console.log("Acá la lista ->", list);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

fetchingData();
