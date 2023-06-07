import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/outline';


function MarkerEntry ({school}) {
  const schoolIcon = new L.Icon({
    iconUrl: AcademicCapIcon,
    iconRetinaUrl: AcademicCapIcon,
    popupAnchor:  [-0, -0],
    iconSize: [25, 25]
  });
  // console.log([school.coords[0], school.coords[1]]);
  return (
    <Marker position={school.coords}>
      <Popup>
        <h5>{school.name}</h5>
        <p>Easily customizable.</p>
      </Popup>
    </Marker>);
}

export default MarkerEntry;