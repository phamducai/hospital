/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: TR0040
 * PG NAME: 新規登録画面 (New registration screen)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Col} from 'react-bootstrap';
import '@assets/scss/user/detail/nursingInfo.scss';
import { useNavigate } from 'react-router';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useRef, useState } from 'react';
import CustomHeading from '@/components/user/detail/TextHeader';
import DatePickerCommon from '@/components/user/schedule/DatePickerCommon';

function TR0040() {
  const navigate = useNavigate();
  const [messageDialog,] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isShowDialogUpdate, setShowDialogUpdate] = useState(false);
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [ ,setValidated] = useState(false);

  const handleOnClose = () => {
    navigate('/user/search-screen');
  };

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
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
        <Form className="w-100 h-100 d-flex flex-column" id="nursing-info">
          <Form.Group className="input-detail user-detail d-flex flex-column">
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　新規登録</h5>
                </Col>
              </Form.Group>

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
                  表題
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
                controlId="form_person_in_charge"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  本文
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
                        style={{ height: '100px' }}
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
                controlId="form_subject"
              >
                <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                ファイル添付
                </Form.Label>
                <Col sm={12} md={8}>

                  <div className='mt-2'>
                  <Form.Control
                    type="file"
                    required
                    name="image"
                    accept="image/*"
                    className='mt-2 w-auto mt-md-0'
                    id="file"
                    />
                  </div>
                  <div className='mt-2'>
                  <Form.Control
                    type="file"
                    required
                    name="image"
                    accept="image/*"
                    className='mt-2 w-auto mt-md-0'
                    id="file"
                    />
                  </div>

                  <div className='mt-2'>
                  <Form.Control
                    type="file"
                    required
                    name="image"
                    accept="image/*"
                    className='mt-2 w-auto mt-md-0'
                    id="file"
                    />
                  </div>
                  <div className='mt-2'>
                  <Form.Control
                    type="file"
                    required
                    name="image"
                    accept="image/*"
                    className='mt-2 w-auto mt-md-0'
                    id="file"
                    />
                  </div>
                  <div className='mt-2'>
                  <Form.Control
                    type="file"
                    required
                    name="image"
                    accept="image/*"
                    className='mt-2 w-auto mt-md-0'
                    id="file"
                    />
                  </div>
                </Col>
              </Form.Group>
            </div>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div mt-4"
              controlId="form_button_container"
            >
              <Col sm={10} className="mt-2-div">
                <Button
                  variant="success"
                  onClick={handleOnSave}
                  className="min-w-btn-150"
                >
                  登録
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
             {isShowDialogUpdate && (
              <DialogConfirm
                buttons={buttons}
                message='データを更新しました'
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

// eslint-disable-next-line react-refresh/only-export-components
export default TR0040;
