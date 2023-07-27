import React, { useState, useRef } from 'react';
import {
  EventApi,
  DateSelectArg,
  EventContentArg,

} from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS } from '@/utils/event-utils';
import "@/assets/scss/user/schedule/Schedule-Calendar.scss"
import { useDispatch } from 'react-redux';
import { setDateSelect } from '@/store/schedule/scheduleSlice';
import { Button, Col, Form, Row, Modal, Table } from 'react-bootstrap';
import CustomHeading from '@/components/user/detail/TextHeader';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { months, weekDays } from '@/data/japan_th';
import weekends from "react-multi-date-picker/plugins/highlight_weekends"
import MasterLayout from '@/layout/MasterLayout';
import CustomHeadingSchedule from '@/components/user/schedule/HeaderSchedule';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import { useNavigate } from 'react-router';
const ScheduleCalendar: React.FC = () => {
  const [, setCurrentEvents] = useState<EventApi[]>([]);

  const calendarRef = useRef<FullCalendar>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const handlePrev = () => {

    const updatedDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(updatedDate);
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(updatedDate);
    }
  };

  const handleNext = () => {
    const updatedDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(updatedDate);
    if (calendarRef.current) {

      calendarRef.current.getApi().gotoDate(updatedDate);
    }
  };

  const getCalendarTitle: any = () => {
    return new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: 'long' }).format(currentDate);
  };

  // Functions to handle view changes
  const handleDayView = () => {
    setIsList(false)
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView('dayGridMonth');
    }
  };
  const [isList, setIsList] = useState(false)

  const handleListView = () => {
    setIsList(true)
  };



  const dispatch = useDispatch();
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    console.log(selectInfo)

    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();
    dispatch(setDateSelect(selectInfo))

    // clear date calendarApi
    // console.log(calendarApi.unselect())
    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
  };

  // const handleEventClick = (clickInfo: EventClickArg) => {
  //   // eslint-disable-next-line no-restricted-globals
  //   if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
  //     clickInfo.event.remove();
  //   }
  // };
  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };
  const renderEventContent = (eventContent: EventContentArg) => {
    return (
      <div>

        <p><input type="checkbox" /> {format(new Date(eventContent.event.startStr), ' HH:mm')} ~ {format(new Date(eventContent.event.endStr), ' HH:mm')}</p>
        <p className='ms-3 text-decoration-underline' onClick={() => {
          handleShowEdit(),
            hour(format(new Date(eventContent.event.startStr), ' HH:mm'), format(new Date(eventContent.event.endStr), ' HH:mm'))

        }}>{eventContent.event.title}</p>
      </div>
    );
  };
  //default hour
  const hour = (startHour: string, endHour: string) => {
    console.log(startHour, endHour)
  }
  const customDayCellContent = (arg: any) => {
    let content = arg.date.getDate().toString();
    if (arg.date.getMonth() !== arg.view.currentStart.getMonth()) {
      <div className="custom-day-cell-date">{content}</div>
    }
    return (
      <div className="custom-day-cell">
        <div className="custom-day-cell-date ms-1 fs-5">{content}</div>
        {arg.date.getMonth() === arg.view.currentStart.getMonth() && <div className='px-2 me-1 text-dark custom-plus border ' onClick={handleShowRegister}>+</div>}
      </div>
    );
  };
  //modal register
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
  //modal edit
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  //datepicker
  const [value, setValue] = useState<any>(new DateObject())
  const navigate = useNavigate()
  return (
    <MasterLayout >
      <div className="main" id='schedule-calendar'>
        <div className="px-1 px-md-3 w-100">
          <div className='bg-calendar'>
            <div className='demo-app'>
              <div className='demo-app-main position-relative '>
                <div className='fc mb-5'>
                  <CustomHeadingSchedule title="利用者カレンダー" />
                </div>
                <div className='header-toolbar-custom'>
                  <div className='fs-6'>
                    2001：丸亀　丸恵
                  </div>
                  <div className='d-flex align-items-center  justify-content-center '>
                    <button onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <div className='d-flex align-content-center '>
                      <div className='d-d-block '>
                        <div className='ms-1 font-weight-bold fs-5 ms-md-2  fs-md-3' >{getCalendarTitle().slice(0, 5)}</div>
                        <div className='ms-1 font-weight-bold fs-5 ms-md-2  fs-md-3' >元年 {getCalendarTitle().slice(0, 4) - 2018}年</div>
                      </div>
                      <div className='mx-1 font-weight-bold fs-5 mx-md-2  fs-md-3 mt-3' >{getCalendarTitle().slice(5)}</div>
                    </div>
                    <button onClick={handleNext}> <FontAwesomeIcon icon={faChevronRight} /></button>

                  </div>
                  <div className='d-flex justify-content-end'>
                    <button onClick={handleDayView}><FontAwesomeIcon icon={faTable} color="green" size="lg" /></button> {/* Button for Day View */}
                    <button onClick={handleListView}>  <FontAwesomeIcon icon={faList} size="lg" /></button> {/* Button for List View */}
                  </div>
                </div>
                <div className='header-toolbar-custom my-3 '>
                  <div className='d-flex justify-content-between mb-3 mb-md-0 justify-content-md-start'>
                    <Button>曜日設定</Button>
                    <Form.Select className=' ms-3 custom-select'>
                      <option></option>
                      <option value="1">打ち合わせ（木曜日）</option>
                      <option value="2">打ち合わせ（水曜日）</option>
                      <option value="3">打ち合わせ（木曜日）</option>
                    </Form.Select>
                    <Button className='ms-2'>曜日設定</Button>
                  </div>

                  <div >  <Button>利用者カレンダー印刷</Button></div>
                </div>
                {!isList && <div className='header-toolbar-custom fs-6'>※日付欄の［＋］をクリックするとイベントを新規登録できます。
                </div>}
                {!isList &&
                  <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    headerToolbar={false}
                    dayCellContent={customDayCellContent}
                    locale='ja'
                    initialView='dayGridMonth'
                    editable={true}
                    // selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                    select={handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    // eventClick={handleEventClick}
                    eventsSet={handleEvents} // called after events are initialized/added/changed/removed


                  /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
                  />
                }
              </div>
            </div>
            {!isList && <div className='footer-page mb-5 '>
              <div className='d-flex justify-content-between align-item mt-3'>
                <div>
                  ◆ 利用者カレンダー反映コメント
                  <span>  <FontAwesomeIcon icon={faQuestion} /></span>
                </div>
                <Button>前回複写</Button>
              </div>
              <div>
                <Form.Group
                  as={Row}
                  controlId="form_remarks"
                >
                  <Col >
                    <div className='d-flex align-items-center  fz-12'> <Button className="mx-2 mb-1 mt-2 mt-md-0">
                      全体表示

                    </Button>
                      <div className="">＜全角＞</div></div>

                    <Form.Control
                      as="textarea"
                      name="remarks"

                      style={{ height: '100px' }}
                    />
                  </Col>
                </Form.Group>
              </div>
              <div className='mt-2'>
                <Button className='custom-button-submit'> 登録</Button>
              </div>


            </div>}

            {isList && <div className='footer-page mb-5 '>
              <div className='d-flex justify-content-between align-item mt-3'>
                <div>
                  ◆ イベント一覧

                </div>
                <Button>新規登録</Button>
              </div>
              <div>
                <Table bordered hover responsive>
                  <thead>
                    <tr>
                      <th className='text-center head-table'>日付</th>
                      <th className='text-center head-table'>時間</th>
                      <th className='text-center head-table'>イベント	</th>
                      <th className='text-center head-table' >メモ</th>
                      <th className='text-center head-table'>削</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-center row-table'>11(火)	</td>
                      <td className='text-center row-table'>10：30	～	11：30</td>
                      <td className='text-decoration-underline'>test</td>
                      <td>123213124</td>
                      <td className='text-danger text-center'> x</td>
                    </tr>
                    <tr>
                      <td className='text-center row-table'>14(金)</td>
                      <td className='text-center row-table'>10：00	～	11：00</td>
                      <td>訪問看護</td>
                      <td>123213124</td>
                      <td className='text-danger text-center'> x</td>
                    </tr>

                  </tbody>
                </Table>
              </div>



            </div>}
            {/* modal register */}
            <Modal show={showRegister} onHide={handleCloseRegister} size='xl'>
              <Modal.Header closeButton>
                <CustomHeading title="利用者カレンダー登録" />
              </Modal.Header>
              <Modal.Body>
                <div className="main">
                  {/* Page update */}
                  <Form
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
                          className=" label-dialog bg-light-yellow"
                        >
                          年月日
                          <span className="color-text-custom">【必】</span>
                        </Form.Label>
                        <Col sm={12} md={6}>
                          <div className="d-flex align-items-center my-2">
                            <DatePicker
                              style={{
                                width: "120px",
                                boxSizing: "border-box",
                                height: "26px",
                                textAlign: "center"
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
                        as={Row}
                        className="mb-2 form-group-container"
                        controlId="form_contact_phone"
                      >
                        <Form.Label
                          column
                          sm={4}
                          className="bg-light-yellow label-dialog"
                        >
                          時間
                        </Form.Label>
                        <Col sm={12} md={8}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <div className="d-flex justify-content-start align-items-center">
                              <Form.Control
                                type="text"
                                className="max-w-50 min-w-input-max-1"
                                maxLength={2}
                              />
                              <div className="px-1">:</div>
                              <Form.Control
                                type="text"
                                name="contact_phone_2"
                                className="max-w-50 min-w-input-max-1"
                                maxLength={2}
                              />
                              <div className="px-2">－</div>
                              <Form.Control
                                type="text"
                                className="max-w-50 min-w-input-max-1"
                                maxLength={2}
                              />
                              <div className="px-1">:</div>
                              <Form.Control
                                type="text"
                                className="max-w-50 min-w-input-max-1"
                                maxLength={2}
                              />
                            </div>
                            <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                              ＜半角数字＞
                            </div>
                            <input type="checkbox" id='1' className='mx-2 custom-input-check' />
                            <label htmlFor="1">時間未定</label>
                          </div>
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
                          イベント
                        </Form.Label>
                        <Col sm={12} md={8}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              required
                              name="kanaName"
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
                        controlId="form_remarks"
                      >
                        <Form.Label
                          column
                          sm={4}
                          className="bg-light-yellow label-dialog"
                        >
                          メモ
                        </Form.Label>
                        <Col sm={12} md={8}>
                          <div className='d-flex align-items-center  fz-12'> <Button className="mx-2 mb-1 w-25 mt-2 mt-md-0">
                            全体表示

                          </Button>
                            <div className="">＜全角＞</div></div>

                          <Form.Control
                            as="textarea"
                            name="remarks"

                            style={{ height: '100px' }}
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        className="mb-2 form-group-container"

                      >
                        <div className='d-flex justify-content-between '>
                          <Button>登録</Button>
                          <Button disabled>削除</Button>
                        </div>
                      </Form.Group>
                    </Form.Group>
                  </Form>
                </div>
              </Modal.Body>
              <Modal.Footer className='d-flex justify-content-start ms-4'>
                <Button variant="primary" onClick={handleCloseRegister}>
                  閉じる
                </Button>
              </Modal.Footer>
            </Modal>
            {/* modal edit */}
            <Modal show={showEdit} onHide={handleCloseEdit} size='xl'>
              <Modal.Header closeButton>
                <CustomHeading title="利用者カレンダー登録" />
              </Modal.Header>
              <Modal.Body>
                <div className="main">
                  {/* Page update */}
                  <Form
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
                          className=" label-dialog bg-light-yellow"
                        >
                          年月日
                          <span className="color-text-custom">【必】</span>
                        </Form.Label>
                        <Col sm={12} md={6}>
                          <div className="d-flex align-items-center my-2">
                            <DatePicker
                              className="date-picker"
                              style={{
                                width: "120px",
                                boxSizing: "border-box",
                                height: "26px",
                                textAlign: 'center'
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
                        as={Row}
                        className="mb-2 form-group-container"
                        controlId="form_contact_phone"
                      >
                        <Form.Label
                          column
                          sm={4}
                          className="bg-light-yellow label-dialog"
                        >
                          時間
                        </Form.Label>
                        <Col sm={12} md={8}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <div className="d-flex justify-content-start align-items-center">
                              <Form.Control
                                type="text"
                                className="max-w-50 min-w-input-max-1"
                                maxLength={2}
                                defaultValue={10}
                              />
                              <div className="px-1">:</div>
                              <Form.Control
                                type="text"
                                className="max-w-50 min-w-input-max-1"
                                maxLength={2}
                                defaultValue={30}
                              />
                              <div className="px-2">－</div>
                              <Form.Control
                                type="text"
                                className="max-w-50 min-w-input-max-1"
                                maxLength={2}
                                defaultValue={11}
                              />
                              <div className="px-1">:</div>
                              <Form.Control
                                type="text"
                                className="max-w-50 min-w-input-max-1"
                                maxLength={2}
                                defaultValue={30}
                              />
                            </div>
                            <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                              ＜半角数字＞
                            </div>
                            <input type="checkbox" id='1' className='mx-2 custom-input-check' />
                            <label htmlFor="1">時間未定</label>
                          </div>
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
                          イベント
                        </Form.Label>
                        <Col sm={12} md={8}>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              required
                              name="kanaName"
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
                        controlId="form_remarks"
                      >
                        <Form.Label
                          column
                          sm={4}
                          className="bg-light-yellow label-dialog"
                        >
                          メモ
                        </Form.Label>
                        <Col sm={12} md={8}>
                          <div className='d-flex align-items-center  fz-12'> <Button className="mx-2 mb-1 w-25 mt-2 mt-md-0">
                            全体表示

                          </Button>
                            <div className="">＜全角＞</div></div>

                          <Form.Control
                            as="textarea"
                            name="remarks"

                            style={{ height: '100px' }}
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        className="mb-2 form-group-container"

                      >
                        <div className='d-flex justify-content-between '>
                          <Button>登録</Button>
                          <Button disabled>削除</Button>
                        </div>
                      </Form.Group>
                    </Form.Group>
                  </Form>
                </div>
              </Modal.Body>
              <Modal.Footer className='d-flex justify-content-start ms-4'>
                <Button variant="primary" onClick={handleCloseRegister}>
                  閉じる
                </Button>
              </Modal.Footer>
            </Modal>

          </div>
        </div>

      </div>

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
            閉じる
          </Button>
        </Col>
      </Form.Group>

    </MasterLayout>
  );


};
export default ScheduleCalendar;
