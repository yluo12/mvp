import { MapContainer, TileLayer, useMap, Marker, Popup, Map } from 'react-leaflet';
import React from 'react';
import '../styles/output.css';
import MarkerList from './MarkerList.jsx';

function SchoolMap({currentList}) {
  const [currentPosition, setCurrentPosition] = React.useState({lat: 37.3848811, lg: -121.891978});

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log([position.coords.latitude, position.coords.longitude]);
          setCurrentPosition({lat: position.coords.latitude, lg: position.coords.longitude});
        },
        () => {
          console.log('Failed to get the current locations');
        }
      );
    }
  }, []);

  React.useEffect(() => {
  }, [currentPosition]);

  return (
    <MapContainer className="map" center={[currentPosition.lat, currentPosition.lg]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[currentPosition.lat, currentPosition.lg]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MarkerList currentList={currentList} />
    </MapContainer>
  );
}

export default SchoolMap;

// attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"