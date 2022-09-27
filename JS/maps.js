let map = L.map('map').setView([-32.9306130934675,-68.84983161396416],14);  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change', function(e){
  let coords = e.target.value.split(",");
  L.marker(coords).addTo(map)
  map.flyTo(coords, 18);
});

//geoJSON

var states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Republican': return {color: "#ff0000"};
            case 'Democrat':   return {color: "#0000ff"};
        }
    }
}).addTo(map);



//Enlazar nuestro servicio wms

var delitos = L.tileLayer.wms("http://localhost:8080/geoserver/diplomado/wms?",{
	Layers:"delitos",
	format:"image/png",
    transparent: true
}).addTo(map);

var limites = L.tileLayer.wms("http://localhost:8080/geoserver/diplomado/wms?",{
	Layers:"limites",
	format:"image/png",
    transparent: true
}).addTo(map);

var camaras= L.tileLayer.wms("http://localhost:8080/geoserver/diplomado/wms?",{
	Layers:"camaras",
	format:"image/png",
    transparent: true
}).addTo(map);

var lotes = L.tileLayer.wms("http://localhost:8080/geoserver/diplomado/wms?",{
	Layers:"lotes",
	format:"image/png",
    transparent: true
}).addTo(map);

var zonas = L.tileLayer.wms("http://localhost:8080/geoserver/diplomado/wms?",{
	Layers:"zonas",
	format:"image/png",
    transparent: true
}).addTo(map);



//Tabla de Contenidos
var baseMaps = {
	"Open Street Map": osm,};

var wms = {   
	"Lotes": lotes,
	"Zonas": zonas,
	"Delitos": delitos,
	"Camaras": camaras,
	"Limites": limites,
	
};

L.control.layers(baseMaps, wms).addTo(map);