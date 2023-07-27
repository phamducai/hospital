/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: InsurancePublicExpenseInformationDetail
 * PG NAME: 保険公費案内詳細 (Insurance Public Expense Information Detail)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Col } from 'react-bootstrap';
import '@assets/scss/user/detail/insurance/insurance.scss';
import { useNavigate } from 'react-router';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useState } from 'react';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
// import * as Constant from '@/common/constant';
import { itemTabInsurance } from '@/data/common';

function SpecificDiseaseMedicalTreatmentInformationDetail() {
  const navigate = useNavigate();
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isShowDoneDialogDelete, setIsShowDoneDialogDelete] = useState(false);
  // const [dataSelected] = useState(JSON.parse(localStorage.getItem("dataSelected") ?? ''));

  const handleEdit = () => {
    navigate('/user/insurance/specific-disease-medical-treatment/update');
  };

  const handleOnClose = () => {
    navigate('/user/insurance/specific-disease-medical-treatment');
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
          // navigate('/user/insurance/medical-insurance');
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

  // const columns = [
  //   { title: '自立', col1: '', col2: '', col3: '○', col4: '', col5: '', col6: '○', col7: '○', },
  //   { title: '一部介助', col1: '', col2: '○', col3: '', col4: '○', col5: '', col6: '', col7: '', },
  //   { title: '全面介助', col1: '', col2: '', col3: '', col4: '', col5: '○', col6: '', col7: '', },
  //   { title: 'その他', col1: '○', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '', },
  // ];

  // const columnsMode = [
  //   { title: '食生活', col1: '', col2: '○', col3: '' },
  //   { title: '清潔', col1: '', col2: '○', col3: '' },
  //   { title: '排泄', col1: '', col2: '○', col3: '' },
  //   { title: '睡眠', col1: '', col2: '○', col3: '' },
  //   { title: '生活のリズム', col1: '○', col2: '', col3: '' },
  //   { title: '部屋の整頓', col1: '○', col2: '', col3: '' },
  //   { title: '服薬状態', col1: '', col2: '○', col3: '' },
  //   { title: '金銭管理', col1: '', col2: '○', col3: '' },
  //   { title: '作業等の状態', col1: '', col2: '○', col3: '' },
  //   { title: '対人関係', col1: '○', col2: '', col3: '' },
  //   { title: 'その他', col1: '○', col2: '', col3: '' },
  // ];

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={5} arrayButton={itemTabInsurance} />
      <div className="main">
        {/* Page nursing detail*/}
        {/* <Form className="w-100 h-100 d-flex flex-column detail-show" id='nursing-info'> */}
        <Form
          className="w-100 h-100 d-flex flex-column "
        >
          <Form.Group
            as={Row}
            className="mb-2 mt-3 form-group-container mt-3-div"
            controlId="form_user_id"
          >
            <Col sm={9} className="text-start">
              <h5>◆ 特定疾病療養受療情報</h5>
            </Col>
          </Form.Group>

          <Form.Group className=" user-detail  d-flex flex-column">
            <Form.Group className=" user-detail d-flex flex-column pt-3">
              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  資格取得年月日
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>令23/10/10</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  発効期日
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>令23/10/10</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  有効開始年月日
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>令23/10/10</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  有効期限
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>令23/10/12</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  自己負担限度額
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>20,000円</Form.Label>
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
                  onClick={handleEdit}
                  className="btn-min-w btn btn-success"
                >
                  編集
                </Button>
                <Button
                  onClick={showDeleteConfirmDialog}
                  className="btn-min-w btn-delete"
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
            </Form.Group>
          </Form.Group>
        </Form>
      </div>
    </MasterLayout>
  );
}

export default SpecificDiseaseMedicalTreatmentInformationDetail;
