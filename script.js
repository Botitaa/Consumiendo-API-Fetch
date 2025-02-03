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
