/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: US00010
 * PG NAME: 利用者検索 (User search)
 */
import TextfieldWithIcon from '@components/TextfieldWithIcon';
import SubmitButton from '@components/SubmitButton';
import MasterLayout from '@/layout/MasterLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import TableScale from '@components/TableScale';
import TableCustom from '@/components/TableCustom';
import { Person, RenderName, toPersonScale } from '@/interfaces/Person';
import Form from 'react-bootstrap/Form';
import { FormEvent, useEffect, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { ActionIconButton } from '@/data/common';
import {
  DEFAULT_USER_INFORMATION,
  exampleColumnScale,
  exampleColumns,
  itemsSelectFacility,
  itemsSelectInsurance,
  DEFAULT_VALUES,
} from '@/data/user-list';
import CheckBoxCustom from '@/components/CheckboxCustom';
import { useDispatch } from 'react-redux';
import {
  userSelector,
  setSelectRow,
  searchUser,
  hideDialog,
} from '@/store/user/userSlice';
import { useAppSelector } from '@/store/hooks';
import { useNavigate } from 'react-router';
import DialogStaffSearch from '@/components/popup-common/StaffSearch';
import TextfieldWithIconCustomValidate from '@/components/TextfieldWithIconCustomValidate';

function US00010() {
  const [isShowRegisterDialog, setShowRegisterDialog] = useState(false);
  const [, setValidated] = useState(false);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isShowDialogSearchStaff, setIsShowDialogSearchStaff] = useState(false);
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [tableSelectedItem] = useState<Person | null>(null);
  const [tableData, setTableData] = useState<Array<Person>>([]);
  const [, setTargetRow] = useState<Person>(DEFAULT_USER_INFORMATION);
  const [, setTargetRowDefault] = useState<Person>(DEFAULT_USER_INFORMATION);
  const [, setTargetIndex] = useState<number>(-1); // Not in array index by default for register processing
  const [, setRegisterForm] = useState(false);
  const [, setShowOnly] = useState(false);

  const dispatch = useDispatch();
  const { items, isShowTableFirstTime } = useAppSelector(userSelector);
  const [valRenderName, setValRenderName] =
    useState<RenderName>(DEFAULT_VALUES);
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
    navigate('/user-detail/create');
    setRegisterForm(true);
    setShowRegisterDialog(true);
  };

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
    dispatch(hideDialog());
  };

  const clickShowSearchStaff = () => {
    setIsShowDialogSearchStaff(true);
  };
  const clickCloseSearchStaff = () => {
    setIsShowDialogSearchStaff(false);
  };

  // Delete
  const showDeleteConfirmDialog = (itemIdx: number) => {
    setMessageDialog('本当に削除していいんですか？');
    const deleteItem = () => {
      tableData.splice(itemIdx, 1);
      setTableData(tableData);
    };

    setButtons(() => [
      {
        text: 'はい',
        okButton: true,
        onClickButton: () => {
          deleteItem();
          handleCloseDialogConfirm();
        },
        className: 'button-dialog',
      },
      {
        text: 'いいえ',
        okButton: false,
        onClickButton: () => {
          handleCloseDialogConfirm();
        },
        className: 'button-dialog',
      },
    ]);

    setShowConfirmDialog(true);
  };

  const itemsDataScale: Person[] = toPersonScale(items);
  const handleActionClickIcon = (
    index: number,
    currentPage: number,
    rowsPerPage: number,
    btnId: string,
  ) => {
    const realIndex =
      currentPage > 0 ? currentPage * rowsPerPage + index : index;

    switch (btnId) {
      case ActionIconButton.BTN_SHOW:
        setTargetRow(tableData[realIndex]);
        setTargetRowDefault(tableData[realIndex]);
        setShowRegisterDialog(true);
        setShowOnly(true);
        break;
      case ActionIconButton.BTN_EDIT:
        setTargetRow(tableData[realIndex]);
        setTargetRowDefault(tableData[realIndex]);
        setRegisterForm(false);
        setShowRegisterDialog(true);
        break;
      case ActionIconButton.BTN_DEL:
        showDeleteConfirmDialog(realIndex);
        break;
      default:
        break;
    }
    setTargetIndex(realIndex);
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

  const handleOnClickRow = (person: Person | null) => {
    dispatch(setSelectRow(person));
    navigate('/user/summary');
  };

  return (
    <MasterLayout userInfo={tableSelectedItem}>
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
                  <TextfieldWithIconCustomValidate
                    id="inputID"
                    label="利用者ID検索"
                    regex={/^(\d{0,10}(\.\d{0,3})?)?$/}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </TextfieldWithIconCustomValidate>
                </div>
                <div className="w-100">
                  <div className="d-md-flex justify-content-start align-items-center mt-1 mt-md-1 w-50">
                    <div className="d-flex justify-content-md-center align-items-center">
                      <Form.Label className="mt-2 mx-2 ms-2">
                        利用施設検索
                      </Form.Label>
                    </div>
                    <Form.Select name="placeOfDeath" className="w-auto">
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
                className="d-md-flex mt-3 row-input fs-14"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label sm={4} className="ms-2 mx-5 mt-2 mt-3-div">
                  保険種別検索
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="mt-2 d-md-flex justify-content-start align-items-center mt-md-0 w-50">
                      <Form.Select name="placeOfDeath" className="w-auto">
                        {itemsSelectInsurance.map((deathPlace, index) => (
                          <option key={index}>{deathPlace.value}</option>
                        ))}
                      </Form.Select>

                      <div className="d-flex margin-checkbox ">
                        <CheckBoxCustom id="checkId" label="精神" value="" />
                        <CheckBoxCustom
                          id="checkId"
                          label="定期巡回"
                          value=""
                        />
                      </div>
                    </div>
                  </Row>
                </Col>
                <div></div>
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
                  <CheckBoxCustom
                    id="checkId"
                    label="サテライト利用"
                    value=""
                  />
                </div>
              </Form.Group>
              <Form.Group
                className="mt-2 row-input"
                controlId="exampleForm.ControlInput1"
              >
                <TextfieldWithIcon
                  id="inputUser"
                  label="担当職員検索"
                  onIconClick={clickShowSearchStaff}
                  maxlength={10}
                  inputClassName="input-text-kana"
                  widthInput="110px"
                >
                  職
                </TextfieldWithIcon>
                <DialogStaffSearch
                  isShow={isShowDialogSearchStaff}
                  onCloseClick={clickCloseSearchStaff}
                  onSuccessClick={clickCloseSearchStaff}
                />
              </Form.Group>
              <div className="d-sm-flex justify-content-between align-items-center mt-3">
                <Form.Group className="d-flex justify-content-between">
                  <SubmitButton width={150} value="検索する"></SubmitButton>
                </Form.Group>
                <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                  <Button onClick={showRegisterForm} className="w-100">
                    {' '}
                    <FontAwesomeIcon icon={faUserPlus} />{' '}
                    &nbsp;利用者情報新規登録
                  </Button>
                </div>
              </div>
            </Form>

            {isShowTableFirstTime && (
              <Row className="">
                <div className="d-none d-sm-none d-md-block w-100 h-50">
                  <TableCustom<Person>
                    data={items}
                    columns={exampleColumns}
                    actionClick={handleActionClickIcon}
                    handleClickRow={handleOnClickRow}
                  ></TableCustom>
                </div>
                <div className="d-block d-sm-block d-md-none w-100 h-50">
                  <TableScale<Person>
                    data={itemsDataScale}
                    columns={exampleColumnScale}
                    actionClick={handleActionClickIcon}
                    handleClickRow={handleOnClickRow}
                  ></TableScale>
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

export default US00010;
