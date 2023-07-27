import MasterLayout from '@/layout/MasterLayout';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Login from '@/components/login/Login';
import { accordionData } from '@/data/home';
import image_1 from '@assets/img/image_1.png';
import { useState } from 'react';
function HomePage() {
  const [countIndexData] = useState<Array<string>>(() =>
    accordionData.map((_item, index) => index.toString()),
  );
  return (
    <MasterLayout>
      <Row className="main at-home-accordion-row at-home-login pt-3 d-flex">
        <Col lg={3} md={12} className="align-items-center mb-3">
          <Login />
          <div className='text-center'><img src={image_1} alt="" /></div>
        </Col>

        <Col lg={9} md={12}>
          <div className='scrollbar-container'>
            <Accordion
              defaultActiveKey={countIndexData}
              alwaysOpen
              className="at-home-accordion accordion-collapse mb-3"
            >
              {accordionData?.map((todo, index) => (
                <Accordion.Item eventKey={todo.id} key={index}>
                  <Accordion.Header>
                    <div className="text-primary">{todo.title}</div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            {todo?.data?.map((item, index) => (
                              <div
                                dangerouslySetInnerHTML={{ __html: item }}
                                key={index}
                              ></div>
                            ))}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Col>
      </Row>
    </MasterLayout>
  );
}

export default HomePage;
