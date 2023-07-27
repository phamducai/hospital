/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: LongTermCareInsuranceInformation
 * PG NAME: 介護保険情報 (LongTermCareInsuranceInformation)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import TableLink from '@/components/TableLink';
import { LongTermCareInsuranceInfo } from '@/interfaces/LongTermCareInsuranceInfo';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { columnsTableLongTermCareInsuranceInfo, dataLongTermCareInsuranceInfo } from '@/data/long-term-care-insurance-info';
import { useNavigate } from 'react-router';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance} from '@/data/common';

function LongTermCareInsuranceInformation() {
  const navigate = useNavigate();

  const handleOnClickRow = (long: LongTermCareInsuranceInfo) => {
    console.log(long);
  };

  const handerRegisterForm = () => {
    navigate('/user/insurance/long-term-care-insurance/register');
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={6} arrayButton={itemTabInsurance} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-1">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
              <Form.Group className="d-flex justify-content-between">
                <h5>◆介護保険情報</h5>
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
              <TableLink<LongTermCareInsuranceInfo>
                data={dataLongTermCareInsuranceInfo}
                columns={columnsTableLongTermCareInsuranceInfo}
                redirectUrl="/user/insurance/long-term-care-insurance/"
                handleClickRow={() => handleOnClickRow}
              ></TableLink>
            </div>
          </Row>
        </div>
      </div>
    </MasterLayout>
  );
}

export default LongTermCareInsuranceInformation;
