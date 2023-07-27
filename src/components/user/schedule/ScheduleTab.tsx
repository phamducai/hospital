
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ScheduleTab: React.FC<any> = ({ active }) => {
  const navigate = useNavigate()

  return (
    <div className="custom-border">
      <div>
        <Col
          sm={10}
          md={12}
          className="text-left ps-0 ms-0 group-button d-flex items-align-center"
          key={1}
        >
          <Button
            variant="outline-primary"
            className={`px-2 py-1 -mb-1px rounded-0 rounded-top ${
              active === 1 ? 'tabs-active' : ''
            }`}
            onClick={() => {
              navigate('/user/schedule');
            }}
          >
            利用者軸（月別)
          </Button>
          <Button
            variant="outline-primary"
            className={`px-2 py-1 mx-2 -mb-1px  rounded-0 rounded-top ${
              active === 2 ? 'tabs-active' : ''
            }`}
            key={2}
            onClick={() => {
              navigate('/user/pselect-schedule');
            }}
          >
            職員軸（月別)
          </Button>

          <Button
            variant="outline-primary"
            className={`px-2 py-1 -mb-1px  rounded-0 rounded-top ${
              active === 3 ? 'tabs-active' : ''
            }`}
            key={3}
            onClick={() => {
              navigate('/user/pedit-schedule-hour');
            }}
          >
            職員軸（日別)
          </Button>
        </Col>
      </div>
    </div>
  );
}

export default ScheduleTab;
