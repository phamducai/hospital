/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: USv0010
 * PG NAME: 訪問看護基本情報一覧 (Home-visit nursing basic information list)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import TableLink from '@/components/TableLink';
import { NursingInfo } from '@/interfaces/NursingInfo';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { columnsTableNursingInfo, dataNursingInfo } from '@/data/nursing-info';
import { useNavigate } from 'react-router';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
import CustomHeading from '@/components/user/detail/TextHeader';

function USv0010() {

  const navigate = useNavigate();

  const handleOnClickRow = (nursing: NursingInfo) => {
    console.log(nursing);
  };

  const handerRegisterForm = () => {
    navigate('/user/detail/nursing-basic-info/register');
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabUserDetail active={2} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-1">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
              <Form.Group className="d-flex justify-content-between">
                <h5>◆訪問看護基本情報</h5>
              </Form.Group>
              <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                <Button className="w-100" onClick={handerRegisterForm}>
                  新規登録
                </Button>
              </div>
            </div>
          </Form>

          <Row className="">
            <div className="d-md-block w-100 h-50">
              <TableLink<NursingInfo>
                data={dataNursingInfo}
                columns={columnsTableNursingInfo}
                redirectUrl="/user/detail/nursing-basic-info/"
                handleClickRow={() => handleOnClickRow}
              ></TableLink>
            </div>
          </Row>
        </div>
      </div>
    </MasterLayout>
  );
}

export default USv0010;
