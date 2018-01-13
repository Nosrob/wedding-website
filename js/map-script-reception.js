
'use strict';

// CHECK WINDOW RESIZE
var is_windowresize = false;
$(window).resize(function(){
	is_windowresize = true;
});


//INITIALIZE MAP
function initialize() {

	//DEFINE MAP OPTIONS
	//=======================================================================================
		var mapOptions = {
			zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: new google.maps.LatLng(45.836062, 5.975576),
		panControl: true,
			zoomControl: true,
			mapTypeControl: true,
			//scaleControl: false,
			streetViewControl: true,
			overviewMapControl: true,
		//rotateControl:true,

		};

	//CREATE NEW MAP
	//=======================================================================================
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	//MARKER ICON
	//=======================================================================================
	//var image = 'facebook30.svg';

	//ADD NEW MARKER
	//=======================================================================================
		/*var marker = new google.maps.Marker({
			position: map.getCenter(),
			map: map,
			title: 'Click to zoom',
		icon: image
		});

	var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(-12.042559, -77.027426),
			map: map,
			title: 'Click to zoom'
		});*/


	//ADD NEW MARKER WITH LABEL
	//=======================================================================================
	var marker1 = new MarkerWithLabel({
				position: new google.maps.LatLng(45.836062, 5.975576),
				draggable: false,
				raiseOnDrag: false,
				icon: ' ',
				map: map,
				labelContent: '<a hef="https://goo.gl/maps/RaPB6zbew4w"><div class="de-icon circle medium-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="de-icon-heart-8" style="color:#f0394d"></i></div></a>',
				labelAnchor: new google.maps.Point(29, 20),
				labelClass: "labels" // the CSS class for the label
			});

/*
	var marker2 = new MarkerWithLabel({
				position: new google.maps.LatLng(45.566582, 5.922898),
				draggable: false,
				raiseOnDrag: false,
				icon: ' ',
				map: map,
				labelContent: '<div class="de-icon circle small-size" style="background-color:#6a6a6a"><i class="de-icon-evernote"></i></div>',
				labelAnchor: new google.maps.Point(0, 0),
				labelClass: "labels" // the CSS class for the label
			});

	var marker3 = new MarkerWithLabel({
				position: new google.maps.LatLng(45.564573, 5.918708),
				draggable: false,
				raiseOnDrag: false,
				icon: ' ',
				map: map,
				labelContent: '<div class="de-icon circle small-size" style="background-color:#67a80e"><i class="de-icon-crown"></i></div>',
				labelAnchor: new google.maps.Point(0, 0),
				labelClass: "labels" // the CSS class for the label
			});

	var marker4 = new MarkerWithLabel({
			position: new google.maps.LatLng(45.566455, 5.921412),
				draggable: false,
				raiseOnDrag: false,
				icon: ' ',
				map: map,
				labelContent: '<div class="de-icon circle small-size" style="background-color:#c89d1b"><i class="de-icon-cafe"></i></div>',
				labelAnchor: new google.maps.Point(0, 0),
				labelClass: "labels" // the CSS class for the label
			});
	var marker5 = new MarkerWithLabel({
				position: new google.maps.LatLng(45.565205, 5.923014),
				draggable: false,
				raiseOnDrag: false,
				icon: ' ',
				map: map,
				labelContent: '<div class="de-icon circle small-size" style="background-color:#f0394d"><i class="de-icon-religious-christian"></i></div>',
				labelAnchor: new google.maps.Point(0, 0),
				labelClass: "labels" // the CSS class for the label
			});
	var marker6 = new MarkerWithLabel({
				position: new google.maps.LatLng(45.564750, 5.920899),
				draggable: false,
				raiseOnDrag: false,
				icon: ' ',
				map: map,
				labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-location"></i></div>',
				labelAnchor: new google.maps.Point(0, 0),
				labelClass: "labels" // the CSS class for the label
			});
	var marker7 = new MarkerWithLabel({
				position: new google.maps.LatLng(45.569169, 5.917477),
				draggable: false,
				raiseOnDrag: false,
				icon: ' ',
				map: map,
				labelContent: '<div class="de-icon circle small-size" style="background-color:#0d9a48"><i class="de-icon-tree"></i></div>',
				labelAnchor: new google.maps.Point(0, 0),
				labelClass: "labels" // the CSS class for the label
			});
		//marker.setMap( map );
*/

	//INFO WINDOWS
	//=======================================================================================
	var contentString = '<a href="https://goo.gl/maps/U3qfpxe2JY62"><div>'+
	'LIEU DE LA RÉCEPTION';
			'</div></a>';


	var contentString1 = '<div>'
				'WEDDING PARTY';
			'</div>';

	var infowindow = new google.maps.InfoWindow({
				content: contentString
		});

	var infowindow1 = new google.maps.InfoWindow({
				content: contentString1
		});



	//OPEN INFO WINDOWS ON LOAD
	//=======================================================================================
		infowindow.open(map,marker1);

	//ON CLICK MARKER, OPEN INFO WINDOWS
	//=======================================================================================
	google.maps.event.addListener(marker1, 'click', function() {
			infowindow.open(map,marker1);
		});

	//ON MARKER CLICK EVENTS
	//=======================================================================================
		/*google.maps.event.addListener(marker, 'click', function() {
			map.setZoom(17);
			map.setCenter(marker.getPosition());
		infowindow.open(map,marker);
		});

	google.maps.event.addListener(marker1, 'click', function() {
			map.setZoom(17);
			map.setCenter(marker.getPosition());
		infowindow1.open(map,marker1);
		});

	google.maps.event.addListener(marker2, 'click', function() {
			map.setZoom(17);
			map.setCenter(marker.getPosition());
		infowindow1.open(map,marker2);
		});*/

	//ON BOUND EVENTS AND WINDOW RESIZE
	//=======================================================================================
	google.maps.event.addListener(map, 'bounds_changed', function() {
		if (is_windowresize)
		{
			//map.setCenter(marker.getPosition());
			window.setTimeout(function() {
						map.panTo(marker1.getPosition());
				}, 500);
		}
		is_windowresize=false;
	});
}

// LOAD GMAP
google.maps.event.addDomListener(window, 'load', initialize);
