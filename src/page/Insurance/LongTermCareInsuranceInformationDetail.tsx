/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: InsurancePublicExpenseInformationDetail
 * PG NAME: 保険公費案内詳細 (Insurance Public Expense Information Detail)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Col, Table } from 'react-bootstrap';
import '@assets/scss/user/detail/insurance/insurance.scss';
import { useNavigate } from 'react-router';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useState } from 'react';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
// import * as Constant from '@/common/constant';
import { itemTabInsurance } from '@/data/common';

function LongTermCareInsuranceInformationDetail() {
  const navigate = useNavigate();
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isShowDoneDialogDelete, setIsShowDoneDialogDelete] = useState(false);
  // const [dataSelected] = useState(JSON.parse(localStorage.getItem("dataSelected") ?? ''));

  const handleEdit = () => {
    navigate('/user/insurance/long-term-care-insurance/update');
  };

  const handleOnClose = () => {
    navigate('/user/insurance/long-term-care-insurance');
  };

  const showDeleteConfirmDialog = () => {
    setMessageDialog('データを削除します。よろしいですか？');

    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
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
          handleCloseDoneDialogDelete();
          // navigate('/user/insurance/medical-insurance');
        },
        className: 'button-dialog',
      },
    ]);
    setIsShowDoneDialogDelete(true);
  };

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
  };

  const handleCloseDoneDialogDelete = () => {
    setIsShowDoneDialogDelete(false);
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={6} arrayButton={itemTabInsurance} />
      <div className="main">
        {/* Page nursing detail*/}
        {/* <Form className="w-100 h-100 d-flex flex-column detail-show" id='nursing-info'> */}
        <Form className="w-100 h-100 d-flex flex-column" id="insurance-info">
          <Form.Group className="input-detail user-detail d-flex flex-column">
            {/* ◆医療保険情報 */}
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　介護保険情報</h5>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  交付年月日
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>令03/01/01</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_username"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  有効期限
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label> 令05/12/31</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_username_kanji"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  被保険者番号
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>3720000111</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_date_of_birth"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  保険者番号
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>372011</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_date_of_death"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  保険者名称
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>高松市</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_time_of_death"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  保険負担割合
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label></Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive="sm" className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle label-table"
                          rowSpan={7}
                        >
                          要介護状態等
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-150"> 要介護状態区分 </td>
                        <td className="bg-white">要支援（経過的要介護）</td>
                      </tr>
                      <tr>
                        <td className="td-w-150">認定年月日 </td>
                        <td className="bg-white">令03/01/01</td>
                      </tr>
                      <tr>
                        <td className="td-w-150">認定有効開始日</td>
                        <td className="bg-white">令03/01/01</td>
                      </tr>
                      <tr>
                        <td className="td-w-150">認定有効終了日</td>
                        <td className="bg-white"> 令05/12/31</td>
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
                  <Table responsive="sm" className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle label-table"
                          rowSpan={7}
                        >
                          居宅サービス等
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-150"> 区分支給限度基準額 </td>
                        <td className="bg-white">0単位／月</td>
                      </tr>
                      <tr>
                        <td className="td-w-150">期間開始年月日 </td>
                        <td className="bg-white">令03/01/01</td>
                      </tr>
                      <tr>
                        <td className="td-w-150">期間終了年月日</td>
                        <td className="bg-white"> 令05/12/31</td>
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
                  <Table responsive="sm" className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle label-table"
                          rowSpan={7}
                        >
                          給付制限
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-150"> 内容 </td>
                        <td className="bg-light-yellow">保険負担割合</td>
                        <td className="bg-light-yellow">開始年月日</td>
                        <td className="bg-light-yellow">終了年月日</td>
                      </tr>
                      <tr>
                        <td className="bg-white">給付額の減額 </td>
                        <td className="bg-white"> 70 ％</td>
                        <td className="bg-white"> 令03/01/01</td>
                        <td className="bg-white"> 令05/01/01</td>
                      </tr>
                      <tr>
                        <td className="bg-white h-3"></td>
                        <td className="bg-white"></td>
                        <td className="bg-white"></td>
                        <td className="bg-white"></td>
                      </tr>
                      <tr>
                        <td className="bg-white h-3"></td>
                        <td className="bg-white"></td>
                        <td className="bg-white"></td>
                        <td className="bg-white"></td>
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
                  <Table responsive="sm" className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle label-table"
                          rowSpan={7}
                        >
                          サービス計画
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-150"> 計画区分 </td>
                        <td className="bg-white">居宅介護支援事業者作成</td>
                      </tr>
                      <tr>
                        <td className="td-w-150">事業所番号 </td>
                        <td className="bg-white">0400000001</td>
                      </tr>
                      <tr>
                        <td className="td-w-150">事業所名称</td>
                        <td className="bg-white">ＡＡＡ地域包括支援センター</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_address2"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  施設所在保険者番号
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>310001　</Form.Label>
                </Col>
              </Form.Group>
            </div>

            <Form.Group
              as={Row}
              className="mb-3 mt-3 form-group-container"
              controlId="form_button_container"
            >
              <Col sm={9} className="text-start ms-0 ps-0 my-2">
                <Button
                  variant="success"
                  onClick={handleEdit}
                  className="btn-min-w btn btn-success"
                >
                  編集
                </Button>
                <Button
                  onClick={showDeleteConfirmDialog}
                  className="btn-min-w btn-delete"
                >
                  削除
                </Button>
              </Col>
            </Form.Group>
            {/*◆　介護保険負担割合証情報  */}
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　介護保険負担割合証情報</h5>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={6} md={10} className="mt-2-div">
                  <Table responsive="sm" className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td className="td-w-100 text-center">削</td>
                        <td className="td-w-100 text-center"> 交付年月日 </td>
                        <td className="td-w-100 text-center">利用者負担割合</td>
                        <td className="td-w-100 text-center">適用開始年月日</td>
                        <td className="td-w-100 text-center">適用終了年月日</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="td-w-100 text-center"> 令03/01/01 </td>
                        <td className="td-w-100 text-center">2 割</td>
                        <td className="td-w-100 text-center">令03/01/01</td>
                        <td className="td-w-100 text-center">令05/12/31</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="td-w-100 text-center"> 令03/01/01 </td>
                        <td className="td-w-100 text-center">2 割</td>
                        <td className="td-w-100 text-center">令03/01/01</td>
                        <td className="td-w-100 text-center">令05/12/31</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>
            </div>
            <Form.Group
              as={Row}
              className="mb-3 mt-3 form-group-container"
              controlId="form_button_container"
            >
              <Col sm={9} className="text-start ms-0 ps-0 my-2">
                <Button
                  variant="light"
                  onClick={handleOnClose}
                  className="btn-min-w border-primary"
                >
                  戻る
                </Button>
              </Col>
            </Form.Group>
            {isShowConfirmDialog && (
              <DialogConfirm
                buttons={buttons}
                message={messageDialog}
                onHidePopup={handleCloseDialogConfirm}
                className="w-dialog-confirm text-danger"
              />
            )}
            {isShowDoneDialogDelete && (
              <DialogConfirm
                buttons={buttons}
                message="データを削除しました。"
                onHidePopup={handleCloseDoneDialogDelete}
                className="w-dialog-confirm text-danger"
              />
            )}
          </Form.Group>
        </Form>
      </div>
    </MasterLayout>
  );
}

export default LongTermCareInsuranceInformationDetail;
