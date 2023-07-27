/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: TR0010
 * PG NAME: 検索画面 (Search screen)
 */
import TextfieldWithIcon from '@components/TextfieldWithIcon';
import SubmitButton from '@components/SubmitButton';
import MasterLayout from '@/layout/MasterLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import { Person, RenderName } from '@/interfaces/Person';
import Form from 'react-bootstrap/Form';
import { FormEvent, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { itemsSelectFacility, DEFAULT_VALUES } from '@/data/user-list';
import CheckBoxCustom from '@/components/CheckboxCustom';
import { useDispatch } from 'react-redux';
import { userSelector, searchUser, hideDialog } from '@/store/user/userSlice';
import { useAppSelector } from '@/store/hooks';
import { useNavigate } from 'react-router';
import TableTransfer from '@/components/TableTransfer';
import { TransferInfo } from '@/interfaces/TransferInfo';
import { columnsTableTransferInfo, dataTransferInfo } from '@/data/transfer-info';
import CustomHeading from '@/components/user/detail/TextHeader';

function TR0010() {

  const [isShowRegisterDialog, setShowRegisterDialog] = useState(false);
  const [, setValidated] = useState(false);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [messageDialog,] = useState('');
  const [buttons,] = useState(Array<ButtonProps>);
  const [tableSelectedItem] = useState<Person | null>(null);
  const [, setRegisterForm] = useState(false);
  const dispatch = useDispatch();
  const { isShowTableFirstTime } = useAppSelector(userSelector);
  const [valRenderName, setValRenderName] = useState<RenderName>(DEFAULT_VALUES);
  const [valName, setValName] = useState('');
  const [valKanaName, setValKanaName] = useState('');
  const [valAddress1, setValAddress1] = useState('');
  const [valAddress2, setValAddress2] = useState('');
  const [valAddress3, setValAddress3] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setValidated(false);
    setValRenderName(DEFAULT_VALUES);
    setValName('');
    setValKanaName('');
    setValAddress1('');
    setValAddress2('');
    setValAddress3('');
  }, []);

  useEffect(() => {
    setValRenderName({
      ...valRenderName,
      address: valAddress1 + valAddress2 + valAddress3,
    });
  }, [valAddress1, valAddress2, valAddress3]);

  useEffect(() => {
    setValRenderName({
      ...valRenderName,
      name: valName,
    });
  }, [valName]);

  useEffect(() => {
    setValRenderName({
      ...valRenderName,
      kanaName: valKanaName,
    });
  }, [valKanaName]);

  const showRegisterForm = () => {
    navigate('/user/search-screen/register');
    setRegisterForm(true);
    setShowRegisterDialog(true);
  };

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
    dispatch(hideDialog());
  };

  const clickSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      searchUser({
        userId: event.currentTarget.inputID.value,
        kanaName: event.currentTarget.inputName.value,
      }),
    );
  };

  const handleOnClickRow = (item: TransferInfo) => {
    console.log(item);
  };

  return (
    <MasterLayout userInfo={tableSelectedItem}>
      <CustomHeading title="申し送り情報" />
      <div className="main">
        {!isShowRegisterDialog && (
          <div className="px-1 px-md-3 w-100 my-2">
            <Form className="user-list mt-1" onSubmit={clickSearch}>
              <h5>利用者検索</h5>
              <Form.Group
                className="d-md-flex justify-content-start row-input"
                controlId="exampleForm.ControlInput1"
              >
                <div className="mt-2">
                  <TextfieldWithIcon id="inputID" label="利用者ID検索">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </TextfieldWithIcon>
                </div>

                <div className="w-100">
                  <div className="d-md-flex justify-content-start align-items-center mt-1 mt-md-0 w-50">
                    <div className="d-flex justify-content-md-center align-items-center">
                      <Form.Label className="ms-2 mt-2 mx-2">利用施設検索</Form.Label>
                    </div>
                    <Form.Select
                      name="placeOfDeath"
                      className="w-25 mt-2"
                    >
                      {itemsSelectFacility.map((deathPlace, index) => (
                        <option key={index}>{deathPlace.value}</option>
                      ))}
                    </Form.Select>
                  </div>
                </div>

              </Form.Group>
              <Form.Group
                className="mt-2 row-input"
                controlId="exampleForm.ControlTextarea1"
              >
                <TextfieldWithIcon
                  id="inputName"
                  label="利用者名カナ検索"
                  inputClassName="input-text-kana"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </TextfieldWithIcon>
              </Form.Group>

              <Form.Group
                className="d-md-flex mt-2 row-input fs-14"
                controlId="exampleForm.ControlTextarea1"
              >
                <div className="d-flex align-items-center h-100 label-group">
                  <label className="px-2">その他検索</label>
                </div>
                <div className="d-flex align-items-center pl-mb-10 d-block-mb">
                  <CheckBoxCustom
                    id="checkId"
                    label="利用者（死亡）を除く"
                    value=""
                  />
                  <CheckBoxCustom
                    id="checkId"
                    label="利用者（訪問終了）を除く"
                    value=""
                  />
                </div>
              </Form.Group>

              <div className="d-block d-md-flex justify-content-left align-items-center mt-3">
                <div
                  className="d-flex align-items-center h-100"
                  style={{ minInlineSize: '116px' }}
                >
                  <Form.Label
                    className="px-2 mt-1  fs-14 "
                    style={{ marginBottom: '0px' }}
                  >
                    種類検索
                  </Form.Label>
                </div>
                 <Form.Select
                    name="placeOfDeath"
                    className="bg-white h-150 input-dropdown-search ms-md-4 w-full"
                  >
                      <option value="-1"></option>
                      <option value="0"></option>
                      <option value="1"></option>
                      <option value="2"></option>
                      <option value="3"></option>
                      <option value="4"></option>
                      <option value="5"></option>
                  </Form.Select>
              </div>

              <div className="d-block d-md-flex justify-content-left align-items-center mt-2">
                <Form.Label
                  className="px-2 mt-1 fs-14"
                  style={{ marginBottom: '0px' }}
                >
                  キーワード検索
                </Form.Label>
                <Form.Control
                  className=" mt-1 h-50 w-50 input-desktop ms-md-4 id-form"
                  type="text"
                  id="confirmPassword"
                  style={{ border: '1px solid #e2e2e2', padding: '5px', width: '100%' }}
                />
                <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                  <Form.Label className="mt-2 ms-2">＜全角＞</Form.Label>
                </div>
              </div>

              <div className="d-sm-flex justify-content-between align-items-center mt-3">
                <Form.Group className="d-flex justify-content-between">
                  <SubmitButton width={150} value="検索"></SubmitButton>
                </Form.Group>
                <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                  <Button onClick={showRegisterForm} className="w-100">
                    新規登録
                  </Button>
                </div>
              </div>
            </Form>

            {isShowTableFirstTime && (
              <Row className="">
                <div className="w-100 h-50">
                  <TableTransfer<TransferInfo>
                    data={dataTransferInfo}
                    columns={columnsTableTransferInfo}
                    redirectUrl="/user/search-screen/"
                    handleClickRow={() => handleOnClickRow}
                  ></TableTransfer>
                </div>
              </Row>
            )}
          </div>
        )}

        {isShowConfirmDialog && (
          <DialogConfirm
            title="メモ帳"
            buttons={buttons}
            message={messageDialog}
            onHidePopup={handleCloseDialogConfirm}
            className="w-dialog-confirm"
          />
        )}
      </div>
    </MasterLayout>
  );
}
export default TR0010;
