import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from "../page.module.css";

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null; // Corrigido para retornar null, pois "false" pode gerar problemas de renderização.

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <p>Você será redirecionado para outra página, continuar mesmo assim?</p>
                <div className={styles.modalButtons}>
                    <button onClick={() => console.log("Redirecionar")}>Sim</button>
                    <button onClick={onClose}>Não</button> {/* Certifique-se de que onClose está sendo passado corretamente */}
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
        setModalOpen(false); // Atualiza o estado para fechar o modal
    };

    return (
        <div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <div onClick={handleMapaClick}>
                <LoadScript googleMapsApiKey="SUA_CHAVE_DE_API_AQUI">
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
