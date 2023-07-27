/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: USv0020
 * PG NAME: 訪問看護基本情報照会 (Home-visit nursing basic information inquiry)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useState, useRef } from 'react';
import CustomHeading from '@/components/user/detail/TextHeader';
import { Person } from '@/interfaces/Person';
import { itemTabInsurance } from '@/data/common';
import TabButtonLink from '@/components/TabButtonLink';
import '@assets/scss/user/detail/insurance/insurance.scss';

function LimitCertificationInformationDetail() {
  const [validated] = useState(false);
  const navigate = useNavigate();
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isShowDoneDialogDelete, setIsShowDoneDialogDelete] = useState(false);
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [tableSelectedItem] = useState<Person | null>(null);

  const handleEdit = (mode: any) => {
    switch (mode) {
      case 1:
        navigate('/user/insurance/limit-identification/update');
        break;
      case 2:
        navigate('#');
        break;
      case 3:
        navigate('#');
        break;
      default:
        break;
    }
  };

  const handleOnClose = () => {
    navigate('/user/insurance/limit-identification');
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
          // navigate('/user/detail/nursing-basic-info');
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
    <MasterLayout userInfo={tableSelectedItem}>
      <div className="main">
        <Form
          ref={refUserDialog}
          noValidate
          validated={validated}
          className="w-100 h-100 d-flex flex-column"
        >
          <CustomHeading title="限度額認定情報" />
          <TabButtonLink active={4} arrayButton={itemTabInsurance} />
          <Form.Group
            as={Row}
            className="mb-2 mt-3 form-group-container mt-3-div"
            controlId="form_user_id"
          >
            <Col sm={9} className="text-start">
              <h5>◆　限度額認定情報</h5>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-2 form-group-container mt-3-div"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog">
              交付年月日
            </Form.Label>
            <Col sm={8} className="mt-2-div mt-2">
              <Form.Label>令02/08/01</Form.Label>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2 form-group-container mt-3-div"
            controlId="form_username"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog">
              発効期日
            </Form.Label>
            <Col sm={8} className="mt-2-div mt-2">
              <Form.Label>令02/08/01</Form.Label>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2 form-group-container mt-3-div"
            controlId="form_username_kanji"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog">
              有効開始年月日
            </Form.Label>
            <Col sm={8} className="mt-2-div mt-2">
              <Form.Label>令02/08/01</Form.Label>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2 form-group-container mt-3-div"
            controlId="form_date_of_birth"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog">
              有効期限
            </Form.Label>
            <Col sm={8} className="mt-2-div mt-2">
              <Form.Label>令02/09/30</Form.Label>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2 form-group-container mt-3-div"
            controlId="form_date_of_death"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog">
            適用区分
            </Form.Label>
            <Col sm={8} className="mt-2-div mt-2">
              <Form.Label>オ</Form.Label>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2 form-group-container mt-3-div"
            controlId="form_time_of_death"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog">
              負担上限額
            </Form.Label>
            <Col sm={8} className="mt-2-div mt-2">
              <Form.Label>35,400円</Form.Label>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2 form-group-container mt-3-div"
            controlId="form_place_of_death"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog">
              負担上限額（変動
            </Form.Label>
            <Col sm={8} className="mt-2-div mt-2">
              {/* <Form.Label></Form.Label> */}
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
                onClick={() => handleEdit(1)}
                className="btn-min-w border-primary"
              >
                編集
              </Button>
              <Button
                variant="light"
                onClick={showDeleteConfirmDialog}
                className="btn-min-w border-primary btn-delete"
              >
                削除
              </Button>
              <Button
                variant="light"
                onClick={handleOnClose}
                className="btn-min-w border-primary"
              >
                戻る
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
        </Form>
      </div>
    </MasterLayout>
  );
}

export default LimitCertificationInformationDetail;
