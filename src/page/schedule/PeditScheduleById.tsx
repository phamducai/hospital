/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 */
import MasterLayout from '@/layout/MasterLayout';
import weekends from "react-multi-date-picker/plugins/highlight_weekends"
import { Person } from '@/interfaces/Person';
import {
  DEFAULT_USER_INFORMATION,
  INSU,
} from '@/data/user-list';
import { useState, useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import React from 'react';
import '@/assets/scss/user/schedule/Pedit-Schedule.scss';
import DatePicker, { DateObject } from "react-multi-date-picker"
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

import { months, weekDays } from '@/data/japan_th';
import CustomHeading from '@/components/user/detail/TextHeader';
import CheckBoxCustom from '@/components/CheckboxCustom';

interface dateCustom {
  day: number,
  hourEnd: number, hourStart: number, minuteEnd: number,
  minutestart: number,
  month: number,
  year: number,
}

function PeditScheduleById() {
  const [, setTargetRow] = useState<Person | undefined | any>(
    DEFAULT_USER_INFORMATION,
  );
  const refUserDialog = useRef<HTMLFormElement | null>(null);
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

  const [value, setValue] = useState<any>(new DateObject())
  const [valueSelect, setValueSelect] = useState<dateCustom[]>([])
  //submit form
  const handleSubmit = async () => {
    const timeHour = { hourStart: 10, minutestart: 30, hourEnd: 11, minuteEnd: 30, day: value.day, year: value.year, month: value.monthIndex + 1 };
    const updatedArr = [...valueSelect, timeHour];
    setValueSelect(updatedArr)

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
              <Col sm={12} md={6}>
                <div className="d-flex align-items-center m-2">
                  <DatePicker
                    style={{
                      width: "60%",
                      boxSizing: "border-box",
                      height: "26px"
                    }}
                    containerStyle={{
                      width: "60%"
                    }}
                    value={value}
                    weekDays={weekDays}
                    months={months}
                    plugins={[weekends()]}
                    onChange={setValue}
                  />
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
                    maxLength={2}

                    name="hour_start"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="max-w-50 me-2"
                  />
                  <span className="pt-symbol">：</span>
                  <Form.Control
                    required
                    type="text"
                    maxLength={2}

                    name="minute_start"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="max-w-50 ms-2"
                  />
                  <span className="mx-3 fs-2">~</span>
                  <Form.Control

                    type="text"
                    maxLength={2}

                    name="hour_end"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="max-w-50 me-2"
                  />
                  <span className="pt-symbol">：</span>
                  <Form.Control
                    required
                    type="text"
                    maxLength={2}

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
                訪問職員
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center mt-2 ">
                    <Form.Control
                      type="text"
                      value={20001}
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
                訪問職員２
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
                利用者氏名 <span className="color-text-custom">【必】</span>
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
                    <div className='me-2'><CheckBoxCustom
                      id="定期巡回"
                      label="精神"
                      value=""
                      checked={false}
                    /></div>
                    <div><CheckBoxCustom
                      id="定期巡回"
                      label="定期巡回"
                      value=""
                      checked={false}
                    /></div>
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
                  {valueSelect && valueSelect.map((item: dateCustom, index: number) => (
                    <tr key={index}>
                      <td className='text-center align-middle'>  <input type="checkbox" className='custom-input' /></td>
                      <td>{item.year}/{item.month}/{item.day} (月)</td>
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
          </Form.Group>
          <Form.Group
            as={Row}
            className="my-2 form-group-container mt-3-div"
            controlId="form_button_container"
          >
            <Col sm={10} className="text-left ps-0 ms-0">
              <Button
                variant="light"
                onClick={() => {
                  navigate('/user/schedule')
                }}
                className="btn-min-w-30 border-primary"
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

export default PeditScheduleById;
