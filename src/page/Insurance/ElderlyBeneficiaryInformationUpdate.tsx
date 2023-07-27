/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: USv0030
 * PG NAME: 訪問看護基本情報1更新 (Home-visit nursing basic information 1 update)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Col } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { hideDialog } from '@/store/user/userSlice';
import { useDispatch } from 'react-redux';
import '@assets/scss/user/detail/insurance/insurance.scss';
import {
  WAREKI,
  co_payment_ratio,
  DEFAULT_USER_INFORMATION,
} from '@/data/user-list';
import { setSelectRow } from '@/store/user/userSlice';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';
import { Person } from '@/interfaces/Person';
import '@assets/scss/user/detail/insurance/insurance.scss';

function ElderlyBeneficiaryInformationUpdate() {
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [tableSelectedItem] = useState<Person | null>(null);
  const [targetRow, setTargetRow] = useState<Person>(DEFAULT_USER_INFORMATION);
  const [showOnly] = useState(false);
  const [isShowDialogRegister, setShowConfirmDialog] = useState(false);
  const dispatch = useDispatch();
  const [, setMessageDialog] = useState('');
  const [tableData, setTableData] = useState<Array<Person>>([]);
  const [targetIndex] = useState<number>(-1); // Not in array index by default for register processing

const handleOnClose = () => {
    navigate('/user/insurance/elderly-beneficiary-info/0');
  }

  const saveUserInfo = () => {
    tableData[targetIndex] = targetRow;
    setTableData(tableData);
  };


  let timeout: ReturnType<typeof setTimeout>;
  const handleOnSave = () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    if (validateFormInput()) {
      setValidated(true);
      return;
    }

    saveUserInfo();
    setMessageDialog('変更内容を保存しました。');

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

    timeout = setTimeout(() => {
      setShowConfirmDialog(true);
    }, 150);
  };

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
    dispatch(hideDialog());
  };

  const validateFormInput = () => {
    return refUserDialog.current && !refUserDialog.current.checkValidity();
  };

  const handleClose = () => {
    // localStorage.clear();
    dispatch(setSelectRow(null));
    navigate('/user/insurance/medical-insurance');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChangeValue = (e: React.ChangeEvent<any>) => {
    setTargetRow((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <MasterLayout userInfo={tableSelectedItem}>
      <div className="main">
        {/* Page elderly detail update*/}
        <Form
          ref={refUserDialog}
          noValidate
          validated={validated}
          className="w-100 h-100 d-flex flex-column"
        >
          <CustomHeading title="高齢受給者情報" />
          <TabButtonLink active={2} arrayButton={itemTabInsurance} />
          <Form.Group className="input-detail user-detail d-flex flex-column">
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　高齢受給者情報</h5>
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
                  className="bg-light-yellow label-dialog"
                >
                  交付年月日
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select
                            name="record_date"
                            defaultValue={WAREKI[5]}
                            required
                          >
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          {/* <Form.Control.Feedback
                            type="invalid"
                            className="ms-1"
                          >
                            記録日を入力してください。
                          </Form.Control.Feedback> */}
                          <Form.Control
                            type="text"
                            name="record_year"
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                            required
                            defaultValue="03"
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="01"
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="01"
                            name="record_date"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">日</div>
                        </div>
                        <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
                          ＜半角数字＞
                        </div>
                      </div>
                    </Col>
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
                  className="bg-light-yellow label-dialog"
                >
                  発効期日
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select
                            name="record_date"
                            defaultValue={WAREKI[5]}
                            // required
                          >
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          {/* <Form.Control.Feedback
                            type="invalid"
                            className="ms-1"
                          >
                            記録日を入力してください。
                          </Form.Control.Feedback> */}
                          <Form.Control
                            type="text"
                            name="record_year"
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                            // required
                            defaultValue=""
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue=""
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            // required
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue=""
                            name="record_date"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            // required
                          />
                          <div className="px-2">日</div>
                        </div>
                        <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
                          ＜半角数字＞
                        </div>
                      </div>
                    </Col>
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
                  className="bg-light-yellow label-dialog"
                >
                  有効開始年月日
                  <span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select
                            name="record_date"
                            defaultValue={WAREKI[5]}
                            required
                          >
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          {/* <Form.Control.Feedback
                            type="invalid"
                            className="ms-1"
                          >
                            記録日を入力してください。
                          </Form.Control.Feedback> */}
                          <Form.Control
                            type="text"
                            name="record_year"
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                            required
                            defaultValue="03"
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="01"
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="01"
                            name="record_date"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            required
                          />
                          <div className="px-2">日</div>
                        </div>
                        <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
                          ＜半角数字＞
                        </div>
                      </div>
                    </Col>
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
                  className="bg-light-yellow label-dialog"
                >
                  有効期限
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select
                            name="record_date"
                            defaultValue={WAREKI[5]}
                            // required
                          >
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          {/* <Form.Control.Feedback
                            type="invalid"
                            className="ms-1"
                          >
                            記録日を入力してください。
                          </Form.Control.Feedback> */}
                          <Form.Control
                            type="text"
                            name="record_year"
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                            // required
                            defaultValue="05"
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="12"
                            name="record_month"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            // required
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            defaultValue="31"
                            name="record_date"
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            // required
                          />
                          <div className="px-2">日</div>
                        </div>
                        <div className="fz-12 text-end ps-xs-0 ps-sm-1 ms-md-2">
                          ＜半角数字＞
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container"
                controlId="form_gender"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  一部負担金の割合
                  <span className="color-text-custom">【必】</span>
                </Form.Label>
                <Col sm={8}>
                  <Form.Select
                    name="record_date"
                    defaultValue={co_payment_ratio[3]}
                    required
                  >
                    {co_payment_ratio.map((co_payment_ratio, index) => (
                      <option key={index}>{co_payment_ratio}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container"
                controlId="form_user_id"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  負担上限額
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Control
                          type="text"
                          defaultValue={targetRow.zip_code}
                          name="zip_code_1"
                          readOnly={showOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                          className="w-50 w-sm-100"
                          maxLength={6}
                        />
                      </div>
                      <div className="col-9-yen">円</div>
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
                  className="bg-light-yellow label-dialog"
                >
                  負担上限額（変動）
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <Col sm={12}>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <div className="d-flex justify-content-start align-items-center">
                          <Form.Select defaultValue={WAREKI[5]} required>
                            {WAREKI.map((wareki, index) => (
                              <option key={index}>{wareki}</option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            生年月日を入力してください。
                          </Form.Control.Feedback>
                          <Form.Control
                            type="text"
                            value={targetRow.birthday}
                            name="birthday_year"
                            readOnly={showOnly}
                            onChange={(e) => handleOnChangeValue(e)}
                            className="max-w-50 ms-2 min-w-input-validate"
                            maxLength={2}
                            defaultValue="03"
                          />
                          <div className="px-2">年</div>
                          <Form.Control
                            type="text"
                            // required
                            value={targetRow.birthday}
                            name="birthday_month"
                            readOnly={showOnly}
                            onChange={(e) => handleOnChangeValue(e)}
                            className="max-w-50 min-w-input-validate"
                            maxLength={2}
                            defaultValue="10"
                          />
                          <div className="px-2">月</div>
                          <Form.Control
                            type="text"
                            // required
                            value={targetRow.contact_zip1}
                            name="yen"
                            readOnly={showOnly}
                            onChange={(e) => handleOnChangeValue(e)}
                            className="max-w-70 min-w-input-validate"
                            maxLength={6}
                            defaultValue="18000"
                          />
                          <div className="px-2">円</div>
                        </div>
                        <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                          <Button className="ms-2">▼追加</Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3 mt-3 form-group-container"
                controlId="form_button_container"
              >
                <Col sm={9} className="text-start ms-0 ps-0 my-2">
                  <Button
                    variant='success'
                    onClick={handleOnSave}
                    className="btn-min-w border-primary"
                  >
                    更新
                  </Button>
                  <Button
                    variant="light"
                    onClick={handleOnClose}
                    className="btn-min-w border-primary"
                  >
                    戻る
                  </Button>
                  <Button
                    variant="light"
                    onClick={handleClose}
                    className="btn-min-w border-primary"
                  >
                    一覧に戻る
                  </Button>
                </Col>
              </Form.Group>
              {isShowDialogRegister && (
                <DialogConfirm
                  buttons={buttons}
                  message='データを更新しました。'
                  onHidePopup={handleOnSave}
                  className="w-dialog-confirm"
                />
              )}
            </div>
          </Form.Group>
        </Form>
      </div>
    </MasterLayout>
  );
}

export default ElderlyBeneficiaryInformationUpdate;
