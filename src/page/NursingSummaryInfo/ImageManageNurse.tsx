/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: ImageManagement (Nursing summary information)
 * PG NAME: 画像管理(image management)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Col, Form, Row, Table, Button } from 'react-bootstrap';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { tabButtonNursingSummaryInfo } from '@/data/common';
import DatePickerCommon from '@/components/user/schedule/DatePickerCommon';
import { useNavigate } from 'react-router';
import { useState } from 'react';

function ImageManageNurse() {
  const navigate = useNavigate();
  const handleOnClose = () => {
    navigate('/nurse/image-info');
  };

  const [preview, setPreview] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setPreview(event.target.files[0]);
    setIsPreviewImg(true)
  };
  const [isPreviewImg,setIsPreviewImg]=useState<boolean>(false);

  function handleRotateClick() {
    const image = document.getElementById('image') as HTMLImageElement;
    image.style.transform = `rotate(${(parseInt(image.style.transform.replace('rotate(', '').replace('deg)', '')) || 0) + 90}deg)`;
  }

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={3} arrayButton={tabButtonNursingSummaryInfo} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-2">
            <div className="d-sm-flex justify-content-between align-items-center my-2">
                <Form.Group className="d-flex justify-content-between">
                  ◆　アップロード
                </Form.Group>
            </div>
          </Form>

          <Form className="w-100 h-100 d-flex flex-column" id="nursing-info">
            <Form.Group className="input-detail user-detail d-flex flex-column">
              <div>
                <Form.Group
                  as={Row}
                  className="mb-2 form-group-container mt-3-div mt-3"
                  controlId="form_person_in_charge"
                >
                  <Form.Label
                    column
                    sm={4}
                    className="bg-light-yellow label-dialog"
                  >
                    画像属性 <span className="color-text-custom">【必】</span>
                  </Form.Label>
                  <Col sm={12} md={8}>
                    <Row>
                      <div className="d-md-flex justify-content-start align-items-center mt-2 mt-md-0">
                            <Form.Select
                              name="placeOfDeath"
                              className="bg-white h-150 input-dropdown-search ms-md-0"
                            >
                              <option value="-1"></option>
                              <option value="1">顔写真</option>
                              <option value="2">褥瘡 </option>
                              <option value="3">患部</option>
                              <option value="4">レントゲン</option>
                              <option value="5">エコー</option>
                              <option value="6">保険証</option>
                              <option value="10">申し送り情報</option>
                              <option value="9">その他</option>
                            </Form.Select>
                      </div>
                    </Row>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-2 form-group-container mt-3-div mt-2"
                  controlId="form_person_in_charge"
                >
                  <Form.Label
                    column
                    sm={4}
                    className="bg-light-yellow label-dialog"
                  >
                    画像属性 <span className="color-text-custom">【必】</span>
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
                          defaultValue="20001"
                        />
                        <div className="d-flex justify-content-md-center align-items-center ms-md-2 mt-2 mt-md-0">
                          <Button className="ms-2">職</Button>
                          <Form.Label className="mt-2 ms-2">大西　良樹</Form.Label>
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
                          <div className="d-sm-inline-flex justify-content-between">
                            <Form.Group className="calender-schedule d-inline-flex justify-content-between mt-2">
                              <DatePickerCommon/>
                              <div className="btn-calender ms-90"></div>
                            </Form.Group>
                            <Form.Group className="calender-schedule d-inline-flex justify-content-between mt-2">
                              <label className="date-calendar d-inline-flex mx-4"> ~ </label>
                              <DatePickerCommon/>
                              <Button className="btn-calender ms-90">
                                <b>C</b>
                              </Button>
                            </Form.Group>
                          </div>

                        </div>
                    </Row>
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
                            画像名  <span className="color-text-custom">【必】</span>
                          </td>
                        </tr>
                        <tr>
                          <td className='bg-white'>
                            {isPreviewImg&&<div>
                            <img
                              style={{width: "300px", height: "250px", padding: '5px 5px 5px 5px', margin: '50px 50px 20px 50px',objectFit: "cover", borderRadius: "4px",  transformOrigin: 'center center'}}
                              src={preview === null ? "display" : URL.createObjectURL(preview)}
                              id='image'
                              alt=""
                              />
                              <Button onClick={handleRotateClick}>右に90度回転</Button>
                              </div>
                              }
                              <Col sm={12} md={8}>
                              <Form.Control
                                type="file"
                                required
                                name="image"
                                accept="image/*"
                                className='mt-1 w-auto'
                                id="file"
                                onChange={handleChange}/>
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
                            コメント
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
                  <Col sm={9} className="text-start ms-0 ps-0 my-2">
                  <Button
                    variant="success"
                    className="btn-min-w"
                  >
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
        </div>
      </div>
    </MasterLayout>
  );
}

export default ImageManageNurse;
