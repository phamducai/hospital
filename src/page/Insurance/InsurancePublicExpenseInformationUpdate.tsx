/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: InsurancePublicExpenseInformationUpdate
 * PG NAME: 保険公費情報アップデート1更新 (Insurance Public Expense Information Update 1 update)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Col } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import '@assets/scss/user/detail/insurance/insurance.scss';
import { WAREKI, INSUR, INSURANCE_TYPE } from '@/data/user-list';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';

function InsurancePublicExpenseInformationUpdate() {
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
    navigate('/user/insurance/medical-insurance/0');
  };
  const handleOffClose = () => {
    navigate('/top');
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
      },
    ]);
    setShowDialogUpdate(true);
  };
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
          <TabButtonLink active={1} arrayButton={itemTabInsurance} />
          {/* 訪問看護基本情報１ */}
          <Form.Group className="input-detail user-detail d-flex flex-column">
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆医療保険情報</h5>
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
                  資格取得年月日<span className="color-text-custom"></span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select
                            name="record_date"
                            defaultValue={WAREKI[4]}
                            required
                          >
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          {/* <Form.Control.Feedback
                            type="invalid"
                            className="ms-1"
                          >
                            記録日を入力してください。
                          </Form.Control.Feedback> */}
                          <Form.Control
                            type="text"
                            name="record_year"
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                            required
                            defaultValue="04"
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="10"
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="01"
                            name="record_date"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">日</div>
                        </div>
                        <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
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
                  交付年月日<span className="color-text-custom"></span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select
                            name="record_date"
                            defaultValue={WAREKI[4]}
                            required
                          >
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          {/* <Form.Control.Feedback
                            type="invalid"
                            className="ms-1"
                          >
                            記録日を入力してください。
                          </Form.Control.Feedback> */}
                          <Form.Control
                            type="text"
                            name="record_year"
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                            required
                            defaultValue="04"
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="10"
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="01"
                            name="record_date"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">日</div>
                        </div>
                        <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
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
                  有効開始年月日
                  <span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select
                            name="record_date"
                            defaultValue={WAREKI[4]}
                            required
                          >
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          {/* <Form.Control.Feedback
                            type="invalid"
                            className="ms-1"
                          >
                            記録日を入力してください。
                          </Form.Control.Feedback> */}
                          <Form.Control
                            type="text"
                            name="record_year"
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                            required
                            defaultValue="04"
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="10"
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="01"
                            name="record_date"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">日</div>
                        </div>
                        <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
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
                            defaultValue={WAREKI[4]}
                            required
                          >
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          {/* <Form.Control.Feedback
                            type="invalid"
                            className="ms-1"
                          >
                            記録日を入力してください。
                          </Form.Control.Feedback> */}
                          <Form.Control
                            type="text"
                            name="record_year"
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                            required
                            defaultValue="05"
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="09"
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="30"
                            name="record_date"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">日</div>
                        </div>
                        <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
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
                controlId="form_person_in_charge"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  保険者区分<span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <Form.Select
                        name="record_date"
                        // onChange={(e) => handleOnChangeValue(e)}
                        defaultValue={INSUR[1]}
                        required
                      >
                        {INSUR.map((insur, index) => (
                          <option key={index}>{insur}</option>
                        ))}
                      </Form.Select>
                    </div>
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_date_of_birth"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  保険者番号<span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center left">
                        <Form.Control
                          className="w-50 w-sm-100"
                          maxLength={3}
                          required
                          defaultValue="370000"
                        />
                      </div>
                      <Button className="m-left">保険者検索</Button>
                      <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                        ＜半角＞
                      </div>
                    </div>
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
                  保険者名称<span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <Form.Control
                        type="text"
                        placeholder="開始前の場所"
                        name="place_before_start"
                        defaultValue="高松市"
                        className="input-80"
                      />
                      <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                        ＜全角＞
                      </div>
                    </div>
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
                  被保険者記号
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-left">
                          <Form.Control
                            className="w-50 w-sm-100"
                            name="place_before_start"
                            maxLength={3}
                            required
                            defaultValue="11-22"
                          />
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
                  被保険者番号
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Control
                            className="w-50 w-sm-100"
                            maxLength={3}
                            required
                            defaultValue="12345"
                          />
                        </div>
                        <div className="fz-12 ps-xs-0 ps-sm-1 m-left min-width-25 me-0">
                          （枝番）
                        </div>
                        <Col sm={12} md={8}>
                          <Row>
                            <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                              <div className="d-flex justify-content-start align-items-center">
                                <Form.Control
                                  type="text"
                                  name="record_year"
                                  // onChange={(e) => handleOnChangeValue(e)}
                                  className="max-w-50 ms-2 min-w-input-validate"
                                  maxLength={2}
                                  required
                                  defaultValue="01"
                                />
                              </div>
                            </div>
                          </Row>
                        </Col>
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
                  保険種類<span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select
                            name="record_date"
                            defaultValue={INSURANCE_TYPE[3]}
                            required
                          >
                            {INSURANCE_TYPE.map((insurance_type, index) => (
                              <option key={index}>{insurance_type}</option>
                            ))}
                          </Form.Select>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container"
                controlId="form_time_of_death"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  訪問終了時間
                </Form.Label>
                <Col sm={8}>
                  <div className="d-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <Form.Select
                      disabled={true}
                      name="record_date"
                      defaultValue={INSUR}
                      required
                    >
                      {INSUR.map((insurance, index) => (
                        <option key={index}>{insurance}</option>
                      ))}
                    </Form.Select>
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
                  <Button
                    variant="light"
                    onClick={handleOffClose}
                    className="btn-min-w-30 border-primary"
                  >
                    一覧に戻る
                  </Button>
                </Col>
              </Form.Group>

              {isShowDialogUpdate && (
                <DialogConfirm
                  buttons={buttons}
                  message="データを更新しました。"
                  onHidePopup={handleCloseDialogUpdate}
                  className="w-dialog-confirm"
                />
              )}
            </div>
          </Form.Group>
        </Form>
      </div>
    </MasterLayout>
  );
}

export default InsurancePublicExpenseInformationUpdate;
