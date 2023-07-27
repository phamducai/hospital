import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import React, { ReactElement } from 'react';
import Pagination from '@/components/Pagination';
import { Person } from '@/interfaces/Person';
import * as Constant from '@/common/constant';

type TableScaleProps<T> = {
  data: T[];
  columns: ColumnTableCustom[];
  children?: ReactElement[];
  facilitiesLabel?: string;
  actionClick: (
    index: number,
    currentPage: number,
    rowsPerPage: number,
    btnId: string,
  ) => void;
  handleClickRow: (person: Person | null) => void;
};

const TableScale = <T extends object>({
  data,
  columns,
  children,
  handleClickRow,
}: TableScaleProps<T>) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowActive, setRowActive] = React.useState(-1);
  const tHeadStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: TextAlign.Center,
    border: '1px solid white',
    borderBlockStart: 'none',
    borderInlineEnd: 'none',
    backgroundColor: '#068DA9',
    paddingBlock: 7,
    paddingInline: 0,
  };
  const tableHeadStyle = {
    margin: 0,
    border: '1px solid black',
  };
  const rowStyle = (index: number) => {
    return {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid black',
      borderBlockStart: 'none',
      paddingInline: 2,
      paddingBlock: 2,
      backgroundColor: rowActive === index ? 'rgb(222,235,247)' : '',
    };
  };
  const columnStyle = (column?: ColumnTableCustom) => {
    return {
      paddingInline: 0,
      paddingBlockStart: 3,
      textAlign: column ? column.align : TextAlign.Left,
    };
  };
  const containerStyle = {
    blockSize: '100%',
    inlineSize: '100%',
    backgroundColor: 'rgb(221, 230, 237)',
    fontSize: 14,
  };
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickTableRow = (index: number, item: T) => {
    setRowActive(index);
    handleClickRow(item as Person);
  };

  return (
    <div style={containerStyle}>
      <p className="my-2">{'{' + data.length + '}'}件、検索されました</p>
      <div style={containerStyle}>
        {/* TABLE HEAD */}
        <div className="row" style={tableHeadStyle}>
          {columns.map((column, index) => (
            <span
              className={column.gridColumn || 'col-4'}
              key={index}
              style={tHeadStyle}
            >
              {String(column.label)}
            </span>
          ))}
          {children}
        </div>
        {/* TABLE BODY */}
        <div className="overflow-auto h-100">
          {data &&
            data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <div
                  style={rowStyle(index)}
                  onClick={() => handleClickTableRow(index, item)}
                  key={index}
                >
                  <div
                    className="row m-0"
                    style={{ inlineSize: children ? '80%' : '100%' }}
                  >
                    {columns.map((column, index) => (
                      <span
                        className={column.gridColumn || 'col-4'}
                        style={columnStyle(column)}
                        key={String(index)}
                      >
                        {String(item[column.id as keyof T])}
                      </span>
                    ))}
                  </div>
                  {children}
                </div>
              ))}
        </div>
      </div>
      <div
        className="d-flex justify-content-end w-100 p-0 pt-2"
        style={{ blockSize: '8%' }}
      >
        <Pagination
          rowsPerPageOptions={Constant.ROW_PER_PAGE}
          count={data.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default TableScale;
