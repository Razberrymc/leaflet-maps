let mymap = L.map('mapid').setView([28.438759, -81.405563], 10.18);

	L.tileLayer('https://api.mapbox.com/styles/v1/raspberrymc/ck2wir1tm0wl11cmuit6h8ibk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFzcGJlcnJ5bWMiLCJhIjoiY2syd2ltdm5qMGZ3cjNkcGd5cTMzdm83bCJ9.7fXcH0dUoyxUluZv_EqNtQ', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
	}).addTo(mymap);

	let marker1 = L.marker([28.419790, -81.581198]).addTo(mymap);
	let marker2 = L.marker([28.474635, -81.466478]).addTo(mymap);
	let marker3 = L.marker([28.411418, -81.461694]).addTo(mymap);
	let marker4 = L.marker([28.443149, -81.468393]).addTo(mymap);

marker1.bindPopup("<b>Magic Kingdom</b>").openPopup();
marker2.bindPopup("<b>Universal Studios</b>");
marker3.bindPopup("<b>Sea World</b>");
marker4.bindPopup("<b>The Orlando Eye</b>");
