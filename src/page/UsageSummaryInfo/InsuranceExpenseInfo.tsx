/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: InsuranceExpenseInfo (Usage Summary/Account Information)
 * PG NAME: 有効保険／公費情報等一覧 (List of valid insurance/public expense information)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Person } from '@/interfaces/Person';
import { DEFAULT_USER_INFORMATION } from '@/data/user-list';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { tabButtonUsageSummaryInfo } from '@/data/common';

function InsuranceExpenseInfo() {
  const [, setTargetRow] = useState<Person | undefined | any>(
    DEFAULT_USER_INFORMATION,
  );
  const [isReadOnly] = useState(true);
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
      <TabButtonLink active={2} arrayButton={tabButtonUsageSummaryInfo} />
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
                  医療保険
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="国保（高松市)"
                    value={" "}
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
                  高額療養費
                  <br />
                  負担上限額
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="10,000円 (特定疾病療養受療情報)"
                    value={""}
                    name="name"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  公費①（医療）
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="54 指定難病（自己負担上限額：10,000円）"
                    value={""}
                    name="kanaName"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  公費②（医療）
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder=""
                    value={""}
                    name="kanaName"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  加算
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="機能強化型訪問看護管理療養費１（月の初回)"
                    value={""}
                    name="kanaName"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  介護保険
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="要支援（経過的要介護）（高松市)"
                    value={""}
                    name="kanaName"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  公費（介護）
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder=""
                    value={""}
                    name="kanaName"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  加算
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder=""
                    value={""}
                    name="kanaName"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  主治医
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="琴平　平男（医療法人琴平会　金毘羅山病院)"
                    value={""}
                    name="kanaName"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  最新指示
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="2022/12/01～2023/05/31"
                    value={""}
                    name="kanaName"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  主たる傷病名
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="パーキンソン病Ｙａｈｒ１  パーキンソン病"
                    value={""}
                    name="kanaName"
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
                  基準告示第２の１に規
                  <br />
                  定する疾病等の有無
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="別表7　	０９パーキンソン病関連疾患
                    別表8　	５１在宅人工呼吸指導管理を受けている状態にある者
                    "
                    value={""}
                    name="kanaName"
                    readOnly={isReadOnly}
                    onChange={(e) => handleOnChangeValue(e)}
                  />
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
                  居宅事業者
                </Form.Label>
                <Col sm={8} className="mt-2-div">
                  <Form.Control
                    type="text"
                    required
                    placeholder="綾川　綾奈（社団法人綾川会　綾川ケアプランセンター）"
                    value={""}
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

export default InsuranceExpenseInfo;
