/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: InsurancePublicExpenseInformationRegister
 * PG NAME: 保険公費情報登録簿 (Insurance Public Expense Information Register)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import { Person, RenderName } from '@/interfaces/Person';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from 'react';
import { Button, Col, Table } from 'react-bootstrap';
import { DEFAULT_VALUES } from '@/data/user-list';

import { useNavigate } from 'react-router';
import CustomHeading from '@/components/user/detail/TextHeader';
import '@assets/scss/user/detail/insurance/insurance.scss';
import { InputGroup } from 'react-bootstrap';

function InterStaffCreateNew() {
  const [validated, setValidated] = useState(false);
  const [tableSelectedItem] = useState<Person | null>(null);
  const refUserDialog = useRef<HTMLFormElement | null>(null);

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

  // const handleHideUserInfoPopup = () => {
  //   setTargetRow(DEFAULT_USER_INFORMATION);
  //   setShowRegisterDialog(false);
  //   setRegisterForm(false);
  //   setShowOnly(false);
  // };

  // const validateFormInput = () => {
  //   return refUserDialog.current && !refUserDialog.current.checkValidity();
  // };

  // const saveUserInfo = () => {
  //   tableData[targetIndex] = targetRow;
  //   setTableData(tableData);
  // };

  // Close Button
  const handleOnClose = () => {
    navigate('/user/inter-staff');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleOnChangeValue = (e: React.ChangeEvent<any>) => {
  //   setTargetRow((pre) => {
  //     return {
  //       ...pre,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // };

  return (
    <MasterLayout userInfo={tableSelectedItem}>
      <div className="main">
        <Form
          ref={refUserDialog}
          noValidate
          validated={validated}
          className="w-100 h-100 d-flex flex-column"
        >
          <CustomHeading title="利用者基本情報" />
          <Form.Group
            as={Row}
            className="my-2 form-group-container"
            controlId="form_button_container"
          >
            <Col sm={12}>
              <div className="d-sm-flex justify-content-between align-items-center mt-3">
                <h5>新規</h5>
                <div style={{ marginLeft: '-70rem' }}>To:</div>
                <div
                  className="mb-md-2 px-md-3 mt-2 mt-sm-0"
                  style={{ marginRight: '-12rem' }}
                >
                  <Button type="button" className="custom-btn-submit">
                    連絡機能
                  </Button>{' '}
                </div>
              </div>{' '}
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
                  <tr>
                    <td colSpan={2}>
                      <InputGroup>
                        件名：
                        <Form.Control
                          type="text"
                          name="person_in_charge"
                          className="w-80"
                          defaultValue=" "
                        />
                      </InputGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <textarea className="wh-100" id="t_body"></textarea>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3 mt-3 form-group-container"
            controlId="form_button_container"
          >
            <div className="mt-2">
              <Form.Control
                type="file"
                required
                name="image"
                accept="image/*"
                className="mt-2 w-auto mt-md-0"
                id="file"
              />
            </div>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3 mt-3 form-group-container"
            controlId="form_button_container"
          >
            <Col sm={9} className="text-start ms-0 ps-0 my-2">
              <Button variant="success" className="btn-min-w btn btn-success">
                送信
              </Button>
              <Button variant="light" className="btn-min-w-30 border-primary">
                下書き保存
              </Button>
            </Col>
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
        </Form>
      </div>
    </MasterLayout>
  );
}

export default InterStaffCreateNew;
