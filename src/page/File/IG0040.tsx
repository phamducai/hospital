/**
 * PG ID: IG0040
 * PG NAME: 更新画面

 (update screen)
 */
import weekends from 'react-multi-date-picker/plugins/highlight_weekends';
import MasterLayout from '@/layout/MasterLayout';
import { Form, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useRef, useState } from 'react';

import CustomHeading from '@/components/user/detail/TextHeader';
import { months, weekDays } from '@/data/japan_th';
import DatePicker from 'react-multi-date-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function IG0040() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);

  const datePickerRef = useRef<any>(null);
  const datePickerRef1 = useRef<any>(null);
  const handleOnSave = () => {
    setMessageDialog('データを更新しました。');

    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          handleCloseDialogConfirm();
        },
        className: 'button-dialog',
      },
    ]);

    setShowConfirmDialog(true);
  };
  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
  };
  const imageRef = useRef<any>(null);
  function handleRotateClick() {

    imageRef.current.style.transform = `rotate(${(parseInt(imageRef.current.style.transform.replace('rotate(', '').replace('deg)', '')) || 0) + 90}deg)`;
  }

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />

      <Form className="w-100 h-100 d-flex flex-column ">
        <Form.Group className=" user-detail d-flex flex-column pt-3">

          <Form.Group
            as={Row}
            className="mb-2 form-group-container mt-3-div mt-3"
            controlId="form_person_in_charge"
          >
            <Form.Label
              column
              sm={4}
              className="bg-light-yellow label-dialog"
            >
              画像属性 <span className="color-text-custom">【必】</span>
            </Form.Label>
            <Col sm={12} md={8}>
              <Row>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <select
                    className="bg-white h-150 ms-md-0"
                    id="drop_id"
                    style={{ blockSize: '34px', marginTop: '3px', width: '120px' }} value={9} disabled>
                    <option value="-1"></option>
                    <option value="1">顔写真</option>
                    <option value="2">褥瘡 </option>
                    <option value="3">患部</option>
                    <option value="4">レントゲン</option>
                    <option value="5">エコー</option>
                    <option value="6">保険証</option>
                    <option value="10">申し送り情報</option>
                    <option value="9">その他</option>
                  </select>
                </div>
              </Row>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              管理年月日 <span className="color-text-custom">【必】</span>
            </Form.Label>
            <Col sm={12} md={8}>
              <Row>
                <div className="d-flex justify-content-start align-items-center">
                  <Form.Control
                    type="text"
                    className="w-25 w-sm-100 "
                    value={'2023/06/20'}
                    disabled
                  />
                </div>
              </Row>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              利用者氏名 <span className="color-text-custom">【必】</span>
            </Form.Label>
            <Col sm={12} md={8}>
              <Row>
                <div className="d-flex justify-content-start align-items-center">
                  <Form.Control
                    type="text"
                    className="w-sm-100"
                    defaultValue={id}
                    style={{ width: '18%' }}
                    disabled
                  />
                  <Button className='mx-2' disabled >利</Button>
                  <div>高松　太郎</div>
                </div>
              </Row>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              有効期間 <span className="color-text-custom">【必】</span>
            </Form.Label>
            <Col sm={12} md={8}>
              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                <Form.Label
                  column
                  sm={4}
                  className="d-flex justify-content-start align-items-center"
                >
                  <DatePicker
                    ref={datePickerRef}
                    style={{
                      width: '100px',
                      boxSizing: 'border-box',
                      height: '34px',
                      textAlign: 'center'
                    }}
                    containerStyle={{

                    }}
                    weekDays={weekDays}
                    months={months}
                    plugins={[weekends()]}
                  />
                  <div

                    className="text-center mx-1"
                    onClick={() => {
                      datePickerRef.current?.openCalendar();
                    }}
                  >
                    <FontAwesomeIcon icon={faCalendarDays} />{' '}
                  </div>
                  <div

                    className="me-2 fs-4 " >
                    ~
                  </div>
                  <DatePicker
                    style={{
                      width: '100px',
                      boxSizing: 'border-box',
                      height: '34px',
                      textAlign: 'center'
                    }}

                    weekDays={weekDays}
                    months={months}
                    plugins={[weekends()]}
                    ref={datePickerRef1}
                  />
                  <div
                    className=" text-center mx-1"
                    onClick={() => {
                      datePickerRef1.current?.openCalendar();
                    }}
                  >
                    <FontAwesomeIcon icon={faCalendarDays} />{' '}
                  </div>
                </Form.Label>
              </div>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog d-flex align-items-center">
              画像名 <span className="color-text-custom">【必】</span>
            </Form.Label>
            <Col sm={12} md={8} >
              <div className='d-flex align-items-center'>
                <div>
                  <img
                    style={{ borderRadius: "4px", transformOrigin: 'center center', padding: "0px 20px" }}
                    src='/public/img/1.png'
                    id='image'
                    alt=""
                    width={100}
                    ref={imageRef}

                  />
                  <div>Pari2.png
                  </div>
                </div>
                <div className='ms-3'><Button onClick={handleRotateClick}>右に90度回転</Button></div>
              </div>

            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id "
          >
            <Form.Label
              column
              sm={4}
              className="bg-light-yellow label-dialog py-md-5 py-0"
            >
              コメント
            </Form.Label>
            <Col sm={12} md={8} className="d-md-flex align-items-center">
              <Form.Control
                as="textarea"
                name="sickness"
                style={{ height: '120px' }}
                defaultValue="計画書計画書計画書"
              />
            </Col>
          </Form.Group>

          {isShowConfirmDialog && (
            <DialogConfirm
              buttons={buttons}
              message={messageDialog}
              onHidePopup={() => {
                setShowConfirmDialog(false);
              }}
              className="w-dialog-confirm "
            />
          )}
        </Form.Group>

        <Form.Group
          as={Row}
          className="form-group-container"
          controlId="form_button_container"
        >
          <Col sm={9} className="text-start ms-0 ps-0 my-2">
            <Button
              variant="success"
              onClick={() => {
                handleOnSave();
              }}
              className="btn-min-w-30"
            >
              編集
            </Button>
            <Button
              variant="light"
              onClick={() => {
                navigate(`/file/prefer-file/${id}`);
              }}
              className="btn-min-w-30 border-primary"
            >
              閉じる
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </MasterLayout>
  );
}

export default IG0040;
