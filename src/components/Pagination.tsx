import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

type PaginationProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: React.ChangeEventHandler<HTMLSelectElement>;
  rowsPerPageOptions: number[];
};

const Pagination = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
}: PaginationProps) => {
  const textStyle = {
    marginInline: 10,
  };
  const iconStyle = {
    margin: 10,
    cursor: 'pointer',
  };
  const handlePrevious = () => {
    if (page * rowsPerPage + 1 > 1) {
      onPageChange(page - 1);
    }
  };
  const handleNext = () => {
    if (rowsPerPage * (page + 1) < count) {
      onPageChange(page + 1);
    }
  };
  return (
    <div className="d-flex align-items-center">
      <span style={textStyle}>
        {page * rowsPerPage + 1}-
        {(rowsPerPage * (page + 1) <= count && rowsPerPage * (page + 1)) ||
          count}{' '}
        of {count}
      </span>
      <div style={iconStyle} onClick={handlePrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div style={iconStyle} onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default Pagination;
