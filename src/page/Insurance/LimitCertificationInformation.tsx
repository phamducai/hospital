/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: InsurancePublicExpenseInformation
 * PG NAME: 保険／公費情報 (Insurance-public expense information)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import TableLink from '@/components/TableLink';
import { LimitIdentification } from '@/interfaces/LimitIdentification';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { columnsTableLimitIdentification, dataLimitIdentification } from '@/data/limit-identification';
import { useNavigate } from 'react-router';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';

function LimitCertificationInformation() {

  const navigate = useNavigate();

  const handleOnClickRow = (limit: LimitIdentification) => {
    console.log(limit);
  };

  const handerRegisterForm = () => {
    navigate('/user/insurance/limit-identification/register');
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={4} arrayButton={itemTabInsurance} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-1">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
              <Form.Group className="d-flex justify-content-between">
                <h5>◆　限度額認定情報　</h5>
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
              <TableLink<LimitIdentification>
                data={dataLimitIdentification}
                columns={columnsTableLimitIdentification}
                redirectUrl="/user/insurance/limit-identification/"
                handleClickRow={() => handleOnClickRow}
              ></TableLink>
            </div>
          </Row>
        </div>
      </div>
    </MasterLayout>
  );
}

export default LimitCertificationInformation;
