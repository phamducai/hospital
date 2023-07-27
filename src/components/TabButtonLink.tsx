import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
interface PropertiesButton {
  title: string;
  link: string
}
interface TabUserDetailProps {
  active: number;
  arrayButton: PropertiesButton[]
}
const TabButtonLink: React.FC<TabUserDetailProps> = ({ active, arrayButton }) => {


  const navigate = useNavigate();
  const handleRedirect = (link: string) => {

    navigate(link);

  };

  return (
    <div className="mx-2 mx-md-4 tab-button">
      {arrayButton.map((item: PropertiesButton, index: number) =>
        <Button
          className={`btn-tab-min-w fz-sm-12 me-1 my-md-1 me-md-2 btn-bg-func shadow-btn ms-0 ${active === index + 1 ? 'btn-active' : ''
            }`}
          onClick={() => {
            handleRedirect(item.link)
          }}
        >
          {item.title}
        </Button>
      )}
    </div>
  );
};

export default TabButtonLink;
