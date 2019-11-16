let mymap = L.map('mapid2').setView([38.407388, -95.645999], 3.81);

	L.tileLayer('https://api.mapbox.com/styles/v1/raspberrymc/ck2wir1tm0wl11cmuit6h8ibk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFzcGJlcnJ5bWMiLCJhIjoiY2syd2ltdm5qMGZ3cjNkcGd5cTMzdm83bCJ9.7fXcH0dUoyxUluZv_EqNtQ', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
	}).addTo(mymap);

	for ( let i = 0; i < places.length; i++) {
    L.marker( [ places [i].latitude, places[i].longitude ] )
    .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
    .addTo(mymap);
  }

	
