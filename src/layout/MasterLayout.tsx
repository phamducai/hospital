/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '@assets/img/athome_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ImageButton from '@/components/ImageButton';
import { useState, useEffect } from 'react';
import MenuPopup from '@/components/MenuPopup';
import { useNavigate } from 'react-router';
import {
  menuItemsBeforeLogin,
  menuItemsAfterLogin,
  menuItemsOnClickRow,
} from '@/data/common';
import NavHeaderInfo from '@/layout/NavHeaderInfo';
import { useAppSelector } from '@/store/hooks';
import { User, authSelector, login, logout } from '@/store/auth/authSlice';
import { userSelector } from '@/store/user/userSlice';
import { useDispatch } from 'react-redux';
import { Person } from '@/interfaces/Person';
import { setSelectRow, setShowListSearch } from '@/store/user/userSlice';

export type MasterLayoutProps = {
  children: ReactNode;
  userInfo?: Person | null;
};

function MasterLayout({ children, userInfo }: MasterLayoutProps) {
  const [isShowPopupMenu, setShowPopupMenu] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [titleDialog, setTitleDialog] = useState('');
  const [menuItems, setMenuItems] = useState(menuItemsBeforeLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginState, name } = useAppSelector(authSelector);
  const { selectedRow } = useAppSelector(userSelector);
  const storedJsonString: string | null = localStorage.getItem('userInfo');

  useEffect(() => {
    if (loginState) {
      setMenuItems(menuItemsAfterLogin);
      setTitleDialog('メニュー');
    }
    setLoginStatus(loginState);
  }, []);

  useEffect(() => {
    if (!loginState) {
      setMenuItems(menuItemsBeforeLogin);
    } else if (!selectedRow && loginState) {
      setMenuItems(menuItemsAfterLogin);
    } else {
      setMenuItems(menuItemsOnClickRow);
    }
  }, [selectedRow]);

  const handleMenuClick = () => {
    setShowPopupMenu(true);
  };

  const handleClosePopup = () => {
    setShowPopupMenu(false);
  };

  const handleLogout = () => {
    dispatch(setSelectRow(null));
    dispatch(setShowListSearch());
    dispatch(logout());
    setLoginStatus(false);
    setShowPopupMenu(false);
    navigate('/');

    localStorage.clear();
  };

  const handleMenuItemClick = (url: string) => {
    navigate(url);
    setShowPopupMenu(false);
  };

  useEffect(() => {
    if (storedJsonString) {
      const storedData = JSON.parse(storedJsonString)
      setLoginStatus(true)
      if (storedData?.id === '1') {
        const userInfo: User = {
          id: '1',
          name: 'Test',
          loginState: true,
        };
        dispatch(login(userInfo));
      } else {
        navigate('/')
      }
    } else {
      navigate('/')
    }
  }, [])

  return (
    <>
      <header>
        <Navbar className="bg-header">
          <Navbar.Brand className="p-0 " style={{ cursor: 'pointer' }} onClick={() => {
            navigate('/top')
          }}>
            <img
              src={logo}
              className="d-inline-block align-top logo"
              alt="at-home logo"
            />
            <div className="d-flex d-md-none justify-content-left fz-12 text-white mt-1">
              {selectedRow?.name != undefined && (
                <div>
                  <span>
                    [{selectedRow?.userId}] {selectedRow?.name}
                  </span>
                  <br></br>
                  <span>
                    {selectedRow?.dateOfBirth} ({selectedRow?.age}){' '}
                    {selectedRow?.gender}
                  </span>
                </div>

              )}

            </div>
          </Navbar.Brand>
          <NavHeaderInfo
            corporateName="法人名"
            stationName="ステーション名"
            userId={(userInfo && userInfo.userId) || '利用者ID'}
            name={(userInfo && userInfo.name) || '利用者名'}
            usernameKana={(userInfo && userInfo.kanaName) || '利用者名カナ'}
            dateOfBirth={(userInfo && userInfo.dateOfBirth) || '生年月日'}
            age={(userInfo && userInfo.age + '') || '年齢'}
            gender={(userInfo && userInfo.gender) || '性別'}
            loginStatus={loginStatus}
            username={name}
          />
          <Navbar.Collapse className="justify-content-end">
            <ImageButton
              onImageClick={handleMenuClick}
              class="border-0 bg-transparent"
            >
              <FontAwesomeIcon
                icon={faBars}
                className="fs-1 text-secondary icon-menu text-white"
              />
            </ImageButton>
          </Navbar.Collapse>
        </Navbar>
        {isShowPopupMenu && (
          <MenuPopup
            isShow={isShowPopupMenu}
            onHidePopup={handleClosePopup}
            title={titleDialog}
            class=""
          >
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="popup-menu-item"
                    onClick={() => handleMenuItemClick(item.url)}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
              {loginStatus && (
                <div
                  className="popup-menu-item mx-2 mt-5"
                  onClick={handleLogout}
                >
                  ログアウト
                </div>
              )}
            </div>
          </MenuPopup>
        )}
      </header>

      {children}

      <footer>
        <div className="d-flex justify-content-center footer-copyright text-center py-2 bg-footer text-white">
          Copyright(C) ApolloSystem co.,ltd. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default MasterLayout;
