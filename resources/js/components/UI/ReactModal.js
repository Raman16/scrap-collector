import { Modal, Button } from "react-bootstrap";

const ReactModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>My Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>The Code Hubs! This is my body content!!!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default ReactModal;
