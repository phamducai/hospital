/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: US00030
 * PG NAME: 利用者情報照会 (User information inquiry)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Person } from '@/interfaces/Person';
import { DEFAULT_USER_INFORMATION } from '@/data/user-list';
import { useState, useEffect } from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAppSelector } from '@/store/hooks';
import { useDispatch } from 'react-redux';
import { userSelector, removeUser } from '@/store/user/userSlice';
import { setSelectRow } from '@/store/user/userSlice';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import RenderTextForTextField from '@/components/RenderTextForTextField';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
import CustomHeading from '@/components/user/detail/TextHeader';

function US00030() {
  const [, setTargetRow] = useState<Person | undefined | any>(
    DEFAULT_USER_INFORMATION,
  );

  const [isReadOnly, setIsReadOnly] = useState(true);
  const navigate = useNavigate();

  const { selectedRow } = useAppSelector(userSelector);

  const dispatch = useDispatch();
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [valAddress, setValAddress] = useState('');

  const [isShowDoneDialogDelete, setIsShowDoneDialogDelete] = useState(false);

  useEffect(() => {
    const strAddress =
      (selectedRow?.address1 ?? '') +
      (selectedRow?.address2 ?? '') +
      (selectedRow?.address3 ?? '');
    setValAddress(strAddress);
  }, [selectedRow]);

  const handleClose = () => {
    // localStorage.clear();
    dispatch(setSelectRow(null));
    navigate('/user-search');
  };

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
  };

  const handleCloseDoneDialogDelete = () => {
    setIsShowDoneDialogDelete(false);
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
    navigate('/user-detail/update');
    setIsReadOnly(false);
    setTargetRow(selectedRow);
  };
  const handleOnChangeValue = (e: React.ChangeEvent<any>) => {
    setTargetRow((pre: any) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabUserDetail active={1} />
      <div className="main">
        <Form className="w-100 h-100 d-flex flex-column detail-show">
          <Form.Group className="input-detail user-detail d-flex flex-column">
            <div>
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
                  利用者ID
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="半角数字"
                    value={selectedRow?.userId}
                    name="userId"
                    readOnly={isReadOnly}
                  />
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
                  利用者力ナ氏名
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="全角"
                    value={selectedRow?.name}
                    name="name"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  利用者漢字氏名
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    value={selectedRow?.kanaName}
                    name="kanaName"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  生年月日
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    value={selectedRow?.dateOfBirth}
                    name="birthday_wareki"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  死亡年月日
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    value={selectedRow?.dateOfDeath}
                    name="deathday_wareki"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  死亡時刻
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    maxLength={2}
                    value={selectedRow?.deathTime}
                    name="deathtime_hour"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_place_of_death"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  死亡場所
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    maxLength={2}
                    value={selectedRow?.placeOfDeath}
                    name="placeOfDeath"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_gender"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  性別
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    maxLength={2}
                    value={selectedRow?.gender}
                    name="gender"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                </Col>
              </Form.Group>
            </div>
            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_user_id"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog "
              >
                郵便番号
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.zip_code}
                  name="zip_code"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_address1"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                住所１
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.address1}
                  name="address1"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
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
                住所２
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  placeholder="全角"
                  value={selectedRow?.address2}
                  name="address2"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_address3"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                住所３
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  // required
                  placeholder="半角数字"
                  value={selectedRow?.address3}
                  name="address3"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_phone_number"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                電話番号
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.phone_number}
                  name="phone_number"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_fax_number"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                ＦＡＸ番号
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.fax_number}
                  name="fax_number"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_cellphone_number"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                携帯番号
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.cellphone_number}
                  name="cellphone_number"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_mail_address"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                メールアドレス
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.mail_address}
                  name="mail_address"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_career"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog "
              >
                職業
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.career}
                  name="career"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_inst"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                利用施設
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.inst}
                  name="inst"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_person_in_charge"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                担当職員
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.person_in_charge}
                  name="person_in_charge"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
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
                保険種別
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.insu}
                  name="insu"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-1 form-group-container mt-3-div"
              controlId="form_delivery_fee"
            >
              <Col sm={6} md={10} className="mt-2-div">
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
                      <td className="w-td-rowspan border-td-rowspan"> 名称</td>
                      <td className="bg-white no-border-input">
                        <Col sm={8} className="mt-2-div w-md-td">
                          <Form.Control
                            type="text"
                            value="交通費"
                            name="insu"
                            readOnly={isReadOnly}
                            onChange={(e) => handleOnChangeValue(e)}
                            className='w-md-td'
                          />
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-td-rowspan border-td-rowspan">単価</td>
                      <td className="bg-white no-border-input">
                        <Col sm={8} className="mt-2-div w-md-td">
                          <Form.Control
                            type="text"
                            value="1,000円"
                            name="insu"
                            readOnly={isReadOnly}
                            onChange={(e) => handleOnChangeValue(e)}
                            className='w-md-td'
                          />
                        </Col>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_onway_time"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                訪問に要する片道時間（分）
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.onway_time}
                  name="onway_time"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_visit_site"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                訪問場所
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.visit_site}
                  name="visit_site"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_collect_money"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                集金方法
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.collect_money}
                  name="collect_money"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_contact_zip"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog "
              >
                連絡先郵便番号
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.contact_zip1}
                  name="contact_zip1"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_contact_address"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先住所１
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.contact_address_1}
                  name="contact_address_1"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_contact_address_2"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先住所２
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.contact_address_2}
                  name="contact_address_2"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_contact_address_3"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先住所３
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.contact_address_3}
                  name="contact_address_3"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_contact_phone"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先電話番号
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.contact_phone}
                  name="contact_phone"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_contact_fax"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                連絡先ＦＡＸ番号
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.contact_fax}
                  name="contact_fax"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_satellite"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                サテライト利用
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  type="text"
                  value={selectedRow?.satellite}
                  name="satellite"
                  readOnly={isReadOnly}
                  onChange={(e) => handleOnChangeValue(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-2 form-group-container mt-3-div"
              controlId="form_remarks"
            >
              <Form.Label
                column
                sm={4}
                className="bg-light-yellow label-dialog"
              >
                備考
              </Form.Label>
              <Col sm={8} className="mt-2-div">
                <Form.Control
                  as="textarea"
                  name="remarks"
                  value={selectedRow?.remarks}
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
                <RenderTextForTextField data={valAddress} />
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
                <Form.Control
                  type="text"
                  name="nursingPlan"
                  value={selectedRow?.obfuscation}
                  style={{ height: '100px' }}
                />
              </Col>
            </Form.Group>
          </Form.Group>

          <Form.Group
            as={Row}
            className="my-2 form-group-container mt-3-div"
            controlId="form_button_container"
          >
            <Col sm={10} className="text-left ps-0 ms-0">
              <Button
                variant="success"
                onClick={handleEdit}
                className="btn-min-w-30"
              >
                編集
              </Button>
              <Button
                variant="danger"
                onClick={showDeleteConfirmDialog}
                className="btn-min-w-30"
              >
                削除
              </Button>
              <Button
                variant="light"
                onClick={handleClose}
                className="btn-min-w-30 border-primary"
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
      </div>
    </MasterLayout>
  );
}

export default US00030;
