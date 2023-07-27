/**
 * PG ID: FL0040
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

function FL0040() {
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

  return (
    <MasterLayout>
      <CustomHeading title="ファイル管理" />

      <Form className="w-100 h-100 d-flex flex-column ">
        <Form.Group className=" user-detail d-flex flex-column pt-3">
          <Form.Group
            as={Row}
            className="mb-2 form-group-container"
            controlId="form_user_id"
          >
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              ファイル属性
            </Form.Label>
            <Col sm={12} md={8}>
              <Row>
                <div className="d-flex justify-content-start align-items-center">
                  <Form.Label>契約書など</Form.Label>
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
              管理年月日
            </Form.Label>
            <Col sm={12} md={8}>
              <Row>
                <div className="d-flex justify-content-start align-items-center">
                <Form.Label>20/06/2023</Form.Label>
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
              利用者氏名
            </Form.Label>
            <Col sm={12} md={8}>
              <Row>
                <div className="d-flex justify-content-start align-items-center">
                <Form.Label>{id + '　高松　太郎'}</Form.Label>
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
              有効期間
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
            <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
              ファイル名
            </Form.Label>
            <Col sm={12} md={8}>
              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                <Form.Label column sm={4}>
                  訪問看護計画書.pdf
                </Form.Label>
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
              更新
            </Button>
            <Button
              variant="warning"
              onClick={() => {
                navigate(`/file/file-search`);
              }}
              className="btn-min-w-30 border-primary"
            >
               一覧に戻る
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </MasterLayout>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default FL0040;
