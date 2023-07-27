/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: BillingInfo (Usage Summary/Account Information)
 * PG NAME: 請求情報一覧 (Billing information list)
 */
import MasterLayout from '@/layout/MasterLayout';
import { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Table } from 'react-bootstrap';

import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { tabButtonUsageSummaryInfo } from '@/data/common';
import '@/assets/scss/user/summaryinfo/summary-info.scss';

import { billingInfoList } from '@/data/usage-summary-account-info';
import { BillInfo } from '@/interfaces/BillInfo';
import DatePickerCommon from '@/components/user/schedule/DatePickerCommon';
import Pagination from '@/components/Pagination';
import * as Constant from '@/common/constant';

function BillingInfo() {

  const [isCheckAll, setIsCheckAll] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<string[]>([]);
  const [list, setList] = useState<BillInfo[]>([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(
    Constant.ROW_PER_PAGE[0],
  );

  useEffect(() => {
    setList(billingInfoList);
  }, []);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, String(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== String(id)));
      setIsCheckAll(false);
    }
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={4} arrayButton={tabButtonUsageSummaryInfo} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-2">
            <div className="d-sm-flex justify-content-between align-items-center">
              <FormGroup className="d-flex justify-content-between">
                <div className="check-radios-1">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label className="form-check-label">
                      請求書
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label">
                      領収書
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    <label className="form-check-label">
                      請求書兼領収書
                    </label>
                  </div>
                </div>
              </FormGroup>
                <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                  <div className="check-radios-2">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="flexRadioDefault-1" id="flexRadioDefault4" checked />
                      <label className="form-check-label">ＰＤＦ</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="flexRadioDefault-1" id="flexRadioDefault5" />
                      <label className="form-check-label">ＥＸＣＥＬ</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-sm-flex justify-content-between align-items-center mt-3">
                <Form.Group className="calender-schedule d-flex justify-content-between ms-2">
                  <label className="date-calendar d-inline-flex">日付：</label>
                    <DatePickerCommon/>
                  <Button className="btn-calender ms-90">
                    <b>C</b>
                  </Button>
                </Form.Group>
                <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                  <Button className="w-100">利用者向け請求書・領収書印刷</Button>
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
              <p>{'{' + list.length + '}'}件、検索されました。</p>
            </div>
            <div className="div-height">
              <div
                className="table-container"
                style={{ overflowY: 'auto', blockSize: '85%' }}
              >
                <Table hover className='table-billing-info-list'>
                  <thead>
                    <tr className='title-table-billing-info-list'>
                      <th><input type="checkbox" className='check-box-table' name="selectAll" id="selectAll" onChange={handleSelectAll} checked={isCheckAll} /></th>
                      <th>請求年月</th>
                      <th>保険種別</th>
                      <th>分類</th>
                      <th>総額</th>
                      <th>本人負担額</th>
                      <th>実費</th>
                      <th>集金</th>
                    </tr>
                  </thead>
                  <tbody className='tbody-billing-info-list'>
                      {list.map((item, index) => (
                      <tr key={index}>
                        <td><input type="checkbox" className='check-box-table' name={item.id} id={item.id} onChange={handleClick} checked={isCheck.includes(item.id)} /></td>
                        <td>{item.billingDate}</td>
                        <td>{item.insuranceType}</td>
                        <td>{item.classification}</td>
                        <td>{item.amount}</td>
                        <td>{item.amountPaidByPerson}</td>
                        <td>{item.actualCost}</td>
                        <td>{item.collection}</td>
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
                  count={list.length || 0}
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
    </MasterLayout>)
}

export default BillingInfo
