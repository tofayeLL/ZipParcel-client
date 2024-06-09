
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// Fix the icon issue in Leaflet
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';



let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow
});

L.Marker.prototype.options.icon = DefaultIcon;






const ViewLocationModal = ({ onClose, item }) => {
    console.log("modal item", item)
    return (
        <div className="   ">
           


            <div className="fixed h-96 w-full inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl ">
                    <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white px-2 py-1 rounded">Close</button>
                    <h1 className="text-xl font-bold mb-4">View Location</h1>
                    <MapContainer center={[item?.latitudes, item?.longitude]} zoom={13} className="h-72 w-full">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[item?.latitudes, item?.longitude]}>
                            <Popup>{item?.deliveryAddress}</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

        </div>
    );
};

export default ViewLocationModal;