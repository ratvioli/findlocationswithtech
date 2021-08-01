const search = document.getElementById('search');
const matchList = document.getElementById ('list');

const searchTown = searchText => {
    var zipCode = searchText
        // if zipCode.length between(x, 3, 5) {

        // }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://app.zipcodebase.com/api/v1/search?apikey=' + '704e3e80-f262-11eb-9b72-6d432c880f62' + '&country=US&codes=' + zipCode, 'true')
    xhr.send();
    xhr.onload = function()
    {
        var data = JSON.parse(xhr.responseText)
        var results = document.createElement("p")
        var url = zipCode
        var data = JSON.parse(xhr.responseText);
        var result = data.results;
        var location  = result[Object.keys(result)[0]]
        results.innerHTML = location[0].city
        matchList.appendChild(results)
        console.log(data)
    } 

 };


search.addEventListener('input', () => searchTown(search.value));
