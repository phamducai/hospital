import { ReactNode, useState } from "react";
import { Button, Modal } from "react-bootstrap";


type DialogProp ={
  show: boolean
  body: ReactNode
}

function Dialog({show,body}:DialogProp){

  const [show2, setShow2] = useState(show);
  const handleClose2= () => setShow2(false);


  return(

    <Modal show={show2} onHide={handleClose2}>
      <Modal.Title>
          headerModal
      </Modal.Title>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer>
        <Button className=''  onClick={handleClose2}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Dialog
