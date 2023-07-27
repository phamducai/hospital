/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: Usage Summary/Account Information
 * PG NAME: 口座情報 (User information inquiry)
 * PG ID: Account info
 * PG NAME: 利用状況サマリー情報 (Account info)
 */
import MasterLayout from '@/layout/MasterLayout';
import { useState, useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import CustomHeading from '@/components/user/detail/TextHeader';
import Table from 'react-bootstrap/Table';
import TabButtonLink from '@/components/TabButtonLink';
import { tabButtonUsageSummaryInfo } from '@/data/common';
import { optionDepositItem } from '@/data/usage-summary-account-info';
function AccountInfoUpdate() {
  const navigate = useNavigate();
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
  };
  const [,setValidated] = useState(false);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleCloseEdit = () => {
    setMessageDialog('引落銀行番号が正しくありません。');
    navigate('/user/account-info');
  };

  const showUpdateConfirmDialog = () => {
    setMessageDialog('引落銀行番号が正しくありません。');

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

  const validateFormInput = () => {
    return refUserDialog.current && !refUserDialog.current.checkValidity();
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
    showUpdateConfirmDialog();
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={3} arrayButton={tabButtonUsageSummaryInfo} />
      <div className="main">
        <Form className="w-100 h-100 d-flex flex-column" id="nursing-info">
          <Form.Group className="input-detail user-detail d-flex flex-column">
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-4 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle label-table"
                          rowSpan={7}
                        >
                          引落銀行 <Button>銀</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-light-yellow label-dialog align-middle td-w-sm-21">銀行番号<span className="color-text-custom">【必】</span> </td>
                        <td className="bg-white">
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              required
                              name="kanaName"

                            // onChange={(e) => handleOnChangeValue(e)}
                            />
                            <div className="fz-12 text-end ps-xs-0 ps-sm-2">＜半角数字＞</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-light-yellow label-dialog align-middle td-w-sm-21">銀行名 </td>
                        <td className="bg-white">
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              required
                              name="kanaName"

                            // onChange={(e) => handleOnChangeValue(e)}
                            />
                            <div className="fz-12 text-end ps-xs-0 ps-sm-2">＜全角カタカナ・英数字＞</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle label-table td-w-sm-21"
                          rowSpan={7}
                        >
                          引落銀行支店 <Button>支</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-light-yellow label-dialog align-middle td-w-sm-21">支店番号 <span className="color-text-custom">【必】</span></td>
                        <td className="bg-white">
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              required
                              name="kanaName"

                            // onChange={(e) => handleOnChangeValue(e)}
                            />
                            <div className="fz-12 text-end ps-xs-0 ps-sm-2">＜半角数字＞</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-light-yellow label-dialog align-middle td-w-sm-21">支店名</td>
                        <td className="bg-white">
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              required
                              name="kanaName"

                            // onChange={(e) => handleOnChangeValue(e)}
                            />
                            <div className="fz-12 text-end ps-xs-0 ps-sm-2">＜全角カタカナ・英数字＞</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                          rowSpan={4}
                        >
                          預金項目
                          <span className="color-text-custom">【必】</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-white">
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Select
                              // onChange={(e) => handleOnChangeValue(e)}
                              className="w-50 w-sm-100 mt-2 mt-md-0"
                              required
                            >
                              {optionDepositItem.map((item, index) => (
                                <option key={index}>{item.option}</option>
                              ))}
                            </Form.Select>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                          rowSpan={4}
                        >
                          口座番号
                          <span className="color-text-custom">【必】</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-white">
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              required
                              name="kanaName"
                            // onChange={(e) => handleOnChangeValue(e)}
                            />
                            <div className="fz-12 text-end ps-xs-0 ps-sm-2">＜半角数字＞</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                          rowSpan={4}
                        >
                          預金者名
                          <span className="color-text-custom">【必】</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-white">
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Control
                              type="text"
                              required
                              name="kanaName"
                            // onChange={(e) => handleOnChangeValue(e)}
                            />
                            <div className="fz-12 text-end ps-xs-0 ps-sm-2">＜全角カタカナ・英数字＞</div>
                          </div>
                          <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <div>※氏名の間にスペースがある場合は、スペース（全角）も入力してください。<br />　（例：テスト　リヨウシヤ）</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                          rowSpan={4}
                        >
                          顧客番号
                          <div>
                            <Button>利用者ID複写</Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-white"><div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Control
                            type="text"
                            required
                            name=" "
                          // onChange={(e) => handleOnChangeValue(e)}
                          />
                          <div className="fz-12 text-end ps-xs-0 ps-sm-2">＜半角＞</div>
                        </div></td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3 mt-3 form-group-container"
                controlId="form_button_container"
              >
                <Col sm={9} className="text-start ms-0 ps-0 my-2">
                  <Button
                    variant="success"
                    onClick={handleOnSave}
                    className="btn-min-w"
                  >
                    登録
                  </Button>
                  <Button
                    onClick={handleCloseEdit}
                    className="btn-min-w bg-btn-back border-0"
                  >
                    戻る
                  </Button>
                </Col>
              </Form.Group>

            </div>

            {isShowConfirmDialog && (
              <DialogConfirm
                buttons={buttons}
                message={messageDialog}
                onHidePopup={handleCloseDialogConfirm}
                className="w-dialog-confirm"
              />
            )}

          </Form.Group>
        </Form>
      </div>
    </MasterLayout>
  );
}

export default AccountInfoUpdate;

