const search = document.getElementById('search');
const matchList = document.getElementById ('list');

const searchTown = searchText => {
    var zipCode = searchText
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://app.zipcodebase.com/api/v1/search?apikey=' + '0236f9d0-f277-11eb-82a2-85426b662485' + '&country=US&codes=' + zipCode, 'true')
    xhr.send();
    xhr.onload = function()
    {
        matchList.innerHTML =  "";
        var data = JSON.parse(xhr.responseText)
        var results = document.createElement("h3")
        var url = zipCode
        var data = JSON.parse(xhr.responseText);
        var result = data.results;
        var location  = result[Object.keys(result)[0]]
        results.innerHTML = 'Location Name: ' + location[0].city
        matchList.appendChild(results)
        
        var province = document.createElement("h3")
        province.innerHTML = 'County: ' + location[0].province
        matchList.appendChild(province)

        var state_en = document.createElement("h3")
        state_en.innerHTML = 'State: ' + location[0].state_en
        matchList.appendChild(state_en)

        var latitude = document.createElement("h3")
        latitude.innerHTML = 'Latitude: ' + location[0].latitude
        matchList.appendChild(latitude)

        var longitude = document.createElement("h3")
        longitude.innerHTML = 'Longitude: ' + location[0].longitude
        matchList.appendChild(longitude)






    } 

 };


search.addEventListener('input', () => searchTown(search.value));
