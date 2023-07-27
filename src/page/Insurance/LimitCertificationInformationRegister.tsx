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
  co_payment_ratio,
  DEFAULT_USER_INFORMATION,
  WAREKI,
  DEFAULT_VALUES,
} from '@/data/user-list';
import { useDispatch } from 'react-redux';
import { hideDialog } from '@/store/user/userSlice';
import { useNavigate } from 'react-router';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';
import '@assets/scss/user/detail/insurance/insurance.scss';

function LimitCertificationInformationRegister() {
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
    navigate('/user/insurance/limit-identification');
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
          <CustomHeading title="限度額認定情報" />
          <TabButtonLink active={4} arrayButton={itemTabInsurance} />
          <Form.Group
            as={Row}
            className="my-2 form-group-container"
            controlId="form_button_container"
          >
            <Col sm={9} className="text-start">
              <h5>◆　限度額認定情報</h5>
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
                交付年月日
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
                発効期日
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
                有効期限
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
              controlId="form_gender"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                適用区分<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={8}>
                <Form.Select
                  name="record_date"
                  defaultValue={co_payment_ratio}
                  required
                >
                  {co_payment_ratio.map((co_payment_ratio, index) => (
                    <option key={index}>{co_payment_ratio}</option>
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
                負担上限額
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <div className="d-flex justify-content-start align-items-center">
                      <Form.Control
                        type="text"
                        defaultValue={targetRow.zip_code}
                        name="zip_code_1"
                        readOnly={showOnly}
                        onChange={(e) => handleOnChangeValue(e)}
                        className="max-w-60 min-w-input-max-3"
                        maxLength={6}
                      />
                    </div>
                    <div className="px-2">円</div>
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

export default LimitCertificationInformationRegister;
