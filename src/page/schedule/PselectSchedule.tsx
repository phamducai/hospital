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
import { format, eachDayOfInterval, isSameMonth } from 'date-fns';
import { ja } from 'date-fns/locale';
import Form from 'react-bootstrap/Form';
import { useState, useEffect, FormEvent } from 'react';
import '@/assets/scss/user/schedule/Pselect-Schedule.scss';
import { itemsSelectFacility } from '@/data/user-list';
import TextFieldWithDropdown from '@/components/TextfieldWithDropdown';
import CheckBoxCustom from '@/components/CheckboxCustom';
import { useDispatch } from 'react-redux';
import { setSelectRow, searchUser } from '@/store/user/userSlice';
import ScheduleTab from '@/components/user/schedule/ScheduleTab';
import { data, monthSelect } from '@/data/schedule';
import clsx from 'clsx';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Cell } from '@/interfaces/Schedule';

import CustomHeadingSchedule from '@/components/user/schedule/HeaderSchedule';
function PselectSchedule() {
  const [isShowRegisterDialog] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    getCurrentMonthDays();
  }, []);
  const [datesWithWeekday, setDatesWithWeekday] = useState<{ date: Date; dayOfWeek: string }[]>([]);
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const getCurrentMonthDays = () => {
    const startDate = new Date(currentYear, currentMonth, 1);
    const endDate = new Date(currentYear, currentMonth + 1, 0);
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
  const [isPink, setIsPink] = useState(false);
  const [activeCell, setActiveCell] = useState<Cell | null>(null);
  const [userInfo, setUserInfor] = useState(null)
  const [flag, setFlag] = useState<boolean>(false)
  const handleCellClick = (
    rowIndex: number,
    columnIndex: number,
    type: any,
    userInfor: any
  ) => {
    setFlag(true)
    dispatch(setSelectRow(userInfor))
    setUserInfor(userInfor)
    setActiveCell({ rowIndex, columnIndex });
    setIsDisabled(false);
    setType(type);
    if (type.slice(2) === 'pink') {
      setIsPink(true)
    } else {
      setIsPink(false)
    }
  };
  const [type, setType] = useState('');
  const [openTable, setOpenTable] = useState<boolean>(false);
  const navigate = useNavigate()
  const years: number[] = Array.from({ length: 20 }, (_, index) => currentYear + index - 10);
  const clickSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenTable(true)
    dispatch(
      searchUser({
        userId: event.currentTarget.inputID.value,
        kanaName: event.currentTarget.inputName.value,
      }),
    );
  };

  const [isCheckAll, setIsCheckAll] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<string[]>([]);
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    setList(data);
  }, []);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li: any) => li.userId));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    console.log(id, checked)
    setIsCheck([...isCheck, String(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== String(id)));
      setIsCheckAll(false);
    }
  };
  return (
    <MasterLayout userInfo={userInfo}>
      <div className="main" id="pselect-schedule">
        {!isShowRegisterDialog && (
          <div className="px-1 px-md-3 w-100 my-2">
            <Form className="user-list mt-1" onSubmit={clickSearch}>
              <CustomHeadingSchedule title="スケジュール登録" />
              <ScheduleTab active={2} />
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
                className="d-md-flex justify-content-start row-input"
                controlId="exampleForm.ControlInput1"
              >
                <div className="mt-2">
                  <TextfieldWithIcon
                    id="inputName"
                    label="利用者名カナ検索"
                    inputClassName="input-text-kana"
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </TextfieldWithIcon>
                </div>
                <div className="mt-2 ms-md-0 ms-lg-2 d-flex align-items-center ">
                  <Form.Label column sm={1} className="label-dialog-custom">
                    検索年月
                  </Form.Label>
                  <Col>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center my-2">
                        <select defaultValue={currentYear} className="me-2">
                          {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>

                        <div className="text-calendar">年</div>
                        <select
                          defaultValue={currentMonth + 1}
                          className="mx-2"
                        >
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
                </div>
              </Form.Group>
              <Form.Group
                className="d-md-flex mt-2 row-input fs-14 align-items-center "
                controlId="exampleForm.ControlTextarea1"
              >
                <div className="d-flex align-items-center h-100 label-group">
                  <label className="px-2 font-custom">職員種別検索</label>
                </div>
                <div>
                  <div className="custom-check">
                    <CheckBoxCustom
                      id="checkId"
                      label="看護師"
                      value=""
                      checked={true}
                    />
                    <CheckBoxCustom
                      id="checkId"
                      label="准看"
                      value=""
                      checked={true}
                    />
                    <CheckBoxCustom
                      id="checkId"
                      label="保健師"
                      value=""
                      checked={true}
                    />

                    <CheckBoxCustom
                      id="checkId"
                      label="助産師"
                      value=""
                      checked={true}
                    />
                    <CheckBoxCustom
                      id="checkId"
                      label="ＰＴ"
                      value=""
                      checked={true}
                    />
                    <CheckBoxCustom
                      id="checkId"
                      label="ＯＴ"
                      value=""
                      checked={true}
                    />
                    <CheckBoxCustom
                      id="checkId"
                      label="ＳＴ"
                      value=""
                      checked={true}
                    />
                  </div>
                  <div>
                    {' '}
                    <div className="custom-check">
                      <CheckBoxCustom id="checkId" label="医師" value="" />
                      <CheckBoxCustom id="checkId" label="看補" value="" />
                      <CheckBoxCustom id="checkId" label="精保" value="" />

                      <CheckBoxCustom id="checkId" label="事務" value="" />
                    </div>
                  </div>
                </div>
              </Form.Group>
              <Form.Group
                className="d-md-flex mt-2 row-input fs-14"
                controlId="exampleForm.ControlTextarea1"
              >
                <div className="d-flex align-items-center h-100 label-group">
                  <label className="px-2 font-custom">その他検索</label>
                </div>
                <div className="d-flex align-items-center pl-mb-10 d-block-mb">
                  <CheckBoxCustom
                    id="checkId"
                    label="利用者（死亡）を除く"
                    value=""
                  />
                </div>
              </Form.Group>
              <div className="d-sm-flex justify-content-between align-items-center mt-3">
                <Form.Group className="d-flex justify-content-between">
                  <SubmitButton width={150} value="検索"></SubmitButton>
                </Form.Group>
                <div>
                  <Button disabled={!openTable}>訪問回数一覧</Button>
                  <Button className="ms-2">訪問予定一覧</Button>
                </div>
              </div>
              <div className="custom-border-bottom my-4"></div>
            </Form>
            <div>
              {openTable && (
                <div className="mt-3">
                  <Col lg={11}>
                    <Table bordered responsive className="w-100  mb-0">
                      <thead className="bg-th-schedule">
                        <tr>
                          <th>
                            {' '}
                            <input
                              type="checkbox"
                              name="selectAll"
                              id="selectAll"
                              onChange={handleSelectAll}
                              checked={isCheckAll}
                              className="custom-input"
                            />
                          </th>
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
                        {data.slice(0, 3).map((row: any, rowIndex: any) => (
                          <tr key={row.userName}>
                            <td className="text-center align-middle">
                              {' '}
                              <input
                                type="checkbox"
                                name={row.userId}
                                id={row.userId}
                                onChange={handleClick}
                                checked={isCheck.includes(row.userId)}
                                className="custom-input"
                              />
                            </td>
                            <td className="d-d-inline-block custom-column-1 ps-1">
                              <div>
                                {row.userName.split('').slice(0, 10).join('')}
                              </div>
                              <div>
                                {row.userName.split('').slice(10).join('')}
                              </div>
                            </td>
                            {Object.keys(row.cell)
                              .slice(0, 31)
                              .map((key) => (
                                <td
                                  key={key}
                                  className={clsx(
                                    'custom-cell',
                                    'text-center',
                                    'align-middle',
                                    {
                                      'bg-text-cell':
                                        row.cell[key].slice(2) === 'blue',
                                    },
                                    {
                                      'bg-pink':
                                        row.cell[key].slice(2) === 'pink',
                                    },
                                    {
                                      'bg-custom-cell':
                                        activeCell &&
                                        activeCell.rowIndex === rowIndex &&
                                        activeCell.columnIndex ===
                                        parseInt(key),
                                    },
                                    'min-w-td',
                                  )}
                                  onClick={() =>
                                    handleCellClick(
                                      rowIndex,
                                      parseInt(key),
                                      row.cell[key],
                                      row,
                                    )
                                  }
                                >
                                  {row.cell[key].slice(0, 1)}
                                </td>
                              ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>

                  <Col sm={12} xl={11} className="mt-2">
                    {flag && type === '' && (
                      <Table bordered responsive="sm" className="w-100 mb-0">
                        <thead className="bg-th-schedule">
                          <tr>
                            <th colSpan={2} className="w-title"></th>
                            <th className="w-title">訪問日時</th>
                            <th>訪問職員</th>
                            <th>算定方法</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="bg-color-td-schedule py-2">内容</td>
                            <td className="bg-color-td-schedule py-2">1回目</td>
                            <td
                              colSpan={3}
                              className="bg-color-td-schedule-1"
                            ></td>
                          </tr>
                        </tbody>
                      </Table>
                    )}
                    {/* </div> */}
                    <div className="mb-2">
                      {isPink && type.slice(0, 1) === '1' && (
                        <Table bordered responsive="sm" className="mb-1">
                          <thead className="bg-th-schedule">
                            <tr>
                              <th colSpan={3} className="w-title"></th>
                              <th className="w-title">訪問日時</th>
                              <th className="w-title">訪問職員</th>
                              <th className="w-title">算定方法</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                rowSpan={4}
                                className="bg-color-td-schedule align-middle "
                              >
                                内容
                              </td>
                              <td
                                rowSpan={3}
                                className="bg-color-td-schedule align-middle"
                              >
                                1回目{' '}
                              </td>
                              <td
                                colSpan={4}
                                className="bg-color-td-schedule-1"
                              >
                                {' '}
                                (2001) 丸亀　丸恵　76歳　女　介護
                              </td>
                            </tr>
                            <tr className="bg-color-td-schedule-1">
                              <td className="bg-color-td-schedule-1">予定</td>
                              <td className="bg-color-td-schedule-1">
                                <div>04/03</div> <div>10:00～11:00</div>
                              </td>
                              <td className="bg-color-td-schedule-1">
                                <div>大西　良樹[看護師]</div>
                              </td>
                              <td className="bg-color-td-schedule-1">
                                介護 <br />
                                訪看Ⅰ３
                              </td>
                            </tr>
                            <tr className="bg-color-td-schedule-1">
                              <td className="bg-color-td-schedule-1">実績</td>
                              <td className="bg-color-td-schedule-1">
                                <div>04/03</div> <div>10:00～11:00</div>
                              </td>
                              <td className="bg-color-td-schedule-1">
                                <div>大西　良樹[看護師]</div>
                              </td>
                              <td className="bg-color-td-schedule-1">
                                介護 <br />
                                訪看Ⅰ３
                              </td>
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
                    <div className="mb-2">
                      {!isPink && type.slice(0, 1) === '1' && (
                        <Table bordered responsive="sm" className="mb-1">
                          <thead className="bg-th-schedule">
                            <tr>
                              <th colSpan={3} className="w-title"></th>
                              <th className="w-title">訪問日時</th>
                              <th className="w-title">訪問職員</th>
                              <th className="w-title">算定方法</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                rowSpan={4}
                                className="bg-color-td-schedule align-middle "
                              >
                                内容
                              </td>
                              <td
                                rowSpan={3}
                                className="bg-color-td-schedule align-middle"
                              >
                                1回目{' '}
                              </td>
                              <td
                                colSpan={4}
                                className="bg-color-td-schedule-1"
                              >
                                {' '}
                                (2001) 丸亀　丸恵　76歳　女　介護
                              </td>
                            </tr>
                            <tr className="bg-color-td-schedule-1">
                              <td className="bg-color-td-schedule-1">予定</td>
                              <td className="bg-color-td-schedule-1">
                                <div>04/03</div> <div>10:00～11:00</div>
                              </td>
                              <td className="bg-color-td-schedule-1">
                                <div>大西　良樹[看護師]</div>
                              </td>
                              <td className="bg-color-td-schedule-1">
                                介護 <br />
                                訪看Ⅰ３
                              </td>
                            </tr>
                            <tr className="bg-color-td-schedule-1">
                              <td className="bg-color-td-schedule-1">実績</td>
                              <td className="bg-color-td-schedule-1"></td>
                              <td className="bg-color-td-schedule-1"></td>
                              <td className="bg-color-td-schedule-1"></td>
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

                    <div className="mb-2">
                      {isPink && type.slice(0, 1) === '2' && (
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
                                rowSpan={7}
                                className="bg-color-td-schedule align-middle"
                              >
                                内容
                              </td>
                              <td
                                rowSpan={3}
                                className="bg-color-td-schedule align-middle"
                              >
                                1回目{' '}
                              </td>
                              <td colSpan={4}>
                                (1003) 観音寺　三郎　48歳　男　医療(精神)
                              </td>
                            </tr>
                            <tr>
                              <td>予定</td>
                              <td>
                                <div>04/04</div> <div>15:00～15:30</div>
                              </td>
                              <td>
                                <div>大西　良樹[看護師]</div>
                              </td>
                              <td>医療(精神)　基本Ⅲ・２人</td>
                            </tr>
                            <tr>
                              <td>実績</td>
                              <td>
                                <div>04/04</div> <div>15:00～15:30</div>
                              </td>
                              <td>
                                <div>大西　良樹[看護師]</div>
                              </td>
                              <td>医療(精神)　基本Ⅲ・２人</td>
                            </tr>
                            <tr>
                              <td
                                rowSpan={3}
                                className="bg-color-td-schedule align-middle"
                              >
                                2回目
                              </td>
                              <td colSpan={4}>
                                (1002) 坂出　次郎　72歳　男　医療
                              </td>
                            </tr>
                            <tr>
                              <td>予定</td>
                              <td>
                                <div>04/04</div>
                                <div>16:00～17:30</div>
                              </td>
                              <td>大西　良樹[看護師]</td>
                              <td>医療　基本Ⅱ・２人</td>
                            </tr>
                            <tr>
                              <td>実績</td>
                              <td>
                                <div>04/04</div>
                                <div>16:00～17:30</div>
                              </td>
                              <td>大西　良樹[看護師]</td>
                              <td>医療　基本Ⅱ・２人</td>
                            </tr>
                            <tr>
                              <td className="bg-color-td-schedule">3回目</td>
                              <td colSpan={4}></td>
                            </tr>
                          </tbody>
                        </Table>
                      )}
                    </div>
                    <div className="mb-2">
                      {isPink && type.slice(0, 1) === '3' && (
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
                                rowSpan={10}
                                className="bg-color-td-schedule align-middle"
                              >
                                内容
                              </td>
                              <td
                                rowSpan={3}
                                className="bg-color-td-schedule align-middle"
                              >
                                1回目{' '}
                              </td>
                              <td colSpan={4}>
                                {' '}
                                (1001) 高松　太郎　63歳　男　医療(精神)
                              </td>
                            </tr>
                            <tr>
                              <td>予定</td>
                              <td>
                                04/03 <br />
                                10:00～11:00
                              </td>
                              <td>
                                大西　良樹[看護師] ファム　コック　ヴィ[准看]
                              </td>
                              <td>医療　基本Ⅰ</td>
                            </tr>
                            <tr>
                              <td>実績</td>
                              <td>
                                04/03 <br />
                                10:00～11:00
                              </td>
                              <td>
                                大西　良樹[看護師] ファム　コック　ヴィ[准看]
                              </td>
                              <td>医療　基本Ⅰ</td>
                            </tr>
                            <tr>
                              <td
                                rowSpan={3}
                                className="bg-color-td-schedule align-middle"
                              >
                                2回目
                              </td>
                              <td colSpan={4}>
                                (2003) 三木　美紀　73歳　女　介護
                              </td>
                            </tr>
                            <tr>
                              <td>予定</td>
                              <td>
                                04/3
                                <br />
                                10:30~11:00{' '}
                              </td>
                              <td>大西　良樹[看護師]</td>
                              <td>
                                {' '}
                                介護 <br />
                                訪看Ⅰ３
                              </td>
                            </tr>
                            <tr>
                              <td>実績</td>
                              <td>
                                04/3
                                <br />
                                10:30~11:00{' '}
                              </td>
                              <td>大西　良樹[看護師]</td>
                              <td>
                                {' '}
                                介護 <br />
                                訪看Ⅰ３
                              </td>
                            </tr>
                            <tr>
                              <td
                                rowSpan={3}
                                className="bg-color-td-schedule align-middle"
                              >
                                3回目{' '}
                              </td>
                              <td colSpan={4}>
                                (1005) 東かがわ　五郎　4歳　男　医療
                              </td>
                            </tr>
                            <tr>
                              <td>予定</td>
                              <td>
                                <div>04/03</div>
                                <div>15:30～17:10</div>
                              </td>
                              <td> 大西　良樹[看護師]</td>
                              <td>医療　基本Ⅰ</td>
                            </tr>
                            <tr>
                              <td>実績</td>
                              <td>
                                <div>04/03</div>
                                <div>15:30～17:10</div>
                              </td>
                              <td> 大西　良樹[看護師]</td>
                              <td>医療　基本Ⅰ</td>
                            </tr>
                            <tr>
                              <td className="bg-color-td-schedule">4回目</td>
                              <td colSpan={4}></td>
                            </tr>
                          </tbody>
                        </Table>
                      )}
                    </div>
                    <div className="mb-2">
                      {!isPink && type.slice(0, 1) === '3' && (
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
                                rowSpan={10}
                                className="bg-color-td-schedule align-middle"
                              >
                                内容
                              </td>
                              <td
                                rowSpan={3}
                                className="bg-color-td-schedule align-middle"
                              >
                                1回目{' '}
                              </td>
                              <td colSpan={4}>
                                {' '}
                                (1001) 高松　太郎　63歳　男　医療(精神)
                              </td>
                            </tr>
                            <tr>
                              <td>予定</td>
                              <td>
                                04/03 <br />
                                10:00～11:00
                              </td>
                              <td>
                                大西　良樹[看護師] ファム　コック　ヴィ[准看]
                              </td>
                              <td>医療　基本Ⅰ</td>
                            </tr>
                            <tr>
                              <td>実績</td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td
                                rowSpan={3}
                                className="bg-color-td-schedule align-middle"
                              >
                                2回目
                              </td>
                              <td colSpan={4}>
                                (2003) 三木　美紀　73歳　女　介護
                              </td>
                            </tr>
                            <tr>
                              <td>予定</td>
                              <td>
                                04/3
                                <br />
                                10:30~11:00{' '}
                              </td>
                              <td>大西　良樹[看護師]</td>
                              <td>
                                {' '}
                                介護 <br />
                                訪看Ⅰ３
                              </td>
                            </tr>
                            <tr>
                              <td>実績</td>
                              <td> </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td
                                rowSpan={3}
                                className="bg-color-td-schedule align-middle"
                              >
                                3回目{' '}
                              </td>
                              <td colSpan={4}>
                                (1005) 東かがわ　五郎　4歳　男　医療
                              </td>
                            </tr>
                            <tr>
                              <td>予定</td>
                              <td>
                                <div>04/03</div>
                                <div>15:30～17:10</div>
                              </td>
                              <td> 大西　良樹[看護師]</td>
                              <td>医療　基本Ⅰ</td>
                            </tr>
                            <tr>
                              <td>実績</td>
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
                  </Col>
                  <Col className="mt-2 w-75 w-75-button">
                    <Row sm={12} md={6}>
                      <div className="col-lg-2 col-md-4 col-12 my-1">
                        {' '}
                        <Button
                          className="rounded  custom-button w-100"
                          disabled={isDisabled}
                          onClick={() => {
                            navigate('/user/pedit-schedule-id');
                          }}
                        >
                          スケジュール登録
                        </Button>
                      </div>
                      <div className="col-lg-2 col-md-4 col-12 my-1">
                        <Button
                          className="rounded custom-button w-100"
                          disabled={isDisabled}
                        >
                          訪問看護実績登録
                        </Button>
                      </div>
                      <div className="col-lg-2 col-md-4 col-12 my-1">
                        <Button
                          className="rounded  custom-button w-100"
                          disabled={!isPink}
                        >
                          経過記録参照／印刷
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

export default PselectSchedule;
