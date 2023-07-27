/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: Home-visitNursingInstructionInformation
 * PG NAME: 指示／計画情報 (Instructions/planning information)
 */
import MasterLayout from '@/layout/MasterLayout';
import Row from 'react-bootstrap/Row';
import TableLink from '@/components/TableLink';
import { HomevisitNursingInfo } from '@/interfaces/HomevisitNursingInfo';

import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { columnsTableHomevisitNurseInfo, dataHomevisitNursingInfo } from '@/data/homevisit-nursing-info';
import { useNavigate } from 'react-router';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { itemTabHomevisitNursingInfo } from '@/data/common';

function HomevisitNursingInstructionInformation() {
  const navigate = useNavigate();

  const handleOnClickRow = (homevisit: HomevisitNursingInfo) => {
    console.log(homevisit);
  };

  const handerRegisterForm = () => {
    navigate('/user/instructions/home-visit-nursing-instruct-info/register');
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={1} arrayButton={itemTabHomevisitNursingInfo} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-1">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
              <Form.Group className="d-flex justify-content-between">
                <h5>◆　訪問看護指示情報</h5>
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
              <TableLink<HomevisitNursingInfo>
                data={dataHomevisitNursingInfo}
                columns={columnsTableHomevisitNurseInfo}
                redirectUrl="/user/instructions/home-visit-nursing-instruct-info/"
                handleClickRow={() => handleOnClickRow}
              ></TableLink>
            </div>
          </Row>
        </div>
      </div>
    </MasterLayout >
  );
}

export default HomevisitNursingInstructionInformation;
