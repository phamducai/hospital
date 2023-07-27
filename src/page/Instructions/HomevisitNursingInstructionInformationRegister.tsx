/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: HomevisitNursingInstructionInformationRegister
 * PG NAME: 指示／計画情報 (Instructions/planning information)
 */
import MasterLayout from '@/layout/MasterLayout';
import React from 'react';
import {useRef, useState } from 'react';
import { Col, Form, Row, Table, Button } from 'react-bootstrap';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabHomevisitNursingInfo } from '@/data/common';
import DatePickerCommon from '@/components/user/schedule/DatePickerCommon';
import { useNavigate } from 'react-router';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import {
  DEFAULT_USER_INFORMATION,
  facilities,
  INSU,
  dementia_status,
} from '@/data/user-list';
import { months, weekDays } from '@/data/japan_th';
import DatePicker from 'react-multi-date-picker';
import weekends from 'react-multi-date-picker/plugins/highlight_weekends';
import { Person } from '@/interfaces/Person';
import '@assets/scss/user/detail/insurance/insurance.scss';
import CheckBoxCustom from '@/components/CheckboxCustom';
import InputGroup from 'react-bootstrap/InputGroup';

function HomevisitNursingInstructionInformationRegister() {
  const navigate = useNavigate();
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [targetRow, setTargetRow] = useState<Person>(DEFAULT_USER_INFORMATION);
  const [showOnly] = useState(false);
  const [, setValidated] = useState(false);
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [tableData, setTableData] = useState<Array<Person>>([]);
  const [targetIndex] = useState<number>(-1); // Not in array index by default for register processing

  const saveUserInfo = () => {
    tableData[targetIndex] = targetRow;
    setTableData(tableData);
  };

  const validateFormInput = () => {
    return refUserDialog.current && !refUserDialog.current.checkValidity();
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
    setMessageDialog('登録しました。');

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

  const handleOnClose = () => {
    navigate('/user/instructions/home-visit-nursing-instruct-info');
  };

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
  };

  const handlePreviousCopy = () => {
    setMessageDialog(
      '前回複写処理を実行します。よろしいですか？（現在編集中の情報は消去されます。）',
    );

    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          navigate('/user/instructions/home-visit-nursing-instruct-info');
        },
        className: 'button-dialog',
      },
      {
        text: 'Cancel',
        okButton: false,
        onClickButton: () => {
          handleCloseDialogConfirm();
        },
        className: 'button-dialog',
      },
    ]);

    setShowConfirmDialog(true);
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
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={1} arrayButton={itemTabHomevisitNursingInfo} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-1">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
              <Form.Group className="d-flex justify-content-between">
                <h5>◆ 訪問看護指示情報</h5>
              </Form.Group>
              <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                <Button className="w-100" onClick={handlePreviousCopy}>
                  前回複写
                </Button>
              </div>
            </div>
          </Form>

          <Form.Group className="input-detail user-detail d-flex flex-column">
            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3"
              controlId="form_person_in_charge"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                指示年月日<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <div className="mt-2">
                      <DatePickerCommon />
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
                指示施設<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Select
                    defaultValue="訪問看護ステーションアポロ"
                    name="facilities"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="w-50 w-sm-100 mt-2 mt-md-0"
                    required
                  >
                    {facilities.map((item, index) => (
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
              className="form-group-container"
              controlId="form_user_id"
            >
              <Col sm={12} md={11} lg={10} className="mt-2-div">
                <Table responsive className="table-bordered mb-2">
                  <tbody className="bg-light-yellow label-dialog">
                    <tr>
                      <td
                        className="bg-light-yellow label-dialog align-middle label-table "
                        rowSpan={9}
                      >
                        医療機関等<Button className="ms-2">医</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">
                        主治医カナ
                      </td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-120"
                              defaultValue=""
                            />
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">
                        主治医氏名
                      </td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-50"
                              defaultValue=""
                            />
                            <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                              敬称：
                            </div>
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-20"
                              defaultValue="先生"
                            />
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="td-w-100 td-w-sm-10 align-middle"
                        style={{ width: '7.1rem' }}
                      >
                        医療機関カナ
                      </td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-120"
                              defaultValue=""
                            />
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">
                        医療機関名
                      </td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-120"
                              defaultValue=""
                            />
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">
                        郵便番号
                      </td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-20"
                              defaultValue=""
                            />
                            <span className="span-bg-50">-</span>
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-20"
                              defaultValue=""
                            />
                            <Button className="ms-2">郵便番号検索</Button>
                            <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                              ＜半角数字＞
                            </div>
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">
                        所在地
                      </td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-120"
                              defaultValue=""
                            />
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">
                        電話番号
                      </td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="phone_number"
                              className="w-20"
                              onChange={(e) => handleOnChangeValue(e)}
                              defaultValue=""
                              maxLength={5}
                            />
                            <span className="span-bg-50">-</span>
                            <Form.Control
                              type="text"
                              name="phone_number"
                              className="w-20"
                              onChange={(e) => handleOnChangeValue(e)}
                              defaultValue=""
                              maxLength={4}
                            />
                            <span className="span-bg-50">-</span>
                            <Form.Control
                              type="text"
                              name="phone_number"
                              className="w-20"
                              onChange={(e) => handleOnChangeValue(e)}
                              defaultValue=""
                              maxLength={4}
                            />
                            <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                              ＜半角数字＞
                            </div>
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">
                        ＦＡＸ番号
                      </td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="fax_number_1"
                              className="w-20"
                              onChange={(e) => handleOnChangeValue(e)}
                              defaultValue=""
                              maxLength={5}
                            />
                            <span className="span-bg-50">-</span>
                            <Form.Control
                              type="text"
                              name="fax_number_2"
                              className="w-20"
                              onChange={(e) => handleOnChangeValue(e)}
                              defaultValue=""
                              maxLength={5}
                            />
                            <span className="span-bg-50">-</span>
                            <Form.Control
                              type="text"
                              name="fax_number_3"
                              className="w-20"
                              onChange={(e) => handleOnChangeValue(e)}
                              defaultValue=""
                              maxLength={5}
                            />
                            <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                              ＜半角数字＞
                            </div>
                          </div>
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
              controlId="form_date_of_birth"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                指示期間<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div style={{ width: '6.7rem' }}>
                    <DatePicker
                      style={{
                        width: '6.5rem',
                        boxSizing: 'border-box',
                        height: '34px',
                      }}
                      containerStyle={{
                        marginTop: '-8px',
                        width: '65%',
                      }}
                      value={new Date()}
                      weekDays={weekDays}
                      months={months}
                      plugins={[weekends()]}
                    />
                  </div>
                  <span className="span-next-calender">～</span>
                  <DatePickerCommon />
                  <Button className="btn-calender ms-90">
                    <b>C</b>
                  </Button>
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
                点滴注射指示期間
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div style={{ width: '6.7rem' }}>
                    <DatePicker
                      style={{
                        width: '6.5rem',
                        boxSizing: 'border-box',
                        height: '34px',
                      }}
                      containerStyle={{
                        marginTop: '-8px',
                        width: '65%',
                      }}
                      value={new Date()}
                      weekDays={weekDays}
                      months={months}
                      plugins={[weekends()]}
                    />
                  </div>
                  <span className="span-next-calender">～</span>
                  <DatePickerCommon />
                  <Button className="btn-calender ms-90">
                    <b>C</b>
                  </Button>
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
                  <div className="d-flex  margin-checkbox">
                    <CheckBoxCustom
                      id="checkId"
                      label="精神"
                      value=""
                      checked
                    />
                    <CheckBoxCustom id="checkId" label="定期巡回" value="" />
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
                主たる傷病名
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    name="Name of main injury"
                    className="w-120"
                    maxLength={7}
                    defaultValue=""
                  />
                  <Button className="btn-next-select">
                    <b>病</b>
                  </Button>
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
                主たる傷病名 <br />
                （ワープロ入力）
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className="me-2">全体表示</Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="Name-of-main-injury"
                  placeholder=""
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
                病状・治療状態
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className="me-2">全体表示</Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="Medical-condition"
                  placeholder=""
                  style={{ height: '100px' }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="form-group-container"
              controlId="form_user_id"
            >
              <Col sm={12} md={11} lg={10} className="mt-2-div">
                <Table responsive className="table-bordered mb-2">
                  <tbody className="bg-light-yellow label-dialog">
                    <tr>
                      <td
                        className="bg-light-yellow label-dialog align-middle label-table "
                        rowSpan={8}
                      >
                        投薬中の薬剤の
                        <br />
                        用量・用法
                        <br />
                        <Button className="ms-2">入力欄追加</Button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="td-w-100 td-w-sm-10 align-middle"
                        colSpan={2}
                      >
                        ※指示書には6個までしか反映されません。
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">1</td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-120"
                              defaultValue=""
                            />
                            <span className="span-next-calender">＜全角＞</span>
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="td-w-100 td-w-sm-10 align-middle"
                        style={{ width: '7.1rem' }}
                      >
                        2
                      </td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-120"
                              defaultValue=""
                            />
                            <span className="span-next-calender">＜全角＞</span>
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">3</td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-120"
                              defaultValue=""
                            />
                            <span className="span-next-calender">＜全角＞</span>
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">4</td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-120"
                              defaultValue=""
                            />
                            <span className="span-next-calender">＜全角＞</span>
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">5</td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-120"
                              defaultValue=""
                            />
                            <span className="span-next-calender">＜全角＞</span>
                          </div>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-w-100 td-w-sm-10 align-middle">6</td>
                      <td className="bg-white">
                        <Col sm={12}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="person_in_charge"
                              className="w-120"
                              defaultValue=""
                            />
                            <span className="span-next-calender">＜全角＞</span>
                          </div>
                        </Col>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="form-group-container"
              controlId="form_user_id"
            >
              <Col sm={12} md={11} lg={10} className="mt-2-div">
                <Table responsive className="table-bordered mb-2">
                  <tbody className="bg-light-yellow label-dialog">
                    <tr>
                      <td
                        className="bg-light-yellow label-dialog align-middle label-table "
                        rowSpan={3}
                      >
                        病名告知
                      </td>
                    </tr>
                    <tr className="none-bg-light-yellow">
                      <td>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked
                          />
                          <label className="form-check-label">無</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label className="form-check-label">有</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="none-bg-light-yellow">
                      <td>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Control
                            type="text"
                            name="name of disease"
                            className="w-120"
                            defaultValue=""
                          />
                          <span className="span-next-calender">＜全角＞</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
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
                治療の受け入れ
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    name="Acceptance of treatment"
                    className="w-120"
                    defaultValue=""
                  />
                  <span className="span-next-calender">＜全角＞</span>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="form-group-container"
              controlId="form_user_id"
            >
              <Col sm={12} md={11} lg={10} className="mt-2-div">
                <Table responsive className="table-bordered mb-2">
                  <tbody className="bg-light-yellow label-dialog">
                    <tr>
                      <td
                        className="bg-light-yellow label-dialog align-middle label-table "
                        rowSpan={3}
                      >
                        複数名訪問の必要性
                      </td>
                    </tr>
                    <tr className="none-bg-light-yellow">
                      <td>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked
                          />
                          <label className="form-check-label">無</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label className="form-check-label">有</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="none-bg-light-yellow">
                      <td>
                        <Form.Check
                          name="scription1"
                          label="１．暴力行為、著しい迷惑行為、器物破損行為等が認められる者"
                        />
                        <Form.Check
                          name="scription2"
                          label="２．利用者の身体的理由により一人の看護師等による訪問看護が困難と認められる者"
                        />
                        <Form.Check
                          name="scription3"
                          label="３．利用者及びその家族それぞれへの支援が必要な者"
                        />
                        <InputGroup>
                          <Form.Check name="scription4" label="４．その他" />
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              name="Acceptance of treatment"
                              className="w-120 ms-2"
                              defaultValue=""
                            />
                            <span className="fz-12">＜全角＞</span>
                          </div>
                        </InputGroup>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="form-group-container"
              controlId="form_user_id"
            >
              <Col sm={12} md={11} lg={10} className="mt-2-div">
                <Table responsive className="table-bordered mb-2">
                  <tbody className="bg-light-yellow label-dialog">
                    <tr>
                      <td
                        className="bg-light-yellow label-dialog align-middle label-table "
                        rowSpan={3}
                      >
                        短時間訪問の必要性
                      </td>
                    </tr>
                    <tr className="none-bg-light-yellow">
                      <td>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4"
                            checked
                          />
                          <label className="form-check-label">無</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault5"
                          />
                          <label className="form-check-label">有</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="none-bg-light-yellow">
                      <td>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Control
                            type="text"
                            name="name of disease"
                            className="w-120"
                            defaultValue=""
                          />
                          <span className="span-next-calender">＜全角＞</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="form-group-container"
              controlId="form_user_id"
            >
              <Col sm={12} md={11} lg={10} className="mt-2-div">
                <Table responsive className="table-bordered mb-2">
                  <tbody className="bg-light-yellow label-dialog">
                    <tr>
                      <td
                        className="bg-light-yellow label-dialog align-middle label-table "
                        rowSpan={3}
                      >
                        複数回訪問の必要性
                      </td>
                    </tr>
                    <tr className="none-bg-light-yellow">
                      <td>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked
                          />
                          <label className="form-check-label">無</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label className="form-check-label">有</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="none-bg-light-yellow">
                      <td>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Control
                            type="text"
                            name="name of disease"
                            className="w-120"
                            defaultValue=""
                          />
                          <span className="span-next-calender">＜全角＞</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="form-group-container"
              controlId="form_user_id"
            >
              <Col sm={12} md={11} lg={10} className="mt-2-div">
                <Table responsive className="table-bordered mb-2">
                  <tbody className="bg-light-yellow label-dialog">
                    <tr>
                      <td
                        className="bg-light-yellow label-dialog align-middle label-table "
                        rowSpan={2}
                      >
                        日常生活自立度
                      </td>
                    </tr>
                    <tr>
                      <td>認知症の状況</td>
                      <td className="none-bg-light-yellow">
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Select
                            defaultValue=""
                            name="dementia_status"
                            onChange={(e) => handleOnChangeValue(e)}
                            className="w-50 w-sm-100 mt-2 mt-md-0"
                          >
                            {dementia_status.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </Form.Select>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
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
                生活リズムの確立
                <br />
                <Form.Check name="said" label="該当" />
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className="me-2">全体表示</Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="Medical-condition"
                  placeholder=""
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
                家事能力、社会的技
                <br />
                能等の獲得
                <br />
                <Form.Check name="said" label="該当" />
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className="me-2">全体表示</Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="Medical-condition"
                  placeholder=""
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
                対人関係の改善
                <br />
                （家族含む）
                <br />
                <Form.Check name="said" label="該当" />
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className="me-2">全体表示</Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="Medical-condition"
                  placeholder=""
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
                社会資源活用の支援
                <br />
                <Form.Check name="said" label="該当" />
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className="me-2">全体表示</Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="Medical-condition"
                  placeholder=""
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
                薬物療法継続への
                <br />
                援助
                <br />
                <Form.Check name="said" label="該当" />
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className="me-2">全体表示</Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="Medical-condition"
                  placeholder=""
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
                身体合併症の
                <br />
                発症・悪化の防止
                <br />
                <Form.Check name="said" label="該当" />
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className="me-2">全体表示</Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="Medical-condition"
                  placeholder=""
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
                その他
                <br />
                <Form.Check name="said" label="該当" />
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className="me-2">全体表示</Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="Medical-condition"
                  placeholder=""
                  style={{ height: '100px' }}
                />
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
                緊急時の連絡先
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    name="Acceptance of treatment"
                    className="w-120"
                    defaultValue=""
                  />
                  <span className="span-next-calender">＜全角＞</span>
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
                不在時の対応法
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    name="Acceptance of treatment"
                    className="w-120"
                    defaultValue=""
                  />
                  <span className="span-next-calender">＜全角＞</span>
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
                主治医との
                <br />
                情報交換の手段
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    name="Acceptance of treatment"
                    className="w-120"
                    defaultValue=""
                  />
                  <span className="span-next-calender">＜全角＞</span>
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
                特記すべき留意事項
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className="me-2">全体表示</Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="Medical-condition"
                  placeholder=""
                  style={{ height: '100px' }}
                />
              </Col>
            </Form.Group>

            {/* {isShowDoneDialogDelete && (
                <DialogConfirm
                  buttons={buttons}
                  message="データを削除しました。"
                  onHidePopup={handleDoneDialogDelete}
                  className="w-dialog-confirm text-danger"
                />
              )} */}
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
                className="btn-min-w border-primary"
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

          {isShowConfirmDialog && (
            <DialogConfirm
              buttons={buttons}
              message={messageDialog}
              onHidePopup={handleCloseDialogConfirm}
              className="w-dialog-confirm text-danger"
            />
          )}
        </div>
      </div>
    </MasterLayout>
  );
}

export default HomevisitNursingInstructionInformationRegister;
