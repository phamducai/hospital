import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { ActionRedirect } from '@/data/common';
import { useNavigate } from 'react-router-dom';

interface TabUserDetailProps {
  active: number;
}

const TabUserDetail: React.FC<TabUserDetailProps> = ({ active }) => {
  const navigate = useNavigate();
  const handleRedirect = (action: string) => {
    switch (action) {
      case ActionRedirect.USER_INFORMATION:
        navigate('/user-detail');
        break;
      case ActionRedirect.NURSING_BASIC_INFO:
        navigate('/user/detail/nursing-basic-info');
        break;
      case ActionRedirect.ADMISSION_DISCHARGE_INFO:
        navigate('/user/detail/admission-discharge-info');
        break;
      case ActionRedirect.CANCER_DOCTORS_INFO:
        navigate('/user/detail/cancer-doctors-info');
        break;
      default:
        break;
    }
  };
  return (
    <div className="mx-2 mx-md-4">
      <Col
        sm={10}
        md={12}
        className="text-left ps-0 ms-0 mb-4 group-button"
        key={1}
      >
        <Button
          onClick={() => handleRedirect(ActionRedirect.USER_INFORMATION)}
          className={`btn-min-w-40 fz-sm-12 me-1 me-md-2 btn-bg-func shadow-btn ms-0 ${active === 1 ? 'btn-active' : ''
            }`}
        >
          利用者情報
        </Button>
        <Button
          onClick={() => handleRedirect(ActionRedirect.NURSING_BASIC_INFO)}
          className={`btn-min-w-40 fz-sm-12 me-1 me-md-2 btn-bg-func shadow-btn  ${active === 2 ? 'btn-active' : ''
            }`}
          key={2}
        >
          訪問看護基本情報
        </Button>

        <Button
          onClick={() =>
            handleRedirect(ActionRedirect.ADMISSION_DISCHARGE_INFO)
          }
          className={`btn-min-w-40 fz-sm-12 me-1 me-md-2 btn-bg-func shadow-btn ${active === 3 ? 'btn-active' : ''
            }`}
          key={3}
        >
          入退院情報
        </Button>
        <Button
          onClick={() => handleRedirect(ActionRedirect.CANCER_DOCTORS_INFO)}
          className={`btn-min-w-40 fz-sm-12 me-1 md-me-2 btn-bg-func shadow-btn ${active === 4 ? 'btn-active' : ''
            }`}
          key={4}
        >
          在がん医総情報
        </Button>
      </Col>
    </div>
  );
};

export default TabUserDetail;
