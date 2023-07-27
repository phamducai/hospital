/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: HomevisitNursingInstructionInformationDetail
 * PG NAME: 訪問看護指示情報 (Home-visit nursing instruction information)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Col, Table } from 'react-bootstrap';
import '@assets/scss/user/detail/nursingInfo.scss';
import { useNavigate } from 'react-router';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';
import { useState } from 'react';
import TabButtonLink from '@/components/TabButtonLink';
import CustomHeading from '@/components/user/detail/TextHeader';
import * as Constant from '@/common/constant';
import { itemTabHomevisitNursingInfo } from '@/data/common';

function HomevisitNursingInstructionInformationDetail() {
  const navigate = useNavigate();
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isShowDoneDialogDelete, setIsShowDoneDialogDelete] = useState(false);
  const [dataSelected] = useState(JSON.parse(localStorage.getItem("dataSelected") ?? ''));
  const handleEdit = (mode: any) => {
    switch (mode) {
      case 1:
        navigate('/user/detail/nursing-basic-info/update-1');
        break;
      case 2:
        navigate('#');
        break;
      case 3:
        navigate('#');
        break;
      case 4:
        navigate('#');
        break;
      default:
        break;
    }
  };

  const handleOnClose = () => {
    navigate('/user/detail/nursing-basic-info');
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
          // navigate('/user/detail/nursing-basic-info');
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

  const columns = [
    { title: '自立', col1: '', col2: '', col3: '○', col4: '', col5: '', col6: '○', col7: '○', },
    { title: '一部介助', col1: '', col2: '○', col3: '', col4: '○', col5: '', col6: '', col7: '', },
    { title: '全面介助', col1: '', col2: '', col3: '', col4: '', col5: '○', col6: '', col7: '', },
    { title: 'その他', col1: '○', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '', },
  ];

  const columnsMode = [
    { title: '食生活', col1: '', col2: '○', col3: '' },
    { title: '清潔', col1: '', col2: '○', col3: '' },
    { title: '排泄', col1: '', col2: '○', col3: '' },
    { title: '睡眠', col1: '', col2: '○', col3: '' },
    { title: '生活のリズム', col1: '○', col2: '', col3: '' },
    { title: '部屋の整頓', col1: '○', col2: '', col3: '' },
    { title: '服薬状態', col1: '', col2: '○', col3: '' },
    { title: '金銭管理', col1: '', col2: '○', col3: '' },
    { title: '作業等の状態', col1: '', col2: '○', col3: '' },
    { title: '対人関係', col1: '○', col2: '', col3: '' },
    { title: 'その他', col1: '○', col2: '', col3: '' },
  ];

  return (
    <MasterLayout>
      <CustomHeading title="訪問看護指示情報" />
      <TabButtonLink active={1} arrayButton={itemTabHomevisitNursingInfo} />
      <div className="main">
        {/* Page home-visit nursing information detail*/}
        {/* <Form className="w-100 h-100 d-flex flex-column detail-show" id='nursing-info'> */}
        <Form className="w-100 h-100 d-flex flex-column" id="nursing-info">
          <Form.Group className="input-detail user-detail d-flex flex-column">
            {/* ◆　訪問看護基本情報１ */}
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　訪問看護指示情報</h5>
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
                  記録日
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
                  担当職員
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>大西　良樹[看護師]</Form.Label>
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
                  保険種別
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>医療</Form.Label>
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
                  訪問職種
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>保健師　看護師　准看護師　作業療法士</Form.Label>
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
                  初回訪問年月日
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>令03/04/02</Form.Label>
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
                  初回訪問時間
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>10:00　～　 11:00</Form.Label>
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
                  訪問終了年月日
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label></Form.Label>
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
                  訪問終了時間
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>12:00</Form.Label>
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
                  className="bg-light-yellow label-dialog "
                >
                  主たる傷病名
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>主たる傷病名</Form.Label>
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
                  主たる傷病名
                  <br />
                  ワープロ入力）
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>主たる傷病名 （ワープロ入力）</Form.Label>
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
                  現病歴
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>
                    平成２６年３月３１日リハビリセンターを退院する。入院中から、褥瘡や膀胱炎等がみられており、退院後の在宅生活フォローの
                    ため訪問看護導入となる。
                  </Form.Label>
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
                  既往歴
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>
                    平成２５年５月に交通事故に遭う。○○病院にて手術、約１０ヶ月間入院する。その後、リハビリのためリハビリセンターへ転院
                    する。
                  </Form.Label>
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
                  療養状況
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>
                    神経因性膀胱にて、昼間は自己動尿を行っている。
                  </Form.Label>
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
                  介護状況
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>
                    息子は仕事のため不在が多く、妻が主に介護を行っている。
                  </Form.Label>
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
                  生活歴
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>事故遭遇まで会社勤務。</Form.Label>
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
                  開始前の場所
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>〇〇リハビリテーション</Form.Label>
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
                  依頼元
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>MSW</Form.Label>
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
                  契約年月日
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>令02/04/01</Form.Label>
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
                  終結理由
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>その他（自宅転居にともなうもの）</Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_button_container"
              >
                <Col sm={10} className="mt-2-div">
                  <Button
                    variant="success"
                    onClick={() => handleEdit(1)}
                    className="min-w-btn-150"
                  >
                    編集
                  </Button>
                </Col>
              </Form.Group>
            </div>

            {/* ◆　訪問看護基本情報２ */}
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-4 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　訪問看護基本情報２</h5>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={8} md={10} className="mt-2-div">
                  <Table responsive className="table-bordered mb-2">
                    <tbody>
                      <tr className="bg-light-yellow text-center align-middle">
                        <td
                          rowSpan={4}
                          className="label-dialog text-algin-left"
                        >
                          家族構成
                        </td>
                        <td rowSpan={2}>No.</td>
                        <td>氏名</td>
                        <td>年齢</td>
                        <td>続柄</td>
                        <td>職業</td>
                        <td>連絡先</td>
                      </tr>
                      <tr className="bg-light-yellow  text-center">
                        <td colSpan={5}>特記事項</td>
                      </tr>
                      <tr className="text-center">
                        <td rowSpan={2} className="bg-yellow align-middle">
                          １
                        </td>
                        <td>観音寺　花子</td>
                        <td>65</td>
                        <td> 母</td>
                        <td>無職</td>
                        <td>070-0000-0000</td>
                      </tr>
                      <tr>
                        <td colSpan={5}>わかった</td>
                      </tr>
                    </tbody>
                  </Table>
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
                  キーパーソン
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>妻</Form.Label>
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
                  主な介護者
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>妻</Form.Label>
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
                  住環境
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>２階建て住居</Form.Label>
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
                  訪問看護の
                  <br />
                  依頼目的
                </Form.Label>
                <Col sm={6} className="mt-2-div mt-2">
                  <Form.Label>
                    ＣＶポートからの抗がん剤の持続投与中。副作用の出現と全身管理、抗がん剤治療終了時の抜針。
                  </Form.Label>
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
                  在宅療養に対する
                  <br />
                  利用者・家族の
                  <br />
                  気持ち・希望
                </Form.Label>
                <Col sm={6} className="mt-2-div mt-2">
                  <Form.Label>
                    本人）放射線で焼いて、抗がん剤して・・・後からこんなにえらくなるとは思わんかった。病院では何も言ってくれなかった。薬のことも、何もかもきちんと尋ねてもきちんと説明してくれんかった。１週間に１回くらい来てくれたら安心。
                  </Form.Label>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_button_container"
              >
                <Col sm={10} className="mt-2-div">
                  <Button
                    variant="success"
                    onClick={() => handleEdit(2)}
                    className="min-w-btn-150"
                  >
                    編集
                  </Button>
                </Col>
              </Form.Group>
            </div>

            {/* ◆　訪問看護基本情報３ */}
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-4 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　訪問看護基本情報３</h5>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={8} md={10} className="mt-2-div">
                  {(dataSelected.insurance == Constant.INSURANCE_TYPE.NURSING) || (dataSelected.insurance == Constant.INSURANCE_TYPE.MEDICAL_CARE) && (
                    <Table responsive className="table-bordered mb-2">
                      <tbody>
                        <tr className="bg-yellow label-dialog text-center">
                          <td>ＡＤＬ状況</td>
                          <td>移動</td>
                          <td>排泄</td>
                          <td>着替</td>
                          <td>食事</td>
                          <td>入浴</td>
                          <td>整容</td>
                          <td>意思疎通</td>
                        </tr>
                        {columns.map((item, index) => (
                          <tr className="text-center bg-yellow" key={index}>
                            <td>{item.title}</td>
                            <td className="bg-white td-w-10">{item.col1}</td>
                            <td className="bg-white td-w-10">{item.col2}</td>
                            <td className="bg-white td-w-10">{item.col3}</td>
                            <td className="bg-white td-w-10">{item.col4}</td>
                            <td className="bg-white td-w-10">{item.col5}</td>
                            <td className="bg-white td-w-10">{item.col6}</td>
                            <td className="bg-white td-w-10">{item.col7}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}
                  {(dataSelected.insurance == Constant.INSURANCE_TYPE.MEDICAL_MENTAL) && (
                    <Table responsive className="table-bordered mb-2">
                      <tbody>
                        <tr className="bg-yellow text-center">
                          <td className="algin-td-header" rowSpan={2}>日常生活等の状況</td>
                          <td colSpan={2}>援助の要否</td>
                          <td className="algin-td-header" rowSpan={2}>備　考</td>
                        </tr>
                        <tr className="bg-yellow text-center">
                          <td >要</td>
                          <td >否</td>
                        </tr>

                        {columnsMode.map((item, index) => (
                          <tr className="text-center bg-yellow" key={index}>
                            <td className='w-col-table'>{item.title}</td>
                            <td className="bg-white td-w-checkbox">{item.col1}</td>
                            <td className="bg-white td-w-checkbox">{item.col2}</td>
                            <td className="bg-white"></td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_button_container"
              >
                <Col sm={10} className="mt-2-div">
                  <Button
                    variant="success"
                    onClick={() => handleEdit(3)}
                    className="min-w-btn-150"
                  >
                    編集
                  </Button>
                </Col>
              </Form.Group>
            </div>

            {/* ◆　訪問看護基本情報4 */}
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-4 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>◆　訪問看護基本情報4</h5>
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
                          医療機関等
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100"> 主治医氏名</td>
                        <td className="bg-white">テスト　主治医Ｃ</td>
                      </tr>
                      <tr>
                        <td className="td-w-100">医療機関名</td>
                        <td className="bg-white">ＣＣＣ医院</td>
                      </tr>
                      <tr>
                        <td className="td-w-100">所在地</td>
                        <td className="bg-white">
                          香川県高松市ＣＣＣ２２－２２
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100">電話番号</td>
                        <td className="bg-white"> 087-000-0003</td>
                      </tr>
                      <tr>
                        <td className="td-w-100">ＦＡＸ番号</td>
                        <td className="bg-white"></td>
                      </tr>
                      <tr>
                        <td className="td-w-100">緊急連絡先</td>
                        <td className="bg-white">〇〇病院に連絡</td>
                      </tr>
                    </tbody>
                  </Table>
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
                  家族等の緊急時の連絡先
                </Form.Label>
                <Col sm={8} md={10} className="mt-2-div mt-2">
                  <Form.Label>
                    母親の携帯（０９０－００００－００００）
                  </Form.Label>
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
                          介護支援専門員等
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100"> 担当者氏名</td>
                        <td className="bg-white"></td>
                      </tr>
                      <tr>
                        <td className="td-w-100">事業所名</td>
                        <td className="bg-white"></td>
                      </tr>
                      <tr>
                        <td className="td-w-100">所在地</td>
                        <td className="bg-white"></td>
                      </tr>
                      <tr>
                        <td className="td-w-100">電話番号</td>
                        <td className="bg-white"></td>
                      </tr>
                      <tr>
                        <td className="td-w-100">ＦＡＸ番号</td>
                        <td className="bg-white"></td>
                      </tr>
                      <tr>
                        <td className="td-w-100">緊急連絡先</td>
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
                  <Table responsive className="table-bordered mb-2">
                    <tbody className="bg-light-yellow label-dialog">
                      <tr>
                        <td
                          className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                          rowSpan={4}
                        >
                          関係機関
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100 td-w-100">連絡先</td>
                        <td className="bg-white">
                          ０５０－００００－０００００
                        </td>
                      </tr>
                      <tr>
                        <td className="td-w-100 td-w-100">担当者</td>
                        <td className="bg-white">○○機関　○○</td>
                      </tr>
                      <tr>
                        <td className="td-w-100 td-w-100">備考</td>
                        <td className="bg-white"> ○○が不在時は△△</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-3-div"
                controlId="form_date_of_death"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  保健・福祉サービス
                  <br />
                  等の利用状況
                </Form.Label>
                <Col sm={8} className="mt-2-div mt-2">
                  <Form.Label>週に１回程度○○サービスを利用。</Form.Label>
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
                    onClick={() => handleEdit(4)}
                    className="min-w-btn-150"
                  >
                    編集
                  </Button>
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
                <Button
                  onClick={showDeleteConfirmDialog}
                  className="btn-min-w btn-delete"
                >
                  削除
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

export default HomevisitNursingInstructionInformationDetail;
