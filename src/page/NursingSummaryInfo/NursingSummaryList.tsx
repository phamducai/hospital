/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: NursingSummaryList (Nursing summary information)
 * PG NAME: 看護サマリー一覧 (Nursing summary list)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Form, Button, Table } from 'react-bootstrap';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { tabButtonNursingSummaryInfo } from '@/data/common';
import Pagination from '@/components/Pagination';
import * as Constant from '@/common/constant';
import { useState } from 'react';
import "@assets/scss/user/summaryinfo/summary-info.scss"
import { useNavigate } from 'react-router';


const data = [
  {
    recordingDate: '2017/02/01',
    recorderName: 'Yoshiki Ohnishi',
    proposeFirst: 'AAA Hospital',
    hospitalizationDate: '2016/08/01',
    detailed: '',
  },
  {
    recordingDate: '2016/08/01',
    recorderName: 'Yoshiki Ohnishi',
    proposeFirst: 'AAA Hospital',
    hospitalizationDate: '2016/08/01',
    detailed: '',
  },
]

function NursingSummaryList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(
    Constant.ROW_PER_PAGE[0],
  );

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/nurse/nursing-summary-list-register');
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={1} arrayButton={tabButtonNursingSummaryInfo} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-2">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
                <Form.Group className="d-flex justify-content-between">
                {/* <h5>◆訪問看護基本情報</h5> */}
                </Form.Group>
                <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                  <Button className="w-100"
                    onClick={() => handleEdit()}
                  >
                    新規登録
                  </Button>
                </div>
            </div>
          </Form>
          <div
            className="table"
            style={{
              backgroundColor: 'rgb(221, 230, 237)',
              paddingInline: 15,
              borderRadius: 5,
            }}
          >
            <div className="m-3 pt-2">
              <p>{'{' + data.length + '}'}件、検索されました。</p>
            </div>
            <div className="div-height">
              <div
                className="table-container"
                style={{ overflowY: 'auto', blockSize: '85%' }}
              >
                <Table hover className='table-billing-info-list'>
                  <thead className="flex-row flex-column">
                    <tr className='title-table-nurse-summary-list'>
                      <th>記録年月日</th>
                      <th>記録者氏名</th>
                      <th>提出先</th>
                      <th>入院日</th>
                      <th>詳</th>
                    </tr>
                  </thead>
                  <tbody className='tbody-nurse-summary-list'>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{item.recordingDate}</td>
                        <td>{item.recorderName}</td>
                        <td>{item.proposeFirst}</td>
                        <td>{item.hospitalizationDate}</td>
                        <td><input type='radio'/></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div
                className="d-flex justify-content-end w-100 p-0"
                style={{ blockSize: '10%' }}
              >
                <Pagination
                  rowsPerPageOptions={Constant.ROW_PER_PAGE}
                  count={data.length || 0}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}

export default NursingSummaryList;
