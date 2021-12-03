import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet"

export default function Map() {
  const icon = L.icon({ iconUrl: "/train.png",  iconSize: [30, 30] });
    return (
        <div id="map">
            <MapContainer
                center={[ 36.533333,  -6.283333]}
                zoom={2.85}
                scrollWheelZoom={false}
                style={{ height: 800, width: 1400 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                />
                <Marker position={[40.416775, -3.703790]} icon={icon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
