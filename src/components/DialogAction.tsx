import { Button } from 'react-bootstrap';
import DialogCommon from '@/components/DialogCommon';
import { PropsWithChildren } from 'react';

interface DialogActionProps {
  onHidePopup: () => void;
  onSaveClick: () => void;
  onRegisterClick: () => void;
  onCloseClick: () => void;
  className?: string;
  contentClassName?: string;
  title?: string;
  isRegister?: boolean;
  isShowOnly?: boolean;
}

function DialogAction(props: PropsWithChildren<DialogActionProps>) {
  return (
    <>
      <DialogCommon
        onHidePopup={props.onHidePopup}
        title={props.title}
        className={props.className}
        contentClassName={props.contentClassName}
        size="xl"
      >
        <DialogCommon.Body className="border-0 overflow-auto">
          {props.children}
        </DialogCommon.Body>
        <DialogCommon.Footer className="justify-content-end border-0">
          <Button
            variant="success"
            className="btn-min-w"
            hidden={props.isRegister || props.isShowOnly}
            onClick={props.onSaveClick}
          >
            保存
          </Button>
          <Button
            variant="danger"
            className="btn-min-w"
            hidden={!props.isRegister || props.isShowOnly}
            onClick={props.onRegisterClick}
          >
            登録
          </Button>
          <Button
            variant="light"
            className="btn-min-w border-primary"
            onClick={props.onCloseClick}
          >
            閉じる
          </Button>
        </DialogCommon.Footer>
      </DialogCommon>
    </>
  );
}

export default DialogAction;
