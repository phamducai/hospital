import React, { ReactElement } from 'react';
import { TextAlign } from '@/interfaces/ColumnTableCustom';
import Pagination from '@/components/Pagination';
import { Person } from '@/interfaces/Person';
import * as Constant from '@/common/constant';
import "@assets/scss/user/tablecustom/tablecustom.scss"
import { useNavigate } from 'react-router';

interface TableProps<PersonFile> {
  data: PersonFile[] | any;
  children?: ReactElement[];
  facilitiesLabel?: string;
  actionClick: (
    index: number,
    currentPage: number,
    rowsPerPage: number,
    btnId: string,
  ) => void;
  handleClickRow: (person: Person | null) => void;
}

const TableCustomFile = <PersonFile extends object>({
  data,

  handleClickRow,
}: TableProps<PersonFile>) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    Constant.ROW_PER_PAGE[0],
  );
  const [rowActive, setRowActive] = React.useState(-1);
  const tdStyle = (column?: number) => {
    const style = {
      border: '2px solid white',
      textAlign: TextAlign.Center,
      minInlineSize: column ? column : undefined,
    };
    return style;
  };
  const theadStyle = (column?: number) => {
    return {
      border: '2px solid white',
      borderBlockStart: 'none',
      textAlign: TextAlign.Center,
      minInlineSize: column ? column : undefined,
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
    minHeight: 'calc(100vh - 520px)',
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

  const handleClickTableRow = (index: number, item: PersonFile) => {
    setRowActive(index);
    handleClickRow(item as Person);
  };
  const navigate = useNavigate()
  return (
    <div
      className="table"
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
          className="table-container "
          style={{ overflowY: 'auto', blockSize: '85%' }}
        >
          <table className="table table-responsive-lg " style={{ minWidth: '800px' }}  >

            <thead>
              <tr>
                <th style={theadStyle(2)}>管理年月日	</th>
                <th style={theadStyle(2)}>利用者情報		</th>
                <th style={theadStyle(2)}>画面種類		</th>
                <th style={theadStyle(2)}>ファイル属性		</th>
                <th style={theadStyle(2)}>ファイル名		</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item: any, index: any) => (
                    <tr
                      key={index}
                      style={
                        rowActive === index
                          ? { backgroundColor: 'rgb(255, 243, 205)' }
                          : {}
                      }
                      onClick={() => handleClickTableRow(index, item)}

                      className='hover-table-row'
                    >
                      <td style={tdStyle(2)} onClick={() => {
                        navigate(`/file/prefer-file/${item.userId}`)
                      }}>
                        <div className='custom-a-table'> {item.managementDate}</div>
                      </td>
                      <td style={tdStyle(2)}>
                        <div>
                          {item.kanaName}
                        </div>
                      </td>
                      <td style={tdStyle(2)}>
                        {item.screeType}
                      </td>
                      <td style={tdStyle(2)}>
                        {item.fileProperties}
                      </td>
                      <td style={tdStyle(2)}>
                        <a href="/public/test2.pdf" target='_blank'> {item.fileName}</a>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        <div
          className="d-flex justify-content-end w-100 p-0"
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

export default TableCustomFile;
