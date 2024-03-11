import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';

export const VideoModal = ({showModal, onhideModal}) => {
    VideoModal.propTypes = {
      showModal: PropTypes.bool.isRequired,
      onhideModal: PropTypes.func.isRequired,
    };
    return (
        <>
            <Modal show={showModal} onHide={onhideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                </Modal.Body>
            </Modal>
        </>
    );
}
