/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: IG0010
 * PG NAME: 検索画面 (Search screen)
 */
import TextfieldWithIcon from '@components/TextfieldWithIcon';
import SubmitButton from '@components/SubmitButton';
import MasterLayout from '@/layout/MasterLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,

} from '@fortawesome/free-solid-svg-icons';

import { Person, RenderName } from '@/interfaces/Person';
import Form from 'react-bootstrap/Form';
import { FormEvent, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';

import {
  itemsSelectFacility,
  itemsSelectInsurance,
  DEFAULT_VALUES,
} from '@/data/user-list';
import TextFieldWithDropdown from '@/components/TextfieldWithDropdown';
import CheckBoxCustom from '@/components/CheckboxCustom';
import { useDispatch } from 'react-redux';
import {
  userSelector,
  searchUser,
  hideDialog,
} from '@/store/user/userSlice';
import { useAppSelector } from '@/store/hooks';
import { useNavigate } from 'react-router';
import DialogStaffSearch from '@/components/popup-common/StaffSearch';
import { monthSelect } from '@/data/schedule';

import TextSelect from '@/components/file/TextSelect';


import TabFileDetail from '@/components/file/TabFile';
import { dataOptionImage } from '@/data/file';
import IG0020 from './IG0020';

function IG0010() {
  const [isShowRegisterDialog] = useState(false);
  const [, setValidated] = useState(false);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isShowDialogSearchStaff, setIsShowDialogSearchStaff] = useState(false);
  const [messageDialog] = useState('');
  const [buttons] = useState(Array<ButtonProps>);
  const [tableSelectedItem] = useState<Person | null>(null);



  const dispatch = useDispatch();
  const { isShowTableFirstTime } = useAppSelector(userSelector);
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

  const clickSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      searchUser({
        userId: event.currentTarget.inputID.value,
      }),
    );
  };

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const years: number[] = Array.from({ length: 20 }, (_, index) => currentYear + index - 10);

  return (
    <MasterLayout userInfo={tableSelectedItem}>
      <div>  <TabFileDetail active={2} /></div>
      <div className="main">

        {!isShowRegisterDialog && (
          <div className="px-1 px-md-3 w-100 my-2">

            <Form className="user-list mt-1" onSubmit={clickSearch}>
              <h5>ファイル管理	</h5>


              <Form.Group
                className="d-md-flex justify-content-start row-input"
                controlId="exampleForm.ControlInput1"
              >
                <div className="mt-2">
                  <TextSelect id="inputName" label="画像属性検索" data={dataOptionImage}>

                  </TextSelect>
                </div>
                <div className="mt-2 ms-md-0 ms-lg-2 mt-md-0">
                  <div className="d-flex align-items-center my-2">
                    <div className='mx-2'>管理年月検索
                    </div>
                    <select defaultValue={currentYear} className="me-2">
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <div className="text-calendar">年</div>
                    <select
                      defaultValue={currentMonth + 1}
                      className="mx-2"
                    >
                      {monthSelect.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </select>
                    <div className="text-calendar">月</div>
                  </div>
                </div>
              </Form.Group>
              <Form.Group
                className="d-md-flex justify-content-start row-input"
                controlId="exampleForm.ControlInput1"
              >
                <div className="mt-2">
                  <TextfieldWithIcon id="inputID" label="利用者ＩＤ検索	">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </TextfieldWithIcon>
                </div>
                <div className="mt-2 ms-md-0 ms-lg-2">
                  <TextFieldWithDropdown
                    id="drop_id"
                    label="利用施設検索"
                    data={itemsSelectFacility}
                    labelFieldName="value"
                    valueFieldName="id"
                    spaceLable={100}
                  />
                </div>
              </Form.Group>
              <Form.Group
                className="mt-2 row-input"
                controlId="exampleForm.ControlInput1"
              >
                <TextfieldWithIcon
                  id="inputUser"
                  label="利用者カナ検索 "
                  maxlength={10}
                  inputClassName="input-text-kana"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </TextfieldWithIcon>

              </Form.Group>
              <Form.Group
                className="d-md-flex mt-2 row-input fs-14"
                controlId="exampleForm.ControlTextarea1"
              >
                <div className='fs-6'>
                  <TextFieldWithDropdown
                    id="drop_id"
                    label="利用者カナ検索"
                    data={itemsSelectInsurance}
                    labelFieldName="value"
                    valueFieldName="id"
                    spaceLable={145}
                  />
                </div>
                <div className="d-flex  margin-checkbox">
                  <CheckBoxCustom id="checkId" label="精神" value="" />
                  <CheckBoxCustom id="checkId" label="定期巡回" value="" />
                </div>
              </Form.Group>
              <Form.Group
                className="d-md-flex mt-2 row-input fs-14"
                controlId="exampleForm.ControlTextarea1"
              >
                <div className="d-flex align-items-center h-100 label-group">
                  <label className="px-2 fs-6">その他検索</label>
                </div>
                <div className="d-flex align-items-center pl-mb-10 d-block-mb">
                  <div className='me-2'>
                    <CheckBoxCustom
                      id="checkId"
                      label="有効終了年月日前後  "
                      value=""
                    /></div>
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
                  <SubmitButton width={150} value="検索"></SubmitButton>
                </Form.Group>
                <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                  <Button onClick={() => {
                    navigate('/file/file-image-create')
                  }} className="w-100">

                    画像新規登録
                  </Button>
                </div>
              </div>
            </Form>

            {isShowTableFirstTime && (
              <IG0020 />
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

export default IG0010;
