import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from "../page.module.css";

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <p>Você será redirecionado para outra página, continuar mesmo assim?</p>
                <div className={styles.modalButtons}>
                    <button onClick={() => console.log("Redirecionar")}>Sim</button>
                    <button onClick={onClose}>Não</button>
                </div>
            </div>
        </div>
    );
}

const Mapa = () => {
    const containerStyle = {
        width: '100%',
        height: '20vh',
    };

    const center = {
        lat: -23.55052,
        lng: -46.633308,
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const handleMapaClick = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <div onClick={handleMapaClick} className={styles.divMapa}>
                <LoadScript googleMapsApiKey="API">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default Mapa;
