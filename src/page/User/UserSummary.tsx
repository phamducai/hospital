import MasterLayout from '@/layout/MasterLayout';
import '@/assets/scss/toppage/TopPage.scss';
import { useNavigate } from 'react-router';
import { menuItemsOnClickRow } from '@/data/common';
import { useAppSelector } from '@/store/hooks';
import { userSelector } from '@/store/user/userSlice';
import { Button, Col, Form, Row } from 'react-bootstrap';


function UserSummary() {
  const navigate = useNavigate();
  const clickButtonMenu = (action: string) => {
    navigate(action);
  };

  const { selectedRow } = useAppSelector(userSelector);

  const handleClose = () => {
    navigate('/user-search');
  };

  return (
    <MasterLayout>
      <div className="main" id="top-page">
        <div className="container">
          <Form.Group
            as={Row}
            className="mb-2 mt-3 form-group-container mt-3-div"
            controlId="form_user_id"
          >
            <Col sm={9} className="text-start">
              <h5>◆ 利用者サマリ</h5>
            </Col>
          </Form.Group>
          <div className="row w-100 mt-0 g-0 g-lg-2 align-items-center">
            <div className="col-12 col-md-6">
              <div className="row mt-2 mx-0 px-0 ps-lg-5">
                <div className="col-12">
                  <Form.Group
                    as={Row}
                    className="mb-2 form-group-container w-100 mt-3-div"
                    controlId="form_user_id"
                  >
                    <Form.Label
                      column
                      sm={2}
                      className="bg-light-yellow  label-dialog"
                    >
                      利用者ID
                    </Form.Label>
                    <Col sm={4} className="mt-2-div">
                      <Form.Label column>{selectedRow?.userId}</Form.Label>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-2 form-group-container w-100 mt-3-div"
                    controlId="form_user_id"
                  >
                    <Form.Label
                      column
                      sm={2}
                      className="bg-light-yellow label-dialog"
                    >
                      利用者力ナ氏名
                    </Form.Label>
                    <Col sm={4} className="mt-2-div">
                      <Form.Label column>{selectedRow?.name}</Form.Label>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-2 form-group-container w-100 mt-3-div"
                    controlId="form_user_id"
                  >
                    <Form.Label
                      column
                      sm={2}
                      className="bg-light-yellow label-dialog"
                    >
                      利用者漢字氏名
                    </Form.Label>
                    <Col sm={4} className="mt-2-div">
                      <Form.Label column>{selectedRow?.kanaName}</Form.Label>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-2 form-group-container w-100 mt-3-div"
                    controlId="form_user_id"
                  >
                    <Form.Label
                      column
                      sm={2}
                      className="bg-light-yellow label-dialog"
                    >
                      生年月日
                    </Form.Label>
                    <Col sm={4} className="mt-2-div">
                      <Form.Label column>{selectedRow?.dateOfBirth}</Form.Label>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-2 form-group-container w-100 mt-3-div"
                    controlId="form_user_id"
                  >
                    <Form.Label
                      column
                      sm={2}
                      className="bg-light-yellow label-dialog"
                    >
                      年齢
                    </Form.Label>
                    <Col sm={4} className="mt-2-div">
                      <Form.Label column>{selectedRow?.age}</Form.Label>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-2 form-group-container w-100 mt-3-div"
                    controlId="form_user_id"
                  >
                    <Form.Label
                      column
                      sm={2}
                      className="bg-light-yellow label-dialog"
                    >
                      性別
                    </Form.Label>
                    <Col sm={4} className="mt-2-div">
                      <Form.Label column>{selectedRow?.gender}</Form.Label>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-2 form-group-container w-100 mt-3-div"
                    controlId="form_user_id"
                  >
                    <Form.Label
                      column
                      sm={2}
                      className="bg-light-yellow label-dialog"
                    >
                      利用施設
                    </Form.Label>
                    <Col sm={4} className="mt-2-div">
                      <Form.Label column>{selectedRow?.facilities}</Form.Label>
                    </Col>
                  </Form.Group>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-lg-0">
              <div className="row mt-4 mt-lg-0 mx-0 px-0">
                <div className="col-12">
                  <div className="row col-12 col-lg-11 mt-2 g-0 g-md-2">
                    {menuItemsOnClickRow.map((item, index) => (
                      <div
                        className="col-12 col-md-6 col-lg-6 mt-2"
                        key={index}
                      >
                        <Button
                          variant="info"
                          type="button"
                          onClick={() => clickButtonMenu(item.url)}
                          className="w-100 h-100 text-white btn-menu fw-bold"
                        >
                          {item.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row sm={12}>
        <Form.Group
          as={Row}
          className="my-2 form-group-container mt-3-div"
          controlId="form_button_container"
        >
          <Col sm={10} className="text-left ps-0 ms-0">
            <Button
              variant="light"
              onClick={handleClose}
              className="btn-min-w-30 border-primary"
            >
              戻る
            </Button>
          </Col>
        </Form.Group>
      </Row>
    </MasterLayout>
  );
}

export default UserSummary;
