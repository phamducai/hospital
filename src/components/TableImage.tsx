import React, { ReactElement, useEffect, useState } from 'react';
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

const TableCustomImage = <PersonFile extends object>({
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
      textAlign: TextAlign.Left,
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
  const [isCheckAll, setIsCheckAll] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<string[]>([]);
  const [list, setList] = useState<any>([]);
  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li: any) => li.userId));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    console.log(id, checked)
    setIsCheck([...isCheck, String(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== String(id)));
      setIsCheckAll(false);
    }
  };
  useEffect(() => {
    setList(data);
  }, []);
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
                <th style={theadStyle(1)} >  <input
                  type="checkbox"
                  name="selectAll"
                  id="selectAll"
                  onChange={handleSelectAll}
                  checked={isCheckAll}
                  className="custom-input"
                /></th>
                <th style={theadStyle(2)}>管理年月日</th>
                <th style={theadStyle(2)}>利用者情報</th>
                <th style={theadStyle(2)}>利用者情報</th>
                <th style={theadStyle(2)}>画像属性</th>
                <th style={theadStyle(2)}>画像名</th>
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
                      <td style={tdStyle()} className='text-center align-middle'>
                        <input
                          type="checkbox"
                          name={item.userId}
                          id={item.userId}
                          onChange={handleClick}
                          checked={isCheck.includes(item.userId)}
                          className="custom-input"
                        />

                      </td>
                      <td style={tdStyle(2)} onClick={() => {
                        navigate(`/file/file-image/${item.userId}`)
                      }} className='text-start align-middle'>
                        <div className='custom-a-table'> {item.managementDate}</div>
                      </td>
                      <td style={tdStyle(2)} className='align-middle'>
                        <div>
                          {item.userId}
                        </div>
                        <div>
                          {item.kanaName}
                        </div>
                      </td>
                      <td style={tdStyle(2)} className='align-middle'>
                        {item.screeType2.split(' ')[0]}<br />
                        {item.screeType2.split(' ')[1]}<br />
                        {item.screeType2.split(' ')[2]}<br />
                      </td>
                      <td style={tdStyle(2)} className='align-middle'>
                        {item.imageAttribute}
                      </td>
                      <td style={tdStyle(2)}>
                        <img src={item.imageUrl} alt="test" width={100} />
                        <a href={item.imageUrl} target='_blank' className='d-block'> {item.imageName}</a>
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

export default TableCustomImage;
