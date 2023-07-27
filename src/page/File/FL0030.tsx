/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: FL0030
 * PG NAME: 照会画面
(detail screen)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Form, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useState } from 'react';

import CustomHeading from '@/components/user/detail/TextHeader';

function FL0030() {
  const { id } = useParams()
  const navigate = useNavigate();
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isShowDoneDialogDelete, setIsShowDoneDialogDelete] = useState(false);

  const handleOnClose = () => {
    navigate('/file/file-search');
  };

  const handleOnEdit = () => {
    navigate(`/file/prefer-file/update/${id}`);
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
      <CustomHeading title="ファイル管理" />

      <Form className="w-100 h-100 d-flex flex-column ">
        <Form.Group className=" user-detail d-flex flex-column pt-3">

          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              ファイル属性
            </Form.Label>
            <Col sm={12} md={8}>
              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                <Form.Label column sm={4}>
                  契約書など
                </Form.Label>
              </div>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              管理年月日
            </Form.Label>
            <Col sm={12} md={8}>
              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                <Form.Label column sm={4}>
                  20/06/2023
                </Form.Label>
              </div>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              利用者氏名
            </Form.Label>
            <Col sm={12} md={8}>
              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                <Form.Label column sm={4}>
                  {id}　高松　太郎
                </Form.Label>
              </div>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              有効期間
            </Form.Label>
            <Col sm={12} md={8}>
              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                <Form.Label column sm={4}>
                  2023/06/21~2023/07/31
                </Form.Label>
              </div>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              ファイル名
            </Form.Label>
            <Col sm={12} md={8}>
              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                <Form.Label column sm={4}>
                 訪問看護計画書.pdf
                </Form.Label>
              </div>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id "
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog py-md-5 py-0">
              コメント
            </Form.Label>
            <Col sm={12} md={8} className='d-md-flex align-items-center'>

              <Form.Label column sm={4}>
                計画書計画書計画書
              </Form.Label>

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

        <Form.Group
          as={Row}
          className="form-group-container"
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
              variant="warning"
              onClick={handleOnClose}
              className="btn-min-w-30 border-primary"
            >
              一覧に戻る
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </MasterLayout>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default FL0030;
