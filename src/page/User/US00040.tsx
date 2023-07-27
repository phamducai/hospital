/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: US00040
 * PG NAME: 利用者情報更新 (User information update)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Person } from '@/interfaces/Person';
import {
  COLLECT_MONEY,
  DEATH_PLACES,
  DEFAULT_USER_INFORMATION,
  FACILITIES,
  GENDERS,
  INSU,
  JOBS,
  VISIT_SITE,
  WAREKI,
} from '@/data/user-list';
import { useState, useRef, useEffect } from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAppSelector } from '@/store/hooks';

import { userSelector } from '@/store/user/userSlice';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import RenderTextForTextField from '@/components/RenderTextForTextField';
import React from 'react';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
import CustomHeading from '@/components/user/detail/TextHeader';

function US00040() {
  const [, setTargetRow] = useState<Person | undefined | any>(
    DEFAULT_USER_INFORMATION,
  );
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const refUserDialog = useRef<HTMLFormElement | null>(null);
  const { selectedRow } = useAppSelector(userSelector);

  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);

  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [, setValAddress] = useState('');

  useEffect(() => {
    const strAddress =
      (selectedRow?.address1 ?? '') +
      (selectedRow?.address2 ?? '') +
      (selectedRow?.address3 ?? '');
    setValAddress(strAddress);
  }, [selectedRow]);

  const handleCloseEdit = () => {
    navigate('/user-search');
  };

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
  };

  const showUpdateConfirmDialog = () => {
    setMessageDialog('データを更新しました。');

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

  const handleOnChangeValue = (e: React.ChangeEvent<any>) => {
    setTargetRow((pre: any) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
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
      <TabUserDetail active={1} />
      <div className="main">
        {/* Page update */}
        <Form
          ref={refUserDialog}
          noValidate
          validated={validated}
          className="w-100 h-100 d-flex flex-column user-edit"
        >
          <Form.Group
            as={Row}
            className="my-2 form-group-container"
            controlId="form_button_container"
          ></Form.Group>
          <Form.Group className="user-detail d-flex flex-column">
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
                {/* 利用者ID<span className="color-text-custom">【必】</span> */}
                利用者ID
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    placeholder="半角数字"
                    value={selectedRow?.userId}
                    name="userId"
                    readOnly={true}
                    className="no-border-input control-width-input-id"
                  />
                </div>
                <Form.Control.Feedback type="invalid">
                  利用者IDを入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_username"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                利用者力ナ氏名
                <span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    required
                    placeholder="全角"
                    // value={selectedRow?.name}
                    defaultValue={selectedRow?.name}
                    name="name"
                    // readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Control.Feedback type="invalid">
                  利用者力ナ氏名を入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_username_kanji"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                利用者漢字氏名
                <span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    required
                    placeholder="全角"
                    // value={selectedRow?.kanaName}
                    defaultValue={selectedRow?.kanaName}
                    name="kanaName"
                    // readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Control.Feedback type="invalid">
                  利用者漢字氏名を入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_date_of_birth_1"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                生年月日<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <Col sm={12}>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Select
                          defaultValue={WAREKI[3]}
                          name="dateOfBirth"
                          required
                          onChange={(e) => handleOnChangeValue(e)}
                        >
                          {WAREKI.map((wareki, index) => (
                            <option key={index}>{wareki}</option>
                          ))}
                        </Form.Select>
                        {/* <Form.Control.Feedback type="invalid">
                          生年月日を入力してください。
                        </Form.Control.Feedback> */}
                        <Form.Control
                          type="text"
                          // required
                          defaultValue={selectedRow?.dateOfBirth.substr(1, 2)}
                          // value={selectedRow?.dateOfBirth}
                          name="birthday_year"
                          // readOnly={isReadOnly}
                          // onChange={(e) => handleOnChangeValue(e)}
                          className="max-w-50 ms-2 min-w-input-validate"
                          maxLength={2}
                        />
                        <div className="px-2">年</div>
                        <Form.Control
                          type="text"
                          // required
                          defaultValue={selectedRow?.dateOfBirth.substr(4, 2)}
                          // value={selectedRow?.dateOfBirth?.substr(4, 2)}
                          name="birthday_month"
                          // readOnly={isReadOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                          className="max-w-50 min-w-input-validate"
                          maxLength={2}
                        />
                        <div className="px-2">月</div>
                        <Form.Control
                          type="text"
                          // required
                          defaultValue={selectedRow?.dateOfBirth.substr(7, 2)}
                          // value={selectedRow?.dateOfBirth?.substr(7, 2)}
                          name="birthday_date"
                          // readOnly={isReadOnly}
                          onChange={(e) => handleOnChangeValue(e)}
                          className="max-w-50 min-w-input-validate"
                          maxLength={2}
                        />
                        <div className="px-2">日</div>
                      </div>
                      <div className="px-2 fz-12">＜半角数字＞</div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_date_of_death"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                死亡年月日
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <Col sm={12}>
                    <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                      <div className="d-flex justify-content-start align-items-center">
                        <Form.Select
                          defaultValue={selectedRow?.dateOfDeath}
                          name="dateOfDeath"
                          onChange={(e) => handleOnChangeValue(e)}
                        >
                          {WAREKI.map((wareki, index) => (
                            <option key={index}>{wareki}</option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          生年月日を入力してください。
                        </Form.Control.Feedback>
                        <Form.Control
                          type="text"
                          defaultValue={selectedRow?.dateOfDeath.substr(1, 2)}
                          name="deathday_year"
                          onChange={(e) => handleOnChangeValue(e)}
                          className="max-w-50 ms-2 min-w-input-validate"
                          maxLength={2}
                        />
                        <div className="px-2">年</div>
                        <Form.Control
                          type="text"
                          defaultValue={selectedRow?.dateOfDeath.substr(4, 2)}
                          name="deathday_month"
                          onChange={(e) => handleOnChangeValue(e)}
                          className="max-w-50 min-w-input-validate"
                          maxLength={2}
                        />
                        <div className="px-2">月</div>
                        <Form.Control
                          type="text"
                          defaultValue={selectedRow?.dateOfDeath.substr(7, 2)}
                          name="deathday_date"
                          onChange={(e) => handleOnChangeValue(e)}
                          className="max-w-50 min-w-input-validate"
                          maxLength={2}
                        />
                        <div className="px-2">日</div>
                      </div>
                      <div className="fz-12 text-end ps-xs-0 ps-sm-1">
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
              controlId="form_time_of_death"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                死亡時刻
              </Form.Label>
              <Col sm={8}>
                <div className="d-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    maxLength={2}
                    value={selectedRow?.deathTime}
                    name="deathtime_hour"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="max-w-50 me-2 min-w-input-validate"
                  />
                  <span className="pt-symbol">：</span>
                  <Form.Control
                    type="text"
                    maxLength={2}
                    value={selectedRow?.deathTime}
                    name="deathtime_minute"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="max-w-50 ms-2 min-w-input-validate"
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_place_of_death"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                死亡場所
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Select
                  defaultValue={selectedRow?.placeOfDeath}
                  name="placeOfDeath"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-md-80 w-sm-100 mt-2 mt-md-0"
                >
                  {DEATH_PLACES.map((deathPlace, index) => (
                    <option key={index}>{deathPlace}</option>
                  ))}
                </Form.Select>
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
                性別<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={8}>
                <Form.Select
                  defaultValue={selectedRow?.gender}
                  name="gender"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-md-80 w-sm-100 mt-2 mt-md-0"
                  required
                >
                  {GENDERS.map((gender, index) => (
                    <option key={index}>{gender}</option>
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
                郵便番号
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <div className="d-flex justify-content-start align-items-center">
                      <Form.Control
                        type="text"
                        defaultValue={selectedRow?.zip_code?.substr(0, 3)}
                        name="zip_code"
                        onChange={(e) => handleOnChangeValue(e)}
                        className="max-w-60 min-w-input-validate"
                        maxLength={3}
                      />
                      <div className="px-2">－</div>
                      <Form.Control
                        type="text"
                        defaultValue={selectedRow?.zip_code?.substr(4, 4)}
                        name="zip_code"
                        onChange={(e) => handleOnChangeValue(e)}
                        className="max-w-60 min-w-input-validate"
                        maxLength={4}
                      />
                      <Button className="mx-2">郵便番号検索</Button>
                    </div>
                    <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                      ＜半角数字＞
                    </div>
                  </div>
                </Row>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_address1"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog padding-top-lable"
              >
                住所１<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center">
                  <Form.Control
                    type="text"
                    placeholder="全角"
                    value={selectedRow?.address1}
                    name="address1"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="w-md-80 w-sm-100 mt-2 mt-md-0"
                    required
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  都道府県名、市区町村名（例：香川県高松市）
                </Form.Label>
                <Form.Control.Feedback type="invalid">
                  利用者力ナ氏名を入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_address2"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                住所２
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center">
                  <Form.Control
                    type="text"
                    placeholder="全角"
                    value={selectedRow?.address2}
                    name="address2"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="w-md-80 w-sm-100 mt-2 mt-md-0"
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  町名、番地（例：内町２－１５）
                </Form.Label>
                <Form.Control.Feedback type="invalid" className="fz-12">
                  利用者漢字氏名を入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_address3"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                住所３
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center">
                  <Form.Control
                    type="text"
                    placeholder="半角数字"
                    value={selectedRow?.address3}
                    name="address3"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="w-md-80 w-sm-100 mt-2 mt-md-0"
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  ビル、マンション名（例：エクセルビル２Ｆ）
                </Form.Label>
                <Form.Control.Feedback type="invalid" className="fz-12">
                  生年月日を入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_phone_number"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                電話番号
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.phone_number?.substr(0, 3)}
                      name="phone_number"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.phone_number?.substr(4, 3)}
                      name="phone_number"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.phone_number?.substr(8, 3)}
                      name="phone_number"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_fax_number"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                ＦＡＸ番号
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.fax_number?.substr(0, 3)}
                      name="fax_number_1"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.fax_number?.substr(4, 4)}
                      name="fax_number_2"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.fax_number?.substr(8, 4)}
                      name="fax_number_3"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_cellphone_number"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                携帯番号
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.cellphone_number?.substr(0, 3)}
                      name="cellphone_number_1"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.cellphone_number?.substr(4, 3)}
                      name="cellphone_number_2"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.cellphone_number?.substr(8, 3)}
                      name="cellphone_number_3"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_mail_address"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                メールアドレス
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    placeholder="半角"
                    value={selectedRow?.mail_address}
                    name="mail_address"
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜半角＞</div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_career"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog "
              >
                職業
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Select
                  defaultValue={selectedRow?.career}
                  name="career"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-80 mt-2 mt-md-0"
                >
                  {JOBS.map((job, index) => (
                    <option key={index}>{job}</option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_inst"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                利用施設<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Select
                  defaultValue={selectedRow?.inst}
                  name="inst"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-80 mt-2 mt-md-0"
                  required
                >
                  {FACILITIES.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  利用者力ナ氏名を入力してください。
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_person_in_charge"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                担当職員
              </Form.Label>
              <Col sm={12} md={8}>
                <Row>
                  <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                    <Form.Control
                      type="text"
                      value={selectedRow?.person_in_charge}
                      name="person_in_charge"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-50 w-sm-100"
                    />
                    <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                      <Button className="ms-2">職</Button>
                      <Form.Label>　大西　良樹</Form.Label>
                    </div>
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
                保険種別<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Select
                    defaultValue={selectedRow?.insu}
                    name="insu"
                    onChange={(e) => handleOnChangeValue(e)}
                    className="w-50 w-sm-100 mt-2 mt-md-0"
                    required
                  >
                    {INSU.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </Form.Select>
                  <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-0">
                    <Form.Check
                      placeholder="半角数字"
                      value={selectedRow?.insu}
                      name="medicMental"
                      label="精神"
                      onChange={(e) => handleOnChangeValue(e)}
                    />
                    <Form.Check
                      placeholder="半角数字"
                      value={selectedRow?.insu}
                      name="careRoutine"
                      label="定期巡回"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="ms-4"
                    />
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_delivery_fee"
            >
              <Col sm={12} md={10}>
                <div className="d-md-flex justify-content-start align-items-center">
                  <Table className="mb-1">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow w-td-rowspan align-middle label-table border-td-rowspan"
                          rowSpan={3}
                        >
                          交通費
                        </td>
                      </tr>
                      <tr>
                        <td className="w-td-rowspan border-td-rowspan">
                          {' '}
                          名称
                        </td>
                        <td className="bg-white no-border-input">
                          <Col sm={8} className="mt-2-div">
                            <Form.Control
                              type="text"
                              defaultValue="交通費"
                              name="insu"
                              onChange={(e) => handleOnChangeValue(e)}
                            />
                            <span className="fz-12 text-end ps-xs-0 ps-sm-1 ms-2">
                              ＜全角＞
                            </span>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td className="w-td-rowspan border-td-rowspan">単価</td>
                        <td className="bg-white no-border-input">
                          <Col sm={4} className="bg-white mt-2-div">
                            <Form.Control
                              type="text"
                              defaultValue="1,000"
                              name="insu"
                              onChange={(e) => handleOnChangeValue(e)}
                              maxLength={6}
                              className="w-td-rowspan"
                            />
                            <span className="fz-12 text-end ps-xs-0 ps-sm-1 ms-2">
                              <b className="font-size-td">円</b> ＜半角数字＞
                            </span>
                          </Col>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_onway_time"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                訪問に要する片道時間（分）
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      placeholder="半角数字"
                      value={selectedRow?.onway_time}
                      name="onway_time"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="mt-2 mt-md-0"
                    />
                    <div className="ms-2 fw-bold">分</div>
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_visit_site"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                訪問場所<span className="color-text-custom">【必】</span>
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Select
                  defaultValue={selectedRow?.visit_site}
                  name="visit_site"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-80 mt-2 mt-md-0"
                  required
                >
                  {VISIT_SITE.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_collect_money"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                集金方法
              </Form.Label>
              <Col sm={8}>
                <Form.Select
                  // value={selectedRow?.collect_money}
                  defaultValue={selectedRow?.collect_money}
                  name="collect_money"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="w-80 mt-2 mt-md-0"
                >
                  {COLLECT_MONEY.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_zip"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog "
              >
                連絡先郵便番号
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.contact_zip1}
                      name="contact_zip1"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.contact_zip2}
                      name="contact_zip2"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="w-70px mx-1 min-w-input-max-3"
                      maxLength={4}
                    />
                    <Button className="ms-2">郵便番号検索</Button>
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_address"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先住所１
              </Form.Label>
              <Col sm={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    placeholder="連絡先住所１"
                    value={selectedRow?.contact_address_1}
                    name="contact_address_1"
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  都道府県名、市区町村名（例：香川県高松市）
                </Form.Label>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_address_2"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先住所２
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    placeholder="連絡先住所２"
                    value={selectedRow?.contact_address_2}
                    name="contact_address_2"
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  町名、番地（例：内町２－１５）
                </Form.Label>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_address_3"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先住所３
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <Form.Control
                    type="text"
                    placeholder="連絡先住所３"
                    value={selectedRow?.contact_address_3}
                    name="contact_address_3"
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">＜全角＞</div>
                </div>
                <Form.Label className="fz-12 d-block d-md-inline -mt-17">
                  ビル、マンション名（例：エクセルビル２Ｆ）
                </Form.Label>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_phone"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先電話番号
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.contact_phone?.substr(0, 3)}
                      name="contact_phone_1"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.contact_phone?.substr(4, 3)}
                      name="contact_phone_2"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.contact_phone?.substr(8, 4)}
                      name="contact_phone_3"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                  </div>
                  <div className="fz-12 text-end ps-xs-0 ps-sm-1">
                    ＜半角数字＞
                  </div>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_contact_fax"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先ＦＡＸ番号
              </Form.Label>
              <Col sm={12} md={8}>
                <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                  <div className="d-flex justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.contact_fax?.substr(0, 3)}
                      name="contact_fax_1"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={3}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.contact_fax?.substr(4, 4)}
                      name="contact_fax_2"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                    <div className="px-2">－</div>
                    <Form.Control
                      type="text"
                      defaultValue={selectedRow?.contact_fax?.substr(9, 4)}
                      name="contact_fax_3"
                      onChange={(e) => handleOnChangeValue(e)}
                      className="max-w-60 min-w-input-max-3"
                      maxLength={4}
                    />
                  </div>
                  <span className="margin-top-lable padding-lable fz-12">
                    ＜半角数字＞
                  </span>
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_satellite"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                サテライト利用
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Check
                  placeholder="半角数字"
                  value={selectedRow?.satellite}
                  name="satellite"
                  label="有"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
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
                className="bg-light-yellow label-dialog"
              >
                備考
              </Form.Label>
              <Col sm={12} md={8}>
                <Button className="mx-2 mb-1 w-25 mt-2 mt-md-0">
                  全体表示
                </Button>
                <Form.Control
                  as="textarea"
                  name="remarks"
                  defaultValue={selectedRow?.remarks}
                  placeholder="全角"
                  style={{ height: '100px' }}
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
                className="bg-light-yellow label-dialog"
              >
                利用者氏名伏字
              </Form.Label>
              <Col sm={12} md={8}>
                <RenderTextForTextField data={selectedRow?.name} />
                <div className="mt-1"></div>
                <RenderTextForTextField data={selectedRow?.kanaName} />
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
                className="bg-light-yellow label-dialog"
              >
                住所伏字
              </Form.Label>
              <Col sm={12} md={8}>
                <RenderTextForTextField
                  data={
                    (selectedRow?.address1 ?? '') +
                    (selectedRow?.address2 ?? '') +
                    (selectedRow?.address3 ?? '')
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container"
              controlId="form_subject"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                伏字対象帳票
              </Form.Label>
              <Col sm={12} md={8}>
                <Form.Check
                  value={selectedRow?.satellite}
                  name="nursingPlan"
                  label="訪問看護計画書／精神科訪問看護計画書"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={selectedRow?.satellite}
                  name="nursingReport"
                  label="訪問看護報告書／精神科訪問看護報告書"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={selectedRow?.satellite}
                  name="nursingInformation"
                  label="訪問看護情報提供書１，２，３／精神科訪問看護情報提供書１"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={selectedRow?.satellite}
                  name="nursingSummary"
                  label="看護サマリー"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={selectedRow?.satellite}
                  name="performanceReport"
                  label="実績報告（医療／介護／実費）"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={selectedRow?.satellite}
                  name="nursingRecord"
                  label="訪問看護記録書Ⅱ／精神訪問看護記録書Ⅱ"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
                <Form.Check
                  value={selectedRow?.satellite}
                  name="progressRecord"
                  label="経過記録"
                  onChange={(e) => handleOnChangeValue(e)}
                  className="mt-2 mt-md-0"
                />
              </Col>
            </Form.Group>
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
                onClick={handleCloseEdit}
                className="btn-min-w bg-btn-back border-0"
              >
                一覧に戻る
              </Button>
            </Col>
          </Form.Group>
        </Form>

        {/* Dialog confirm */}
        {isShowConfirmDialog && (
          <DialogConfirm
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

export default US00040;
