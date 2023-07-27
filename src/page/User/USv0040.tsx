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
import '@assets/scss/user/detail/nursingInfo.scss';
import FamilyCompositionForm from '@/components/user/detail/nursing/FamilyCompositionForm';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
import CustomHeading from '@/components/user/detail/TextHeader';
function USv0040() {

  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowDialogUpdate, setShowDialogUpdate] = useState(false);

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
    handleDialogUpdate();
  };

  const handleOnClose = () => {
    navigate('/user/detail/nursing-basic-info/0')
  }

  const handleDialogUpdate = () => {

    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          handleCloseDialogUpdate();
        },
        className: 'button-dialog',
      }
    ]);
    setShowDialogUpdate(true);
  }
  const handleCloseDialogUpdate = () => {
    setShowDialogUpdate(false);
  };


  return (
    <MasterLayout>
      <div className="main">
        {/* Page nursing detail*/}
        <Form
          className="w-100 h-100 d-flex flex-column"
          id="nursing-info"
          ref={refUserDialog}
          noValidate
          validated={validated}
        >
          <CustomHeading title="利用者基本情報" />
          <TabUserDetail active={2} />
          {/* 訪問看護基本情報2 */}
          <Form.Group className="input-detail user-detail d-flex flex-column">
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　訪問看護基本情報2</h5>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={12} md={8} className="mt-2-div">
                  <FamilyCompositionForm></FamilyCompositionForm>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-2"
                controlId="form_user_id"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog "
                >
                  キーパーソン
                </Form.Label>
                <Col sm={12} md={8}>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <Form.Control
                      type="text"
                      placeholder="開始前の場所"
                      name="place_before_start"
                      defaultValue='妻'
                      className='input-80'
                    />
                    <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                      ＜全角＞
                    </div>
                  </div>
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
                  className="bg-light-yellow label-dialog align-middle"
                >
                  主な介護者
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
                    placeholder="主な介護者"
                    style={{ height: '100px' }}
                    defaultValue='妻'
                    className='area-90'
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
                  className="bg-light-yellow label-dialog align-middle"
                >
                  住環境
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
                    name="past"
                    placeholder="住環境"
                    style={{ height: '100px' }}
                    defaultValue='２階建て住居'
                    className='area-90'
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
                  className="bg-light-yellow label-dialog align-middle"
                >
                  訪問看護の<br />
                  依頼目的
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
                    name="medical_condition"
                    placeholder="訪問看護の依頼目的"
                    style={{ height: '100px' }}
                    defaultValue='ＣＶポートからの抗がん剤の持続投与中。副作用の出現と全身管理、抗がん剤治療終了時の抜針。'
                    className='area-90'
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
                  className="bg-light-yellow label-dialog align-middle"
                >
                  在宅療養に対する<br />
                  利用者・家族の<br />
                  気持ち・希望
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
                    name="nursing_situation"
                    placeholder="在宅療養に対する-利用者・家族の-気持ち・希望"
                    style={{ height: '100px' }}
                    defaultValue='本人）放射線で焼いて、抗がん剤して・・・後からこんなにえらくなるとは思わんかった。病院では何も言ってくれなかった。薬のことも、何もかもきちんと尋ねてもきちんと説明してくれんかった。１週間に１回くらい来てくれたら安心。'
                    className='area-90'
                  />
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
                    更新
                  </Button>
                  <Button
                    variant="light"
                    onClick={handleOnClose}
                    className="btn-min-w border-primary"
                  >
                    戻る
                  </Button>
                </Col>
              </Form.Group>
              {isShowDialogUpdate && (
                <DialogConfirm
                  buttons={buttons}
                  message='データを更新しました。'
                  onHidePopup={handleCloseDialogUpdate}
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

export default USv0040;
