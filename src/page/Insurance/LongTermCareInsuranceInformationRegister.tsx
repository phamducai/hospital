/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: InsurancePublicExpenseInformationRegister
 * PG NAME: 保険公費情報登録簿 (Insurance Public Expense Information Register)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import { Person, RenderName } from '@/interfaces/Person';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from 'react';
import { Button, Col, Table } from 'react-bootstrap';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import {
  DEFAULT_USER_INFORMATION,
  WAREKI,
  DEFAULT_VALUES,
  Planning_division,
  long_term,
  content,
} from '@/data/user-list';

import { useDispatch } from 'react-redux';
import { hideDialog } from '@/store/user/userSlice';
import { useNavigate } from 'react-router';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';
import '@assets/scss/user/detail/insurance/insurance.scss';

function LongTermCareInsuranceInformationRegister() {
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

  // Save form 1
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
  // Save form 2
  const handleOnSave2 = () => {
    // if (timeout) {
    //   clearTimeout(timeout);
    // }

    // if (validateFormInput2()) {
    //   setValidated(true);
    //   return;
    // }

    timeout = setTimeout(() => {
      setShowConfirmDialog(true);
    }, 150);
  };

  // Close Button
  const handleOnClose = () => {
    navigate('/user/insurance/long-term-care-insurance');
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
          <TabButtonLink active={6} arrayButton={itemTabInsurance} />
          {/* ◆　介護保険情報 */}
          <div>
            <Form.Group
              as={Row}
              className="my-2 form-group-container"
              controlId="form_button_container"
            >
              <Col sm={9} className="text-start">
                <h5>◆　介護保険情報</h5>
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
                            required
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
                            required
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
                            required
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
                controlId="form_username"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  有効期限
                  <span className="color-text-custom"></span>
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
                controlId="form_username_kanji"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  被保険者番号
                  <span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <Form.Control
                        type="text"
                        required
                        defaultValue={targetRow.long_1}
                        name="long_1"
                        readOnly={showOnly}
                        onChange={(e) => handleOnChangeValue(e)}
                        className="w-20 w-sm-100 mt-2 mt-md-0"
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
                  保険者番号<span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <Form.Control
                        type="text"
                        required
                        defaultValue={targetRow.long_2}
                        name="long_2"
                        readOnly={showOnly}
                        onChange={(e) => handleOnChangeValue(e)}
                        className="w-20 w-sm-100 mt-2 mt-md-0"
                      />
                      <Button className="ms-2">郵便番号検索</Button>
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
                controlId="form_date_of_death"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  保険者名称
                  <span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <Form.Control
                        type="text"
                        required
                        defaultValue={targetRow.insured}
                        name="insured"
                        readOnly={showOnly}
                        onChange={(e) => handleOnChangeValue(e)}
                        className="w-md-80 w-sm-100 mt-2 mt-md-0"
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
                controlId="form_user_id"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  保険負担割合
                  <span className="color-text-custom"></span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Control
                          type="text"
                          value={targetRow.birthday}
                          name="birthday_year"
                          readOnly={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                          className="max-w-50 min-w-input-validate"
                          maxLength={2}
                        />
                        <div>
                          ％ ＜半角数字＞ ※未入力の場合は、90％扱いになります。
                        </div>
                      </div>
                    </div>
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive="sm" className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle label-table"
                          rowSpan={7}
                        >
                          要介護状態等
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">
                          {' '}
                          要介護状態区分{' '}
                          <span className="color-text-custom">【必】</span>
                        </td>
                        <td className="bg-white">
                          <Form.Select
                            name="record_date"
                            defaultValue={long_term}
                            required
                          >
                            {long_term.map((long_term, index) => (
                              <option key={index}>{long_term}</option>
                            ))}
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">
                          認定年月日{' '}
                          <span className="color-text-custom">【必】</span>
                        </td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                                    <Form.Control.Feedback type="invalid">
                                      生年月日を入力してください。
                                    </Form.Control.Feedback>
                                    <Form.Control
                                      type="text"
                                      required
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
                                      required
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
                                      required
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">
                          認定有効開始日
                          <span className="color-text-custom">【必】</span>
                        </td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                                    <Form.Control.Feedback type="invalid">
                                      生年月日を入力してください。
                                    </Form.Control.Feedback>
                                    <Form.Control
                                      type="text"
                                      required
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
                                      required
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
                                      required
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">
                          認定有効終了日
                          <span className="color-text-custom">【必】</span>
                        </td>
                        <td className="bg-white">
                          {' '}
                          <Col sm={12}>
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
                                    <Form.Control.Feedback type="invalid">
                                      生年月日を入力してください。
                                    </Form.Control.Feedback>
                                    <Form.Control
                                      type="text"
                                      required
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
                                      required
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
                                      required
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
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive="sm" className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle label-table"
                          rowSpan={7}
                        >
                          居宅サービス等
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100"> 区分支給限度基準額 </td>
                        <td className="bg-white">
                          <Col sm={12}>
                            <Row>
                              <Col sm={12}>
                                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                  <div className="d-flex justify-content-start align-items-center">
                                    <Form.Control
                                      type="text"
                                      value={targetRow.birthday}
                                      name="birthday_year"
                                      readOnly={showOnly}
                                      onChange={(e) => handleOnChangeValue(e)}
                                      className="max-w-50 ms-1 min-w-input-validate"
                                      maxLength={2}
                                    />
                                    <div className="px-2">
                                      単位／月 ＜半角数字＞
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">
                          期間開始年月日{' '}
                          <span className="color-text-custom">【必】</span>
                        </td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                                    <Form.Control.Feedback type="invalid">
                                      生年月日を入力してください。
                                    </Form.Control.Feedback>
                                    <Form.Control
                                      type="text"
                                      required
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
                                      required
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
                                      required
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">
                          期間終了年月日{' '}
                          <span className="color-text-custom">【必】</span>
                        </td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                                    <Form.Control.Feedback type="invalid">
                                      生年月日を入力してください。
                                    </Form.Control.Feedback>
                                    <Form.Control
                                      type="text"
                                      required
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
                                      required
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
                                      required
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
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive="sm" className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle label-table"
                          rowSpan={10}
                        >
                          給付制限
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-224"> 内容 </td>
                        <td className="bg-white">
                          <Col sm={12}>
                            <Row>
                              <Col sm={12}>
                                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                  <div className="d-flex justify-content-start align-items-center">
                                    <Form.Select
                                      name="record_date"
                                      defaultValue={content}
                                      // required
                                    >
                                      {content.map((content, index) => (
                                        <option key={index}>{content}</option>
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
                                      className="max-w-50 ms-5 min-w-input-validate"
                                      maxLength={2}
                                    />
                                    <div className="px-2">％</div>
                                  </div>
                                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                                    ＜半角数字＞
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">開始年月日 </td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">終了年月日 </td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100"> 内容 </td>
                        <td className="bg-white">
                          <Col sm={12}>
                            <Row>
                              <Col sm={12}>
                                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                  <div className="d-flex justify-content-start align-items-center">
                                    <Form.Select
                                      name="record_date"
                                      defaultValue={content}
                                      // required
                                    >
                                      {content.map((content, index) => (
                                        <option key={index}>{content}</option>
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
                                      className="max-w-50 ms-5 min-w-input-validate"
                                      maxLength={2}
                                    />
                                    <div className="px-2">％</div>
                                  </div>
                                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                                    ＜半角数字＞
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">開始年月日 </td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">終了年月日 </td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100"> 内容 </td>
                        <td className="bg-white">
                          <Col sm={12}>
                            <Row>
                              <Col sm={12}>
                                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                  <div className="d-flex justify-content-start align-items-center">
                                    <Form.Select
                                      name="record_date"
                                      defaultValue={content}
                                      // required
                                    >
                                      {content.map((content, index) => (
                                        <option key={index}>{content}</option>
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
                                      className="max-w-50 ms-5 min-w-input-validate"
                                      maxLength={2}
                                    />
                                    <div className="px-2">％</div>
                                  </div>
                                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                                    ＜半角数字＞
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">開始年月日 </td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-224">終了年月日 </td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive="sm" className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle label-table"
                          rowSpan={10}
                        >
                          サービス計画
                          <Button className="ms-4">居</Button>
                          <Button className="ms-0">入力欄追加</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-224">
                          {' '}
                          計画区分
                          <span className="color-text-custom">【必】</span>
                        </td>

                        <td className="bg-white">
                          <Form.Select
                            name="record_date"
                            defaultValue={Planning_division}
                            required
                          >
                            {Planning_division.map(
                              (Planning_division, index) => (
                                <option key={index}>{Planning_division}</option>
                              ),
                            )}
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">
                          事業所番号{' '}
                          <span className="color-text-custom">【必】</span>
                        </td>
                        <td className="bg-white">
                          <Col sm={12} md={8}>
                            <Row>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  required
                                  defaultValue={targetRow.long_4}
                                  name="long_4"
                                  readOnly={showOnly}
                                  onChange={(e) => handleOnChangeValue(e)}
                                  className="w-50 w-sm-100 mt-2 mt-md-0"
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                                  ＜全角＞
                                </div>
                              </div>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">
                          事業所名称{' '}
                          <span className="color-text-custom">【必】</span>
                        </td>
                        <td className="bg-white">
                          <Col sm={12} md={8}>
                            <Row>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  required
                                  defaultValue={targetRow.business}
                                  name="business"
                                  readOnly={showOnly}
                                  onChange={(e) => handleOnChangeValue(e)}
                                  className="w-80 w-sm-100 mt-2 mt-md-0"
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                                  ＜全角＞
                                </div>
                              </div>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive="sm" className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle label-table"
                          rowSpan={10}
                        >
                          サービス計画2
                          <Button className="ms-4">居</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-224"> 計画区分</td>

                        <td className="bg-white">
                          <Form.Select
                            name="record_date"
                            defaultValue={Planning_division}
                            // required
                          >
                            {Planning_division.map(
                              (Planning_division, index) => (
                                <option key={index}>{Planning_division}</option>
                              ),
                            )}
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">事業所番号 </td>
                        <td className="bg-white">
                          <Col sm={12} md={8}>
                            <Row>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  // required
                                  defaultValue={targetRow.long_3}
                                  name="long_3"
                                  readOnly={showOnly}
                                  onChange={(e) => handleOnChangeValue(e)}
                                  className="w-50 w-sm-100 mt-2 mt-md-0"
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                                  ＜全角＞
                                </div>
                              </div>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">事業所名称 </td>
                        <td className="bg-white">
                          <Col sm={12} md={8}>
                            <Row>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  // required
                                  value={targetRow.long_5}
                                  name="long_5"
                                  readOnly={showOnly}
                                  onChange={(e) => handleOnChangeValue(e)}
                                  className="w-80 w-sm-100 mt-2 mt-md-0"
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                                  ＜全角＞
                                </div>
                              </div>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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
                  style={{ width: '66.5rem' }}
                >
                  住所地特例に該当する場合は、施設所在保険者番号を入力してください。
                </Form.Label>
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
                  施設所在保険者番号
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <Form.Control
                        type="text"
                        value={targetRow.long_6}
                        name="long_6"
                        readOnly={showOnly}
                        onChange={(e) => handleOnChangeValue(e)}
                        className="w-20 w-sm-100 mt-2 mt-md-0"
                      />
                      <Button className="ms-2">郵便番号検索</Button>
                      <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                        ＜全角＞
                      </div>
                    </div>
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
              </Col>
            </Form.Group>
          </div>

          {/* ◆　介護保険負担割合証情報 */}
          <div>
            <Form.Group
              as={Row}
              className="my-2 form-group-container"
              controlId="form_button_container"
            >
              <Col sm={9} className="text-start">
                <h5>◆　介護保険負担割合証情報</h5>
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
                  交付年月日
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
                          <Form.Control.Feedback type="invalid">
                            生年月日を入力してください。
                          </Form.Control.Feedback>
                          <Form.Control
                            type="text"
                            value={targetRow.birthday}
                            name="birthday_year"
                            readOnly={showOnly}
                            // onChange={(e) => handleOnChangeValue(e)}
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
                            // onChange={(e) => handleOnChangeValue(e)}
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
                controlId="form_user_id"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  利用者負担割合
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Control
                          type="text"
                          // required
                          defaultValue={targetRow.zip_code}
                          name="ins-regis"
                          readOnly={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                          className="max-w-60 min-w-input-max-3"
                          maxLength={3}
                        />
                      </div>
                      <div className="ms-2">割</div>
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
                  適用開始年月日
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
                  適用終了年月日
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
              <Button className="m-all">▼追加</Button>
            </Form.Group>
          </div>

          {/* ◆　追加済み介護保険負担割合証情報一覧 */}
          <div>
            <Form.Group
              as={Row}
              className="my-2 form-group-container"
              controlId="form_button_container"
            >
              <Col sm={9} className="text-start">
                <h5>◆　追加済み介護保険負担割合証情報一覧</h5>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="form-group-container mt-3-div"
              controlId="form_user_id"
            >
              <Col sm={6} md={10} className="mt-2-div">
                <Table responsive="sm" className="table-bordered mb-2">
                  <tbody className="bg-light-yellow label-dialog">
                    <tr>
                      <td className="td-w-100 text-center">削</td>
                      <td className="td-w-100 text-center"> 交付年月日 </td>
                      <td className="td-w-100 text-center">利用者負担割合</td>
                      <td className="td-w-100 text-center">適用開始年月日</td>
                      <td className="td-w-100 text-center">適用終了年月日</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="td-w-100 text-center">
                        <Form.Check name="checkbox" />
                      </td>
                      <td className="td-w-100 text-center"> 令03/01/01 </td>
                      <td className="td-w-100 text-center">2 割</td>
                      <td className="td-w-100 text-center">令03/01/01</td>
                      <td className="td-w-100 text-center">令05/12/31</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="td-w-100 text-center">
                        <Form.Check name="checkbox" />
                      </td>
                      <td className="td-w-100 text-center"> 令03/01/01 </td>
                      <td className="td-w-100 text-center">2 割</td>
                      <td className="td-w-100 text-center">令03/01/01</td>
                      <td className="td-w-100 text-center">令05/12/31</td>
                    </tr>
                  </tbody>
                </Table>
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
                onClick={handleOnSave2}
                className="btn-min-w"
              >
                登録
              </Button>
            </Col>
            <Col sm={9} className="text-start ms-0 ps-0 my-2">
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

export default LongTermCareInsuranceInformationRegister;
