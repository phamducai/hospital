import { ReactNode } from 'react';
import Modal from 'react-bootstrap/Modal';

interface ChildrenReactNode {
  children: ReactNode;
  className?: string;
}

interface DialogConfirmProps {
  children: ReactNode;
  onHidePopup: () => void;
  className?: string;
  contentClassName?: string;
  title?: string;
  static?: boolean | 'static';
  size?: 'sm' | 'lg' | 'xl';
}
function DialogCommonBody({ children, className }: ChildrenReactNode) {
  return <Modal.Body className={className ?? ''}>{children}</Modal.Body>;
}

function DialogCommonFooter({ children, className }: ChildrenReactNode) {
  return <Modal.Footer className={className ?? ''}>{children}</Modal.Footer>;
}

function DialogCommon(props: DialogConfirmProps) {
  return (
    <>
      <Modal
        show={true}
        onHide={props.onHidePopup}
        centered
        size={props?.size}
        dialogClassName={props.className ?? ''}
        backdrop={props.static}
        contentClassName={props?.contentClassName}
      >
        <Modal.Header className="border-0">
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        {props.children}
      </Modal>
    </>
  );
}

DialogCommon.Body = DialogCommonBody;
DialogCommon.Footer = DialogCommonFooter;

export default DialogCommon;
