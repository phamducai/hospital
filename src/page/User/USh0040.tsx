/**
 * PG ID: USh0040
 * PG NAME: 入退院情報新規登録 (Hospital admission/discharge information new registration)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Form, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import {
  WAREKI,
  KINDS
} from '@/data/user-list';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useState, useRef } from 'react';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
function USh0040() {
  const navigate = useNavigate();
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowDialogRegister, setShowDialogRegister] = useState(false);
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [validated, setValidated] = useState(false);
  const handleOnClose = () => {
    navigate('/user/detail/admission-discharge-info');
  }

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
    handleDialogRegister();
  };

  const handleDialogRegister = () => {

    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          handleCloseDialogRegister();
        },
        className: 'button-dialog',
      }
    ]);
    setShowDialogRegister(true);
  }
  const handleCloseDialogRegister = () => {
    setShowDialogRegister(false);
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabUserDetail active={3} />
      <Form
        className="w-100 h-100 d-flex flex-column "
        ref={refUserDialog}
        noValidate
        validated={validated}
      >
        <Form.Group
          as={Row}
          className="mb-2 mt-3 form-group-container mt-3-div"
          controlId="form_user_id"

        >
          <Col sm={9} className="text-start">
            <h5>入退院情報</h5>
          </Col>
        </Form.Group>

        <Form.Group className=" user-detail  d-flex flex-column">
          <Form.Group className=" user-detail d-flex flex-column pt-3">
            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_user_id"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog "
              >
                種類<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Select
                    name="record_date"
                    required
                  >
                    {KINDS.map((wareki, index) => (
                      <option key={index}>{wareki}</option>
                    ))}
                  </Form.Select>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_date_of_birth"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                年月日<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <Col sm={12}>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Select
                          name="record_date"
                          required
                        >
                          {WAREKI.map((wareki, index) => (
                            <option key={index}>{wareki}</option>
                          ))}
                        </Form.Select>
                        {/* <Form.Control.Feedback type="invalid" className='ms-1'>
                          記録日を入力してください。
                        </Form.Control.Feedback> */}
                        <Form.Control
                          type="text"
                          name="record_year"
                          className="max-w-50 ms-2 min-w-input-validate"
                          maxLength={2}
                          required
                        />
                        <div className="px-2">年</div>
                        <Form.Control
                          type="text"
                          required
                          name="record_month"
                          className="max-w-50 min-w-input-validate"
                          maxLength={2}
                        />
                        <div className="px-2">月</div>
                        <Form.Control
                          type="text"
                          required
                          name="record_date"
                          className="max-w-50 min-w-input-validate"
                          maxLength={2}
                        />
                        <div className="px-2">日</div>
                      </div>
                      <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                        ＜半角数字＞
                      </div>
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
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog "
              >
                入院先施設名
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    placeholder="入院先施設名"
                    name="place_before_start"
                    className='input-80'
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜全角＞
                  </div>
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
                  className="btn-min-w"
                  onClick={handleOnSave}
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
            {isShowDialogRegister && (
              <DialogConfirm
                buttons={buttons}
                message='データを登録しました。'
                onHidePopup={handleCloseDialogRegister}
                className="w-dialog-confirm"
              />
            )}
          </Form.Group>
        </Form.Group>
      </Form>
    </MasterLayout>
  );
}

export default USh0040;
