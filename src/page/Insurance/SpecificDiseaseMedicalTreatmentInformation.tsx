/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: SpecificDiseaseMedicalTreatmentInformation
 * PG NAME: 特定疾病療養受療情報 (SpecificDiseaseMedicalTreatmentInformation)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import TableLink from '@/components/TableLink';
import { SpecificDiseaseMedicalTreatmentInfo } from '@/interfaces/SpecificDiseaseMedicalTreatmentInfo';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import {
  columnsTableSpecificDiseaseMedicalTreatmentInfo,
  dataSpecificDiseaseMedicalTreatmentInfo,
} from '@/data/specific-disease-medical-treatment-info';
import { useNavigate } from 'react-router';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabInsurance } from '@/data/common';

function SpecificDiseaseMedicalTreatmentInformation() {
  const navigate = useNavigate();

  const handleOnClickRow = (spec: SpecificDiseaseMedicalTreatmentInfo) => {
    console.log(spec);
  };

  const handerRegisterForm = () => {
    navigate('/user/insurance/specific-disease-medical-treatment/register');
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={5} arrayButton={itemTabInsurance} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-1">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
              <Form.Group className="d-flex justify-content-between">
                <h5>◆特定疾病療養受療情報</h5>
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
              <TableLink<SpecificDiseaseMedicalTreatmentInfo>
                data={dataSpecificDiseaseMedicalTreatmentInfo}
                columns={columnsTableSpecificDiseaseMedicalTreatmentInfo}
                inputClassName="w-50-table"
                redirectUrl="/user/insurance/specific-disease-medical-treatment/"
                handleClickRow={() => handleOnClickRow}
              ></TableLink>
            </div>
          </Row>
        </div>
      </div>
    </MasterLayout>
  );
}

export default SpecificDiseaseMedicalTreatmentInformation;
