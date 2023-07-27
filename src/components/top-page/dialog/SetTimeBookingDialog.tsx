/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Modal } from 'react-bootstrap';
import { useState, useEffect, FormEvent } from 'react';
import * as DatetimeUtils from '@/utils/DatetimeUtils';
import './dialog.css';

type ModalProp = {
  IDUser: string;
  isShow: boolean;
  message: string;
  onSuccess: any;
  type: string;
};

export default function SetTimeBookingDialog({
  isShow,
  message,
  onSuccess,
  type,
}: ModalProp) {
  const [confirm_message, setConfirmMessage] = useState('');

  const [labelTimerOption, setLabelTimerOption] = useState('');
  const [labelTimerDefault, setLabelTimerDefault] = useState('');

  const [hourTimerOption, setHourTimerOption] = useState('');
  const [minTimerOption, setMinTimerOption] = useState('');

  const [hourTimerDefault, setHourTimerDefault] = useState('');
  const [minTimerDefault, setMinTimerDefault] = useState('');

  const [show, setShow] = useState(isShow);

  useEffect(() => {
    setShow(isShow);
    setData(type);
  }, [isShow, type]);

  const setData = (key: string) => {
    switch (key) {
      case 'checkIn':
        setLabelTimerOption('出勤時刻');
        setLabelTimerDefault('定時出勤');
        setConfirmMessage('出勤時刻');
        setHourTimerOption('09');
        setMinTimerOption('30');
        setHourTimerDefault('08');
        setMinTimerDefault('30');
        break;
      case 'checkOut':
        setLabelTimerOption('退勤時刻');
        setLabelTimerDefault('定時退勤');
        setConfirmMessage('退勤時刻');
        setHourTimerOption('18');
        setMinTimerOption('30');
        setHourTimerDefault('17');
        setMinTimerDefault('30');
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    setShow(false);
    onSuccess();
  };

  const [hour, setHour] = useState('09');
  const [minutes, setMinutes] = useState('30');

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
    onSuccess();
  };

  const [selectedOption, setSelectedOption] = useState('optionCustom');

  function onChangeValueRadio(event: any): void {
    setSelectedOption(event.target.value);
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (selectedOption === 'optionDefault') {
      switch (type) {
        case 'checkIn':
          setConfirmMessage('定時出勤');
          setHour('08');
          setMinutes('30');
          break;
        case 'checkOut':
          setConfirmMessage('定時退勤');
          setHour('17');
          setMinutes('30');
          break;
        default:
          break;
      }
    }
    onSuccess();
    setShow2(true);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>Today</Modal.Header>
        <Modal.Body>
          <div className="d-block d-md-flex justify-content-between align-items-center">
            <div>{DatetimeUtils.formattedJapanDate(new Date())}</div>
            <div className="fz-12">ログインユーザーＩＤ：ユーザー名</div>
          </div>
          <Form onSubmit={handleSubmit} className="mt-4">
            <div className="d-block d-md-flex align-items-center">
              <Form.Check
                id="radio1"
                name="option"
                label={labelTimerOption}
                type="radio"
                className="pe-3"
                value={'optionCustom'}
                checked={selectedOption === 'optionCustom'}
                onChange={(e) => onChangeValueRadio(e)}
              />
              <div className="d-flex w-75 align-items-center">
                <Form.Select
                  id="chooseHour"
                  defaultValue={hourTimerOption}
                  className="w-25"
                  onChange={(e) => {
                    const selectedHour = e.target.value;
                    setHour(selectedHour);
                  }}
                >
                  {[
                    '00',
                    '01',
                    '02',
                    '03',
                    '04',
                    '05',
                    '06',
                    '07',
                    '08',
                    '09',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20',
                    '21',
                    '22',
                    '23',
                  ].map((variant) => (
                    <option value={variant}>{variant}</option>
                  ))}
                </Form.Select>
                <span>&ensp;:&ensp;</span>
                <Form.Select
                  id="chooseMinutes"
                  defaultValue={minTimerOption}
                  className="w-25"
                  onChange={(e) => {
                    const selectedMinutes = e.target.value;
                    setMinutes(selectedMinutes);
                  }}
                >
                  {[
                    '00',
                    '01',
                    '02',
                    '03',
                    '04',
                    '05',
                    '06',
                    '07',
                    '08',
                    '09',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20',
                    '21',
                    '22',
                    '23',
                    '24',
                    '25',
                    '26',
                    '27',
                    '28',
                    '29',
                    '30',
                    '31',
                    '32',
                    '33',
                    '34',
                    '35',
                    '36',
                    '37',
                    '38',
                    '39',
                    '40',
                    '41',
                    '42',
                    '43',
                    '44',
                    '45',
                    '46',
                    '47',
                    '48',
                    '49',
                    '50',
                    '51',
                    '52',
                    '53',
                    '54',
                    '55',
                    '56',
                    '57',
                    '58',
                    '59',
                  ].map((variant) => (
                    <option value={variant}> {variant} </option>
                  ))}
                </Form.Select>
              </div>
            </div>

            <div className="d-flex align-items-center mt-3">
              <Form.Check
                id="radio2"
                name="option"
                label={labelTimerDefault}
                type="radio"
                value={'optionDefault'}
                className="pe-3"
                checked={selectedOption === 'optionDefault'}
                onChange={(e) => onChangeValueRadio(e)}
              />
              <div className="text-center fw-bold">
                {hourTimerDefault}&ensp;:&ensp;{minTimerDefault}
              </div>
            </div>

            <p className="text-warning mt-3">
              {message}勤時刻、定時出勤のどちらかを選択して登録してください。
            </p>

            <div className="dialog-footer">
              <button
                className="btn btn-primary w-50 mt-4"
                onClick={handleClose}
                type="submit"
              >
                登録
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose2} backdrop="static">
        <Modal.Header closeButton>Today</Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-center">
            <div>{DatetimeUtils.formattedJapanDate(new Date())}</div>
            <div className="fz-12">ログインユーザーＩＤ：ユーザー名</div>
          </div>
          <div className="mt-4 d-flex align-items-center fz-20">
            <div>{confirm_message}：</div>
            <div className="fw-bold">
              {hour}&ensp;:&ensp;{minutes}
            </div>
          </div>
          <div className="text-success py-2">登録しました。</div>
        </Modal.Body>
      </Modal>
    </>
  );
}
