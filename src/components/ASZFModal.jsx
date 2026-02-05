import { useState, useEffect } from 'react';
import '/src/styles/ASZF.css';

const ASZF_URL =
    'https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/ASZF/ASZF.json';
const STORAGE_KEY = 'aszfAccepted';

export default function ASZFModal({ content }) {
    const [isOpen, setIsOpen] = useState(false);
    const [aszf, setAszf] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const accepted = localStorage.getItem(STORAGE_KEY);
        if (!accepted) {
            fetch(ASZF_URL)
                .then((res) => res.json())
                .then((data) => {
                    setAszf(data);
                    setIsOpen(true);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error('JSON betöltési hiba: ', err);
                    setLoading(false);
                });
        }
    }, []);
    const acceptAszf = () => {
        localStorage.setItem(STORAGE_KEY, 'true');
        setIsOpen(false)
    }
    if (!isOpen) return null;
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Általános Szerződési Feltételek</h2>
                    <div className="aszf-body">
                        {loading ? (
                            <p>Betöltés...</p>
                        ) : (aszf.map((line, index) => <p key={index}>{line}</p>))}
                    </div>
                    <div className="modal-actions">
                        <button className="accept-btn" onClick={acceptAszf}>
                            Elfogadom
                        </button>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>Bezár</button>
                    </div>
                </div>
            </div>
        </>
    );
}
