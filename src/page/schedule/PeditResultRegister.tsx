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
import React from 'react';
import '@/assets/scss/user/schedule/Pedit-Schedule.scss';
import DatePicker, { DateObject } from "react-multi-date-picker"
import { useNavigate } from 'react-router-dom';
import { months, weekDays } from '@/data/japan_th';
import CustomHeading from '@/components/user/detail/TextHeader';
import MyPopover from '@/components/PopOver';

function PeditResultRegister() {
  const [, setTargetRow] = useState<Person | undefined | any>(
    DEFAULT_USER_INFORMATION,
  );
  const refUserDialog = useRef<HTMLFormElement | null>(null);

  const handleOnChangeValue = (e: React.ChangeEvent<any>) => {
    setTargetRow((pre: any) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [value, setValue] = useState<any>(new DateObject())

  const navigate = useNavigate()

  return (
    <MasterLayout>
      <CustomHeading title="訪問看護実績情報" />
      <div className="main" id='pedit-schedue'>
        <Form
          ref={refUserDialog}
          noValidate
          className="w-100 h-100 d-flex flex-column user-edit"
        >
          <Form.Group className="user-detail d-flex flex-column">

            <Form.Group
              className="form-group-container my-2 border"
            ></Form.Group>

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
                利用者氏名  <span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center  ">
                    <Form.Control
                      type="text"
                      value={1001}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"
                      disabled
                    />
                    <div className="d-flex justify-content-center align-items-center ms-md-2 mt-0 ">
                      <Button className="ms-2 me-3" disabled={true}>利</Button>
                      <div>高松　</div><div>次郎</div>
                    </div>
                  </div>
                </Row>
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-container my-3 p-2 d-flex justify-content-between align-items-center"
            >
              <div> <span className='text-dark '>◆</span>　訪問看護実績情報</div>
              <Button className='me-0 me-md-5' disabled >予定編集</Button>
            </Form.Group>
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
                訪問年月日  <span className="color-text-custom">【必】</span>

              </Form.Label>
              <Col sm={12} md={6}>
                <div className="d-flex align-items-center">
                  <DatePicker
                    style={{
                      width: "60%",
                      boxSizing: "border-box",
                      height: "35px",
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
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_phone"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                訪問時間 <span className="color-text-custom">【必】</span>
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
                      defaultValue={20001}
                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"

                    />
                    <div className="d-flex justify-content-center align-items-center ms-md-2 mt-0">
                      <Button className="ms-2" >利</Button>
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
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >
                保険種別<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="">
                  <Form.Select
                    defaultValue='医療'
                    onChange={(e) => handleOnChangeValue(e)}
                    className="w-50 w-sm-100 mt-2 mt-md-0"
                    required
                  >
                    {INSU.map((item, index) => (
                      <option key={index} value={item}>{item}</option>
                    ))}
                  </Form.Select>
                  <div className="d-flex justify-content-start align-items-center mt-1">
                    <Form.Check
                      placeholder="半角数字"
                      name="medicMental"
                      label="精神"
                      onChange={(e) => handleOnChangeValue(e)}
                    />
                    <Form.Check
                      placeholder="半角数字"
                      name="careRoutine"
                      label="定期巡回"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="ms-4"
                    />
                    <Form.Check
                      placeholder="緊急時訪問"
                      label="緊急時訪問"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="ms-4"
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
                サービスコード <span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center mt-2 ">
                    <Form.Control
                      type="text"

                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"

                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-2 mt-0 ">
                      <Button className="ms-2" >サ</Button>
                    </div>
                  </div>
                </Row>
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
                <div className='d-flex align-align-items-center '>
                  <div >同一建物該当 	</div>
                  <div className='ms-1'>  <MyPopover title="同一建物に該当させる場合は
マスタメンテナンスの同一建物マスタに登録してください。" /></div>
                </div>
              </Form.Label>
              <Col sm={12} md={8}>
                <div>	該当『アポロマンション』 この訪問を除外</div>
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
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >
                算定方法（医療用）
              </Form.Label>
              <Col sm={12} md={8}>
                <div>
                  <input type="radio" name='medicalExpenses' id='1' className='me-1' />
                  <label htmlFor="1" className='me-3'>基本療養費ⅠまたはⅡ	</label>
                  <input type="radio" name='medicalExpenses' id='2' className='me-1' />
                  <label htmlFor="2">基本療養費Ⅲ</label>
                </div>
                <div>
                  <div>
                    <input type="checkbox" id='3' />
                    <label htmlFor="3">専門の研修を受けた看護師
                    </label>
                  </div>
                  <div>
                    <input type="radio" name='care' id='7' className='me-1' />
                    <label htmlFor="7" className='me-2'>緩和ケア	</label>
                    <input type="radio" name='care' id='8' className='me-1' />
                    <label htmlFor="8" className='me-2'>褥瘡ケア		</label>
                    <input type="radio" name='care' id='9' className='me-1' />
                    <label htmlFor="9" className='me-2'>人工肛門・人工膀胱ケア
                    </label>
                  </div>
                  <div>
                    <input type="radio" id='10' name='calculate' className='me-1' />
                    <label htmlFor="10" className='me-2'>算定する	</label>
                    <input type="radio" id='11' name='calculate' className='me-1' />
                    <label htmlFor="11" className='me-2'>算定済
                    </label>
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
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >
                算定方法（精神用）
              </Form.Label>
              <Col sm={12} md={8}>
                <div>
                  <input type="radio" name='medicalExpenses' id='1' className='me-1' />
                  <label htmlFor="1" className='me-3'>基本療養費ⅠまたはⅢ		</label>
                  <input type="radio" name='medicalExpenses' id='2' className='me-1' />
                  <label htmlFor="2">基本療養費Ⅳ
                  </label>
                </div>
                <div>

                  <div>
                    <input type="radio" name='care' id='7' className='me-1' />
                    <label htmlFor="7" className='me-2'>３０分未満		</label>
                    <input type="radio" name='care' id='8' className='me-1' />
                    <label htmlFor="8" className='me-2'>３０分以上
                    </label>

                  </div>
                  <div>
                    <input type="radio" id='10' name='calculate' className='me-1' />
                    <label htmlFor="10" className='me-2'>算定する	</label>
                    <input type="radio" id='11' name='calculate' className='me-1' />
                    <label htmlFor="11" className='me-2'>算定済
                    </label>
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
                サービスコード <span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center mt-2 ">
                    <Form.Control
                      type="text"

                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"

                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-2 mt-0 ">
                      ＧＡＦ尺度コード⇒<a href="">厚生労働省資料</a>
                    </div>
                  </div>
                </Row>
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
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >
                加算（医療用）<MyPopover title='夜間：	18:00(午後 6時)	～22:00(午後10時)	夜間・早朝訪問看護加算	：2,100円 n
早朝：	06:00(午前 6時)	～	08:00(午前 8時)	夜間・早朝訪問看護加算	：2,100円 n
深夜：	22:00(午後10時)	～	06:00(午前 6時)	深夜訪問看護加算	：4,200円 n
※他の訪問看護STがすでに訪問した後の同一日の訪問の場合には、n
　 夜間・早朝／深夜加算は算定できません。'/>
              </Form.Label>
              <Col sm={12} md={8}>
                <div>
                  <input type="radio" name='medicalExpenses' id='1' className='me-1' />
                  <label htmlFor="1" className='me-3'>基本療養費ⅠまたはⅢ		</label>
                  <input type="radio" name='medicalExpenses' id='2' className='me-1' />
                  <label htmlFor="2">基本療養費Ⅳ
                  </label>
                </div>
                <div>

                  <div>
                    <input type="radio" name='care' id='7' className='me-1' />
                    <label htmlFor="7" className='me-2'>３０分未満		</label>
                    <input type="radio" name='care' id='8' className='me-1' />
                    <label htmlFor="8" className='me-2'>３０分以上
                    </label>

                  </div>
                  <div>
                    <input type="radio" id='10' name='calculate' className='me-1' />
                    <label htmlFor="10" className='me-2'>算定する	</label>
                    <input type="radio" id='11' name='calculate' className='me-1' />
                    <label htmlFor="11" className='me-2'>算定済
                    </label>
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
                className="bg-light-yellow label-dialog d-flex"
              >
                <div className='me-3'>   専門管理 </div> <MyPopover title='専門管理加算を算定する利用者に対し、
専門の研修を受けた看護師が訪問した場合にチェックを付けます。
チェックが付いている実績日は療養費明細書の訪問日欄に☆がつきます。'/>
              </Form.Label>
              <Col sm={12} md={8} className='d-flex align-items-center'>
                <div><input type="checkbox" id='1' className='me-2' />
                  <label htmlFor="1">対象（緩和ケア、褥瘡ケア、人工肛門･膀胱ケア、特定行為）</label></div>
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
                className="bg-light-yellow label-dialog d-flex justify-content-between"
              >
                <div className='d-flex align-items-center'>  <div className='me-3'>   交通費 </div> <MyPopover title='実費請求（一覧）画面の「交通費一括集計処理実行」ボタンで、
各実績に設定した交通費を合算し、実費項目として登録します。
※ 新規登録時にあらかじめ金額を設定したい場合は
　　利用者基本情報を編集してください。'/></div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <div className='mb-2'>名称</div>
                  <div className='mt-2'>単価</div>
                </div>
              </Form.Label>
              <Col sm={12} md={8} >
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    defaultValue={'交通費'}
                    name="place_before_start"
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜全角＞
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center mt-2 ">
                  <Form.Control
                    type="text"
                    defaultValue={1000}
                    onChange={(e) => handleOnChangeValue(e)}
                    className="w-25 w-sm-75"

                  />
                  <div className="d-flex justify-content-md-center align-items-center ms-2 mt-0 ">
                    円 ＜半角数字＞
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
                サービスコード <span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Select className='w-75' defaultValue={1}>
                  <option value={0}></option>
                  <option value={1}>自宅</option>
                  <option value={2}>社会福祉施設及び身体障害者施設</option>
                  <option value={3}>小規模多機能型居宅介護</option>
                  <option value={4}>複合型サービス</option>
                  <option value={5}>認知症対応型グループホーム</option>
                  <option value={6}>特定施設</option>
                  <option value={7}>地域密着型介護老人福祉施設及び介護老人福祉施設</option>
                  <option value={8}>その他</option>
                </Form.Select>
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
                利用施設 <span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Select className='w-75' defaultValue={1}>
                  <option value={0}></option>
                  <option value={1}>訪問看護ステーションアポロ</option>
                  <option value={2}>松縄サテ</option>

                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-container my-3 p-2  d-md-flex justify-content-between"
            >
              <div> <span className='text-dark '>◆</span>バイタルサイン情報</div>
              <div className='d-flex fs-6 align-items-center'>
                <input type="radio" name='text' id='11' className='me-0 me-md-1' />
                <label htmlFor="11" className='me-1 me-md-2' >全て </label>
                <input type="radio" name='text' id='20' className='me-0 me-md-1' />
                <label htmlFor="20" className='me-1 me-md-2' >空欄のみ </label>
                <Button className='mx-1 mx-md-2'>前回実績複写</Button>
                <Button className='me-0 me-md-5'>任意実績複写</Button>
              </div>
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
                体温
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center mt-2 ">
                    <Form.Control
                      type="text"

                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"

                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-2 mt-0 ">
                      ℃ ＜半角数字　（小数点含む）＞
                    </div>
                  </div>
                </Row>
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
                血圧
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center mt-2 ">
                    <Form.Control
                      type="text"

                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"

                    />
                    <span className='mx-2 fs-4'>/</span>
                    <Form.Control
                      type="text"

                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"

                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-2 mt-0 ">
                      ＜半角数字＞
                    </div>
                  </div>
                </Row>
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
                脈拍
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center mt-2 ">
                    <Form.Control
                      type="text"

                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"

                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-2 mt-0 ">
                      回／分 ＜半角数字＞
                    </div>
                  </div>
                </Row>
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
                呼吸
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center mt-2 ">
                    <Form.Control
                      type="text"

                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"

                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-2 mt-0 ">
                      回／分 ＜半角数字＞
                    </div>
                  </div>
                </Row>
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
                ＳｐＯ２
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-flex justify-content-start align-items-center mt-2 ">
                    <Form.Control
                      type="text"

                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-25 w-sm-75"

                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-2 mt-0 ">
                      ％ ＜半角数字＞
                    </div>
                  </div>
                </Row>
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-container my-3 p-2 "
            >
              <div> <span className='text-dark '>◆</span>病状 ／ SOAP</div>

            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_remarks"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >
                病状
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className='me-2'>
                    全体表示
                  </Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="sickness"

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
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >
                S
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className='me-2'>
                    全体表示
                  </Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="sickness"

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
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >
                O
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className='me-2'>
                    全体表示
                  </Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="sickness"

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
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >
                A

              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className='me-2'>
                    全体表示
                  </Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="sickness"

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
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >
                P

              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className='me-2'>
                    全体表示
                  </Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="sickness"

                  style={{ height: '100px' }}
                />
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-container my-3 p-2 "
            >
              <div> <span className='text-dark '>◆</span>看護情報</div>

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
                生活援助
              </Form.Label>
              <Col sm={12} md={8}>
                <Button className='mt-2 mt-md-0 custom-button-see'>看</Button>
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
                排泄援助
              </Form.Label>
              <Col sm={12} md={8}>
                <Button className='mt-2 mt-md-0 custom-button-see'>看</Button>
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
                処置
              </Form.Label>
              <Col sm={12} md={8}>
                <Button className='mt-2 mt-md-0 custom-button-see'>看</Button>
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
                リハビリ
              </Form.Label>
              <Col sm={12} md={8}>
                <Button className='mt-2 mt-md-0 custom-button-see'>看</Button>
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
                指導
              </Form.Label>
              <Col sm={12} md={8}>
                <Button className='mt-2 mt-md-0 custom-button-see'>看</Button>
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
                管理
              </Form.Label>
              <Col sm={12} md={8}>
                <Button className='mt-2 mt-md-0 custom-button-see'>看</Button>
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-container my-3 p-2 "
            >
              <div> <span className='text-dark '>◆</span>その他</div>

            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_remarks"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >

                コメント

              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className='me-2'>
                    全体表示
                  </Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="sickness"

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
                className="bg-light-yellow label-dialog d-flex align-items-center"
              >
                <div className='me-2'>コメント２</div><div><  MyPopover title='コメント２の内容は記録書Ⅱや経過記録には記載されません。n
システム内にのみ記録されますので職員間で共有したい内容を入力してください'/></div>

              </Form.Label>
              <Col sm={12} md={8}>
                <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                  <Button className='me-2'>
                    全体表示
                  </Button>
                  <span>＜全角＞</span>
                </div>
                <Form.Control
                  as="textarea"
                  name="sickness"

                  style={{ height: '100px' }}
                />
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-container my-3 p-2  "
            >
              <div><Button>登録</Button>
                <input type="checkbox" id='2' className='me-2 ms-4' />
                <label htmlFor="2">入力途中</label></div>
            </Form.Group>
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
              <Button
                variant="light"
                onClick={() => {
                  navigate('/user/schedule')
                }}
                className="btn-min-w-30 border-primary ms-3"
              >
                一覧に戻る
              </Button>
            </Col>
          </Form.Group>
        </Form>

      </div>

    </MasterLayout >
  );
}

export default PeditResultRegister;
