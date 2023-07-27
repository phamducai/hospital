/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: NursingSummaryListRegister (Nursing summary list)
 * PG NAME: 看護サマリー情報 (Nursing summary info)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Col, Form, Row, Table, Button } from 'react-bootstrap';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { tabButtonNursingSummaryInfo } from '@/data/common';
import DatePickerCommon from '@/components/user/schedule/DatePickerCommon';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import DialogConfirm, { ButtonProps } from '@/components/DialogConfirm';

function NursingSummaryListRegister() {
  const navigate = useNavigate();
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);

  const handleOnClose = () => {
    navigate('/nurse/nursing-summary-list');
  };

  const handleCloseDialogConfirm = () => {
    setShowConfirmDialog(false);
  };

  const handlePreviousCopy = () => {
    setMessageDialog('前回複写処理を実行します。よろしいですか？（現在編集中の情報は消去されます。）');

    setButtons(() => [
      {
        text: 'OK',
        okButton: true,
        onClickButton: () => {
          navigate('/nurse/nursing-summary-list')
        },
        className: 'button-dialog',
      },
      {
        text: 'Cancel',
        okButton: false,
        onClickButton: () => {
          handleCloseDialogConfirm();
        },
        className: 'button-dialog',
      },
    ]);

    setShowConfirmDialog(true);
  };


  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={1} arrayButton={tabButtonNursingSummaryInfo} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-2">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
                <Form.Group className="d-flex justify-content-between">
                {/* <h5>◆訪問看護基本情報</h5> */}
                </Form.Group>
                <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                  <Button className="w-100"
                    onClick={handlePreviousCopy}
                  >
                    前回複写
                  </Button>
                </div>
            </div>
          </Form>

          <Form className="w-100 h-100 d-flex flex-column" id="nursing-info">
            <Form.Group className="input-detail user-detail d-flex flex-column">
              <div>
                <Form.Group
                  as={Row}
                  className="mb-2 form-group-container mt-3"
                  controlId="form_person_in_charge"
                >
                  <Form.Label
                    column
                    sm={4}
                    className="bg-light-yellow label-dialog"
                  >
                    記録年月日<span className="color-text-custom">【必】</span>
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <div className="mt-2">
                            <DatePickerCommon/>
                          </div>
                      </div>
                    </Row>
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
                    記録者<span className="color-text-custom">【必】</span>
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <Form.Control
                          type="text"
                          name="person_in_charge"
                          className="w-50"
                          required
                          defaultValue=" "
                        />
                        <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                          <Button className="ms-2">職</Button>
                        </div>
                      </div>
                    </Row>
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
                    職種
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <Form.Control
                          type="text"
                          name="person_in_charge"
                          className="w-50"
                          required
                          defaultValue=" "
                        />
                        <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                          <Form.Label className="mt-2">＜全角＞</Form.Label>
                        </div>
                      </div>
                    </Row>
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
                    提出先
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                        <Form.Control
                          type="text"
                          name="person_in_charge"
                          className="w-50"
                          required
                          defaultValue=" "
                        />
                        <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                          <Button className="ms-2">医</Button>
                          <Form.Label className="mt-2">＜全角＞</Form.Label>
                        </div>
                      </div>
                    </Row>
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
                    入院日
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                        <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                          <Form.Group className="calender-schedule d-flex justify-content-between mt-2">
                            <DatePickerCommon/>
                            <Button className="btn-calender ms-90">
                              <b>C</b>
                            </Button>
                          </Form.Group>
                        </div>

                    </Row>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-4"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>感染症情報</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>有無</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="無" className="ms-4"/>
                              <Form.Check name="nurse" label="不明" className="ms-4" />
                              <Form.Check name="assistant_nurse" label="ＨＢｓ" className="ms-4"/>
                              <Form.Check name="therapist" label="ＨＢｅ" className="ms-4"/>
                              <Form.Check name="therapist" label="ＨＣＶ " className="ms-4"/>
                              <Form.Check name="therapist" label="ＴＰＨＡ " className="ms-4"/>
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="ＭＲＳＡ" className="ms-4"/>
                              <Form.Check name="nurse" label="その他" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>(その他)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>アレルギー</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>有無</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="無" className="ms-4"/>
                              <Form.Check name="nurse" label="有" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>(有の場合)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>疾患・病状に対する <br /> 説明と理解</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>本人</td>
                          <td className='bg-white'>
                            <Col sm={12} md={8}>
                              <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                                <Button className='me-2'>
                                  全体表示
                                </Button>
                                <span>＜全角＞</span>
                              </div>
                            <Form.Control
                              as="textarea"
                              name="health_and_welfare"
                              style={{ height: '100px' }}
                              defaultValue=' '
                            />
                            </Col>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>家族</td>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>服薬中の薬</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>有無</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="無" className="ms-4"/>
                              <Form.Check name="nurse" label="有" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>
                            家族
                            <Button>薬剤複写</Button>
                          </td>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            入院・入所までの経過
                            <div><Button>現病歴複写</Button></div>
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            看護上の問題点
                            <div><Button>問題点複写</Button></div>
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            継続して行ってほしいケア
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  controlId="form_button_container"
                >
                  <Col sm={10} className="mt-2-div mt-2">
                    <Button className="min-w-btn-150">
                      登録
                    </Button>
                  </Col>
                </Form.Group>
              </div>

              {/* {isShowDoneDialogDelete && (
                <DialogConfirm
                  buttons={buttons}
                  message="データを削除しました。"
                  onHidePopup={handleDoneDialogDelete}
                  className="w-dialog-confirm text-danger"
                />
              )} */}

              <div className='form-group-container my-4 pb-0 m-4'>＜日常生活動作（ＡＤＬ）等の状況＞</div>

              <div>
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
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　食事　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>食事</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>形態</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="普通食" className="ms-4"/>
                              <Form.Check name="nurse" label="流動食" className="ms-4" />
                              <Form.Check name="assistant_nurse" label="嚥下食" className="ms-4"/>
                              <Form.Check name="therapist" label="治療食" className="ms-4"/>
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="経管栄養" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>(治療食)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={6}>食事摂取方法</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>経口</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="自立" className="ms-4"/>
                              <Form.Check name="nurse" label="部分介助" className="ms-4" />
                              <Form.Check name="assistant_nurse" label="全介助" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>経管栄養</td>
                          <td className='bg-white'>
                          <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="経管栄養" className="ms-4"/>
                              <Form.Check name="nurse" label="胃瘻" className="ms-4" />
                              <Form.Check name="assistant_nurse" label="腸瘻" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>品名</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>サイズ</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>最終交換日</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Group className="calender-schedule d-flex justify-content-between mt-2">
                                  <DatePickerCommon/>
                                  <Button className="btn-calender ms-90">
                                    <b>C</b>
                                  </Button>
                                </Form.Group>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                           連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　排泄　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={5}>排泄方法</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>方法</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="トイレ" className="ms-4"/>
                              <Form.Check name="nurse" label="ポータブルトイレ" className="ms-4" />
                              <Form.Check name="assistant_nurse" label="おむつ" className="ms-4"/>
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="尿器" className="ms-4"/>
                              <Form.Check name="health_nurse" label="便器" className="ms-4"/>
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="導尿（自己）" className="ms-4"/>
                              <Form.Check name="health_nurse" label="導尿（他者）" className="ms-4"/>
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="膀胱留置カテーテル" className="ms-4"/>
                              <Form.Check name="health_nurse" label="腎瘻" className="ms-4"/>
                              <Form.Check name="health_nurse" label="膀胱瘻" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>品名</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>サイズ</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>最終交換日</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Group className="calender-schedule d-flex justify-content-between mt-2">
                                  <DatePickerCommon/>
                                  <Button className="btn-calender ms-90">
                                    <b>C</b>
                                  </Button>
                                </Form.Group>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={6}>排便コントロール</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>内容</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="下剤" className="ms-4"/>
                              <Form.Check name="nurse" label="浣腸" className="ms-4" />
                              <Form.Check name="assistant_nurse" label="摘便" className="ms-4"/>
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="その他" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>(その他)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>最終排便日</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Group className="calender-schedule d-flex justify-content-between mt-2">
                                  <DatePickerCommon/>
                                  <Button className="btn-calender ms-90">
                                    <b>C</b>
                                  </Button>
                                </Form.Group>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　清潔　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>清潔方法</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>方法</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="入浴" className="ms-4"/>
                              <Form.Check name="nurse" label="シャワー浴" className="ms-4" />
                              <Form.Check name="assistant_nurse" label="摘便" className="ms-4"/>
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="その他" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>(その他)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　活動　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>麻痺</td>
                        </tr>
                        <tr >
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="無" className="ms-4"/>
                              <Form.Check name="nurse" label="有" className="ms-4" />
                              <label className="ms-4">(</label>
                              <Form.Check name="assistant_nurse" label="右側" className="ms-2"/>
                              <Form.Check name="assistant_nurse" label="左側 " className="ms-4"/>
                              <label className="ms-2">)</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>視覚障害</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>有無</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="無" className="ms-4"/>
                              <Form.Check name="nurse" label="有" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>(有の場合)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>聴覚障害</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>有無</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="無" className="ms-4"/>
                              <Form.Check name="nurse" label="有" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>(有の場合)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>移動手段</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>方法</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="ストレッチャー" className="ms-4"/>
                              <Form.Check name="nurse" label="車いす" className="ms-4" />
                              <Form.Check name="nurse" label="歩行器" className="ms-4" />
                              <Form.Check name="nurse" label="杖" className="ms-4" />
                              <Form.Check name="nurse" label="独歩" className="ms-4" />
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="その他" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>(その他)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　意識・精神状態　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>意識・精神状態</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>状態</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="清明" className="ms-4"/>
                              <Form.Check name="nurse" label="不穏" className="ms-4" />
                              <Form.Check name="assistant_nurse" label="不認知症穏" className="ms-4"/>
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="その他" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>(その他)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                           連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　コミュニケーション　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>コミュニケーション</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>状態</td>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="問題なし" className="ms-4"/>
                              <Form.Check name="nurse" label="話すことができない" className="ms-4" />
                              <Form.Check name="assistant_nurse" label="会話を理解できない" className="ms-4"/>
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="その他" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>(その他)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  controlId="form_button_container"
                >
                  <Col sm={10} className="mt-2-div mt-2">
                    <Button className="min-w-btn-150">
                      登録
                    </Button>
                  </Col>
                </Form.Group>
              </div>
              {/*  */}
              <div>
                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div mt-4"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　医療処置　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>有無</td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="無" className="ms-4"/>
                              <Form.Check name="nurse" label="有" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>種類</td>
                        </tr>
                        <tr >
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="酸素療法 " className="ms-4"/>
                              <label className="ms-4">(</label>
                              <Form.Check name="nurse" label="液体酸素" className="ms-4" />
                              <Form.Check name="assistant_nurse" label="圧縮酸素" className="ms-4"/>
                              <label className="ms-2">)</label>
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="ネブライザー" className="ms-4"/>
                              <Form.Check name="nurse" label="吸引" className="ms-4" />
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="気管切開" className="ms-4"/>
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="人工呼吸器" className="ms-4"/>
                              <Form.Check name="nurse" label="マスク式人工呼吸器" className="ms-4" />
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="その他" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                          （酸素流量）
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                              <Form.Control
                                type="text"
                                name="person_in_charge"
                                className="w-50"
                                required
                                defaultValue=" "
                              />
                              <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                ℓ／分 ＜全角＞
                              </div>
                            </div>
                          </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={6}>(気管切開) <br /> (カニューレ)</td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>品名</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>サイズ</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>カフエア量</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                 ｍｌ ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>最終交換日</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Group className="calender-schedule d-flex justify-content-between mt-2">
                                  <DatePickerCommon/>
                                  <Button className="btn-calender ms-90">
                                    <b>C</b>
                                  </Button>
                                </Form.Group>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                          (人工呼吸器)<br />(機種名)
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                          （その他）
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　ストーマケア　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>有無</td>
                        </tr>
                        <tr >
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="無" className="ms-4"/>
                              <Form.Check name="nurse" label="有" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>種類</td>
                        </tr>
                        <tr >
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="コロストミー " className="ms-4"/>
                              <Form.Check name="nurse" label="イレオストミー" className="ms-4" />
                              <Form.Check name="nurse" label="ウロストミー" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>(交換頻度)</td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　皮膚・創部管理　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>有無</td>
                        </tr>
                        <tr >
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="無" className="ms-4"/>
                              <Form.Check name="nurse" label="有" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>種類</td>
                        </tr>
                        <tr >
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="褥瘡" className="ms-4"/>
                              <Form.Check name="nurse" label="創傷" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>(部位・サイズ)</td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>(処置薬剤)</td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>(処置方法)</td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　疼痛管理　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>有無</td>
                        </tr>
                        <tr >
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="無" className="ms-4"/>
                              <Form.Check name="nurse" label="有" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>方法</td>
                        </tr>
                        <tr >
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="内服" className="ms-4"/>
                              <Form.Check name="nurse" label="パッチ" className="ms-4" />
                              <Form.Check name="nurse" label="持続皮下注" className="ms-4" />
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="その他" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>(その他)</td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>薬品</td>
                        </tr>
                        <tr >
                          <td className='td-w-100 td-w-sm-10 align-middle'>(薬品名)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                        <tr>
                          <td className='td-w-100 td-w-sm-10 align-middle'>(使用量)</td>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　注射　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>有無</td>
                        </tr>
                        <tr >
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="無" className="ms-4"/>
                              <Form.Check name="nurse" label="有" className="ms-4" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>種類</td>
                        </tr>
                        <tr >
                          <td className='bg-white'>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="ＩＶＨ" className="ms-4"/>
                              <Form.Check name="nurse" label="ポート" className="ms-4" />
                              <Form.Check name="nurse" label="末梢" className="ms-4" />
                              <Form.Check name="nurse" label="インスリン" className="ms-4" />
                            </div>
                            <div className="d-flex justify-content-start align-items-center ms-md-3  mt-2 mt-md-2 align-middle">
                              <Form.Check name="health_nurse" label="その他" className="ms-4"/>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>(その他)</td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>(薬剤名)</td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                            <Col sm={12}>
                              <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                                <Form.Control
                                  type="text"
                                  name="person_in_charge"
                                  className="w-50"
                                  required
                                  defaultValue=" "
                                />
                                <div className="fz-12 text-end ps-xs-0 ps-sm-2">
                                  ＜全角＞
                                </div>
                              </div>
                            </Col>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                             【　その他　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            内容
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  className="form-group-container"
                  controlId="form_user_id"
                >
                  <Col sm={12} md={11} lg={10} className="mt-2-div">
                    <Table responsive className='table-bordered mb-2'>
                      <tbody className="bg-light-yellow label-dialog">
                        <tr >
                          <td className="bg-light-yellow label-dialog align-middle label-table " rowSpan={4}>
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                          <Col sm={12} md={8}>
                            <div className="mb-1 w-50 w-sm-100 mt-2 mt-md-0 d-block">
                              <Button className='me-2'>
                                全体表示
                              </Button>
                              <span>＜全角＞</span>
                            </div>
                          <Form.Control
                            as="textarea"
                            name="health_and_welfare"
                            style={{ height: '100px' }}
                            defaultValue=''
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
                  controlId="form_button_container"
                >
                  <Col sm={10} className="mt-2-div mt-2">
                    <Button className="min-w-btn-150">
                      登録
                    </Button>
                  </Col>
                </Form.Group>
              </div>

            </Form.Group>
          </Form>

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
        </div>
      </div>
    </MasterLayout>
  );
}

export default NursingSummaryListRegister;
