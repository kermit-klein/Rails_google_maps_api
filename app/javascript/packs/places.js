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

  if (!lat || !lng) {
    lat = 59.334591;
    lng = 18.06324;
    document.getElementById("place_latitude").value = lat;
    document.getElementById("place_longitude").value = lng;
  }

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

  const refreshMarker = () => {
    let lat = document.getElementById("place_latitude").value;
    let lng = document.getElementById("place_longitude").value;
    let myCoords = new google.maps.LatLng(lat, lng);
    marker.setPosition(myCoords);
    map.setCenter(marker.getPosition());
  };

  document.getElementById("place_latitude").onchange = refreshMarker;
  document.getElementById("place_longitude").onchange = refreshMarker;

  marker.addListener("drag", () => {
    let latlng = marker.getPosition();
    let newlat = Math.round(latlng.lat() * 1000000) / 1000000;
    let newlng = Math.round(latlng.lng() * 1000000) / 1000000;
    document.getElementById("place_latitude").value = newlat;
    document.getElementById("place_longitude").value = newlng;
  });

  marker.addListener("dragend", () => {
    map.panTo(marker.getPosition());
  });

  const refreshPlace = () => {
    const address = document.getElementById("place_name").value;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        let myCoords = results[0].geometry.location;
        marker.setPosition(myCoords);
        map.setCenter(marker.getPosition());
        document.getElementById("place_latitude").value = myCoords.lat();
        document.getElementById("place_longitude").value = myCoords.lng();
      } else {
        console.log(status);
      }
    });
  };

  document.getElementById("place_name").onchange = refreshPlace;
};
