/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**

 */
import MasterLayout from '@/layout/MasterLayout';
import { Person } from '@/interfaces/Person';
import {
  DEFAULT_USER_INFORMATION,
  INSU,
} from '@/data/user-list';
import { useState, useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { useAppSelector } from '@/store/hooks';
import { userSelector } from '@/store/user/userSlice';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import React from 'react';
import '@/assets/scss/user/schedule/Pedit-Schedule.scss';

import { Calendar, DateObject } from "react-multi-date-picker"
import Table from 'react-bootstrap/Table';
import { monthSelect } from '@/data/schedule';
import { months, weekDays } from '@/data/japan_th';
import { useNavigate } from 'react-router-dom';


import CustomHeading from '@/components/user/detail/TextHeader';
import CheckBoxCustom from '@/components/CheckboxCustom';
import CustomBottom from '@/components/user/schedule/TextBottom';
function PeditSchedule() {
  const [, setTargetRow] = useState<Person | undefined | any>(
    DEFAULT_USER_INFORMATION,
  );
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const { selectedRow } = useAppSelector(userSelector);

  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isShowDoneDialogDelete, setIsShowDoneDialogDelete] = useState(false);
  const [buttons, setButtons] = useState(Array<ButtonProps>);


  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
  };
  const handleOnChangeValue = (e: React.ChangeEvent<any>) => {
    setTargetRow((pre: any) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleDateChange = (selectedDates: any) => {
    if (selectedDates !== null) {
      setValue(selectedDates);
    }
  };

  //change month
  const [value, setValue] = useState<DateObject | any>()
  const [valueSelect, setValueSelect] = useState<DateObject[]>([])

  const currentYear: number = new Date().getFullYear();
  const currentMonth: number = new Date().getMonth() + 1;

  const years: number[] = Array.from({ length: 20 }, (_, index) => currentYear + index - 10);

  const [selectedMonth] = useState<string>(currentMonth.toString());
  const [selectedYear] = useState<string>(currentYear.toString());
  const calendarRef = useRef<HTMLElement | any>();
  const [date, setDate] = useState<DateObject>(new DateObject());
  const [, setDateSchedule] = useState<DateObject>(new DateObject());
  const [isDateInput, setIsDateInput] = useState<boolean>(false)
  const updateValueYear = (e: any) => {
    update('year', e.target.value);
  }
  const updateValueMonth = (e: any) => {
    update('month', e.target.value);
  }
  const update = (key: string, value: any) => {
    const currentDate = calendarRef.current?.date;
    if (currentDate) {
      calendarRef.current?.set(key, value);
      setDate(new DateObject(currentDate));
    }
  }

  //submit form
  const handleSubmit = async () => {
    // Xử lý dữ liệu gửi đi ở đây
    await setValueSelect(value)
    setDateSchedule(date)
    if (!value) {
      setIsDateInput(true)
    } else {
      setIsDateInput(false)
    }
  };
  const [messageDialog, setMessageDialog] = useState<string>('');
  const showDeleteConfirmDialog = () => {
    setMessageDialog('データを削除します。よろしいですか？');
    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          handleDoneDialogDelete();
        },
        className: 'button-dialog',
      },
      {
        text: '戻る',
        okButton: false,
        onClickButton: () => {
          handleCloseDialogConfirm();
        },
        className: 'button-dialog',
      },
    ]);
    setShowConfirmDialog(true);
  };
  const handleCloseDoneDialogDelete = () => {
    setIsShowDoneDialogDelete(false);
  };

  const handleDoneDialogDelete = () => {
    setShowConfirmDialog(false);
    setMessageDialog('データを削除しました。');
    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          handleCloseDoneDialogDelete()
        },
        className: 'button-dialog',
      },
    ]);
    setIsShowDoneDialogDelete(true);
  };
  const navigate = useNavigate()

  return (
    <MasterLayout>
      <CustomHeading title="スケジュール登録" />

      <div className="main" id='pedit-schedue'>
        {/* Page update */}
        <Form
          ref={refUserDialog}
          noValidate
          className="w-100 h-100 d-flex flex-column user-edit"

        >

          <Form.Group
            as={Row}
            className="my-2 form-group-container"
            controlId="form_button_container"
          ></Form.Group>

          {/* Calendar */}
          <Form.Group className="user-detail d-flex flex-column">
            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_user_id"
            >
              <Form.Label
                column
                sm={4}
                className=" label-dialog"
              >
                検索年月

              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-flex align-items-center m-2">
                  <select value={date?.year ? date?.year : selectedYear} onChange={updateValueYear} >
                    {years.map((year) => (
                      <option
                        key={year}
                        value={year}
                      >
                        {year}
                      </option>
                    ))}
                  </select>

                  <div className='text-calendar'>年</div>
                  <select value={date.month?.number ? date.month?.number : selectedMonth} onChange={updateValueMonth}>
                    {monthSelect.map((month) => (
                      <option
                        key={month.value}
                        value={month.value}
                      >
                        {month.label}
                      </option>
                    ))}
                  </select>
                  <div className='text-calendar'>月</div>
                </div>
                <Form.Control.Feedback type="invalid">
                  利用者IDを入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-container my-2 border"
            ></Form.Group>

            <Form.Group
              className="form-group-container my-3 p-2  "
            >
              <div> <span className='text-dark '>◆</span>　スケジュール</div>
            </Form.Group>

            {/* Calendar */}
            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_user_id"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >
                訪問年月日
                <span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div>
                    <Calendar
                      ref={calendarRef}
                      buttons={false}
                      disableYearPicker
                      disableMonthPicker
                      className="custom-calendar"
                      multiple={true}
                      value={value}
                      onChange={handleDateChange}
                      weekDays={weekDays}
                      months={months}
                      mapDays={({ date }) => {
                        const props = { className: '' }
                        const isWeekend = [0, 6].includes(date.weekDay.index)
                        if (isWeekend) props.className = "highlight highlight-red"
                        valueSelect?.forEach(selectedDate => {
                          if (
                            selectedDate.day === date.day &&
                            selectedDate.month.number === date.month?.number &&
                            selectedDate.year === date.year
                          ) {
                            props.className = "selected-day-final";
                          }
                        });
                        return props
                      }}
                    />
                  </div>
                  <div>
                    <div className='ms-3 mb-2'>◇	<span className='ms-1'>曜日選択</span></div>
                    <div className='d-flex ms-4 mb-2'>
                      <button className='custom-button'>日</button>
                      <button className='custom-button'>月</button>
                      <button className='custom-button'>火</button>
                      <button className='custom-button'>水</button>
                      <button className='custom-button'>木</button>
                      <button className='custom-button'>金</button>
                      <button className='custom-button'>土</button>
                      <button className='custom-button'>全</button>
                    </div>
                    <div className='ms-3 mb-2'>◇	<span className='ms-1'>曜日設定反映</span></div>
                    <div className='ms-5 mb-2 '><select name="" id="">
                      <option value="火：">火：</option>
                      <option value="金：">金：</option></select> </div>
                    <div className='ms-5'> <button className='custom-button-footer'>反映</button></div>
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
              controlId="form_time_of_death"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                訪問時間<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={8}>
                <div className='d-md-flex  justify-content-start align-items-center'><div className="d-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    required
                    type="text"
                    maxLength={4}
                    value={selectedRow?.deathTime}
                    name="hour_start"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="max-w-50 me-2"
                  />
                  <span className="pt-symbol">：</span>
                  <Form.Control
                    required
                    type="text"
                    maxLength={4}
                    value={selectedRow?.deathTime}
                    name="minute_start"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="max-w-50 ms-2"
                  />
                  <span className="mx-3 fs-2">~</span>
                  <Form.Control
                    required
                    type="text"
                    maxLength={4}
                    value={selectedRow?.deathTime}
                    name="hour_end"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="max-w-50 me-2"
                  />
                  <span className="pt-symbol">：</span>
                  <Form.Control
                    required
                    type="text"
                    maxLength={2}
                    value={selectedRow?.deathTime}
                    name="minute_end"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="max-w-50 ms-2"
                  />

                </div>
                  <div className="fz-12">
                    ＜半角数字＞
                  </div></div>
              </Col>
            </Form.Group>

            {/* Visit staff */}
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
                訪問職員
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center mt-2">
                    <Form.Control
                      type="text"
                      name="visit_staff"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-100"

                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-0">
                      <Button className="ms-2">職</Button>
                    </div>
                  </div>
                </Row>
              </Col>
            </Form.Group>
            {/* Visit staff 2 */}
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
                訪問職員２
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center mt-2 ">
                    <Form.Control
                      type="text"
                      name="visit_staff_2"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-100"

                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-0">
                      <Button className="ms-2">職</Button>
                    </div>
                  </div>
                </Row>
              </Col>
            </Form.Group>

            {/* id */}
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
                  <div className="d-flex justify-content-start align-items-center mt-2 ">
                    <Form.Control
                      type="text"
                      value={1001}
                      name="person_id"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"
                      disabled
                    />
                    <div className="d-flex justify-content-center align-items-center ms-md-2 mt-0">
                      <Button className="ms-2" disabled={true}>利</Button>
                      <Form.Label className='d-flex justify-content-center'>　<div>坂出　</div><div>次郎</div></Form.Label>
                    </div>
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
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Select
                    defaultValue='医療'
                    name="insurance"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="w-50 w-sm-100 mt-2 mt-md-0"
                    required
                  >
                    {INSU.map((item, index) => (
                      <option key={index} value={item}>{item}</option>
                    ))}
                  </Form.Select>
                  <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-0">
                    <div className='me-2'>
                      <CheckBoxCustom
                        id="精神"
                        label="精神"
                        value=""
                        checked={false}
                      />
                    </div>

                    <CheckBoxCustom
                      id="定期巡回"
                      label="定期巡回"
                      value=""
                      checked={false}
                    />


                  </div>
                </div>
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
                サービスコード
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center mt-2 ">
                    <Form.Control
                      type="text"

                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"
                      disabled
                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-2 mt-0 ">
                      <Button className="ms-2" disabled={true}>サ</Button>

                    </div>
                  </div>
                </Row>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2 form-group-container d-flex justify-content-center mt-3"
              controlId="form_person_in_charge"
            >
              <Button type="button" className='custom-btn-submit' onClick={handleSubmit}>
                ▼　追加
              </Button>

            </Form.Group>

            <Form.Group>

            </Form.Group>
            <Form.Group
              className="form-group-container my-3 p-2  "
            >
              <div> <span className='text-dark '>◆</span>訪問看護予定一覧</div>
            </Form.Group>
            <div className='w-100'>
              <Table bordered responsive='sm' className='table-container custom-table-schedule'>
                <thead>
                  <tr className='bg-th-schedule'>
                    <th>削</th>
                    <th>訪問年月日</th>
                    <th>訪問時間</th>
                    <th>訪問職員</th>
                    <th>利用者氏名</th>
                    <th>保</th>
                    <th>ｻｰﾋﾞｽｺｰﾄﾞ</th>
                    <th>単位</th>
                  </tr>
                </thead>
                <tbody>
                  {valueSelect && valueSelect.map((item: DateObject) => (
                    <tr key={item.unix}>
                      <td className='text-center align-middle '>  <input type="checkbox" className='custom-input ' /></td>
                      <td>{item.year}/{item.month.number}/{item.day} (月)</td>
                      <td>10:30~11:30</td>
                      <td></td>
                      <td>坂出　次郎	</td>
                      <td>医</td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}

                </tbody>
              </Table>
            </div>
            <div className='custom-table-schedule py-1 w-50'> <Button className='py-2 px-4 rounded ' onClick={showDeleteConfirmDialog}>登録</Button> </div>
            <Form.Group
              className="form-group-container my-3 p-2  "
            >
              <div> <span className='text-dark'>
                ◆　</span>予定加算(介護保険のみ)</div>
            </Form.Group>
            <div className='w-100'>
              <Table responsive='sm' bordered hover className='table-container custom-table-schedule'>
                <thead>
                  <tr className='bg-th-schedule'>
                    <th>加算名</th>
                    <th>有効開始日</th>
                    <th>有効終了日</th>
                    <th>ｻｰﾋﾞｽｺｰﾄﾞ</th>
                    <th>単位  </th>
                  </tr>
                </thead>
              </Table>
            </div>
            <div className='w-100'>
              <Table bordered hover className='table-container custom-table-schedule'>
                <tbody>
                  <tr>
                    <td className='w-25 bg-th-schedule'>計画単位数</td>
                    <td className='w-75'>0　単位</td>
                  </tr>
                  <tr>
                    <td className='w-25 bg-th-schedule'>限度額管理対象外単位数</td>
                    <td className='w-75'>0　単位</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            {isDateInput &&
              <div className='w-50 ms-3'>
                < CustomBottom title={'訪問年月日が入力されていません'} status={'danger'} />
              </div>}


          </Form.Group>
          <Form.Group
            as={Row}
            className="my-2 form-group-container mt-3-div"
            controlId="form_button_container"
          >
            <Col sm={10} className="text-left ps-0 ms-0">
              <Button
                variant="light"
                className="btn-min-w-30 border-primary"
                onClick={() => {
                  navigate('/user/schedule/')

                }}
              >
                戻る
              </Button>
            </Col>
          </Form.Group>

        </Form>
        {/* Dialog confirm */}
        {isShowConfirmDialog && (
          <DialogConfirm
            buttons={buttons}
            message={messageDialog}
            onHidePopup={handleCloseDialogConfirm}
            className="w-dialog-confirm text-danger`"
          />
        )}
        {isShowDoneDialogDelete && (
          <DialogConfirm
            buttons={buttons}
            message="データを削除しました。"
            onHidePopup={handleCloseDoneDialogDelete}
            className="w-dialog-confirm text-danger"
          />
        )}
      </div>



    </MasterLayout >
  );
}

export default PeditSchedule;
