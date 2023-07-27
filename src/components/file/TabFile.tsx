import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface TabUserDetailProps {
  active: number;
}

const TabFileDetail: React.FC<TabUserDetailProps> = ({ active }) => {
  const navigate = useNavigate();

  return (
    <div className="mx-2 mx-md-4">
      <Col
        sm={10}
        md={12}
        className="text-left ps-0 ms-0 my-2 group-button"
        key={1}
      >
        <Button
          onClick={() => navigate('/file/file-search')}
          className={`btn-min-w-40 fz-sm-12 me-1 me-md-2 btn-bg-func shadow-btn ms-0 ${active === 1 ? 'btn-active' : ''
            }`}
        >
          ファイル
        </Button>
        <Button
          onClick={() => navigate('/file/file-image')}
          className={`btn-min-w-40 fz-sm-12 me-1 me-md-2 btn-bg-func shadow-btn  ${active === 2 ? 'btn-active' : ''
            }`}
          key={2}
        >
          画像管理
        </Button>

      </Col>
    </div>
  );
};

export default TabFileDetail;
