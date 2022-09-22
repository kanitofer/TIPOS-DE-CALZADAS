//crear un objeto mapa
var map = L.map('map').setView([-12.121266,-77.029775],5);

//Enlazar el OpenStreetMap
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

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



