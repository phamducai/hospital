/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: UsageSummaryInfo (Usage Summary/Account Information)
 * PG NAME: 契約情報等一覧 (List of contract information, etc.)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Person } from '@/interfaces/Person';
import { DEFAULT_USER_INFORMATION } from '@/data/user-list';
import { useState} from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useAppSelector } from '@/store/hooks';
import { userSelector} from '@/store/user/userSlice';

import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { tabButtonUsageSummaryInfo } from '@/data/common';

function UsageSummaryInfo() {
  const [, setTargetRow] = useState<Person | undefined | any>(
    DEFAULT_USER_INFORMATION,
  );

  const [isReadOnly] = useState(true);

  const { selectedRow } = useAppSelector(userSelector);
  const handleOnChangeValue = (e: React.ChangeEvent<any>) => {
    setTargetRow((pre: any) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={1} arrayButton={tabButtonUsageSummaryInfo} />
      <div className="main">
        <Form className="w-100 h-100 d-flex flex-column detail-show">
          <Form.Group className="input-detail user-detail d-flex flex-column mt-3">
            <div>
              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_user_id"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  契約年月日
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    value={selectedRow?.contact_zip1}
                    name="userId"
                    readOnly={isReadOnly}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_username"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  訪問開始年月日
                  <br />
                  （医療）
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="2020(令和02)年04月02日"
                    value={selectedRow?.contact_zip2}
                    name="name"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  ></Form.Control>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-2 form-group-container mt-3-div"
                controlId="form_username_kanji"
              >
                <Form.Label
                  column
                  sm={4}
                  className="bg-light-yellow label-dialog"
                >
                  開始年月日（介護）
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    value={selectedRow?.contact_zip1}
                    name="kanaName"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
                </Col>
              </Form.Group>
            </div>
          </Form.Group>
        </Form>
      </div>
    </MasterLayout>
  );
}

export default UsageSummaryInfo;
