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
import { Button, Col } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { hideDialog } from '@/store/user/userSlice';
import { useDispatch } from 'react-redux';
import '@assets/scss/user/detail/insurance/insurance.scss';
import {
  applicable_distinction,
  legal_number,
  WAREKI,
  INSU,
  DEFAULT_USER_INFORMATION,
} from '@/data/user-list';
import { setSelectRow } from '@/store/user/userSlice';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';
import { Person } from '@/interfaces/Person';
import '@assets/scss/user/detail/insurance/insurance.scss';

function IntelligencePublicExpenseUpdate() {
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [tableSelectedItem] = useState<Person | null>(null);
  const [targetRow, setTargetRow] = useState<Person>(DEFAULT_USER_INFORMATION);
  const [showOnly] = useState(false);
  const [isShowDialogRegister, setShowConfirmDialog] = useState(false);
  const dispatch = useDispatch();
  const [, setMessageDialog] = useState('');
  const [tableData, setTableData] = useState<Array<Person>>([]);
  const [targetIndex] = useState<number>(-1); // Not in array index by default for register processing

  const handleOnClose = () => {
    navigate('/user/insurance/intelligence-public-expense/0');
  };

  const saveUserInfo = () => {
    tableData[targetIndex] = targetRow;
    setTableData(tableData);
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

    saveUserInfo();
    setMessageDialog('変更内容を保存しました。');

    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          handleCloseDialogConfirm();
        },
        className: 'button-dialog',
      },
    ]);

    timeout = setTimeout(() => {
      setShowConfirmDialog(true);
    }, 150);
  };

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
    dispatch(hideDialog());
  };

  const validateFormInput = () => {
    return refUserDialog.current && !refUserDialog.current.checkValidity();
  };

  const handleClose = () => {
    // localStorage.clear();
    dispatch(setSelectRow(null));
    navigate('/user/insurance/intelligence-public-expense');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChangeValue = (e: React.ChangeEvent<any>) => {
    setTargetRow((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <MasterLayout userInfo={tableSelectedItem}>
      <div className="main">
        {/* Page intelligence public expense update*/}
        <Form
          ref={refUserDialog}
          noValidate
          validated={validated}
          className="w-100 h-100 d-flex flex-column"
        >
          <CustomHeading title="公費情報" />
          <TabButtonLink active={7} arrayButton={itemTabInsurance} />
          <Form.Group className="input-detail user-detail d-flex flex-column">
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　公費情報</h5>
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
                  交付年月日<span className="color-text-custom">【必】</span>
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
                            disabled={true}
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
                            disabled={true}
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
                            disabled={true}
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
                            disabled={true}
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
                            defaultValue={WAREKI[5]}
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
                  有効終了年月日
                  <span className="color-text-custom">【必】</span>
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
                            required
                            defaultValue="09"
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            required
                            defaultValue="30"
                            name="record_date"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
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
                controlId="form_gender"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  保険種別
                  <span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={8}>
                  <Form.Select
                    name="INSU"
                    defaultValue={INSU[1]}
                    required
                    disabled={true}
                  >
                    {INSU.map((INSU, index) => (
                      <option key={index}>{INSU}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container"
                controlId="form_gender"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  法別番号
                  <span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={8}>
                  <Form.Select
                    name="legal_number"
                    defaultValue={legal_number[18]}
                    required
                    disabled={true}
                  >
                    {legal_number.map((legal_number, index) => (
                      <option key={index}>{legal_number}</option>
                    ))}
                  </Form.Select>
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
                  優先順位<span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Control
                          type="text"
                          defaultValue="10"
                          name="zip_code_1"
                          readOnly={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                          className="w-50 w-sm-100"
                          maxLength={2}
                          required
                        />
                      </div>
                      <div className="col-9-yen">＜半角数字＞</div>
                    </div>
                  </Row>
                </Col>
              </Form.Group>

              {/* Insurance type */}
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
                  <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-0">
                  <div className="check-radios-1">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked required/>
                    <label className="form-check-label">
                    保険優先（保険＋公費の併用）
                    </label>
                  </div>
                  <br />
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" required/>
                    <label className="form-check-label">
                    公費優先（公費単独）
                    </label>
                  </div>
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
                  className="bg-light-yellow label-dialog"
                >
                  公費負担内容
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <div className="px-2">指定難病</div>
                      </div>
                    </div>
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
                  公費負担者番号
                  <span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Control
                          type="text"
                          defaultValue="54111111"
                          name="zip_code_1"
                          readOnly={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                          className="w-50 w-sm-100"
                          maxLength={8}
                          required
                        />
                      </div>
                      <div className="col-9-yen">＜半角数字＞</div>
                    </div>
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
                  受給者番号<span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Control
                          type="text"
                          defaultValue="1234567"
                          name="zip_code_1"
                          readOnly={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                          className="w-50 w-sm-100"
                          maxLength={7}
                          required
                        />
                      </div>
                      <div className="col-9-yen">＜半角数字＞</div>
                    </div>
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
                  自己負担上限額
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Control
                          type="text"
                          defaultValue="10000"
                          name="yen"
                          readOnly={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                          className="w-50 w-sm-100"
                          maxLength={6}
                        />
                      </div>
                      <div className="col-9-yen">円 ＜半角数字＞</div>
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
                  className="bg-light-yellow label-dialog align-middle"
                >
                  自己負担額
                  <br></br>
                  （月額累計）
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                    <Form.Label
                      column
                      sm={4}
                      className="ms-0 bg-light-yellow label-dialog align-middle"
                      style={{ width: '33rem' }}
                    >
                      <span className="px-2">
                        自己負担上限額管理票の自己負担額（月額累計）を入力してください。
                      </span>
                    </Form.Label>
                  </div>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select defaultValue={WAREKI[5]} required>
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            生年月日を入力してください。
                          </Form.Control.Feedback>
                          <Form.Control
                            type="text"
                            value={targetRow.birthday}
                            name="birthday_year"
                            readOnly={showOnly}
                            onChange={(e) => handleOnChangeValue(e)}
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                            defaultValue=""
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            value={targetRow.birthday}
                            name="birthday_month"
                            readOnly={showOnly}
                            onChange={(e) => handleOnChangeValue(e)}
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            defaultValue=""
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            value={targetRow.contact_zip1}
                            name="yen"
                            readOnly={showOnly}
                            onChange={(e) => handleOnChangeValue(e)}
                            className="max-w-50 min-w-input-validate"
                            maxLength={6}
                            defaultValue=""
                          />
                          <div className="px-2">円</div>
                        </div>
                        <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                          <Button className="ms-2">▼追加</Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Form.Control
                    as="textarea"
                    name="emergency_contact"
                    placeholder=""
                    style={{ height: '100px' }}
                    defaultValue=""
                  />
                </Col>
              </Form.Group>

              {/* Insurance type */}
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
                  請求対象
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-0">
                  <div className="check-radios-1">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label className="form-check-label">
                    対象とする
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label">
                    対象としない
                    </label>
                  </div>
                </div>
                  </div>
                </Col>
              </Form.Group>

              <div>
                <Form.Group
                  as={Row}
                  className="mb-2 mt-4 form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={9} className="text-start">
                    <h5>◆　適用区分情報</h5>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-2 form-group-container"
                  controlId="form_gender"
                >
                  <Form.Label
                    column
                    sm={4}
                    className="bg-light-yellow label-dialog"
                  >
                    適用区分
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Select
                      name="applicable_distinction"
                      defaultValue={applicable_distinction[14]}
                    >
                      {applicable_distinction.map(
                        (applicable_distinction, index) => (
                          <option key={index}>{applicable_distinction}</option>
                        ),
                      )}
                    </Form.Select>
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
                    高額療養費
                    <br />
                    負担上限額
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Control
                            type="text"
                            defaultValue="57600"
                            name="yen"
                            readOnly={showOnly}
                            onChange={(e) => handleOnChangeValue(e)}
                            className="w-50 w-sm-100"
                            maxLength={6}
                          />
                        </div>
                        <div className="col-9-yen">円</div>
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
                    高額療養費
                    <br />
                    負担上限額（変動）
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                      <Col sm={12}>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <div className="d-flex justify-content-start align-items-center">
                            <Form.Select defaultValue={WAREKI[5]} required>
                              {WAREKI.map((wareki, index) => (
                                <option key={index}>{wareki}</option>
                              ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              生年月日を入力してください。
                            </Form.Control.Feedback>
                            <Form.Control
                              type="text"
                              value={targetRow.birthday}
                              name="birthday_year"
                              readOnly={showOnly}
                              onChange={(e) => handleOnChangeValue(e)}
                              className="max-w-50 ms-2 min-w-input-validate"
                              maxLength={2}
                            />
                            <div className="px-2">年</div>
                            <Form.Control
                              type="text"
                              // required
                              value={targetRow.birthday}
                              name="birthday_month"
                              readOnly={showOnly}
                              onChange={(e) => handleOnChangeValue(e)}
                              className="max-w-50 min-w-input-validate"
                              maxLength={2}
                            />
                            <div className="px-2">月</div>
                            <Form.Control
                              type="text"
                              // required
                              value={targetRow.birthday}
                              name="birthday_date"
                              readOnly={showOnly}
                              onChange={(e) => handleOnChangeValue(e)}
                              className="max-w-50 min-w-input-validate"
                              maxLength={6}
                            />
                            <div className="px-2">円</div>
                          </div>
                          <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                            <Button className="ms-2">▼追加</Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <div className="d-flex justify-content-start align-items-center">
                            <Form.Select defaultValue={WAREKI[5]} required>
                              {WAREKI.map((wareki, index) => (
                                <option key={index}>{wareki}</option>
                              ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              生年月日を入力してください。
                            </Form.Control.Feedback>
                            <Form.Control
                              type="text"
                              value={targetRow.birthday}
                              name="birthday_year"
                              readOnly={showOnly}
                              onChange={(e) => handleOnChangeValue(e)}
                              className="max-w-50 ms-2 min-w-input-validate"
                              maxLength={2}
                              defaultValue="05"
                            />
                            <div className="px-2">年</div>
                            <Form.Control
                              type="text"
                              // required
                              value={targetRow.birthday}
                              name="birthday_month"
                              readOnly={showOnly}
                              onChange={(e) => handleOnChangeValue(e)}
                              className="max-w-50 min-w-input-validate"
                              maxLength={2}
                              defaultValue="02"
                            />
                            <div className="px-2">月</div>
                            <Form.Control
                              type="text"
                              // required
                              value={targetRow.birthday}
                              name="birthday_date"
                              readOnly={showOnly}
                              onChange={(e) => handleOnChangeValue(e)}
                              className="max-w-50 min-w-input-validate"
                              maxLength={6}
                              defaultValue="5000"
                            />
                            <div className="px-2">円</div>
                          </div>
                          <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                            <Button className="ms-2">▼追加</Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <div className="d-flex justify-content-start align-items-center">
                            <Form.Select defaultValue={WAREKI[5]} required>
                              {WAREKI.map((wareki, index) => (
                                <option key={index}>{wareki}</option>
                              ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              生年月日を入力してください。
                            </Form.Control.Feedback>
                            <Form.Control
                              type="text"
                              value={targetRow.birthday}
                              name="birthday_year"
                              readOnly={showOnly}
                              onChange={(e) => handleOnChangeValue(e)}
                              className="max-w-50 ms-2 min-w-input-validate"
                              maxLength={2}
                              defaultValue="05"
                            />
                            <div className="px-2">年</div>
                            <Form.Control
                              type="text"
                              // required
                              value={targetRow.birthday}
                              name="birthday_month"
                              readOnly={showOnly}
                              onChange={(e) => handleOnChangeValue(e)}
                              className="max-w-50 min-w-input-validate"
                              maxLength={2}
                              defaultValue="01"
                            />
                            <div className="px-2">月</div>
                            <Form.Control
                              type="text"
                              // required
                              value={targetRow.birthday}
                              name="birthday_date"
                              readOnly={showOnly}
                              onChange={(e) => handleOnChangeValue(e)}
                              className="max-w-50 min-w-input-validate"
                              maxLength={6}
                              defaultValue="1000"
                            />
                            <div className="px-2">円</div>
                          </div>
                          <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                            <Button className="ms-2">▼追加</Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-2 form-group-container"
                  controlId="form_date_of_death"
                >
                  <Form.Label
                    column
                    sm={4}
                    className="bg-light-yellow label-dialog"
                  >
                    資料
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                      <Col sm={12}>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <div className="px-2">
                            １ヶ月の負担上限額算出方法⇒
                            <a href="#"> 厚生労働省資料 </a>
                            <span>　</span>
                            <a href="#"> 協会けんぽＨＰ </a>
                          </div>
                        </div>
                      </Col>
                    </Row>
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
                    className="btn-min-w border-primary"
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
                    onClick={handleClose}
                    className="btn-min-w border-primary"
                  >
                    一覧に戻る
                  </Button>
                </Col>
              </Form.Group>
              {isShowDialogRegister && (
                <DialogConfirm
                  buttons={buttons}
                  message="データを更新しました。"
                  onHidePopup={handleOnSave}
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

export default IntelligencePublicExpenseUpdate;
