/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
adapt
 */

import TextfieldWithIcon from '@components/TextfieldWithIcon';
import SubmitButton from '@components/SubmitButton';
import MasterLayout from '@/layout/MasterLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import { format, eachDayOfInterval, isSameMonth, lastDayOfMonth, getDate } from 'date-fns';
import { ja } from 'date-fns/locale';
import Form from 'react-bootstrap/Form';
import { FormEvent, useState, useEffect } from 'react';
import '@/assets/scss/user/schedule/Schedule.scss';
import { itemsSelectFacility, itemsSelectInsurance } from '@/data/user-list';
import TextFieldWithDropdown from '@/components/TextfieldWithDropdown';
import CheckBoxCustom from '@/components/CheckboxCustom';
import { useDispatch } from 'react-redux';
import { userSelector, searchUser, setSelectRow } from '@/store/user/userSlice';
import { useAppSelector } from '@/store/hooks';
import ScheduleTab from '@/components/user/schedule/ScheduleTab';
import { data, monthSelect } from '@/data/schedule';
import clsx from 'clsx';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Cell } from '@/interfaces/Schedule';
import CustomHeadingSchedule from '@/components/user/schedule/HeaderSchedule';


function Schedule() {
  const [isShowRegisterDialog] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [datesWithWeekday, setDatesWithWeekday] = useState<{ date: Date; dayOfWeek: string }[]>([]);
  const now = new Date();

  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const [monthSelected, setMonthSelected] = useState<number>(currentMonth)
  const [yearSelected, setYearSelected] = useState<number>(currentYear)
  useEffect(() => {
    getCurrentMonthDays();
  }, [monthSelected, yearSelected]);
  const getCurrentMonthDays = () => {

    const startDate = new Date(yearSelected, monthSelected, 1);
    const endDate = new Date(yearSelected, monthSelected + 1, 0);
    const allDates = eachDayOfInterval({ start: startDate, end: endDate });
    const datesWithWeekday = allDates.map((date) => ({
      date,
      dayOfWeek: format(date, 'eee', { locale: ja }),
    }));
    const datesWithWeekdayInCurrentMonth = datesWithWeekday.filter((date) =>
      isSameMonth(date.date, startDate)
    );
    setDatesWithWeekday(datesWithWeekdayInCurrentMonth);
  };
  const dispatch = useDispatch();
  const { isShowTableFirstTime } = useAppSelector(userSelector);
  const [activeCell, setActiveCell] = useState<Cell | null>(null);
  const [userInfo, setUserInfor] = useState(null)

  const handleCellClick = (
    rowIndex: number,
    columnIndex: number,
    type: any,
    userInfor: any,
  ) => {
    dispatch(setSelectRow(userInfor))
    setUserInfor(userInfor)
    setActiveCell({ rowIndex, columnIndex });
    setIsDisabled(false);
    setType(type);
    console.log(rowIndex, columnIndex)
  }
  const [type, setType] = useState(null);
  const clickSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dates = new Date(event.currentTarget.year.value, event.currentTarget.month.value - 1); // months in JavaScript start from 0 (0 is January, 6 is July)
    const lastDay = lastDayOfMonth(dates);
    const daysInMonth = getDate(lastDay);
    setMonthSelected(event.currentTarget.month.value - 1)
    setYearSelected(event.currentTarget.year.value)
    setDateInMonth(daysInMonth)

    dispatch(
      searchUser({
        userId: event.currentTarget.inputID.value,
        kanaName: event.currentTarget.inputName.value,
      }),
    );
  };
  const navigate = useNavigate()
  const years: number[] = Array.from({ length: 20 }, (_, index) => currentYear + index - 10);
  const currentDate = new Date(); // get the current date
  const lastDay = lastDayOfMonth(currentDate);
  const daysInCurrentMonth = getDate(lastDay);
  const [dateInMonth, setDateInMonth] = useState<number>(daysInCurrentMonth)

  return (
    <MasterLayout userInfo={userInfo}>
      <div className="main" id="schedule">
        {!isShowRegisterDialog && (
          <div className="px-1 px-md-3 w-100 my-2">
            <Form className="user-list mt-1" onSubmit={clickSearch}>
              <CustomHeadingSchedule title="スケジュール登録" />
              <ScheduleTab active={1} />
              <Form.Group
                className="d-md-flex justify-content-start row-input"
                controlId="exampleForm.ControlInput1"
              >
                <div className="mt-2">
                  <TextfieldWithIcon id="inputID" label="利用者ID検索">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </TextfieldWithIcon>
                </div>
                <div className="mt-2 ms-md-0 ms-lg-2">
                  <TextFieldWithDropdown
                    id="drop_id"
                    label="利用施設検索"
                    data={itemsSelectFacility}
                    labelFieldName="value"
                    valueFieldName="id"
                    spaceLable={100}
                  />
                </div>
              </Form.Group>
              <Form.Group
                className="mt-2 row-input"
                controlId="exampleForm.ControlTextarea1"
              >
                <TextfieldWithIcon
                  id="inputName"
                  label="利用者名カナ検索"
                  inputClassName="input-text-kana"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </TextfieldWithIcon>
              </Form.Group>
              <Form.Group
                className="d-md-flex mt-2 row-input fs-14"
                controlId="exampleForm.ControlTextarea1"
              >
                <div>
                  <TextFieldWithDropdown
                    id="drop_id"
                    label="保険種別検索"
                    data={itemsSelectInsurance}
                    labelFieldName="value"
                    valueFieldName="id"
                    spaceLable={145}
                  />
                </div>
                <div className="d-flex  margin-checkbox">
                  <CheckBoxCustom id="checkId" label="精神" value="" />
                  <CheckBoxCustom id="checkId" label="定期巡回" value="" />
                </div>
              </Form.Group>
              <Form.Group
                className="mt-2 row-input fs-14"
                controlId="exampleForm.ControlTextarea1"
                as={Row}
              >
                <Form.Label column sm={1} className=" label-dialog-custom">
                  検索年月
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center my-2">
                      <select defaultValue={currentYear} className="me-2" name='year'>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <div className="text-calendar">年</div>
                      <select defaultValue={currentMonth + 1} className="mx-2" name='month'>
                        {monthSelect.map((month) => (
                          <option key={month.value} value={month.value}>
                            {month.label}
                          </option>
                        ))}
                      </select>
                      <div className="text-calendar">月</div>
                    </div>
                  </div>
                </Col>
              </Form.Group>
              <Form.Group
                className="d-md-flex mt-2 row-input fs-14"
                controlId="exampleForm.ControlTextarea1"
              >
                <div className="d-flex align-items-center h-100 label-group">
                  <label className="px-2">その他検索</label>
                </div>
                <div className="d-flex align-items-center pl-mb-10 d-block-mb">
                  <CheckBoxCustom
                    id="checkId"
                    label="利用者（死亡）を除く"
                    value="123"
                  />
                  <CheckBoxCustom
                    id="checkId"
                    label="利用者（訪問終了）を除く"
                    value="123"
                  />
                  <CheckBoxCustom
                    id="checkId"
                    label="サテライト利用"
                    value="123"
                  />
                </div>
              </Form.Group>
              <Form.Group
                className="mt-2 row-input"
                controlId="exampleForm.ControlInput1"
              >
                <TextfieldWithIcon id="inputUser" label="担当職員検索">
                  職
                </TextfieldWithIcon>
              </Form.Group>
              <div className="d-sm-flex justify-content-between align-items-center mt-3">
                <Form.Group className="d-flex justify-content-between">
                  <SubmitButton width={150} value="検索"></SubmitButton>
                </Form.Group>
                <div></div>
              </div>
            </Form>
            <div>
              {isShowTableFirstTime && (
                <div>
                  <div className="d-md-flex  justify-content-between align-items-center my-2">
                    <Form>
                      {['radio'].map((type: any) => (
                        <div key={`inline-${type}`} className="mb-3 ms-1">
                          <Form.Check
                            inline
                            label="個別 "
                            name="group1"
                            type={type as any}
                            id={`inline-${type}-1`}
                            className="mt-3 w-md-100"
                            defaultChecked
                          />
                          <Form.Check
                            inline
                            label="一括"
                            name="group1"
                            type={type as any}
                            id={`inline-${type}-2`}
                            className="w-md-100"
                          />
                          <Form.Check
                            name="group1"
                            inline
                            label="一括(実績)"
                            type={type as any}
                            id={`inline-${type}-3`}
                            className="w-md-100"
                          />
                        </div>
                      ))}
                    </Form>
                    <div className="row">
                      <div className="col-md-4 col-12">
                        {' '}
                        <Button className="rounded px-4 custom-button w-100 ">
                          実績報告 (医) 印刷
                        </Button>
                      </div>
                      <div className="col-md-4 col-12 my-2 my-md-0">
                        <Button className="rounded px-4 custom-button w-100 ">
                          実績報告 (介) 印刷
                        </Button>
                      </div>
                      <div className="col-md-4 col-12">
                        <Button className="rounded px-4 custom-button w-100 ">
                          実績報告 (自) 印刷
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Col lg={12}>
                    <Table bordered responsive className="w-100  mb-0">
                      <thead className="bg-th-schedule">
                        <tr>
                          <th rowSpan={2} className="align-middle text-center">
                            <div className="h-100 ">利用者氏名</div>
                          </th>
                          {datesWithWeekday.map((items) => (
                            <th
                              key={items.date.toISOString()}
                              className="custom-column text-center"
                            >
                              <div
                                className={clsx({
                                  'text-danger': items.dayOfWeek == '日',
                                  'text-info': items.dayOfWeek === '土',
                                })}
                              >
                                {format(items.date, 'd')}
                              </div>
                              <div
                                className={clsx({
                                  'text-danger': items.dayOfWeek == '日',
                                  'text-info': items.dayOfWeek === '土',
                                })}
                              >
                                {items.dayOfWeek}
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((row: any, rowIndex: any) => (
                          <tr key={row.userName}>
                            <td className="d-d-inline-block custom-column-1 ps-1">
                              <div>
                                {row.userName.split('').slice(0, 10).join('')}
                              </div>
                              <div>
                                {row.userName.split('').slice(10).join('')}
                              </div>
                            </td>
                            {Object.keys(row.cells)
                              .slice(0, dateInMonth)
                              .map((key) => (
                                <td
                                  key={key}
                                  className={clsx(
                                    'custom-cell',
                                    'text-center',
                                    'align-middle',
                                    { 'bg-text-cell': row.cells[key] !== '' },

                                    {
                                      'bg-custom-cell':
                                        activeCell &&
                                        activeCell.rowIndex === rowIndex &&
                                        activeCell.columnIndex ===
                                        parseInt(key),
                                    },
                                    '',
                                  )}
                                  onClick={() =>
                                    handleCellClick(
                                      rowIndex,
                                      parseInt(key),
                                      row.cells[key],
                                      row,
                                    )
                                  }
                                >
                                  {row.cells[key]}
                                </td>
                              ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                  <Col sm={12} xl={11} className="mt-2">
                    {type === '' && (
                      <Table bordered responsive="sm" className="w-100 mb-0">
                        <thead className="bg-th-schedule">
                          <tr>
                            <th
                              colSpan={2}
                              className="w-title align-middle"
                            ></th>
                            <th className="w-title">訪問日時</th>
                            <th>訪問職員</th>
                            <th>算定方法</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="bg-color-td-schedule">内容</td>
                            <td className="bg-color-td-schedule">内容</td>
                            <td colSpan={3} className="bg-color-td-schedule-1">
                              Otto
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    )}
                    {/* 'o' */}
                    <div className="mb-2">
                      {type === '○' && (
                        <Table bordered responsive="sm" className="mb-1">
                          <thead className="bg-th-schedule">
                            <tr>
                              <th
                                colSpan={3}
                                className="w-title align-middle"
                              ></th>
                              <th className="w-title">訪問日時</th>
                              <th className="w-title">訪問職員</th>
                              <th className="w-title">算定方法</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                rowSpan={3}
                                className="bg-color-td-schedule align-middle"
                              >
                                内容
                              </td>
                              <td
                                rowSpan={2}
                                className="bg-color-td-schedule align-middle"
                              >
                                1回目{' '}
                              </td>
                              <td className="bg-color-td-schedule-1">予定</td>
                              <td className="bg-color-td-schedule-1">
                                <div>06/16</div> <div>10:00～11:00</div>
                              </td>
                              <td className="bg-color-td-schedule-1">
                                <div>大西　良樹[看護師]</div>
                              </td>
                              <td className="bg-color-td-schedule-1">
                                医療(精神)
                              </td>
                            </tr>
                            <tr className="bg-color-td-schedule-1">
                              <td>実績</td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="bg-color-td-schedule">2回目</td>
                              <td
                                colSpan={4}
                                className="bg-color-td-schedule-1"
                              ></td>
                            </tr>
                          </tbody>
                        </Table>
                      )}
                    </div>
                    {/* '◇' */}
                    <div className="mb-2">
                      {type === '◇' && (
                        <Table bordered responsive="sm" className="mb-1">
                          <thead className="bg-th-schedule">
                            <tr>
                              <th colSpan={3} className="w-title"></th>
                              <th className="w-title">訪問日時</th>
                              <th className="w-title">訪問職員</th>
                              <th className="w-title">算定方法</th>
                            </tr>
                          </thead>
                          <tbody className="bg-color-td-schedule-1">
                            <tr>
                              <td
                                rowSpan={7}
                                className="bg-color-td-schedule align-middle"
                              >
                                内容
                              </td>
                              <td
                                rowSpan={2}
                                className="bg-color-td-schedule align-middle"
                              >
                                1回目{' '}
                              </td>
                              <td>予定</td>
                              <td>
                                <div>06/19</div> <div>15:00～16:00</div>
                              </td>
                              <td>
                                <div>森泉　澄代[看護師]</div>
                              </td>
                              <td>医療</td>
                            </tr>
                            <tr>
                              <td>実績</td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td rowSpan={2} className="bg-color-td-schedule">
                                2回目
                              </td>
                              <td>予定</td>
                              <td>
                                <div>06/19</div>
                                <div>16:00～11:00</div>
                              </td>
                              <td>大西　良樹[看護師]</td>
                              <td>医療(精神)</td>
                            </tr>
                            <tr>
                              <td>実績</td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td
                                rowSpan={2}
                                className="bg-color-td-schedule align-middle"
                              >
                                3回目{' '}
                              </td>
                              <td>予定</td>
                              <td>
                                <div>06/19</div>
                                <div>19:10～20:10</div>
                              </td>
                              <td> 大西　良樹[看護師]</td>
                              <td>医療</td>
                            </tr>

                            <tr>
                              <td>医療</td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="bg-color-td-schedule">4回目</td>
                              <td colSpan={4}></td>
                            </tr>
                          </tbody>
                        </Table>
                      )}
                    </div>
                    {/* '◎' */}
                    <div className="mb-2">
                      {type === '◎' && (
                        <Table bordered responsive="sm" className="mb-1">
                          <thead className="bg-th-schedule">
                            <tr>
                              <th
                                colSpan={3}
                                className="w-title align-middle"
                              ></th>
                              <th className="w-title">訪問日時</th>
                              <th className="w-title">訪問職員</th>
                              <th className="w-title">算定方法</th>
                            </tr>
                          </thead>
                          <tbody className="bg-color-td-schedule-1">
                            <tr>
                              <td
                                rowSpan={5}
                                className="bg-color-td-schedule align-middle"
                              >
                                内容
                              </td>
                              <td
                                rowSpan={2}
                                className="bg-color-td-schedule align-middle"
                              >
                                1回目{' '}
                              </td>
                              <td>予定</td>
                              <td>
                                <div>06/20</div> <div>10:00～11:00</div>
                              </td>
                              <td>
                                <div>大西　良樹[看護師]</div>
                              </td>
                              <td>医療</td>
                            </tr>
                            <tr>
                              <td>実績</td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td
                                rowSpan={2}
                                className="bg-color-td-schedule align-middle"
                              >
                                2回目
                              </td>
                              <td>予定</td>
                              <td>
                                <div>06/20</div>
                                <div>10:00～11:00</div>
                              </td>
                              <td>大西　良樹[看護師]</td>
                              <td>医療</td>
                            </tr>
                            <tr>
                              <td>実績</td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td className="bg-color-td-schedule">3回目</td>
                              <td colSpan={4}></td>
                            </tr>
                          </tbody>
                        </Table>
                      )}
                    </div>

                  </Col>
                  <Col className="mt-2 w-75 w-75-button">
                    <Row sm={12} md={6}>
                      <div className="col-lg-2 col-md-4 col-12 my-1">
                        {' '}
                        <Button
                          className="rounded  custom-button w-100"
                          disabled={isDisabled}
                          onClick={() => {
                            navigate('/user/pedit-schedule');
                          }}
                        >
                          スケジュール登録
                        </Button>
                      </div>
                      <div className="col-lg-2 col-md-4 col-12 my-1">
                        <Button
                          className="rounded custom-button w-100"
                          disabled={isDisabled}
                          onClick={() => {
                            if (type === '') {
                              navigate('/user/pedit-result-register')
                            }
                            else {
                              navigate('/user/prefer-result')
                            }
                          }}
                        >
                          訪問看護実績登録
                        </Button>
                      </div>
                      <div className="col-lg-2 col-md-4 col-12 my-1">
                        <Button
                          className="rounded  custom-button w-100"
                          disabled={true}
                        >
                          経過記録参照／印刷
                        </Button>
                      </div>
                      <div className="col-lg-2 col-md-4 col-12 my-1">
                        <Button
                          className="rounded  custom-button w-100"
                          disabled={isDisabled}
                          onClick={() => {
                            navigate('/user/schedule/calendar')
                          }}
                        >
                          利用者カレンダー登録
                        </Button>
                      </div>
                    </Row>
                  </Col>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </MasterLayout>
  );
}

export default Schedule;
