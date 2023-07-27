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
// import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Table } from 'react-bootstrap';
import DatePickerCommon from '@/components/user/schedule/DatePickerCommon';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { DateObject } from 'react-multi-date-picker';
import {
  DEFAULT_USER_INFORMATION,
  DEFAULT_VALUES,
  WAREKI,
} from '@/data/user-list';
import { useDispatch } from 'react-redux';
import { hideDialog } from '@/store/user/userSlice';
import { useNavigate } from 'react-router';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';
import CheckBoxCustom from '@/components/CheckboxCustom';
import { AdditionalInfoRegister } from '@/interfaces/AdditionalInfoRegister';
import { AdditionalInfoRegister2 } from '@/interfaces/AdditionalInfoRegister';
import '@assets/scss/user/detail/insurance/insurance.scss';
import { dataAdditionalInfoRegister } from '@/data/additional-information';
import { dataAdditionalInfoRegister2 } from '@/data/additional-information';

function AdditionalInformationRegister() {
  const [validated, setValidated] = useState(false);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [, setValueSelect] = useState<DateObject[]>([]);
  const [, setDateSchedule] = useState<DateObject>(new DateObject());
  const [, setIsDateInput] = useState<boolean>(false);
  const [date] = useState<DateObject>(new DateObject());
  const [targetRow, setTargetRow] = useState<Person>(DEFAULT_USER_INFORMATION);
  const [tableSelectedItem] = useState<Person | null>(null);
  const [tableData, setTableData] = useState<Array<Person>>([]);
  const [list, setList] = useState<AdditionalInfoRegister[]>([]);
  const [list2, setList2] = useState<AdditionalInfoRegister2[]>([]);

  useEffect(() => {
    setList(dataAdditionalInfoRegister);
  }, []);

  useEffect(() => {
    setList2(dataAdditionalInfoRegister2);
  }, []);

  const [targetIndex] = useState<number>(-1); // Not in array index by default for register processing
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const dispatch = useDispatch();
  const [showOnly] = useState(false);

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

  //submit form
  const handleSubmit = async () => {
    // Xử lý dữ liệu gửi đi ở đây
    await setValueSelect(value);
    setDateSchedule(date);
    if (!value) {
      setIsDateInput(true);
    } else {
      setIsDateInput(false);
    }
  };
  //change month
  const [value] = useState<DateObject | any>();

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
    navigate('/user/insurance/additional-information');
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
          <CustomHeading title="加算情報" />
          <TabButtonLink active={8} arrayButton={itemTabInsurance} />
          <Form.Group
            className="calender-schedule d-flex ms-2"
            style={{ margin: '1.5rem' }}
          >
            <label
              className="date-calendar d-inline-flex"
              style={{ margin: '0 1rem' }}
            >
              対象年度検索
            </label>
            <DatePickerCommon />
          </Form.Group>
          <Form className="user-list mt-1">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
              <Form.Group className="d-flex justify-content-between">
                <h5>◆　加算情報</h5>
              </Form.Group>
            </div>
          </Form>

          <div
            className="table"
            style={{
              backgroundColor: 'rgb(221, 230, 237)',
              paddingInline: 15,
              borderRadius: 5,
            }}
          >
            <div className="div-height">
              <div
                className="table-container"
                style={{ overflowY: 'auto', blockSize: '85%' }}
              >
                <Table hover className="table-billing-info-list">
                  <thead>
                    <tr className="title-table-billing-info-list">
                      <th>保険種別</th>
                      <th></th>
                      <th>加算名称</th>
                      <th>金額</th>
                    </tr>
                  </thead>
                  <tbody className="tbody-billing-info-list">
                    {list.map((item, index) => (
                      <tr key={index}>
                        <td>{item.insuranceType}</td>
                        <td>{item.none}</td>
                        <td className="table-text-left">
                          {item.addition_name}
                        </td>
                        <td className="table-text-right">
                          {item.money_amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <thead>
                    <tr className="title-table-billing-info-list">
                      <th>保険種別</th>
                      <th>加算コード</th>
                      <th>加算名称</th>
                      <th>単位数</th>
                    </tr>
                  </thead>
                  <tbody className="tbody-billing-info-list">
                    {list2.map((item, index) => (
                      <tr key={index}>
                        <td>{item.insuranceType2}</td>
                        <td className="table-text-left">
                          {item.addition_code}
                        </td>
                        <td className="table-text-left">
                          {item.addition_name2}
                        </td>
                        <td className="table-text-right">
                          {item.credits_number}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <Form.Group
            as={Row}
            className="mb-2 mt-3 form-group-container mt-3-div"
            controlId="form_user_id"
          >
            <Col sm={9} className="text-start">
              <h5>◆　有効期限</h5>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_date_of_death"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog">
              有効開始年月日
              <span className="color-text-custom" style={{ color: 'red' }}>
                【必】
              </span>
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
            <Form.Label column sm={4} className="bg-light-yellow label-dialog">
              有効終了年月日
              <span className="color-text-custom" style={{ color: 'red' }}>
                【必】
              </span>
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
                  <CheckBoxCustom id="checkId" label="継続して算定" value="" />
                </Col>
              </Row>
            </Col>
          </Form.Group>

          <Button
            type="button"
            className="custom-btn-submit"
            onClick={handleSubmit}
            style={{
              marginLeft: '18rem',
              marginRight: '68%',
              marginBottom: '1rem',
            }}
          >
            ▼　追加
          </Button>

          <div
            className="table"
            style={{
              backgroundColor: 'rgb(221, 230, 237)',
              paddingInline: 15,
              borderRadius: 5,
            }}
          >
            <div className="div-height">
              <div className="" style={{ overflowY: 'auto', blockSize: '85%' }}>
                <Form.Group
                  as={Row}
                  className="mb-2 mt-3 form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={9} className="text-start">
                    <h5>◆　選択済加算一覧</h5>
                  </Col>
                  <Table hover className="table-billing-info-list">
                    <thead>
                      <tr className="title-table-billing-info-list">
                        <th>削</th>
                        <th>保険</th>
                        <th>有効期間</th>
                        <th className="sm-col-18">加算名称</th>
                      </tr>
                    </thead>
                    <tbody className="tbody-billing-info-list">
                      <tr>
                        <td>
                          <Form.Check name='checkbox' />
                        </td>
                        <td>医療</td>
                        <td>
                          <tr>
                            <td className='row-in-col'>
                              <DatePickerCommon />
                            </td>
                            <td className='row-in-col'>
                              <span className="px-2">～</span>
                            </td>
                            <td className='row-in-col'>
                              <DatePickerCommon />
                            </td>
                            <td className='row-in-col2'>
                              <CheckBoxCustom
                                id="checkId"
                                label="継続算定"
                                value=""
                                checked
                              />
                            </td>
                          </tr>
                        </td>
                        <td className="table-text-left">
                          機能強化型訪問看護管理療養費１（月の初回）
                        </td>
                      </tr>

                      <tr>
                        <td>
                        <Form.Check name='checkbox' />
                        </td>
                        <td>医療</td>
                        <td>
                          <tr>
                            <td className='row-in-col'>
                              <DatePickerCommon />
                            </td>
                            <td className='row-in-col'>
                              <span className="px-2">～</span>
                            </td>
                            <td className='row-in-col'>
                              <DatePickerCommon />
                            </td>
                            <td className='row-in-col2'>
                              <CheckBoxCustom
                                id="checkId"
                                label="継続算定"
                                value=""
                              />
                            </td>
                          </tr>
                        </td>
                        <td className="table-text-left">
                          訪問看護ターミナルケア療養費2
                        </td>
                      </tr>

                      <tr>
                        <td>
                        <Form.Check name='checkbox' />
                        </td>
                        <td>医療</td>
                        <td>
                          <tr>
                            <td className='row-in-col'>
                              <DatePickerCommon />
                            </td>
                            <td className='row-in-col'>
                              <span className="px-2">～</span>
                            </td>
                            <td className='row-in-col'>
                              <DatePickerCommon />
                            </td>
                            <td className='row-in-col2'>
                              <CheckBoxCustom
                                id="checkId"
                                label="継続算定"
                                value=""
                              />
                            </td>
                          </tr>
                        </td>
                        <td className="table-text-left">
                          訪問看護ターミナルケア療養費1
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Form.Group>
              </div>
            </div>
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

export default AdditionalInformationRegister;
