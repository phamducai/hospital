/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: ElderlyBeneficiaryInformation
 * PG NAME: 保険／公費情報 (Insurance-public expense information)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import TableLink from '@/components/TableLink';
import { ElderlyInfo } from '@/interfaces/ElderlyInfo';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { columnsTableElderlyInfo, dataElderlyInfo } from '@/data/elderly-info';
import { useNavigate } from 'react-router';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';
import '@assets/scss/user/detail/insurance/insurance.scss';


function ElderlyBeneficiaryInformation() {

  const navigate = useNavigate();

  const handleOnClickRow = (elderly: ElderlyInfo) => {
    console.log(elderly);
  };

  const handerRegisterForm = () => {
    navigate('/user/insurance/elderly-beneficiary-info/register');
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={2} arrayButton={itemTabInsurance} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-1">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
              <Form.Group className="d-flex justify-content-between">
                <h5>◆　高齢受給者情報　</h5>
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
              <TableLink<ElderlyInfo>
                data={dataElderlyInfo}
                columns={columnsTableElderlyInfo}
                redirectUrl="/user/insurance/elderly-beneficiary-info/"
                handleClickRow={() => handleOnClickRow}
              ></TableLink>
            </div>
          </Row>
        </div>
      </div>
    </MasterLayout>
  );
}

export default ElderlyBeneficiaryInformation;
