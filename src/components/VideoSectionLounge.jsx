import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap"; 
import { BiPlay } from "react-icons/bi";

const VideoSectionLounge = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
    <div className="section_spacing">
      <div onClick={handleShow} className="video_section">
        <div className="video_btn"
          style={{
            
          }}
        >
          <BiPlay color="#fff" size={28} />
        </div>
      </div>
    </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Button
        className="btn-close"
          onClick={handleClose}
          style={{
            
          }}
        >
        </Button>
        <Modal.Body className="p-0 bg-dark">
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoSectionLounge;
