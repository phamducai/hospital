/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: ImageInfo (Nursing summary information)
 * PG NAME: 画像情報 (image information)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Col, Form, Row, Table, Button } from 'react-bootstrap';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { tabButtonNursingSummaryInfo } from '@/data/common';
import imgCare from '@assets/img/care001.png'
import { useNavigate } from 'react-router';

function ImageInfo() {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/nurse/image-info-manage');
  };
  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={3} arrayButton={tabButtonNursingSummaryInfo} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="w-100 h-100 d-flex flex-column" id="nursing-info">
            <Form.Group className="input-detail user-detail d-flex flex-column mt-2">
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
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            画像名
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                            <img src={imgCare} alt="care001.JPG" />
                            <div className="w-full"><span className="p-2"><a href={imgCare}>care001.JPG</a></span></div>
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
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            コメント
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                            患部（踵）にダメージあり
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
                    onClick={() => handleEdit()}
                  >
                    編集
                  </Button>
                  <Button
                    className="btn-min-w btn-danger border-0"
                  >
                    画像削除
                  </Button>
                </Col>
                </Form.Group>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </MasterLayout>
  );
}

export default ImageInfo;
