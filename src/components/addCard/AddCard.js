import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Input } from 'reactstrap';
import '././addCard.css';

export const AddCard = (props) => {

  const {
    buttonLabel = '+ Add a location',
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <p className="text-center card-text" onClick={toggle}>{buttonLabel}</p>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="card-text" toggle={toggle}>Add a location</ModalHeader>
          <ModalBody>
            <Col md={6}>
              <FormGroup>
                <Input type="text"/>
              </FormGroup>
            </Col>
          </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" onClick={toggle}>Cancel</Button>{' '}
          <Button color="secondary" onClick={toggle}>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
