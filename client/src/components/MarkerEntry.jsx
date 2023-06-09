import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import React from 'react';
import { HomeModernIcon } from '@heroicons/react/24/outline';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

function MarkerEntry ({school}) {

  const iconMarkup = renderToStaticMarkup(<HomeModernIcon className="icon icon-school" />);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  // console.log([school.coords[0], school.coords[1]]);
  return (
    <Marker position={school.coords} icon={customMarkerIcon} className="school-marker">
      <Popup>
        <h5 className="popup map-popup">{school.name}</h5>
        {/* <p>Easily customizable.</p> */}
      </Popup>
    </Marker>);
}

export default MarkerEntry;