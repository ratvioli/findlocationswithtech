const search = document.getElementById('search');
const matchList = document.getElementById ('list');

const searchTown = searchText => {
    var zipCode = searchText
        if(zipCode.length < 3)
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://app.zipcodebase.com/api/v1/search?apikey=' + 'api' + 'country=US&codes=' + zipCode, 'true')
    xhr.send();
    xhr.onload = function()
    {
        var data = JSON.parse(xhr.responseText)
        var results = document.createElement("p")
        results.innerHTML = data.results.[zipCode][0].city
        matchList.appendChild(results)
        console.log(data)
    } 

 };


search.addEventListener('input', () => searchTown(search.value));
