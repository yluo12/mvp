import { MapContainer, TileLayer, useMap, Marker, Popup, Map } from 'react-leaflet';
import React from 'react';

function MarkerList ({currentList}) {
  return (
    {currentList.map((school) => {
      return (
        <Marker position={[currentPosition.lat, currentPosition.lg]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>);
    })}
  );
}

export default MarkerList;