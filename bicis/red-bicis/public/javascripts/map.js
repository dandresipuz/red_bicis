var mymap = L.map('main_map').setView([4.579754, -74.239717], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
}).addTo(mymap);

// var marker = L.marker([4.579754, -74.239717]).addTo(mymap);
// var marker = L.marker([4.579754, -74.249917]).addTo(mymap);
// var marker = L.marker([4.579754, -74.259717]).addTo(mymap);

$.ajax({
    dataType: "json",
    url: "api/v1/bicicletas",
    success: function (result) {
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.modelo}).addTo(mymap);
        });
    }
});