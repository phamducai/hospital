/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: US00050
 * PG NAME: 利用者情報新規登録 (User information new registration)
 */
import MasterLayout from '@/layout/MasterLayout';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { Person, RenderName } from '@/interfaces/Person';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import {
  DEFAULT_USER_INFORMATION,
  WAREKI,
  INSU,
  DEFAULT_VALUES,
} from '@/data/user-list';
import { useDispatch } from 'react-redux';
import { hideDialog } from '@/store/user/userSlice';
import { useNavigate } from 'react-router';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';
import '@assets/scss/user/detail/insurance/insurance.scss';

function IntelligencePublicExpenseRegister() {
  const [validated, setValidated] = useState(false);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [tableSelectedItem] = useState<Person | null>(null);
  const [tableData, setTableData] = useState<Array<Person>>([]);
  const [targetRow, setTargetRow] = useState<Person>(DEFAULT_USER_INFORMATION);

  const [targetIndex] = useState<number>(-1); // Not in array index by default for register processing
  const [showOnly] = useState(false);
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const dispatch = useDispatch();

  const [valRenderName, setValRenderName] =
    useState<RenderName>(DEFAULT_VALUES);
  const [valName, setValName] = useState('');
  const [valKanaName, setValKanaName] = useState('');
  const [valAddress1, setValAddress1] = useState('');
  const [valAddress2, setValAddress2] = useState('');
  const [valAddress3, setValAddress3] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setValidated(false);
    setValRenderName(DEFAULT_VALUES);
    setValName('');
    setValKanaName('');
    setValAddress1('');
    setValAddress2('');
    setValAddress3('');
  }, []);

  useEffect(() => {
    setValRenderName({
      ...valRenderName,
      address: valAddress1 + valAddress2 + valAddress3,
    });
  }, [valAddress1, valAddress2, valAddress3]);

  useEffect(() => {
    setValRenderName({
      ...valRenderName,
      name: valName,
    });
  }, [valName]);

  useEffect(() => {
    setValRenderName({
      ...valRenderName,
      kanaName: valKanaName,
    });
  }, [valKanaName]);

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
    dispatch(hideDialog());
  };

  const validateFormInput = () => {
    return refUserDialog.current && !refUserDialog.current.checkValidity();
  };

  const saveUserInfo = () => {
    tableData[targetIndex] = targetRow;
    setTableData(tableData);
  };

  // Save
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
    setMessageDialog('データを登録しました。');

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

  // Close Button
  const handleOnClose = () => {
    navigate('/user/insurance/intelligence-public-expense');
  };

  const handleClose = () => {
    navigate('#');
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
        <Form
          ref={refUserDialog}
          noValidate
          validated={validated}
          className="w-100 h-100 d-flex flex-column"
        >
          <CustomHeading title="公費情報" />
          <TabButtonLink active={7} arrayButton={itemTabInsurance} />
          <Form.Group
            as={Row}
            className="my-2 form-group-container"
            controlId="form_button_container"
          >
            <Col sm={9} className="text-start">
              <h5>◆　公費情報</h5>
            </Col>
          </Form.Group>
          <Form.Group className="user-detail d-flex flex-column">
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
                          required
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
                          required
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
                          required
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
                有効開始年月日<span className="color-text-custom">【必】</span>
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
                          required
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
                          required
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
                          required
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
              controlId="form_date_of_death"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                有効終了年月日<span className="color-text-custom">【必】</span>
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
                          value={targetRow.deathday}
                          name="deathday_year"
                          readOnly={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                          className="max-w-50 ms-2 min-w-input-validate"
                          maxLength={2}
                          required
                        />
                        <div className="px-2">年</div>
                        <Form.Control
                          type="text"
                          value={targetRow.deathday}
                          name="deathday_month"
                          readOnly={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                          className="max-w-50 min-w-input-validate"
                          maxLength={2}
                          required
                        />
                        <div className="px-2">月</div>
                        <Form.Control
                          type="text"
                          value={targetRow.deathday}
                          name="deathday_date"
                          readOnly={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
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
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Select
                    defaultValue="医療"
                    name="insurance"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="w-50 w-sm-100 mt-2 mt-md-0"
                    required
                  >
                    {INSU.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </Form.Select>
                </div>
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
                  name="record_date"
                  defaultValue={''}
                  // required
                ></Form.Select>
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
                        readOnly={showOnly}
                        onChange={(e) => handleOnChangeValue(e)}
                        className="max-w-60 min-w-input-max-3"
                        maxLength={2}
                        required
                      />
                    </div>
                    <div className="px-2">＜半角数字＞</div>
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
                      <div className="px-2"></div>
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
                公費負担者番号<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <div className="d-flex justify-content-start align-items-center">
                      <Form.Control
                        type="text"
                        readOnly={showOnly}
                        onChange={(e) => handleOnChangeValue(e)}
                        className="max-w-60 min-w-input-max-3"
                        maxLength={8}
                        required
                      />
                    </div>
                    <div className="px-2">＜半角数字＞</div>
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
                        readOnly={showOnly}
                        onChange={(e) => handleOnChangeValue(e)}
                        className="max-w-60 min-w-input-max-3"
                        maxLength={7}
                        required
                      />
                    </div>
                    <div className="px-2">＜半角数字＞</div>
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
                優先順位
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <div className="d-flex justify-content-start align-items-center">
                      <Form.Control
                        type="text"
                        readOnly={showOnly}
                        onChange={(e) => handleOnChangeValue(e)}
                        className="max-w-60 min-w-input-max-3"
                        maxLength={6}
                      />
                      <span className="px-2">円</span>
                    </div>
                    <div className="px-2">＜半角数字＞</div>
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
                    style={{ width: '37rem' }}
                  >
                    <span className="align-table-1st-row">
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
                保険種別
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
                戻る
              </Button>

              {/* previous copy button */}
              <Button
                variant="light"
                onClick={handleClose} /* onClick chưa đúng */
                className="btn-min-w border-primary"
              >
                前回複写
              </Button>
            </Col>
          </Form.Group>
        </Form>

        {isShowConfirmDialog && (
          <DialogConfirm
            buttons={buttons}
            message={messageDialog}
            onHidePopup={handleCloseDialogConfirm}
            className="w-dialog-confirm"
          />
        )}
      </div>
    </MasterLayout>
  );
}

export default IntelligencePublicExpenseRegister;
