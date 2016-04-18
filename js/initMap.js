  function initMap() {
	    var myLatLng = {lat: 45.464075, lng: 9.191127};
 
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 45.4665, lng: 9.184},
          zoom: 3,
          disableDefaultUI: true
        });
        
        
      var contentString = '<center>I am not an Athenian or a Greek citizen, but a citizen of the world'+
      '<br> - Socrate - <br></center>';
      
      var infowindow = new google.maps.InfoWindow({
                                                  content: contentString
                                                  });

        
        map.set('styles',[{"featureType":"landscape","stylers":[{"visibility":"simplified"},{"color":"#2b3f57"},{"weight":0.1}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"weight":0.4},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"weight":1.3},{"color":"#FFFFFF"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":3}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":1.1}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":0.4}]},{},{"featureType":"road.highway","elementType":"labels","stylers":[{"weight":0.8},{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"color":"#ffffff"},{"weight":0.7}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"color":"#6c5b7b"}]},{"featureType":"water","stylers":[{"color":"#f3b191"}]},{"featureType":"transit.line","stylers":[{"visibility":"on"}]}]);

      var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
                                          label: 'I'
  });
      marker.addListener('click', function() {
                         infowindow.open(map, marker);
                         });
      
       google.maps.event.addListener(marker, 'click', function() {
   map.setCenter(marker.getPosition());
});

      map.setOptions({draggable: true, zoomControl: true, scrollwheel: false, disableDoubleClickZoom: false});

      
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(marker.getPosition());
});

 map.addListener('zoom_changed', function() {
    map.setCenter(marker.getPosition());
  });
  
      
      };
