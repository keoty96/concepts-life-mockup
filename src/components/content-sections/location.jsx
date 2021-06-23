import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "./Link";

const styles = {
  width: "100vw",
  height: "50vh",
};

const Location = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-80, 8.5],
        zoom: 7,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div className="map-container" id="#store">
      <div className="map-title map-text">
        <p>Found in over XXXX stores</p>
      </div>
      <Link
        classname="link-button map-text"
        link="https://www.conceptslife.com/encuentranos/"
        text="find a store near you"
      />

      <div ref={(el) => (mapContainer.current = el)} style={styles} />
    </div>
  );
};

export default Location;
