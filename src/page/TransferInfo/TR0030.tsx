/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: TR0030
 * PG NAME: 更新画面 (Update screen)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Col, Form, Row, Button } from 'react-bootstrap';
import CustomHeading from '@/components/user/detail/TextHeader';
import DatePickerCommon from '@/components/user/schedule/DatePickerCommon';
import { useNavigate } from 'react-router';
import { useRef, useState } from 'react';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';


function TR0030() {
  const navigate = useNavigate();
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowDialogUpdate, setShowDialogUpdate] = useState(false);
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [, setValidated] = useState(false);

  const handleOnClose = () => {
    navigate('/user/search-screen');
  };

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
      <CustomHeading title="申し送り情報" />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">

          <Form className="w-100 h-100 d-flex flex-column" id="nursing-info">
            <Form.Group className="input-detail user-detail d-flex flex-column">
              <div>
                <Form.Group
                  as={Row}
                  className="mb-2 form-group-container mt-3-div mt-3"
                  controlId="form_person_in_charge"
                >
                  <Form.Label
                    column
                    sm={4}
                    className="bg-light-yellow label-dialog"
                  >
                    種類 <span className="color-text-custom">【必】</span>
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Select
                            name="placeOfDeath"
                            className="w-md-80 w-sm-100 mt-2 mt-md-0"
                          >
                            <option value="-1"></option>
                            <option value="1">退院前カンファレンス</option>
                            <option value="2">担当者会議</option>
                            <option value="3">電話連絡／対応</option>
                            <option value="4">包括相談</option>
                            <option value="5">その他</option>
                            <option value="6">担当者会議（テンプレートあり）</option>
                          </Form.Select>
                      </div>
                    </Row>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-2 form-group-container"
                  controlId="form_person_in_charge"
                >
                  <Form.Label
                    column
                    sm={4}
                    className="bg-light-yellow label-dialog"
                  >
                    記録日 <span className="color-text-custom">【必】</span>
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Group className="calender-schedule d-flex justify-content-between mt-2">
                            <DatePickerCommon/>
                            <Button className="btn-calender ms-90">
                              <b>C</b>
                            </Button>
                          </Form.Group>
                        </div>
                    </Row>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-2 form-group-container"
                  controlId="form_person_in_charge"
                >
                  <Form.Label
                    column
                    sm={4}
                    className="bg-light-yellow label-dialog"
                  >
                    記録者
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <Form.Control
                          type="text"
                          name="person_in_charge"
                          className="w-25"
                          required
                          defaultValue="2001"
                        />
                        <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                          <Button className="ms-2">職</Button>
                          <Form.Label className="mt-2 ms-2">大西　良樹</Form.Label>
                        </div>
                      </div>
                    </Row>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-2 form-group-container"
                  controlId="form_person_in_charge"
                >
                  <Form.Label
                    column
                    sm={4}
                    className="bg-light-yellow label-dialog"
                  >
                    職種
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <Form.Control
                          type="text"
                          name="person_in_charge"
                          className="w-50"
                          required
                          defaultValue=" "
                        />
                        <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                          <Form.Label className="mt-2">＜全角＞</Form.Label>
                        </div>
                      </div>
                    </Row>
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
                    className="bg-light-yellow label-dialog align-items-center"
                  >
                    本文  <span className="color-text-custom">【必】</span>
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Form.Control
                      as="textarea"
                      name="remarks"
                      defaultValue="申し送り１
申し送り２
申し送り３ "
                      style={{ height: '100px' }}
                    />
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
                          className="btn-min-w-30"
                        >
                          更新
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

                    {isShowDialogUpdate && (
                      <DialogConfirm
                        buttons={buttons}
                        message='データを更新しました'
                        onHidePopup={handleCloseDialogUpdate}
                        className="w-dialog-confirm"
                      />
                    )}
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </MasterLayout>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default TR0030;
