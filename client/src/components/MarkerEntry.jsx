import { MapContainer, TileLayer, useMap, Marker, Popup, Map } from 'react-leaflet';
import React from 'react';


function MarkerEntry ({school}) {
  console.log([school.coords[0], school.coords[1]]);
  return (
    <Marker position={school.coords}>
      <Popup>
        {school.name} <br /> Easily customizable.
      </Popup>
    </Marker>);
}

export default MarkerEntry;