/**
 * PG ID: USc0030
 * PG NAME: 在がん医総情報新規登録 (Oncology General Information New Registration)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Form, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { REQUEST_YEAR } from '@/data/user-list';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useState, useRef } from 'react';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
import '@assets/scss/user/detail/cancer-doctors.scss';
function USc0030() {
  const navigate = useNavigate();
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowDialogRegister, setShowDialogRegister] = useState(false);
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [validated] = useState(false);

  const handleOnClose = () => {
    navigate('/user/detail/cancer-doctors-info');
  };

  const handleDialogRegister = () => {
    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          handleCloseDialogRegister();
          // navigate('/user/detail/admission-discharge-info');
        },
        className: 'button-dialog',
      },
    ]);
    setShowDialogRegister(true);
  };
  const handleCloseDialogRegister = () => {
    setShowDialogRegister(false);
  };

  const dataCheck = [
    '05/26週（05/26～06/01）',
    '06/02週（06/02～06/08）',
    '06/09週（06/09～06/15）',
    '06/16週（06/16～06/22）',
    '06/23週（06/23～06/29）',
    '06/30週（06/30～07/06）',
  ];
  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabUserDetail active={4} />
      <Form
        className="w-100 h-100 d-flex flex-column"
        ref={refUserDialog}
        noValidate
        validated={validated}
        id='cancer-doctors'
      >
        <Form.Group
          as={Row}
          className="mb-2 mt-3 form-group-container mt-3-div"
          controlId="form_user_id"
        >
          <Col sm={9} className="text-start">
            <h5>在がん医総情報</h5>
          </Col>
        </Form.Group>

        <Form.Group className=" user-detail  d-flex flex-column">
          <Form.Group className=" user-detail d-flex flex-column pt-3">
            <Form.Group
              className="mb-3 form-group-container row "
              controlId="form_user_id"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                医療機関名<span className="color-text-custom">【必】</span>
              </Form.Label>
              <div className="col-md-8 col-sm-12">
                <div className="d-md-flex justify-content-start align-items-center">
                  <Form.Control
                    type="email"
                    placeholder="高松病院"
                    className="mt-2 mt-md-0 w-150 form-control input-80"
                    required
                  />
                  <div className="fz-12  text-end ps-sx-1 ps-sm-2">
                    ＜全角＞
                  </div>
                </div>
              </div>
            </Form.Group>
            <Form.Group
              className="form-group-container row "
              controlId="form_user_id"
            >
              <div className="mb-3 row d-flex">
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog form-label col-form-label col-sm-4"
                >
                  請求年月
                </Form.Label>
                <Col sm={8} className="d-md-flex d-block mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Select name="record_date">
                      {REQUEST_YEAR.map((wareki, index) => (
                        <option key={index}>{wareki}</option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid" className="ms-1">
                      記録日を入力してください。
                    </Form.Control.Feedback>
                    <Form.Control
                      type="text"
                      name="record_year"
                      className="max-w-50 ms-2 min-w-input-validate"
                      maxLength={2}
                    />
                    <div className="px-2">年</div>
                    <Form.Control
                      type="text"
                      name="record_month"
                      className="max-w-50 min-w-input-validate"
                      maxLength={2}
                    />
                    <div className="px-2">月</div>
                    <Button
                      type="button"
                      className=" btn btn-primary mt-2 mt-md-0 w-100  "
                    >
                      検索
                    </Button>
                  </div>
                </Col>
              </div>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_subject"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                対象週<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                {dataCheck.map((val) => (
                  <Form.Check
                    name="nursingPlan"
                    label={val}
                    className="mt-2 mt-md-0"
                    required
                  />
                ))}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="my-2 form-group-container mt-3-div"
              controlId="form_button_container"
            >
              <Col sm={10} className="text-left ps-0 ms-0">
                <Button
                  variant="success"
                  onClick={handleDialogRegister}
                  className="btn-min-w-30"
                >
                  登録
                </Button>
                <Button
                  variant="light"
                  onClick={handleOnClose}
                  className="btn-min-w-30 border-primary"
                >
                  閉じる
                </Button>
              </Col>
            </Form.Group>
            {isShowDialogRegister && (
              <DialogConfirm
                buttons={buttons}
                message="データを登録しました。"
                onHidePopup={handleCloseDialogRegister}
                className="w-dialog-confirm"
              />
            )}
          </Form.Group>
        </Form.Group>
      </Form>
    </MasterLayout>
  );
}

export default USc0030;
