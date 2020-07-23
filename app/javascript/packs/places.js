window.initMap = function (lat, lng) {
  let myCoords = new google.maps.LatLng(lat, lng);
  let mapOptions = {
    center: myCoords,
    zoom: 14,
  };
  let map = new google.maps.Map(document.getElementById("map"), mapOptions);
  let marker = new google.maps.Marker({
    position: myCoords,
    map: map,
  });
};

window.initMapMoveMark = function () {
  let lat = document.getElementById("place_latitude").value;
  let lng = document.getElementById("place_longitude").value;

  let myCoords = new google.maps.LatLng(lat, lng);
  let mapOptions = {
    center: myCoords,
    zoom: 14,
  };
  let map = new google.maps.Map(document.getElementById("map2"), mapOptions);
  const toggleBounce = () => {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  };
  let marker = new google.maps.Marker({
    position: myCoords,
    animation: google.maps.Animation.DROP,
    map: map,
    draggable: true,
  });
  marker.addListener("click", toggleBounce);
};
