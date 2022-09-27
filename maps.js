//crear un objeto mapa
var map = L.map('map').setView([-12.121266,-77.029775],15);

//Enlazar el OpenStreetMap
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

//Enlazar nuestro servicio wms
var zonas = L.tileLayer.wms("http://localhost:8080/geoserver/diplomado/wms?",{
	Layers:"zonas",
	format:"image/png",
    transparent: true
}).addTo(map);

var delitos = L.tileLayer.wms("http://localhost:8080/geoserver/diplomado/wms?",{
	Layers:"delitos",
	format:"image/png",
    transparent: true
}).addTo(map);

//Tabla de Contenidos
var baseMaps = {
	"Open Street Map": osm,};

var wms = {   
	"Zonas": zonas,
	"Delitos": delitos,};

L.control.layers(baseMaps, wms).addTo(map);