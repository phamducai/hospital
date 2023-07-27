/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: AccountInfo (Usage Summary/Account Information)
 * PG NAME: 口座情報 (User information inquiry)
 */
import MasterLayout from '@/layout/MasterLayout';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAppSelector } from '@/store/hooks';
import { useDispatch } from 'react-redux';
import { userSelector, removeUser } from '@/store/user/userSlice';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import CustomHeading from '@/components/user/detail/TextHeader';
import Table from 'react-bootstrap/Table';
import TabButtonLink from '@/components/TabButtonLink';
import { tabButtonUsageSummaryInfo } from '@/data/common';
function AccountInfo() {
  const navigate = useNavigate();
  const { selectedRow } = useAppSelector(userSelector);
  const dispatch = useDispatch();
  const [, setShowConfirmDialog] = useState(false);
  const [, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowDoneDialogDelete, setIsShowDoneDialogDelete] = useState(false);
  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
  };
  const showDeleteConfirmDialog = () => {
    setMessageDialog('データを削除します。よろしいですか？');

    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          dispatch(removeUser(selectedRow));
          handleDoneDialogDelete();
        },
        className: 'button-dialog',
      },
      {
        text: '戻る',
        okButton: false,
        onClickButton: () => {
          handleCloseDialogConfirm();
        },
        className: 'button-dialog',
      },
    ]);

    setShowConfirmDialog(true);
  };
  const handleDoneDialogDelete = () => {
    setShowConfirmDialog(false);
    setMessageDialog('データを削除しました。');
    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          handleDoneDialogDelete();
          navigate('/user-search');
        },
        className: 'button-dialog',
      },
    ]);
    setIsShowDoneDialogDelete(true);
  };
  const handleEdit = () => {
    navigate('/user/account-info/update');
  };
  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={3} arrayButton={tabButtonUsageSummaryInfo} />
      <div className="main">
        <Form className="w-100 h-100 d-flex flex-column" id="nursing-info">
          <Form.Group className="input-detail user-detail d-flex flex-column mt-2">
            <div>
              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
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
                          引落銀行
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">銀行番号</td>
                        <td className="bg-white">0173</td>
                      </tr>
                      <tr>
                        <td className="td-w-100">銀行名</td>
                        <td className="bg-white"> ヒヤクジユウシ</td>
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
                          引落銀行支店
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">支店番号</td>
                        <td className="bg-white">101</td>
                      </tr>
                      <tr>
                        <td className="td-w-100">支店名</td>
                        <td className="bg-white">ホンテン</td>
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
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-white">普通</td>
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
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-white">1234567</td>
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
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-white">タカマツ　タロウ</td>
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
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-white">1001</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_button_container"
              >
                <Col sm={10} className="mt-2-div mt-2">
                  <Button
                    variant="success"
                    onClick={() => handleEdit()}
                    className="min-w-btn-150"
                  >
                    編集
                  </Button>
                  <Button
                  onClick={showDeleteConfirmDialog}
                  className="btn-min-w btn-delete text-white"
          >
                    削除
                  </Button>
                </Col>
              </Form.Group>
            </div>

            {isShowDoneDialogDelete && (
              <DialogConfirm
                buttons={buttons}
                message="データを削除しました。"
                onHidePopup={handleDoneDialogDelete}
                className="w-dialog-confirm text-danger"
              />
            )}

          </Form.Group>
        </Form>
      </div>
    </MasterLayout>
  );
}

export default AccountInfo;

