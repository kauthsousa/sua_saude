import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Mapa = () => {
    const containerStyle = {
        width: '100%',
        height: '50vh',
    };

    const center = {
        lat: -23.55052, // Latitude do centro do mapa (exemplo: São Paulo)
        lng: -46.633308, // Longitude do centro do mapa
    };

    return (
        <LoadScript googleMapsApiKey="SUA_CHAVE_DE_API_AQUI">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
                {/* Adicione um marcador */}
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Mapa;
