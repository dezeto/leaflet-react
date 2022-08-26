// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import { Icon } from 'leaflet';
import * as parkData from './data/skateboard-parks.json';

import './App.css';


function App() {
	const [activePark, setActivePark] = React.useState(null);

	return (
		<div className='App'>
			<MapContainer
				center={[-6.17511, 106.865036]}
				zoom={13}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{parkData['features'].map((park) => (
					<Marker
						key={park.properties.PARK_ID}
						position={[
							park.geometry.coordinates[1],
							park.geometry.coordinates[0],
						]}
						onClick={() => {
							setActivePark(park);
						}}
						// icon={icon}
					/>
				))}
				{activePark && (
					<Popup
						position={[
							activePark.geometry.coordinates[1],
							activePark.geometry.coordinates[0],
						]}
						onClose={() => {
							setActivePark(null);
						}}
					>
						<div>
							<h2>{activePark.properties.NAME}</h2>
							<p>{activePark.properties.DESCRIPTION}</p>
						</div>
					</Popup>
				)}
			</MapContainer>

			{/* <MapContainer
				center={[40.8054, -74.0241]}
				zoom={14}
				scrollWheelZoom={false}
				style={{ height: '100%', width: '100%' }}
			>
				<TileLayer
					url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAPBOX_API_key}`}
					attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
				/>
				<Marker position={[40.8054, -74.0241]} draggable={true} animate={true}>
					<Popup>Hey ! I live here</Popup>
				</Marker>
			</MapContainer> */}
		</div>
	);
}

export default App;
