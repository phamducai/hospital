/**
 * PG ID: USh0020
 * PG NAME: 入退院情報照会 (Hospital admission/discharge information inquiry)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Form, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useState } from 'react';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
import CustomHeading from '@/components/user/detail/TextHeader';

function USh0020() {
  const navigate = useNavigate();
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isShowDoneDialogDelete, setIsShowDoneDialogDelete] = useState(false);

  const handleOnClose = () => {
    navigate('/user/detail/admission-discharge-info');
  };

  const handleOnEdit = () => {
    navigate('/user/detail/admission-discharge-info/update');
  };

  const showDeleteConfirmDialog = () => {
    setMessageDialog('データを削除します。よろしいですか？');

    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          handleDoneDialogDelete();
        },
        className: 'button-dialog',
      },
      {
        text: '戻る',
        okButton: false,
        onClickButton: () => {
          handleCloseDialogConfirm();
        },
        className: 'button-dialog',
      },
    ]);

    setShowConfirmDialog(true);
  };

  const handleDoneDialogDelete = () => {
    setShowConfirmDialog(false);

    setMessageDialog('データを削除しました。');
    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          handleCloseDoneDialogDelete();
          // navigate('/user/detail/admission-discharge-info');
        },
        className: 'button-dialog',
      },
    ]);
    setIsShowDoneDialogDelete(true);
  };

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
  };

  const handleCloseDoneDialogDelete = () => {
    setIsShowDoneDialogDelete(false);
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabUserDetail active={3} />
      <Form className="w-100 h-100 d-flex flex-column ">
        <Form.Group
          as={Row}
          className="mb-2 mt-3 form-group-container mt-3-div"
          controlId="form_user_id"
        >
          <Col sm={9} className="text-start">
            <h5>入退院情報</h5>
          </Col>
        </Form.Group>

        {/* Detail admission and discharge */}

        <Form.Group className=" user-detail d-flex flex-column pt-3">
          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              種類
            </Form.Label>
            <Col sm={12} md={8}>
              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                <Form.Label column sm={4}>
                  入院
                </Form.Label>
              </div>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_date_of_birth"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog">
              年月日
            </Form.Label>
            <Col sm={12} md={8}>
              <Row>
                <Col sm={12}>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <Form.Label column sm={4}>
                      令03/02/10
                    </Form.Label>
                  </div>
                </Col>
              </Row>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              入院先施設名
            </Form.Label>
            <Col sm={12} md={8}>
              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                <Form.Label column sm={4}>
                  高松病院
                </Form.Label>
              </div>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3 mt-3 form-group-container"
            controlId="form_button_container"
          >
            <Col sm={9} className="text-start ms-0 ps-0 my-2">
              <Button
                variant="success"
                onClick={handleOnEdit}
                className="btn-min-w-30"
              >
                編集
              </Button>
              <Button
                variant="danger"
                className="btn-min-w-30"
                onClick={showDeleteConfirmDialog}
              >
                削除
              </Button>
              <Button
                variant="light"
                onClick={handleOnClose}
                className="btn-min-w-30 border-primary"
              >
                閉じる
              </Button>
            </Col>
          </Form.Group>
          {isShowConfirmDialog && (
            <DialogConfirm
              buttons={buttons}
              message={messageDialog}
              onHidePopup={handleCloseDialogConfirm}
              className="w-dialog-confirm text-danger"
            />
          )}
          {isShowDoneDialogDelete && (
            <DialogConfirm
              buttons={buttons}
              message="データを削除しました。"
              onHidePopup={handleCloseDoneDialogDelete}
              className="w-dialog-confirm text-danger"
            />
          )}
        </Form.Group>
      </Form>
    </MasterLayout>
  );
}

export default USh0020;
