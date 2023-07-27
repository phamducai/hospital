/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: FL0010
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
import { Button, Col, Row } from 'react-bootstrap';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';

import {


  itemsSelectFacility,
  itemsSelectInsurance,
  DEFAULT_VALUES,
} from '@/data/user-list';

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


import FL0020 from './FL0020';


import { dataOptionFile } from '@/data/file';

import CustomHeading from '@/components/user/detail/TextHeader';
import TextfieldWithIconCustomValidate from '@/components/TextfieldWithIconCustomValidate';


function FL0010() {
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
       <CustomHeading title="ファイル管理" />
      <div className="main">
        {!isShowRegisterDialog && (
          <div className="px-1 px-md-3 w-100 my-2">
            <Form className="user-list mt-1" onSubmit={clickSearch}>

              <Form.Group
                  as={Row}
                  className="d-md-flex justify-content-start row-input w-auto"
                  controlId="form_person_in_charge"
                >
                    <div>
                      <Row>

                        <div className="d-md-flex">
                        <Form.Label
                        className=""
                        >
                          ファイル属性検索
                        </Form.Label>
                        <Form.Select
                          name="placeOfDeath"
                          className="w-auto ms-lg-3"
                        >
                          {dataOptionFile.map((item, index) => (
                            <option key={index} value={index}>{item.value}</option>
                          ))}
                        </Form.Select>
                        <div className="d-flex align-items-center mt-2 mt-lg-0">
                          <Form.Label className="ms-lg-4">管理年月日</Form.Label>
                          <Form.Select
                            name="placeOfDeath"
                            className="ms-2 w-auto"
                          >
                            {years.map((year) => (
                              <option key={year} value={year}>{year}</option>
                            ))}
                          </Form.Select>
                          <Form.Label className="ms-4 mt-2">年</Form.Label>
                          <Form.Select
                            name="placeOfDeath"
                            className="ms-2 w-auto"
                            value={currentMonth}
                          >
                            {monthSelect.map((month) => (
                              <option key={month.value} value={month.value}>{month.label}</option>
                            ))}
                          </Form.Select>
                          <Form.Label className="ms-2 mt-2">月</Form.Label>
                        </div>
                        </div>
                      </Row>
                    </div>

                </Form.Group>

              <Form.Group
                className="d-md-flex justify-content-start row-input"
                controlId="exampleForm.ControlInput1"
              >
                <div className="mt-2">
                    <TextfieldWithIconCustomValidate
                      id="inputID"
                      label="利用者ＩＤ検索"
                      regex={/^(\d{0,10}(\.\d{0,3})?)?$/}
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </TextfieldWithIconCustomValidate>
                </div>
                <div className="d-flex mt-2 ms-md-0 ms-lg-2 justify-content-start">
                <Form.Label className="mt-2 mx-lg-2 ms-lg-2 me-2">
                        利用施設検索
                      </Form.Label>
                  <Form.Select
                    name="placeOfDeath"
                    className="w-auto"
                  >
                    {itemsSelectFacility.map((item, index) => (
                      <option key={index} value={index}>{item.value}</option>
                    ))}
                  </Form.Select>
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
                className="d-md-flex mt-3 row-input"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label sm={4} className="ms-lg-2 mx-lg-5 mt-2 mt-3-div">
                  保険種別検索
                </Form.Label>
                <Col sm={12} md={8}>
                  <Row>
                    <div className="mt-2 d-md-flex justify-content-start align-items-center mt-md-0 px-1">
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
                  <label className="px-lg-2 fs-6">その他検索</label>
                </div>
                <div className="d-flex align-items-center pl-mb-10 d-block-mb">
                  <div className='me-2'>
                    <CheckBoxCustom
                      id="checkId"
                      label="利用者（訪問終了）を除く"
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
                  <SubmitButton width={150} value="検索"></SubmitButton>
                </Form.Group>
                <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                  <Button onClick={() => {
                    navigate('/file/file-create')
                  }} className="w-100">

                    ファイル新規登録
                  </Button>
                </div>
              </div>
            </Form>

            {isShowTableFirstTime && (
              <FL0020 />
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

export default FL0010;
