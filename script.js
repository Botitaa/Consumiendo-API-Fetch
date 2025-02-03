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
async function mostrarDatos() {
try {
const datos = await obtenerDatosDeAPI('https://rickandmortyapi.com/api/character');
console.log('Datos de la API:', datos);
} catch (error) {
console.error('Error general:', error);
}
}
