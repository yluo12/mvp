import { MapContainer, TileLayer, useMap, Marker, Popup, Map } from 'react-leaflet';
import React from 'react';
import MarkerEntry from './MarkerEntry.jsx';

function MarkerList ({currentList}) {
  return (
    <>
      {currentList.map((school) => {
        return <MarkerEntry school={school} key={school.name}/>
      })}
    </>
  );
}

export default MarkerList;