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
import { Button, Col, Table } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  WAREKI,
  long_term,
  content,
  Planning_division,
} from '@/data/user-list';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';
import '@assets/scss/user/detail/insurance/insurance.scss';

function LongTermCareInsuranceInformationUpdate() {
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
    navigate('/user/insurance/long-term-care-insurance/0');
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
          // id="nursing-info"
          ref={refUserDialog}
          noValidate
          validated={validated}
        >
          <CustomHeading title="利用者基本情報" />
          <TabButtonLink active={6} arrayButton={itemTabInsurance} />
          <Form.Group className="input-detail user-detail d-flex flex-column">
            {/* ◆　介護保険情報 */}
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　介護保険情報</h5>
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
                            required
                            defaultValue="03"
                            disabled={true}
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="01"
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
                  有効期限
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
                            // required
                            defaultValue="12"
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="31"
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
                className="mb-2 form-group-container mt-3-div"
                controlId="form_date_of_birth"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  被保険者番号<span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center left">
                        <Form.Control
                          className="w-50 w-sm-100"
                          maxLength={3}
                          required
                          defaultValue="3720000111"
                        />
                        <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-2">
                          ＜半角＞
                        </div>
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
                          defaultValue="372011"
                        />
                      </div>
                      <Button className="m-left">保険者検索</Button>
                      <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-2">
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
                        required
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
                          className="w-20 w-sm-100"
                          maxLength={3}
                          // required
                          defaultValue=""
                        />
                        <div className="ms-2">
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
                        <td className="td-w-224">
                          {' '}
                          要介護状態区分{' '}
                          <span className="color-text-custom">【必】</span>
                        </td>
                        <td className="bg-white">
                          <Form.Select
                            name="record_date"
                            defaultValue={long_term[2]}
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
                                      defaultValue="03"
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
                                      defaultValue="03"
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
                                      defaultValue="12"
                                      name="record_month"
                                      className="max-w-50 min-w-input-validate"
                                      maxLength={2}
                                      required
                                    />
                                    <div className="px-2">月</div>
                                    <Form.Control
                                      type="text"
                                      // required
                                      defaultValue="31"
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
                        <td className="td-w-224"> 区分支給限度基準額 </td>
                        <td className="bg-white">
                          <Col sm={12}>
                            <Row>
                              <Col sm={12}>
                                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                  <div className="d-flex justify-content-start align-items-center">
                                    <Form.Control
                                      type="text"
                                      // required
                                      defaultValue="0"
                                      name="record_month"
                                      className="max-w-50"
                                      maxLength={2}
                                      required
                                    />
                                  </div>
                                  <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
                                    単位／月 ＜半角数字＞
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">期間開始年月日 </td>
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
                                      defaultValue="03"
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">期間終了年月日</td>
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
                                      defaultValue="12"
                                      name="record_month"
                                      className="max-w-50 min-w-input-validate"
                                      maxLength={2}
                                      required
                                    />
                                    <div className="px-2">月</div>
                                    <Form.Control
                                      type="text"
                                      // required
                                      defaultValue="31"
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
                                      defaultValue={content[2]}
                                      required
                                    >
                                      {content.map((content, index) => (
                                        <option key={index}>{content}</option>
                                      ))}
                                    </Form.Select>
                                    <Form.Control
                                      type="text"
                                      name="record_year"
                                      className="max-w-50 ms-2 "
                                      maxLength={2}
                                      required
                                      defaultValue="70"
                                    />
                                    <div className="px-2">%</div>
                                  </div>
                                  <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
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
                                      defaultValue="03"
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">終了年月日</td>
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
                                      defaultValue="01"
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">内容</td>
                        <td className="bg-white">
                          <Col sm={12}>
                            <Row>
                              <Col sm={12}>
                                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                  <div className="d-flex justify-content-start align-items-center">
                                    <Form.Select
                                      name="record_date"
                                      defaultValue={content[2]}
                                      // required
                                    >
                                      {content.map((content, index) => (
                                        <option key={index}>{content}</option>
                                      ))}
                                    </Form.Select>
                                    <Form.Control
                                      type="text"
                                      name="record_year"
                                      className="max-w-50 ms-2 "
                                      maxLength={2}
                                      // required
                                      defaultValue=""
                                    />
                                    <div className="px-2">%</div>
                                  </div>
                                  <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
                                    ＜半角数字＞
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">開始年月日</td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                                      // required
                                      defaultValue=""
                                    />
                                    <div className="px-2">年</div>
                                    <Form.Control
                                      type="text"
                                      // required
                                      defaultValue=""
                                      name="record_month"
                                      className="max-w-50 min-w-input-validate"
                                      maxLength={2}
                                      // required
                                    />
                                    <div className="px-2">月</div>
                                    <Form.Control
                                      type="text"
                                      // required
                                      defaultValue=""
                                      name="record_date"
                                      className="max-w-50 min-w-input-validate"
                                      maxLength={2}
                                      // required
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">終了年月日</td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                                      // required
                                      defaultValue=""
                                    />
                                    <div className="px-2">年</div>
                                    <Form.Control
                                      type="text"
                                      // required
                                      defaultValue=""
                                      name="record_month"
                                      className="max-w-50 min-w-input-validate"
                                      maxLength={2}
                                    />
                                    <div className="px-2">月</div>
                                    <Form.Control
                                      type="text"
                                      // required
                                      defaultValue=""
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">内容</td>
                        <td className="bg-white">
                          <Col sm={12}>
                            <Row>
                              <Col sm={12}>
                                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                  <div className="d-flex justify-content-start align-items-center">
                                    <Form.Select
                                      name="record_date"
                                      defaultValue={content[2]}
                                      // required
                                    >
                                      {content.map((content, index) => (
                                        <option key={index}>{content}</option>
                                      ))}
                                    </Form.Select>
                                    <Form.Control
                                      type="text"
                                      name="record_year"
                                      className="max-w-50 ms-2 "
                                      maxLength={2}
                                      // required
                                      defaultValue=""
                                    />
                                    <div className="px-2">%</div>
                                  </div>
                                  <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
                                    ＜半角数字＞
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">開始年月日</td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                                      // required
                                      defaultValue=""
                                    />
                                    <div className="px-2">年</div>
                                    <Form.Control
                                      type="text"
                                      // required
                                      defaultValue=""
                                      name="record_month"
                                      className="max-w-50 min-w-input-validate"
                                      maxLength={2}
                                    />
                                    <div className="px-2">月</div>
                                    <Form.Control
                                      type="text"
                                      // required
                                      defaultValue=""
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
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">終了年月日</td>
                        <td className="bg-white">
                          <Col sm={12}>
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
                                      // required
                                      defaultValue=""
                                    />
                                    <div className="px-2">年</div>
                                    <Form.Control
                                      type="text"
                                      // required
                                      defaultValue=""
                                      name="record_month"
                                      className="max-w-50 min-w-input-validate"
                                      maxLength={2}
                                    />
                                    <div className="px-2">月</div>
                                    <Form.Control
                                      type="text"
                                      // required
                                      defaultValue=""
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
                          サービス計画
                          <Button className="ms-4">居</Button>
                          <Button className="ms-0">入力欄追加</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-224">
                          {' '}
                          計画区分
                          <span className="color-text-custom">【必】</span>{' '}
                        </td>
                        <td className="bg-white">
                          <Col sm={8}>
                            <div className="d-flex justify-content-start align-items-center mt-2 mt-md-0">
                              <Form.Select
                                name="record_date"
                                defaultValue={Planning_division[1]}
                                required
                              >
                                {Planning_division.map(
                                  (Planning_division, index) => (
                                    <option key={index}>
                                      {Planning_division}
                                    </option>
                                  ),
                                )}
                              </Form.Select>
                            </div>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">
                          事業所番号
                          <span className="color-text-custom">【必】</span>
                        </td>
                        <td className="bg-white">
                          <Col sm={12} md={8}>
                            <Row>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <div className="d-flex justify-content-start align-items-center left">
                                  <Form.Control
                                    className="w-50 w-sm-100"
                                    maxLength={3}
                                    required
                                    defaultValue="0400000001"
                                  />
                                  <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-2">
                                    ＜半角＞
                                  </div>
                                </div>
                              </div>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">
                          事業所名称
                          <span className="color-text-custom">【必】</span>{' '}
                        </td>
                        <td className="bg-white">
                          <Col sm={12} md={8}>
                            <Row>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <div className="d-flex justify-content-start align-items-center left">
                                  <Form.Control
                                    className="w-80 w-sm-100"
                                    maxLength={3}
                                    required
                                    defaultValue="ＡＡＡ地域包括支援センター"
                                  />
                                  <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-2">
                                    ＜半角＞
                                  </div>
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
                          rowSpan={7}
                        >
                          サービス計画2
                          <Button className="ms-4">居</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-224"> 計画区分</td>
                        <td className="bg-white">
                          <Col sm={8}>
                            <div className="d-flex justify-content-start align-items-center mt-2 mt-md-0">
                              <Form.Select
                                name="record_date"
                                defaultValue={Planning_division}
                                // required
                              >
                                {Planning_division.map(
                                  (Planning_division, index) => (
                                    <option key={index}>
                                      {Planning_division}
                                    </option>
                                  ),
                                )}
                              </Form.Select>
                            </div>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">事業所番号</td>
                        <td className="bg-white">
                          <Col sm={12} md={8}>
                            <Row>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <div className="d-flex justify-content-start align-items-center left">
                                  <Form.Control
                                    className="w-50 w-sm-100"
                                    maxLength={3}
                                    // required
                                    defaultValue=""
                                  />
                                  <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-2">
                                    ＜半角＞
                                  </div>
                                </div>
                              </div>
                            </Row>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">事業所名称</td>
                        <td className="bg-white">
                          <Col sm={12} md={8}>
                            <Row>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <div className="d-flex justify-content-start align-items-center left">
                                  <Form.Control
                                    className="w-80 w-sm-100"
                                    maxLength={3}
                                    // required
                                    defaultValue=""
                                  />
                                  <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-2">
                                    ＜半角＞
                                  </div>
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
                  住所地特例に該当する場合は、施設所在保険者番号を入力してください。{' '}
                </Form.Label>
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
                  施設所在保険者番号
                </Form.Label>
                <Col sm={8}>
                  <div className="d-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <Col sm={12} md={8}>
                      <Row>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <div className="d-flex justify-content-start align-items-center left">
                            <Form.Control
                              className="w-50 w-sm-100"
                              maxLength={3}
                              // required
                              defaultValue="310001"
                            />
                          </div>
                          <Button className="m-left">保険者検索</Button>
                          <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-2">
                            ＜半角数字＞
                          </div>
                        </div>
                      </Row>
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
                    更新
                  </Button>
                </Col>
              </Form.Group>
            </div>
            {/* ◆　介護保険負担割合証情報 */}
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　介護保険負担割合証情報</h5>
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
                            // required
                            defaultValue=""
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue=""
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue=""
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
                controlId="form_date_of_birth"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  利用者負担割合<span className="color-text-custom"></span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Control
                            type="text"
                            // required
                            defaultValue=""
                            name="record_date"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                          />
                        </div>
                        <div className="ms-2">割</div>
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
                            // required
                            defaultValue=""
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue=""
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue=""
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
                controlId="form_date_of_birth"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  適用終了年月日<span className="color-text-custom"></span>
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
                            // required
                            defaultValue=""
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue=""
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue=""
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
              <Button className="m-all">▼追加</Button>
            </div>
            {/* ◆　追加済み介護保険負担割合証情報一覧 */}
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
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
                </Col>
                <Col sm={9} className="text-start ms-0 ps-0 my-2">
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

export default LongTermCareInsuranceInformationUpdate;
