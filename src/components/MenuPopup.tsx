import { PropsWithChildren } from 'react';
import ImageButton from '@/components/ImageButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-bootstrap';

interface MenuPopupProps {
  class?: string;
  title?: string;
  isShow: boolean;
  onHidePopup: () => void;
}
function MenuPopup(props: PropsWithChildren<MenuPopupProps>) {
  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const className = (e.target as HTMLDivElement)?.className.toString() ?? '';
    if (
      className.includes('popup-menu-wrapper') ||
      className.includes('popup-container')
    ) {
      props.onHidePopup();
    }
  };

  return (
    <Fade in={true} appear={true}>
      <div
        className="popup-menu-wrapper"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          handleOutsideClick(e)
        }
      >
        <div className="popup-container h-100 px-0">
          <div className={`${props?.class ?? ''} popup-dialog`}>
            <div className="popup-content w-100 h-100">
              <div className="popup-header">
                {props.title && (
                  <div className="popup-title d-flex flex-column justify-content-center ">
                    <span>{props.title}</span>
                  </div>
                )}
                <ImageButton
                  onImageClick={props.onHidePopup}
                  class="bg-transparent"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="2x"
                    color="#025464"
                    className="fs-1 align-middle"
                  />
                </ImageButton>
              </div>
              <div className="popup-body h-100">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default MenuPopup;
