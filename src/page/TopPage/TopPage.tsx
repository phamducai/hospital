import MasterLayout from '@/layout/MasterLayout';
import '@/assets/scss/toppage/TopPage.scss';
import { useNavigate } from 'react-router';
import { menuItemsTopPage } from '@/data/common';
import { itemsTodayVisitSchedule } from '@/data/top-page';
import { useCallback, useState } from 'react';
import SetTimeBookingDialog from '@/components/top-page/dialog/SetTimeBookingDialog';
import { Button } from 'react-bootstrap';

const messageStar = '出';
const messageEnd = '退';
const exampleID = '181245012 ';

function TopPage() {
  const navigate = useNavigate();
  const clickButtonMenu = (action: string) => {
    navigate(action);
  };

  const [showDialogSettingStarTime, setShowDialogSettingStarTime] =
    useState(false);
  const onHandleBtnStarClick = () => {
    setShowDialogSettingStarTime(!showDialogSettingStarTime);
  };

  const [showDialogSettingEndTime, setShowDialogSettingEndTime] =
    useState(false);
  const onHandleBtnEndClick = () => {
    setShowDialogSettingEndTime(!showDialogSettingEndTime);
  };

  const haveSettingStarTimeDone = useCallback(() => {
    setShowDialogSettingStarTime(false);
  }, []);

  const haveSettingEndTimeDone = useCallback(() => {
    setShowDialogSettingEndTime(false);
  }, []);
  return (
    <MasterLayout>
      <div className="main" id="top-page">
        <div className="container">
          <div className="row w-100 mt-3 g-0 g-lg-2 align-items-center">
            <div className="col-12 col-md-6">
              <div className="row mt-2 mx-0 px-0 ps-lg-5">
                <h5>◆ 本日の訪問予定</h5>
                <div className="col-12">
                  {itemsTodayVisitSchedule.map((item, index) => (
                    <div key={index}>
                      {item.from}―{item.to}&ensp;:&ensp;{item.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="row col-12 col-lg-10 mt-4 mt-lg-5 mx-0 px-0 ps-lg-5">
                <h5 className="mt-lg-5 mt-0">◆ 勤怠</h5>
                <div className="row mt-2 mx-0 px-0">
                  <div className="col-6 col-md-4">
                    <Button
                      variant="success"
                      type="button"
                      className="h-100 text-white w-100"
                      onClick={onHandleBtnStarClick}
                    >
                      出勤
                    </Button>
                    <SetTimeBookingDialog
                      isShow={showDialogSettingStarTime}
                      type="checkIn"
                      message={messageStar}
                      IDUser={exampleID}
                      onSuccess={haveSettingStarTimeDone}
                    ></SetTimeBookingDialog>
                  </div>
                  <div className="col-6 col-md-4">
                    <Button
                      variant="warning"
                      type="button"
                      className="h-100 text-white w-100"
                      onClick={onHandleBtnEndClick}
                    >
                      退勤
                    </Button>
                    <SetTimeBookingDialog
                      isShow={showDialogSettingEndTime}
                      type="checkOut"
                      message={messageEnd}
                      IDUser={exampleID}
                      onSuccess={haveSettingEndTimeDone}
                    ></SetTimeBookingDialog>
                  </div>
                </div>
                <div className="row mx-0 mt-5 px-0">
                  <div className="col-12 col-md-8 mt-0 mt-lg-5">
                    <Button
                      variant="info"
                      type="button"
                      className="h-100 w-100 bg-blue-light border-0 text-dark btn-menu fw-bold"
                    >
                      職員間連絡機能
                    </Button>
                  </div>
                  <div className="col-12 col-md-8 mt-2">
                    <Button
                      variant="info"
                      type="button"
                      className="h-100 text-dark w-100 bg-blue-light border-0 btn-menu fw-bold"
                    >
                      請求書ダウンロード
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-lg-0">
              <div className="row mt-4 mt-lg-0 mx-0 px-0">
                <h5>◆ メインメニュー</h5>
                <div className="col-12">
                  <div className="row col-12 col-lg-11 mt-2 g-0 g-md-2">
                    {menuItemsTopPage.map((item, index) => (
                      <div
                        className="col-12 col-md-6 col-lg-5 mt-2"
                        key={index}
                      >
                        <Button
                          variant="info"
                          type="button"
                          onClick={() => clickButtonMenu(item.url)}
                          className="w-100 h-100 text-white btn-menu fw-bold"
                        >
                          {item.name}
                          <div className="fz-12">{item.subName}</div>
                        </Button>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}

export default TopPage;
