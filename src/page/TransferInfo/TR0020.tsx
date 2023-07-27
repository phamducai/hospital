/**
 * PG ID: TR0020
 * PG NAME: 照会画面 (Inquiry screen)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Form, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useState } from 'react';
import CustomHeading from '@/components/user/detail/TextHeader';

function TR0020() {
  const navigate = useNavigate();
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isShowDoneDialogDelete, setIsShowDoneDialogDelete] = useState(false);

  const handleOnClose = () => {
    navigate('/user/search-screen');
  };

  const handleOnEdit = () => {
    navigate('/user/search-screen/update');
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
          // navigate('/user/detail/admission-discharge-info');
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
      <CustomHeading title="申し送り情報" />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="w-100 h-100 d-flex flex-column" id="nursing-info">
            <Form.Group className="input-detail user-detail d-flex flex-column mt-2">
              <div>
                <Form className="w-100 h-100 d-flex flex-column ">
                  <Form.Group className=" user-detail d-flex flex-column pt-3">
                    <Form.Group
                      as={Row}
                      className="mb-2 form-group-container"
                      controlId="form_user_id"
                    >
                      <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
                        種類
                      </Form.Label>
                      <Col sm={12} md={8}>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Label column sm={4}>
                            退院前カンファレンス
                          </Form.Label>
                        </div>
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-2 form-group-container"
                      controlId="form_date_of_birth"
                    >
                      <Form.Label column sm={4} className="bg-light-yellow label-dialog">
                        年月日
                      </Form.Label>
                      <Col sm={12} md={8}>
                        <Row>
                          <Col sm={12}>
                            <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                              <Form.Label column sm={4}>
                                2023/07/19
                              </Form.Label>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-2 form-group-container"
                      controlId="form_user_id"
                    >
                      <Form.Label column sm={4} className="bg-light-yellow label-dialog ">
                        記録者
                      </Form.Label>
                      <Col sm={12} md={8}>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Label column sm={4}>
                           森泉  澄代
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
                        表題
                      </Form.Label>
                      <Col sm={12} md={8}>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Label column sm={4}>

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
                        本文
                      </Form.Label>
                      <Col sm={12} md={8}>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Label column sm={4}>
                            AAAAAAAA <br />
                            BBBBBBBBBBBBB <br />
                            CCCCCCCCCCCCCCCCCCC
                          </Form.Label>
                        </div>
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
                          onClick={handleOnEdit}
                          className="btn-min-w-30"
                        >
                          編集
                        </Button>
                        <Button
                          variant="danger"
                          className="btn-min-w-30"
                          onClick={showDeleteConfirmDialog}
                        >
                          削除
                        </Button>
                        <Button
                          variant="warning"
                          onClick={handleOnClose}
                          className="btn-min-w-30 border-primary"
                        >
                          一覧に戻る
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
            </Form.Group>
          </Form>
        </div>
      </div>
    </MasterLayout>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default TR0020;
