const searchInput = document.getElementById("search-input");

const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {

const searchTerm = searchInput.value;

if (searchTerm.trim() === "") {

searchResults.innerHTML = "";

return;

}

// Отправляем запрос к API Википедии

fetch(`https://wikipedia.org/w/api.php?format=json&action=query&list=search&utf8=1&srsearch=${searchTerm}`)

.then(response => response.json())

.then(data => {

const results = data.query.search;

displayResults(results);

})

.catch(error => console.error(error));

});

function displayResults(results) {

searchResults.innerHTML = "";

results.forEach(result => {

const listItem = document.createElement("li");

const title = document.createElement("h2");

title.textContent = result.title;

const snippet = document.createElement("p");

snippet.innerHTML = result.snippet;

listItem.appendChild(title);

listItem.appendChild(snippet);

searchResults.appendChild(listItem);

});

}