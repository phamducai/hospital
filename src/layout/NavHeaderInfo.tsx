import * as DatetimeUtils from '@/utils/DatetimeUtils';
import { setSelectRow, userSelector } from '@/store/user/userSlice';
import { useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Person } from '@/interfaces/Person';
type NavHeaderInfoProps = {
  corporateName: string, //法人名
  stationName: string, //ステーション名
  userId: string, //利用者ID
  name: string, //利用者名
  usernameKana: string, //利用者名カナ
  dateOfBirth: string, //生年月日
  age: string, //年齢
  gender: string, //性別
  loginStatus: boolean,
  username?: string,
}

const NavHeaderInfo = ({ corporateName, stationName, loginStatus, username }: NavHeaderInfoProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedPersonJSON: string | null = localStorage.getItem('person')

    if (storedPersonJSON) {
      // Convert the JSON string back to an object
      const storedPerson: Person = JSON.parse(storedPersonJSON);
      dispatch(setSelectRow(storedPerson))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { selectedRow } = useAppSelector(userSelector);
  if (loginStatus == false) {
    return (<></>);
  }

  return (
    <>
      <div className='w-100 row text-white  d-md-flex align-items-center fz-12 ml-20p-mb'>

        <div className='col-6 col-sm-6 col-md-5 d-none d-sm-none d-md-flex justify-content-start ps-5 ps-5-mb'>
          {selectedRow?.name != undefined && (
            <div>
              <span>[{selectedRow?.userId}] {selectedRow?.name}</span><br></br>
              <span>{selectedRow?.dateOfBirth} ({selectedRow?.age}) {selectedRow?.gender}</span>
            </div>
          )}
        </div>

        <div className='col-12 col-sm-12 col-md-3 d-flex justify-content-start'>
          {corporateName != undefined && (
            <div>
              <span>{corporateName}</span><br></br>
              <span>{stationName}</span>
            </div>
          )}
        </div>
        <div className='col-12 col-sm-12 col-md-4 d-flex justify-content-start'>
          {username != undefined && (
            <div className='text-start'>
              <span>{username || 'username'}</span><br></br>
              <span>{DatetimeUtils.formattedJapanDate(new Date())}</span>
            </div>
          )}
        </div>
      </div>
    </>

  )
};

export default NavHeaderInfo;
