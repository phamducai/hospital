import React, { ReactElement, useState } from 'react';
import { TextAlign, ColumnTableCustom } from '@/interfaces/ColumnTableCustom';
import Pagination from '@/components/Pagination';
import * as Constant from '@/common/constant';

interface TableProps<T> {
  data: T[];
  columns: ColumnTableCustom[];
  children?: ReactElement[];
  facilitiesLabel?: string;
  inputClassName?: string;
  redirectUrl?: string;
  handleClickRow: (objectData: object) => void;
}

const TableTransfer = <T extends object>({
  data,
  columns,
  inputClassName = '',
  redirectUrl = '',
  handleClickRow,
}: TableProps<T>) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    Constant.ROW_PER_PAGE[0],
  );
  const [rowActive, setRowActive] = React.useState(-1);
  const [url, setUrl] = useState('');
  const tdStyle = (column?: ColumnTableCustom) => {
    const style = {
      border: '2px solid white',
      textAlign: column ? column.align : TextAlign.Right,
      minInlineSize: column ? column.minWidthValue : undefined,
    };
    return style;
  };
  const theadStyle = (column?: ColumnTableCustom) => {
    return {
      border: '2px solid white',
      borderBlockStart: 'none',
      textAlign: TextAlign.Center,
      minInlineSize: column ? column.minWidthValue : undefined,
      backgroundColor: '#068DA9',
      color: 'white',
      fontWeight: 'normal',
      position: 'sticky' as const,
      insetBlockStart: 0,
    };
  };
  const componentStyle = {
    backgroundColor: 'rgb(221, 230, 237)',
    paddingInline: 15,
    fontSize: 14,
    borderRadius: 5,
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
    localStorage.setItem('dataSelected', JSON.stringify(item));
    handleClickRow(item);
    setUrl(redirectUrl + index);
  };

  return (
    <div
      style={{
        backgroundColor: 'rgb(221, 230, 237)',
        paddingInline: 15,
        borderRadius: 5,
      }}
    >
      <div className="m-3 pt-2">
        <p>{'{' + data.length + '}'}件、検索されました</p>
      </div>
      <div className="div-height" style={componentStyle}>
        <div
          className="table-container"
          style={{ overflowY: 'auto', blockSize: '85%' }}
        >
          <table className={'table ' + inputClassName}>
            {/* < className={"table " + inputClassName} style={{ inlineSize: '100%' }}> */}
            <thead>
              <tr>
                {columns.map((column, key) => (
                  <th key={String(key)} style={theadStyle(column)}>
                    {String(column.label)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data &&
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => (
                    <tr
                      key={index}
                      style={
                        rowActive === index
                          ? { backgroundColor: 'rgb(255, 243, 205)' }
                          : {}
                      }
                      onClick={() => handleClickTableRow(index, item)}
                    >
                      {columns.map((column, index) => (
                        <td key={String(column.id)} style={tdStyle(column)}>
                          {index == 0 ? (
                            <a href={url}>
                              {String(item[column.id as keyof T])}
                            </a>
                          ) : (
                            String(item[column.id as keyof T])
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        <div
          className={'d-flex justify-content-end p-0 ' + inputClassName}
          style={{ blockSize: '10%' }}
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
    </div>
  );
};

export default TableTransfer;
