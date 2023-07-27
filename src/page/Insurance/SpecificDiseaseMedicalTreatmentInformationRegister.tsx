/**
 * PG ID: USh0040
 * PG NAME: 入退院情報新規登録 (Hospital admission/discharge information new registration)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Form, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { WAREKI, num } from '@/data/user-list';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useState, useRef } from 'react';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';

function SpecificDiseaseMedicalTreatmentInformationRegister() {
  const navigate = useNavigate();
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowDialogRegister, setShowDialogRegister] = useState(false);
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [validated, setValidated] = useState(false);
  const handleOnClose = () => {
    navigate('/user/insurance/specific-disease-medical-treatment');
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
      },
    ]);
    setShowDialogRegister(true);
  };
  const handleCloseDialogRegister = () => {
    setShowDialogRegister(false);
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={5} arrayButton={itemTabInsurance} />
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
            <h5>◆ 特定疾病療養受療情報</h5>
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
                交付年月日<span className="color-text-custom"></span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <Col sm={12}>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Select
                          name="record_date"
                          defaultValue={WAREKI[5]}
                          // required
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
                          // required
                        />
                        <div className="px-2">年</div>
                        <Form.Control
                          type="text"
                          // required
                          name="record_month"
                          className="max-w-50 min-w-input-validate"
                          maxLength={2}
                        />
                        <div className="px-2">月</div>
                        <Form.Control
                          type="text"
                          // required
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
              controlId="form_date_of_birth"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                発効期日<span className="color-text-custom"></span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <Col sm={12}>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Select
                          name="record_date"
                          defaultValue={WAREKI[5]}
                          // required
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
                          // required
                        />
                        <div className="px-2">年</div>
                        <Form.Control
                          type="text"
                          // required
                          name="record_month"
                          className="max-w-50 min-w-input-validate"
                          maxLength={2}
                        />
                        <div className="px-2">月</div>
                        <Form.Control
                          type="text"
                          // required
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
              controlId="form_date_of_birth"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                有効開始年月日<span className="color-text-custom">【必 </span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <Col sm={12}>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Select
                          name="record_date"
                          defaultValue={WAREKI[5]}
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
              controlId="form_date_of_birth"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                有効期限<span className="color-text-custom"></span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <Col sm={12}>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Select
                          name="record_date"
                          defaultValue={WAREKI[5]}
                          // required
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
                          // required
                        />
                        <div className="px-2">年</div>
                        <Form.Control
                          type="text"
                          // required
                          name="record_month"
                          className="max-w-50 min-w-input-validate"
                          maxLength={2}
                        />
                        <div className="px-2">月</div>
                        <Form.Control
                          type="text"
                          // required
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
                className="bg-light-yellow label-dialog"
              >
                自己負担限度額<span className="color-text-custom"></span>
                <span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={8}>
                <Row>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <div className="d-flex justify-content-start align-items-center">
                      <Form.Select
                        name="record_date"
                        defaultValue={num}
                        required
                      >
                        {num.map((num, index) => (
                          <option key={index}>{num}</option>
                        ))}
                      </Form.Select>
                      <div className="fz-12 ps-xs-0 ps-sm-1 ms-2 min-width-25 me-0">
                        円
                      </div>
                    </div>
                  </div>
                </Row>
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
                message="データを登録しました。"
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

export default SpecificDiseaseMedicalTreatmentInformationRegister;
