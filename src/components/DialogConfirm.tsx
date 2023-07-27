import DialogCommon from '@/components/DialogCommon';

export interface ButtonProps {
  text: string;
  okButton: boolean;
  onClickButton: () => void;
  className?: string;
}

interface DialogConfirmProps {
  title?: string;
  message: string;
  onHidePopup: () => void;
  className?: string;
  buttons: ButtonProps[];
}

function DialogConfirm(props: DialogConfirmProps) {
  return (
    <>
      <DialogCommon
        onHidePopup={props.onHidePopup}
        title={props.title}
        className={props.className}
      >
        <DialogCommon.Body className="border-0 my-3">
          <p>{props.message}</p>
        </DialogCommon.Body>
        <DialogCommon.Footer className="justify-content-center bg-color-light-gray">
          {props.buttons.map((item: ButtonProps, index: number) => (
            <button
              onClick={item.onClickButton}
              key={index}
              className={`shadow-sm ${item.className ?? ''} ${
                item.okButton ? 'button-accept-dialog' : 'button-normal-dialog'
              }`}
            >
              {item.text}
            </button>
          ))}
        </DialogCommon.Footer>
      </DialogCommon>
    </>
  );
}

export default DialogConfirm;
