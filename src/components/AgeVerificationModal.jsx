import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../assets/style/Home.css'; // Create this CSS file for styling

const AgeVerificationModal = ({ legalAge = 21, redirectUrl = 'https://www.google.com' }) => {
    const [showModal, setShowModal] = useState(false);
    const SESSION_STORAGE_KEY = 'ageVerified';

    useEffect(() => {
        // Check session storage if user has already verified age
        const isAgeVerified = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (!isAgeVerified) {
            // Show modal after a small delay to ensure page loads
            const timer = setTimeout(() => {
                setShowModal(true);
            }, 500); // Adjust delay as needed
            return () => clearTimeout(timer);
        }
    }, []);

    const handleYes = () => {
        sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
        setShowModal(false);
    };

    const handleNo = () => {
        // Redirect user if they are not of legal age
        window.location.href = redirectUrl;
    };

    return (
        <Modal
            show={showModal}
            backdrop="static" // Prevents closing by clicking outside
            keyboard={false} // Prevents closing with ESC key
            centered // Centers the modal vertically and horizontally
            className="age-verification-modal"
        >
            <Modal.Header className="justify-content-center">
                <Modal.Title className="modal-headline">ARE YOU OF LEGAL DRINKING AGE?</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center modal-body-content">
                <p>
                    You must be <span className="legal-age-highlight">{legalAge}</span>  to Enter This Site

                </p>
                <p>
                    Flight 747 Jacksonville is a liquor store, bar, and lounge. By entering our site, you confirm you're 21 or older.
                </p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center modal-footer-buttons">
                <Button variant="primary" className="modal-btn yes-btn" onClick={handleYes}>
                    YES, I AM {legalAge}+
                </Button>
                <Button variant="secondary" className="modal-btn no-btn" onClick={handleNo}>
                    NO, I AM NOT
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AgeVerificationModal;