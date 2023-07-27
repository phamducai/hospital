/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: USv0070
 * PG NAME: 訪問看護基本情報新規登録 (Home-visit nursing basic information new registration)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Col } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import '@assets/scss/user/detail/nursingInfo.scss';
import {
  INSU,
  WAREKI,
  REASON
} from '@/data/user-list';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
import CustomHeading from '@/components/user/detail/TextHeader';
function USv0070() {

  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowDialogRegister, setShowDialogRegister] = useState(false);


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
  }

  const handleOnClose = () => {
    navigate('/user/detail/nursing-basic-info')
  }



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
      <div className="main">
        {/* Page nursing detail*/}
        <Form
          className="w-100 h-100 d-flex flex-column"
          id='nursing-info'
          ref={refUserDialog}
          noValidate
          validated={validated}
        >
          <CustomHeading title="利用者基本情報" />
          <TabUserDetail active={2} />
          <Form.Group className="input-detail user-detail d-flex flex-column">
            {/* ◆　訪問看護基本情報１ */}
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　訪問看護基本情報１</h5>
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
                  記録日<span className="color-text-custom">【必】</span>
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
                            // required
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            name="record_date"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
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
                controlId="form_person_in_charge"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  担当職員<span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <Form.Control
                        type="text"
                        name="person_in_charge"
                        className="w-50"
                        required
                      />
                      <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                        <Button className="ms-2">職</Button>
                        <Form.Label className="mt-2">　森泉　澄代</Form.Label>
                      </div>
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
                  訪問職種
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                      <Form.Check
                        name="health_nurse"
                        label="保健師"
                      />
                      <Form.Check
                        name="nurse"
                        label="看護師"
                        className="ms-4"
                      />
                      <Form.Check
                        name="assistant_nurse"
                        label="准看護師"
                        className="ms-4"
                      />
                      <Form.Check
                        name="therapist"
                        label="作業療法士"
                        className="ms-4"
                      />
                    </div>
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
                  保険種別<span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <Form.Select
                      name="insu"
                      className="w-50 w-sm-100 mt-2 mt-md-0"
                      required
                    >
                      {INSU.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </Form.Select>
                    <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-0">
                      <Form.Check
                        placeholder="半角数字"
                        name="medicMental"
                        label="精神"
                      // onChange={(e) => handleOnChangeValue(e)}
                      />
                      <Form.Check
                        name="careRoutine"
                        label="定期巡回"
                        // onChange={(e) => handleOnChangeValue(e)}
                        className="ms-4"
                      />
                    </div>
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
                  初回訪問年月日
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select
                            name="record_date"
                          // onChange={(e) => handleOnChangeValue(e)}
                          >
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          <Form.Control
                            type="text"
                            name="record_year"
                            // onChange={(e) => handleOnChangeValue(e)}
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            name="record_month"
                            // onChange={(e) => handleOnChangeValue(e)}
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            name="record_date"
                            // onChange={(e) => handleOnChangeValue(e)}
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
                  初回訪問時間
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Control
                            type="text"
                            name="start_hour"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                          />
                          <div className="px-2">:</div>
                          <Form.Control
                            type="text"
                            name="start_minute"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                          />
                          <div className="px-2">～</div>
                          <Form.Control
                            type="text"
                            name="end_hour"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                          />
                          <div className="px-2">:</div>
                          <Form.Control
                            type="text"
                            name="end_minute"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                          />
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
                  訪問終了年月日
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select
                            name="record_date"
                          // onChange={(e) => handleOnChangeValue(e)}
                          >
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          <Form.Control
                            type="text"
                            name="record_year"
                            // onChange={(e) => handleOnChangeValue(e)}
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            name="record_month"
                            // onChange={(e) => handleOnChangeValue(e)}
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            name="record_date"
                            // onChange={(e) => handleOnChangeValue(e)}
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
                    <Form.Control
                      type="text"
                      placeholder=""
                      maxLength={2}
                      name="start_hour"
                      // onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-50 me-2 min-w-input-validate"
                    />
                    :
                    <Form.Control
                      type="text"
                      placeholder=""
                      maxLength={2}
                      name="start_minute"
                      // onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-50 ms-2 me-2 min-w-input-validate"
                    />
                    <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                      ＜半角数字＞
                    </div>
                  </div>
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
                  病識
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
                    name="sickness"
                    placeholder="病識"
                    style={{ height: '100px' }}
                  />
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
                  現往歴
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
                    name="past"
                    placeholder="現往歴"
                    style={{ height: '100px' }}
                  />
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
                  療養状況
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
                    name="medical_condition"
                    placeholder="療養状況"
                    style={{ height: '100px' }}
                  />
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
                  介護状況
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
                    name="nursing_situation"
                    placeholder="介護状況"
                    style={{ height: '100px' }}
                  />
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
                  生活歴
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
                    name="life_history"
                    placeholder="生活歴"
                    style={{ height: '100px' }}
                  />
                </Col>
              </Form.Group>


              <Form.Group
                as={Row}
                className="mb-2 form-group-container "
                controlId="form_date_of_death"
              >
                <Col sm={8} className="bg-light-yellow mt-2-div mt-2 ms-10 w-68">
                  <Form.Label>
                    以下の項目は、統計情報／フェースシートに使用する項目です。
                  </Form.Label>
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
                  開始前の場所
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <Form.Control
                      type="text"
                      placeholder="開始前の場所"
                      name="place_before_start"
                    />
                    <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                      ＜全角＞
                    </div>
                  </div>
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
                  依頼元
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <Form.Control
                      type="text"
                      placeholder="依頼元"
                      name="requester"
                    // onChange={(e) => handleOnChangeValue(e)}
                    />
                    <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                      ＜全角＞
                    </div>
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
                  契約年月日
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select
                            name="record_date"
                          >
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          <Form.Control
                            type="text"
                            name="record_year"
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
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

              {/* <Form.Group
                as={Row}
                className="mb-2 form-group-container"
                controlId="form_date_of_birth"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  終結理由
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <Form.Select
                      name="insu"
                      className="w-sm-100 mt-2 mt-md-0"
                    >
                      {REASON.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </Form.Select>
                    <Col sm={12} md={8}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0 ms-3">
                        <Form.Control
                          type="text"
                          required
                          placeholder="終結理由"
                          name="requester"
                          readOnly={true}
                        />
                        <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                          ＜全角＞
                        </div>
                      </div>
                      <Form.Control.Feedback type="invalid">
                        開始前の場所を入力してください。
                      </Form.Control.Feedback>
                    </Col>
                  </div>
                </Col>
              </Form.Group> */}

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
                  終結理由
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <Col sm={12} md={1}>
                      <Form.Select
                        name="insu"
                        className="w-sm-100 mt-2 mt-md-0 full-width-select"
                        defaultValue={REASON[6]}
                      >
                        {REASON.map((item, index) => (
                          <option key={index}>{item}</option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col sm={8} md={8}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0 ms-md-5">
                        <Form.Control
                          type="text"
                          required
                          placeholder="終結理由"
                          name="requester"
                          readOnly={true}
                        />
                        <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                          ＜全角＞
                        </div>
                      </div>
                    </Col>
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
                    登録
                  </Button>
                  <Button
                    variant="light"
                    onClick={handleOnClose}
                    className="btn-min-w border-primary"
                  >
                    閉じる
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
            </div>

          </Form.Group>
        </Form>
      </div>
    </MasterLayout >
  );
}

export default USv0070;
