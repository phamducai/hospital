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
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import Table from 'react-bootstrap/Table';
import { format, eachDayOfInterval, isSameMonth } from 'date-fns';
import { ja } from 'date-fns/locale';

import Form from 'react-bootstrap/Form';
import { useState, useEffect, FormEvent } from 'react';
import '@/assets/scss/user/schedule/Pedit-Schedule-Hour.scss';
import { itemsSelectFacility } from '@/data/user-list';
import TextFieldWithDropdown from '@/components/TextfieldWithDropdown';
import CheckBoxCustom from '@/components/CheckboxCustom';
import { useDispatch } from 'react-redux';
import { setSelectRow, searchUser } from '@/store/user/userSlice';
import ScheduleTab from '@/components/user/schedule/ScheduleTab';
import { data } from '@/data/schedule';
import clsx from 'clsx';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Cell } from '@/interfaces/Schedule';

import DatePickerCommon from '@/components/user/schedule/DatePickerCommon';
import CustomHeadingSchedule from '@/components/user/schedule/HeaderSchedule';
function PeditScheduleHour() {
  const [isShowRegisterDialog] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    getCurrentMonthDays();
  }, []);
  const [, setDatesWithWeekday] = useState<{ date: Date; dayOfWeek: string }[]>([]);
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
  const handleCellClick = (
    rowIndex: number,
    columnIndex: number,
    type: any,
    userInfor: any
  ) => {
    dispatch(setSelectRow(userInfor))
    setUserInfor(userInfor)
    setActiveCell({ rowIndex, columnIndex });
    setIsDisabled(false);
    setType(true);
    if (type.slice(2) === 'pink') {
      setIsPink(true)
    } else {
      setIsPink(false)
    }
  };
  const [type, setType] = useState(false);
  const [openTable, setOpenTable] = useState<boolean>(false);
  const navigate = useNavigate()
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
    setIsCheck([...isCheck, String(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== String(id)));
      setIsCheckAll(false);
    }
  };
  const [listHour, setListHour] = useState<number[]>([0, 1, 2, 3, 4, 5])

  const changeHourArray = async (step: number) => {
    const newArr = await listHour.map(item => item + step);
    await setListHour(newArr);


  };

  return (
    <MasterLayout userInfo={userInfo}>
      <div className="main" id="pselect-schedule-hour">
        {!isShowRegisterDialog && (
          <div className="px-1 px-md-3 w-100 my-2">
            <Form className="user-list mt-1" onSubmit={clickSearch}>
              <CustomHeadingSchedule title="スケジュール登録" />
              <ScheduleTab active={3} />
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
                    label="職員カナ検索"
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
                    検索年月日
                  </Form.Label>
                  <Col>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center my-2">
                        <DatePickerCommon />
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
                  <Button className="ms-2">スケジュール一覧印刷</Button>
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
                          <th rowSpan={2}>
                            {' '}
                            印 <br />
                            刷<br />
                            <input
                              className='custom-input'
                              type="checkbox"
                              name="selectAll"
                              id="selectAll"
                              onChange={handleSelectAll}
                              checked={isCheckAll}
                            />
                          </th>
                          <th rowSpan={2} className="align-middle text-center">
                            <div className="h-100 ">職員氏名 </div>
                          </th>
                          {listHour.map((item: number) => (
                            <th colSpan={6} key={item}>
                              {' '}
                              {item}
                            </th>
                          ))}
                        </tr>
                        <tr>
                          <th colSpan={36}>
                            <div className="d-flex justify-content-between ">
                              {' '}
                              <button
                                onClick={() => {
                                  changeHourArray(-6);
                                }}
                                disabled={listHour[0] === 0}
                              >
                                <FontAwesomeIcon icon={faChevronLeft} />
                              </button>
                              <button
                                onClick={() => {
                                  changeHourArray(6);
                                }}
                                disabled={listHour[0] === 18}
                              >
                                <FontAwesomeIcon icon={faChevronRight} />
                              </button>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.slice(0, 3).map((row: any, rowIndex: any) => (
                          <tr key={row.userName}>
                            <td className='text-center align-middle '>
                              {' '}
                              <input
                                className='custom-input'
                                type="checkbox"
                                name={row.userId}
                                id={row.userId}
                                onChange={handleClick}
                                checked={isCheck.includes(row.userId)}
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
                            {Object.keys(row.cell).map((key) => (
                              <td
                                key={key}
                                className={clsx(
                                  'custom-cell',
                                  'text-center',
                                  'align-middle',

                                  {
                                    'bg-custom-cell':
                                      activeCell &&
                                      activeCell.rowIndex === rowIndex &&
                                      activeCell.columnIndex === parseInt(key),
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
                              ></td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                  <Col sm={12} xl={11} className="mt-2">
                    {type && (
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

export default PeditScheduleHour;
