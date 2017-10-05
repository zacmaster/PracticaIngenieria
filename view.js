function bootstrap(){
	//Ubicación de la UNGS.
	var ungsLocation = [-34.5221554, -58.7000067];
	//Creación del componente mapa de Leaflet. L es una variable de Leaflet
	//zoom 15
	var map = L.map('map').setView(ungsLocation, 15);

	//Agregamos los Layers de OpenStreetMap.
	var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);


}

$(bootstrap);
