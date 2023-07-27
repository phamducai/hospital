/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 */
import MasterLayout from '@/layout/MasterLayout';



import { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import '@/assets/scss/user/schedule/Pedit-Schedule.scss';

import CustomHeading from '@/components/user/detail/TextHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

function PreferResult() {

  const refUserDialog = useRef<HTMLFormElement | null>(null);

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
              className="form-group-container my-3 p-2 d-flex justify-content-between align-items-center"
            >
              <div> <span className='text-dark '>◆</span>　訪問看護実績情報</div>
              <div>
                <input type="radio" name='export' id='pdf' className='me-1' />
                <label htmlFor="pdf" className='me-2'>PDF </label>
                <input type="radio" name='export' id='EXCEL' className='me-1' />
                <label htmlFor="EXCEL" className='me-2'>EXCEL </label>
                <Button className='me-0 me-md-5' disabled >印刷</Button></div>
            </Form.Group>
            <Form.Group
              className="form-group-container p-2 d-flex justify-content-between align-items-center"
            >
              <div>
                <Button className='me-3'>編集</Button>
                <Button className='text-center'><FontAwesomeIcon icon={faChevronLeft} className='me-2' />03/21 (火)</Button>

              </div>
              <div>

                <Button className='me-0 me-md-5 text-center' disabled   ><FontAwesomeIcon icon={faChevronRight} /></Button></div>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_user_id"
            >
              <Form.Label
                column
                sm={4}
                className=" label-dialog bg-light-yellow d-flex align-items-cente"
              >
                訪問年月日
              </Form.Label>
              <Col sm={12} md={6} className="d-flex align-items-center">
                <div>
                  2023/06/21 (水)
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
                訪問時間
              </Form.Label>
              <Col sm={12} md={8} className='d-flex align-items-center'>
                <div >	15:00～16:00 (60分)</div>
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
              <Col sm={12} md={8} className='d-flex align-items-center'>
                <div>菱田　ヒロシ [ＯＴ]</div>
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
                訪問職員２
              </Form.Label>
              <Col sm={12} md={8}>

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
                保険種別
              </Form.Label>
              <Col sm={12} md={8} className='d-flex align-items-center'>
                <div>	介護</div>
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
                サービスコード
              </Form.Label>
              <Col sm={12} md={8} className='d-flex align-items-center'>
                <div>	131521／訪看Ⅰ５・２超　264単位</div>
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
                同一建物該当
              </Form.Label>
              <Col sm={12} md={8}>

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
                算定方法（医療用）
              </Form.Label>
              <Col sm={12} md={8}>

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
                className="bg-light-yellow label-dialog d-flex align-items-center py-4"
              >
                加算（医療用）
              </Form.Label>
              <Col sm={12} md={8}>
                <div className='d-block'></div>
                <div className='d-block '></div>
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
                <div className='me-3'>   専門管理 </div>
              </Form.Label>
              <Col sm={12} md={8} className='d-flex align-items-center'>

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
                <div className='d-flex align-items-center'>  <div className='me-3'>   交通費 </div> </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <div className='mb-2'>名称</div>
                  <div className='mt-2'>単価</div>
                </div>
              </Form.Label>
              <Col sm={12} md={8} >
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
                訪問場所
              </Form.Label>
              <Col sm={12} md={8} className='d-flex align-items-center'>
                自宅
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
                利用施設
              </Form.Label>
              <Col sm={12} md={8} className='d-flex align-items-center'>
                <div>訪問看護ステーションアポロ</div>
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-container my-3 p-2  d-md-flex justify-content-between"
            >
              <div> <span className='text-dark '>◆</span>バイタルサイン情報</div>

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
                <div className='me-2'>コメント２</div>

              </Form.Label>
              <Col sm={12} md={8}>

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

export default PreferResult;
