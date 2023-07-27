/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: USv0030
 * PG NAME: 訪問看護基本情報1更新 (Home-visit nursing basic information 1 update)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Col, Table } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import '@assets/scss/user/detail/nursingInfo.scss';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
import CustomHeading from '@/components/user/detail/TextHeader';

function USv0060() {
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
          {/* 訪問看護基本情報4 */}
          <Form.Group className="input-detail d-flex flex-column">
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　訪問看護基本情報4</h5>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container"
                controlId="form_remarks"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog align-middle"
                >
                  家族等の緊急時の連絡先
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                    <Button className='me-2'>
                      全体表示
                    </Button>
                    <span>＜全角＞</span>
                  </div>
                  <Form.Control
                    as="textarea"
                    name="emergency_contact"
                    placeholder="病識"
                    style={{ height: '100px' }}
                    defaultValue='母親の携帯（０９０－００００－００００）'
                  />
                </Col>
              </Form.Group>


              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={12} md={11} lg={10} className="mt-2-div">
                  <Table responsive className='table-bordered mb-2'>
                    <tbody className="bg-light-yellow label-dialog">
                      <tr >
                        <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>関係機関</td>
                      </tr>
                      <tr >
                        <td className='td-w-100 td-w-sm-10'>連絡先</td>
                        <td className='bg-white'>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              placeholder="開始前の場所"
                              name="contact_address"
                              className='w-90-div'
                              defaultValue='○○リハビリセンター'
                            />
                            <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                              ＜全角＞
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='td-w-100 td-w-sm-10'>担当者</td>
                        <td className='bg-white'>
                          <Col sm={12}>
                            <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                              <Form.Control
                                type="text"
                                placeholder="開始前の場所"
                                name="manager"
                                className='w-90-div'
                                defaultValue='テスト　相談員'
                              />
                              <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                ＜全角＞
                              </div>
                            </div>
                          </Col>
                        </td>
                      </tr>
                      <tr >
                        <td className='td-w-100 td-w-sm-10'>備考</td>
                        <td className='bg-white'>
                          <Col sm={12}>
                            <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                              <Form.Control
                                type="text"
                                placeholder="開始前の場所"
                                name="remarks"
                                className='w-90-div'
                                defaultValue='電話：０８７－ＸＸＸＸ－ＸＸＸＸ'
                              />
                              <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                ＜全角＞
                              </div>
                            </div>
                          </Col>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>


              <Form.Group
                as={Row}
                className="mb-2 form-group-container"
                controlId="form_remarks"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog align-middle"
                >
                  保健・福祉サービス<br />
                  等の利用状況
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                    <Button className='me-2'>
                      全体表示
                    </Button>
                    <span>＜全角＞</span>
                  </div>
                  <Form.Control
                    as="textarea"
                    name="health_and_welfare"
                    placeholder="病識"
                    style={{ height: '100px' }}
                    defaultValue='訪問介護（毎日）身体障害者医療費助成制度利用'
                  />
                </Col>
              </Form.Group>
            </div>
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
          </Form.Group>
        </Form>
      </div>
    </MasterLayout>
  );
}

export default USv0060;
