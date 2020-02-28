import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const SuccessMessage = ({ modal, toggle }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className="payment-success-message">
        <ModalHeader toggle={toggle}>Успішна оплата</ModalHeader>
        <ModalBody>Ваш платіж успішно проведений!</ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
