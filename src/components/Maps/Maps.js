import React, { useEffect } from "react";

function Map({ location }) {
  useEffect(() => {
    // Load the Google Maps JavaScript API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC-S0PaULaBGDlM4drd154Wu72CLWnh84E`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    // Wait for the API to load
    script.onload = () => {
      // Create a map
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 15,
      });

      // Add a marker to the map
      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
      });
      console.log(marker);
    };
  }, [location]);

  return <div id="map" style={{ height: "400px", width: "100vw" }} />;
}

export default Map;
