/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: InsurancePublicExpenseInformationDetail
 * PG NAME: 保険公費案内詳細 (Insurance Public Expense Information Detail)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Col, Table } from 'react-bootstrap';
import '@assets/scss/user/detail/insurance/insurance.scss';
import { useNavigate } from 'react-router';
import CustomHeading from '@/components/user/detail/TextHeader';
import { InputGroup } from 'react-bootstrap';

function InterStaffDetail() {
  const navigate = useNavigate();
  // const [dataSelected] = useState(JSON.parse(localStorage.getItem("dataSelected") ?? ''));

  const handleOnClose = () => {
    navigate('/user/inter-staff');
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <div className="main">
        <Form className="w-100 h-100 d-flex flex-column" id="insurance-info">
          <Form.Group className="input-detail user-detail d-flex flex-column">
            <div>
              <Form.Group
                as={Row}
                className="mb-2 mt-3 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Col sm={9} className="text-start">
                  <h5>連絡機能</h5>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="form-group-container mt-4"
                controlId="form_user_id"
              >
                <Col sm={12} md={11} lg={10} className="mt-2-div">
                  <Table responsive className="table-bordered mb-2">
                    <tbody className="label-dialog">
                      <tr className="bg-blue">
                        <td rowSpan={3} className="text-center w-12">
                          2021/12/24 <br />
                          15:42
                        </td>
                      </tr>
                      <tr className="bg-blue">
                        <InputGroup>
                          <td>From：大西　良樹</td>
                          <Button className="bg-white1">返信</Button>
                        </InputGroup>
                        <td rowSpan={2} className='mid-none'>
                          <Button className="bg-white">全6人</Button>
                        </td>
                      </tr>
                      <tr className="bg-blue">
                        <InputGroup>
                          <td>To：森泉　澄代</td>
                          <Button className="bg-white2">全6人</Button>
                        </InputGroup>
                      </tr>
                      <tr className="bg-FE">
                        <td colSpan={4}>件名：全体連絡</td>
                      </tr>
                      <tr className="bg-FE" style={{ height: '4rem' }}>
                        <td colSpan={4}></td>
                      </tr>
                      <tr className="bg-FE">
                        <td colSpan={4}>
                          {' '}
                          <Button className="ms-2 bg-white">未読に戻す</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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
              </Col>
            </Form.Group>
          </Form.Group>
        </Form>
      </div>
    </MasterLayout>
  );
}

export default InterStaffDetail;
