import { useState, useEffect } from 'react';
import '/src/styles/ASZF.css';

const ASZF_URL =
    'https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/ASZF/ASZF.json';
const STORAGE_KEY = 'aszfAccepted';

export default function ASZFModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [aszf, setAszf] = useState([]);
    const [loading, setLoading] = useState(true);
    const [scrolledToBottom, setScrolledToBottom] = useState(false);

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
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if (scrollTop + clientHeight >= scrollHeight - 20) {
            setScrolledToBottom(true)
        }
    }

    const acceptAszf = () => {
        localStorage.setItem(STORAGE_KEY, 'true');
        setIsOpen(false)
    }
    if (!isOpen) return null;
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-sidebar">
                        <div className="sidebar-icon">📜</div>
                        <div className="sidebar-text">
                            <span className="sidebar-label">ÁSZF</span>
                            <span className="sidebar-sub">Kérjük, olvasd el figyelmesen</span>
                        </div>
                        <div className="sidebar-decoration">
                            <div className="deco-line"></div>
                            <div className="deco-line"></div>
                            <div className="deco-line"></div>
                        </div>
                    </div>
                    <div className="modal-main">
                        <div className="modal-header">
                            <h2>Átalános Szerződési Feltételek</h2>
                            <span className="header-badge">Kötelező</span>
                        </div>
                        <div className="aszf-body" onScroll={handleScroll}>
                            {loading ? (<div className="loading-container">
                                <div className="spinner">
                                </div>
                                <p>betöltés....</p>
                            </div>
                            ) : (<div className="aszf-text">
                                {aszf.map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                            )}
                            <div className="scroll-fade"></div>
                        </div>
                        <div className="modal-footer">
                            <div className="scroll-hint">
                                {!scrolledToBottom && (
                                    <span className="hint-text">↓ Görgess le az elfogadáshoz</span>
                                )}
                            </div>
                            <div className="modal-actions">
                                <button className="close-btn" onClick={() => setIsOpen(false)}>
                                    Bezárás
                                </button>
                                <button className={`accept-btn ${scrolledToBottom ? 'active' : ''}`}
                                    onClick={acceptAszf}
                                    disabled={!scrolledToBottom}> <span className="btn-icon">✓</span>
                                    Elfogadom
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
