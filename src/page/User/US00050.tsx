/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: US00050
 * PG NAME: 利用者情報新規登録 (User information new registration)
 */
import MasterLayout from '@/layout/MasterLayout';

import Row from 'react-bootstrap/Row';

import { Person, RenderName } from '@/interfaces/Person';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from 'react';
import { Button, Col, Table } from 'react-bootstrap';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import {
  COLLECT_MONEY,
  DEATH_PLACES,
  DEFAULT_USER_INFORMATION,
  FACILITIES,
  GENDERS,
  INSU,
  JOBS,
  VISIT_SITE,
  WAREKI,
  DEFAULT_VALUES,
} from '@/data/user-list';

import { useDispatch } from 'react-redux';
import { hideDialog } from '@/store/user/userSlice';
import RenderTextForTextField from '@/components/RenderTextForTextField';
import { useNavigate } from 'react-router';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
import CustomHeading from '@/components/user/detail/TextHeader';
function US00050() {
  const [, setShowRegisterDialog] = useState(false);
  const [validated, setValidated] = useState(false);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [tableSelectedItem] = useState<Person | null>(null);
  const [tableData, setTableData] = useState<Array<Person>>([]);
  const [targetRow, setTargetRow] = useState<Person>(DEFAULT_USER_INFORMATION);

  const [targetIndex] = useState<number>(-1); // Not in array index by default for register processing
  const [, setRegisterForm] = useState(false);
  const [showOnly, setShowOnly] = useState(false);
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

  const handleHideUserInfoPopup = () => {
    setTargetRow(DEFAULT_USER_INFORMATION);
    setShowRegisterDialog(false);
    setRegisterForm(false);
    setShowOnly(false);
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
    handleHideUserInfoPopup();
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
    navigate('/user-search');
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
          <CustomHeading title="利用者基本情報" />
          <TabUserDetail active={1} />
          <Form.Group
            as={Row}
            className="my-2 form-group-container"
            controlId="form_button_container"
          >
            <Col sm={9} className="text-start">
              <h5>◇新規登録</h5>
            </Col>
          </Form.Group>
          <Form.Group className="user-detail d-flex flex-column">
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
                利用者ID<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    required
                    placeholder="半角数字"
                    defaultValue={targetRow.userId}
                    name="userId"
                    readOnly={showOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
                <Form.Control.Feedback type="invalid">
                  利用者IDを入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_username"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                利用者力ナ氏名
                <span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    required
                    placeholder="全角"
                    value={valName}
                    name="name"
                    readOnly={showOnly}
                    onChange={(e) => setValName(e.target.value)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Control.Feedback type="invalid">
                  利用者力ナ氏名を入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_username_kanji"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                利用者漢字氏名
                <span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    required
                    placeholder="全角"
                    name="kanaName"
                    readOnly={showOnly}
                    value={valKanaName}
                    onChange={(e) => setValKanaName(e.target.value)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Control.Feedback type="invalid">
                  利用者漢字氏名を入力してください。
                </Form.Control.Feedback>
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
                生年月日<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <Col sm={12}>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Select
                          value={targetRow.birthday}
                          name="birthday_wareki"
                          disabled={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                        >
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
                死亡年月日
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <Col sm={12}>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Select
                          value={targetRow.deathday}
                          name="deathday_wareki"
                          disabled={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                        >
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
              controlId="form_time_of_death"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                死亡時刻
              </Form.Label>
              <Col sm={8}>
                <div className="d-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    placeholder=""
                    maxLength={2}
                    value={targetRow.deathTime}
                    name="deathtime_hour"
                    readOnly={showOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                    className="max-w-50 me-2 min-w-input-validate"
                  />
                  :
                  <Form.Control
                    type="text"
                    placeholder=""
                    maxLength={2}
                    value={targetRow.deathTime}
                    name="deathtime_minute"
                    readOnly={showOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                    className="max-w-50 ms-2 min-w-input-validate"
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
              controlId="form_place_of_death"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                死亡場所
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Select
                  value={targetRow.placeOfDeath}
                  name="placeOfDeath"
                  disabled={showOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-md-80 w-sm-100 mt-2 mt-md-0"
                >
                  {DEATH_PLACES.map((deathPlace, index) => (
                    <option key={index}>{deathPlace}</option>
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
                性別<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={8}>
                <Form.Select
                  value={targetRow.gender}
                  name="gender"
                  disabled={showOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-md-80 w-sm-100 mt-2 mt-md-0"
                >
                  {GENDERS.map((gender, index) => (
                    <option key={index}>{gender}</option>
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
                郵便番号
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
                        maxLength={3}
                      />
                      <div className="px-2">－</div>
                      <Form.Control
                        type="text"
                        defaultValue={targetRow.zip_code}
                        name="zip_code_2"
                        readOnly={showOnly}
                        onChange={(e) => handleOnChangeValue(e)}
                        className="max-w-60 min-w-input-max-3"
                        maxLength={4}
                      />
                      <Button className="ms-2">郵便番号検索</Button>
                    </div>
                    <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                      ＜半角数字＞
                    </div>
                  </div>
                </Row>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_address1"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                住所１<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center">
                  <Form.Control
                    type="text"
                    placeholder="全角"
                    name="address1"
                    readOnly={showOnly}
                    value={valAddress1}
                    onChange={(e) => setValAddress1(e.target.value)}
                    className="w-md-80 w-sm-100 mt-2 mt-md-0"
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  都道府県名、市区町村名（例：香川県高松市）
                </Form.Label>
                <Form.Control.Feedback className="fz-12" type="invalid">
                  利用者力ナ氏名を入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_address2"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                住所２
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center">
                  <Form.Control
                    type="text"
                    placeholder="全角"
                    name="address2"
                    readOnly={showOnly}
                    onChange={(e) => setValAddress2(e.target.value)}
                    value={valAddress2}
                    className="w-md-80 w-sm-100 mt-2 mt-md-0"
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  町名、番地（例：内町２－１５）
                </Form.Label>
                <Form.Control.Feedback type="invalid" className="fz-12">
                  利用者漢字氏名を入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_address3"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                住所３
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center">
                  <Form.Control
                    type="text"
                    placeholder="半角数字"
                    value={valAddress3}
                    name="address3"
                    readOnly={showOnly}
                    onChange={(e) => setValAddress3(e.target.value)}
                    className="w-md-80 w-sm-100 mt-2 mt-md-0"
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  ビル、マンション名（例：エクセルビル２Ｆ）
                </Form.Label>
                <Form.Control.Feedback type="invalid" className="fz-12">
                  生年月日を入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_phone_number"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                電話番号
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      name="phone_number_1"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      name="phone_number_2"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      name="phone_number_3"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_fax_number"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                ＦＡＸ番号
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      name="fax_number_1"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      name="fax_number_2"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      name="fax_number_3"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_cellphone_number"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                携帯番号
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      name="cellphone_number_1"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      name="cellphone_number_2"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      name="cellphone_number_3"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_mail_address"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                メールアドレス
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    placeholder="半角"
                    value={targetRow.mail_address}
                    name="mail_address"
                    readOnly={showOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜半角＞</div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_career"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog "
              >
                職業
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Select
                  value={targetRow.career}
                  name="career"
                  disabled={showOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-80 mt-2 mt-md-0"
                >
                  {JOBS.map((job, index) => (
                    <option key={index}>{job}</option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_inst"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                利用施設<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Select
                  value={targetRow.inst}
                  name="inst"
                  disabled={showOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-80 mt-2 mt-md-0"
                >
                  {FACILITIES.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  利用者力ナ氏名を入力してください。
                </Form.Control.Feedback>
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
                担当職員
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <Form.Control
                      type="text"
                      value={targetRow.person_in_charge}
                      name="person_in_charge"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-50 w-sm-100"
                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                      <Button className="ms-2">職</Button>
                      <Form.Label>　大西　良樹</Form.Label>
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
                保険種別<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Select
                    value={targetRow.insu}
                    name="insu"
                    // required
                    disabled={showOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                    className="w-50 w-sm-100 mt-2 mt-md-0"
                  >
                    {INSU.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </Form.Select>
                  <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-0">
                    <Form.Check
                      placeholder="半角数字"
                      value={targetRow.insu}
                      name="medicMental"
                      label="精神"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                    />
                    <Form.Check
                      placeholder="半角数字"
                      value={targetRow.insu}
                      name="careRoutine"
                      label="定期巡回"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="ms-4"
                    />
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_delivery_fee"
            >
              <Col sm={12} md={10}>
                <div className="d-md-flex justify-content-start align-items-center">
                  <Table className="mb-1">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow w-td-rowspan align-middle label-table border-td-rowspan"
                          rowSpan={3}
                        >
                          交通費
                        </td>
                      </tr>
                      <tr>
                        <td className="w-td-rowspan border-td-rowspan"> 名称</td>
                        <td className="bg-white no-border-input">
                          <Col sm={8} className="mt-2-div">
                            <Form.Control
                              type="text"
                              defaultValue=""
                              name="insu"
                              onChange={(e) => handleOnChangeValue(e)}
                            />
                            <span className="fz-12 text-end ps-xs-0 ps-sm-1 ms-2">＜全角＞</span>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="w-td-rowspan border-td-rowspan">単価</td>
                        <td className="bg-white no-border-input">
                          <Col className="bg-white mt-2-div">
                            <Form.Control
                              type="text"
                              defaultValue=""
                              name="insu"
                              onChange={(e) => handleOnChangeValue(e)}
                              maxLength={6}
                              className='w-td-rowspan'
                            />
                            <span className="fz-12 text-end ps-xs-0 ps-sm-1 ms-2"><b className="font-size-td">円</b> ＜半角数字＞</span>
                          </Col>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_onway_time"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                訪問に要する片道時間（分）
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      placeholder="半角数字"
                      value={targetRow.onway_time}
                      name="onway_time"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="mt-2 mt-md-0"
                    />
                    <div className="ms-2 fw-bold">分</div>
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_visit_site"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                訪問場所<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Select
                  value={targetRow.visit_site}
                  name="visit_site"
                  disabled={showOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-80 mt-2 mt-md-0"
                >
                  {VISIT_SITE.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_collect_money"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                集金方法
              </Form.Label>
              <Col sm={8}>
                <Form.Select
                  value={targetRow.collect_money}
                  name="collect_money"
                  disabled={showOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-80 mt-2 mt-md-0"
                >
                  {COLLECT_MONEY.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_zip"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog "
              >
                連絡先郵便番号
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      name="contact_zip1"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      value={targetRow.contact_zip2}
                      name="contact_zip2"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                    <Button className="ms-2">郵便番号検索</Button>
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_address"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先住所１
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    placeholder="全角"
                    name="contact_address_1"
                    readOnly={showOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  都道府県名、市区町村名（例：香川県高松市）
                </Form.Label>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_address_2"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先住所２
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    placeholder="全角"
                    name="contact_address_2"
                    readOnly={showOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  町名、番地（例：内町２－１５）
                </Form.Label>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_address_3"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先住所３
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    placeholder="全角"
                    value={targetRow.contact_address_3}
                    name="contact_address_3"
                    readOnly={showOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  ビル、マンション名（例：エクセルビル２Ｆ）
                </Form.Label>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_phone"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先電話番号
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      name="contact_phone"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      name="contact_phone"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      name="contact_phone"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_fax"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先ＦＡＸ番号
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      name="contact_fax_1"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      name="contact_fax_2"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      name="contact_fax_3"
                      readOnly={showOnly}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_satellite"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                サテライト利用
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Check
                  placeholder="半角数字"
                  value={targetRow.satellite}
                  name="satellite"
                  label="有"
                  readOnly={showOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
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
                className="bg-light-yellow label-dialog"
              >
                備考
              </Form.Label>
              <Col sm={12} md={8}>
                <Button className="mb-1 w-25 w-sm-100 mt-2 mt-md-0">
                  全体表示
                </Button>
                <Form.Control
                  as="textarea"
                  name="remarks"
                  value={targetRow?.remarks}
                  placeholder="全角"
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
                className="bg-light-yellow label-dialog"
              >
                利用者氏名伏字
              </Form.Label>
              <Col sm={12} md={8}>
                <RenderTextForTextField data={valRenderName.name ?? ''} />
                <div className="mt-1"></div>
                <RenderTextForTextField data={valRenderName.kanaName ?? ''} />
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
                className="bg-light-yellow label-dialog"
              >
                住所伏字
              </Form.Label>
              <Col sm={12} md={8}>
                <RenderTextForTextField data={valRenderName.address ?? ''} />
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
                伏字対象帳票
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Check
                  value={targetRow?.satellite}
                  name="nursingPlan"
                  label="訪問看護計画書／精神科訪問看護計画書"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={targetRow?.satellite}
                  name="nursingReport"
                  label="訪問看護報告書／精神科訪問看護報告書"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={targetRow?.satellite}
                  name="nursingInformation"
                  label="訪問看護情報提供書１，２，３／精神科訪問看護情報提供書１"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={targetRow?.satellite}
                  name="nursingSummary"
                  label="看護サマリー"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={targetRow?.satellite}
                  name="performanceReport"
                  label="実績報告（医療／介護／実費）"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={targetRow?.satellite}
                  name="nursingRecord"
                  label="訪問看護記録書Ⅱ／精神訪問看護記録書Ⅱ"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={targetRow?.satellite}
                  name="progressRecord"
                  label="経過記録"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
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

export default US00050;
