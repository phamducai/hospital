import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
interface MyPopoverProps {
  title: string;
}

const MyPopover: React.FC<MyPopoverProps> = ({ title }) => {
  const [showPopover, setShowPopover] = useState(false);

  const handlePopoverClick = () => {
    setShowPopover(!showPopover);
  };
  const titleWithBreaks = title.replace(/n/g, '<br />')

  const popover = (
    <Popover id="my-popover" title={title}>
      <Popover.Body>
        <span dangerouslySetInnerHTML={{ __html: titleWithBreaks }} />
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      show={showPopover}
      onToggle={handlePopoverClick}
      overlay={popover}
    >
      <Button className='custom-button-question-help'><FontAwesomeIcon icon={faQuestion} /></Button>
    </OverlayTrigger>
  );
};

export default MyPopover;
