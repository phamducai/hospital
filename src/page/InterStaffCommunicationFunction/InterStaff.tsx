/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: US00010
 * PG NAME: 利用者検索 (User search)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import { Person, RenderName } from '@/interfaces/Person';
import Form from 'react-bootstrap/Form';
import { FormEvent, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {
  SelectFacility,
  DEFAULT_VALUES,
  person_in_charge,
} from '@/data/user-list';
import { useDispatch } from 'react-redux';
import { searchUser } from '@/store/user/userSlice';
import { months, weekDays } from '@/data/japan_th';
import DatePicker from 'react-multi-date-picker';
import weekends from 'react-multi-date-picker/plugins/highlight_weekends';
import { InterStaffInfo } from '@/interfaces/InterStaffInfo';
import TableLink from '@/components/TableLink';
import { columnsTableInterStaff, dataInterStaff } from '@/data/inter-staff';
import { useNavigate } from 'react-router';

function InterStaff() {
  const [, setValidated] = useState(false);
  const [tableSelectedItem] = useState<Person | null>(null);
  const dispatch = useDispatch();
  const [valRenderName, setValRenderName] =
    useState<RenderName>(DEFAULT_VALUES);
  const [valName, setValName] = useState('');
  const [valKanaName, setValKanaName] = useState('');
  const [valAddress1, setValAddress1] = useState('');
  const [valAddress2, setValAddress2] = useState('');
  const [valAddress3, setValAddress3] = useState('');
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

  // Delete

  const clickSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      searchUser({
        userId: event.currentTarget.inputID.value,
        kanaName: event.currentTarget.inputName.value,
      }),
    );
  };
  const navigate = useNavigate();

  const handleOnClickRow = (inter: InterStaffInfo) => {
    console.log(inter);
  };
  const handerCreateForm = () => {
    navigate('/user/inter-staff/create/');
  };

  return (
    <MasterLayout userInfo={tableSelectedItem}>
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-1" onSubmit={clickSearch}>
            <h5> 職員間連絡機能</h5>
            <Form.Group
              className="d-md-flex justify-content-start row-input"
              controlId="exampleForm.ControlInput1"
            >
              <div className=" d-md-flex justify-content-left align-items-center ">
                <div className="d-flex align-items-center h-100 label-group">
                  <label className="px-2">キーワード検索</label>
                </div>{' '}
                <Form.Control
                  className="d-block d-md-flex justify-content-left align-items-center mt-1 input-desktop-a"
                  type="text"
                  id="currentPassword"
                />
              </div>
            </Form.Group>

            <Form.Group
              className="d-md-flex mt-2 row-input fs-14"
              controlId="exampleForm.ControlTextarea1"
            >
              <div className=" d-md-flex justify-content-left align-items-center ">
                <div className="d-flex align-items-center h-100 label-group">
                  <label className="px-2">所属施設検索</label>
                </div>{' '}
                <Form.Select
                  className="d-block d-md-flex justify-content-left align-items-center mt-1 input-desktop-a"
                  name="record_date"
                  defaultValue={SelectFacility}
                  required
                >
                  {SelectFacility.map((select, index) => (
                    <option key={index}>{select}</option>
                  ))}
                </Form.Select>
                <div className="fz-14 ps-xs-0 p-l4 ms-2 min-width-25">
                  {' '}
                  職員検索
                </div>
                <Form.Select
                  className="d-block d-md-flex justify-content-left align-items-center mt-1 input-desktop-a"
                  style={{ marginLeft: '78px' }}
                  name="record_date"
                  defaultValue={person_in_charge}
                  required
                >
                  {person_in_charge.map((person, index) => (
                    <option key={index}>{person}</option>
                  ))}
                </Form.Select>
              </div>
            </Form.Group>

            <Form.Group
              className="d-md-flex mt-2 row-input fs-14"
              controlId="exampleForm.ControlTextarea1"
            >
              <div className=" d-md-flex justify-content-left align-items-center ">
                <div className="d-flex align-items-center h-100 label-group">
                  <label className="px-2">期間検索</label>
                </div>{' '}
                <tr className="d-block d-md-flex justify-content-left align-items-center mt-1 input-desktop-a">
                  <td className="row-in-col">
                    <div>
                      <DatePicker
                        style={{
                          boxSizing: 'border-box',
                          height: '40px',
                        }}
                        value=""
                        weekDays={weekDays}
                        months={months}
                        plugins={[weekends()]}
                      />
                    </div>{' '}
                  </td>
                  <td className="row-in-col">
                    <span className="px-2">～</span>
                  </td>
                  <td className="row-in-col">
                    <div>
                      <DatePicker
                        style={{
                          boxSizing: 'border-box',
                          height: '40px',
                          marginTop: '-8px',
                        }}
                        value=""
                        weekDays={weekDays}
                        months={months}
                        plugins={[weekends()]}
                      />
                    </div>{' '}
                  </td>
                </tr>
                <Button
                  type="button"
                  className="custom-btn-submit"
                  style={{ marginLeft: '12rem' }}
                >
                  C
                </Button>
              </div>
            </Form.Group>

            <Form.Group
              className="mt-2 row-input"
              controlId="exampleForm.ControlInput1"
            >
              <div className=" d-md-flex justify-content-left align-items-center ">
                <div className="d-flex align-items-center h-100 label-group">
                  <label className="px-2">所属施設検索</label>
                </div>{' '}
                <tr className="d-block d-md-flex justify-content-left align-items-center mt-1 input-desktop-a">
                  <div className="form-check-l1 form-check-inline-r1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      required
                    />
                    <label className="form-check-label p-6">全件</label>
                  </div>
                  <td className="row-in-col">
                    <div className="form-check-l1 form-check-inline-r1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        required
                      />
                      <label className="form-check-label p-6">送信</label>
                    </div>
                  </td>
                  <td className="row-in-col">
                    <div className="form-check-l1 form-check-inline-r1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        required
                      />
                      <label className="form-check-label p-6">受信</label>
                    </div>
                  </td>
                  <td className="row-in-col">
                    <div className="form-check-l1 form-check-inline-r1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        required
                      />
                      <label className="form-check-label p-6">下書き</label>
                    </div>
                  </td>
                </tr>
              </div>
            </Form.Group>

            <div className="d-sm-flex justify-content-between align-items-center mt-3">
              <Form.Group className="d-flex justify-content-between">
                <Button
                  type="button"
                  className="custom-btn-submit"
                  style={{ width: '12rem' }}
                >
                  検索
                </Button>{' '}
              </Form.Group>
              <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                <Button
                  type="button"
                  className="custom-btn-submit"
                  style={{ width: '12rem' }}
                >
                  連絡先グループ
                </Button>{' '}
              </div>
            </div>
          </Form>

          <div>
            <Form className="user-list mt-1">
              <div className="d-sm-flex justify-content-between align-items-center mt-3">
                <Form.Group className="d-flex justify-content-between">
                  <h5>◆　送受信済情報一覧</h5>
                </Form.Group>
                <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                  <Button className="w-100" onClick={handerCreateForm}>
                    新規作成
                  </Button>
                </div>
              </div>
            </Form>
            <Row className="">
              <div className="d-md-block w-100 h-50">
                <TableLink<InterStaffInfo>
                  data={dataInterStaff}
                  columns={columnsTableInterStaff}
                  redirectUrl="/user/inter-staff/"
                  handleClickRow={() => handleOnClickRow}
                ></TableLink>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}

export default InterStaff;
