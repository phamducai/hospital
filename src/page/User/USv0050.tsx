/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: USv0050
 * PG NAME: 訪問看護基本情報3更新 (Home-visit nursing basic information 3 update)
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

  const columns = [
    { title: "自立" }, { title: "一部介助" }, { title: "全面介助" }, { title: "その他" }
  ]

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
                <Table responsive className='table-bordered mb-2'>
                  <tbody>
                    <tr className='bg-yellow label-dialog text-center'>
                      <td>ＡＤＬ状況</td>
                      <td>移動</td>
                      <td>排泄</td>
                      <td>着替</td>
                      <td>食事</td>
                      <td>入浴</td>
                      <td>整容</td>
                      <td>意思疎通</td>
                    </tr>
                    {columns.map((item, index) => (
                      <tr className='text-center bg-yellow' key={index}>
                        <td>{item.title}</td>
                        <td className='bg-white td-w-10'>
                          <Form.Check name="chk_move" />
                        </td>
                        <td className='bg-white td-w-10'>
                          <Form.Check name="chk_excretion" />
                        </td>
                        <td className='bg-white td-w-10'>
                          <Form.Check name="chk_replace" />
                        </td>
                        <td className='bg-white td-w-10'>
                          <Form.Check name="chk_food" />
                        </td>
                        <td className='bg-white td-w-10'>
                          <Form.Check name="chk_bath" />
                        </td>
                        <td className='bg-white td-w-10'>
                          <Form.Check name="chk_plastic" />
                        </td>
                        <td className='bg-white td-w-10'>
                          <Form.Check name="chk_meaning" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
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
