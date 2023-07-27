/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: USv0051
 * PG NAME: 訪問看護基本情報３ (Home-visit nursing basic information 3 update-mode 医療(精神))
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Col, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import '@assets/scss/user/detail/nursingInfo.scss';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
import CustomHeading from '@/components/user/detail/TextHeader';
import { useRef, useState } from 'react';
function USv0050() {

  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowDialogUpdate, setShowDialogUpdate] = useState(false);

  const validateFormInput = () => {
    return refUserDialog.current && !refUserDialog.current.checkValidity();
  };

  let timeout: ReturnType<typeof setTimeout>;
  const handleOnSave = () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    if (validateFormInput()) {
      setValidated(true);
      return;
    }
    handleDialogUpdate();
  };

  const handleOnClose = () => {
    navigate('/user/detail/nursing-basic-info/0')
  }

  const columnsMode = [
    { title: '食生活' }, { title: '清潔' }, { title: '排泄' }, { title: '睡眠' }, { title: '生活のリズム' }, { title: '部屋の整頓' },
    { title: '服薬状態' }, { title: '金銭管理' }, { title: '作業等の状態' }, { title: '対人関係' }, { title: 'その他' },
  ];

  const handleDialogUpdate = () => {

    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          handleCloseDialogUpdate();
        },
        className: 'button-dialog',
      }
    ]);
    setShowDialogUpdate(true);
  }
  const handleCloseDialogUpdate = () => {
    setShowDialogUpdate(false);
  };

  return (
    <MasterLayout>
      <div className="main">
        {/* Page nursing detail*/}
        <Form
          className="w-100 h-100 d-flex flex-column"
          id="nursing-info"
          ref={refUserDialog}
          noValidate
          validated={validated}
        >
          <CustomHeading title="利用者基本情報" />
          <TabUserDetail active={2} />
          {/* 訪問看護基本情報3 */}
          <div>
            <Form.Group
              as={Row}
              className="mb-2 mt-4 form-group-container mt-3-div"
              controlId="form_user_id"
            >
              <Col sm={9} className="text-start">
                <h5>◆　訪問看護基本情報３</h5>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="form-group-container mt-3-div"
              controlId="form_user_id"
            >
              <Col sm={8} md={10} className="mt-2-div">
                <div className='w-100'>
                  <Table responsive="sm" className="table-bordered mb-2">
                    <tbody>
                      <tr className="bg-yellow text-center">
                        <td className="algin-td-header" rowSpan={2}>日常生活等の状況</td>
                        <td colSpan={2}>援助の要否</td>
                        <td className="algin-td-header" rowSpan={2}>備　考</td>
                      </tr>
                      <tr className="bg-yellow text-center">
                        <td >要</td>
                        <td >否</td>
                      </tr>

                      {columnsMode.map((item, index) => (
                        <tr className="bg-yellow" key={index}>
                          <td className='text-left w-col-table'>{item.title}</td>
                          <td className="text-center bg-white td-w-checkbox"><Form.Check name="chk_yes" /></td>
                          <td className="text-center bg-white td-w-checkbox"><Form.Check name="chk_no" /></td>
                          <td className="bg-white">
                            <Form.Control
                              type="text"
                              name="preparation"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
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
                  onClick={handleOnSave}
                  className="btn-min-w"
                >
                  更新
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
            {isShowDialogUpdate && (
              <DialogConfirm
                buttons={buttons}
                message='データを更新しました。'
                onHidePopup={handleCloseDialogUpdate}
                className="w-dialog-confirm"
              />
            )}
          </div>
        </Form>
      </div>
    </MasterLayout>
  );
}

export default USv0050;
