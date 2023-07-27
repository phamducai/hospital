/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: USh0010
 * PG NAME: 入退院情報一覧 (Admission/discharge information list)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import TableLink from '@/components/TableLink';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import {
  columnsTableAdmissionDischargeInfo,
  dataAdmissionDischargeInfo,
} from '@/data/admission-discharge-info';

import { useNavigate } from 'react-router';
import { AdmissionDischargeInfo } from '@/interfaces/AdmissionDischargeInfo';
import '@assets/scss/user/detail/admission-discharge.scss';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabUserDetail from '@/components/user/detail/TabUserDetail';
function USh0010() {
  const navigate = useNavigate();
  const handleOnClickRow = (item: AdmissionDischargeInfo) => {
    console.log(item);
  };

  const handerRegisterForm = () => {
    navigate('/user/detail/admission-discharge-info/create');
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabUserDetail active={3} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-1">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
              <Form.Group className="d-flex justify-content-between">
                <h5>◆入退院情報</h5>
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
              <TableLink<AdmissionDischargeInfo>
                data={dataAdmissionDischargeInfo}
                columns={columnsTableAdmissionDischargeInfo}
                inputClassName="w-50-table"
                redirectUrl="/user/detail/admission-discharge-info/"
                handleClickRow={() => handleOnClickRow}
              ></TableLink>
            </div>
          </Row>
        </div>
      </div>
    </MasterLayout>
  );
}

export default USh0010;
