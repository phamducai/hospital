/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/**
 * PG ID: FL0020
 * PG NAME: 検索結果画面(Search result screen)
 */

import Row from 'react-bootstrap/Row';


import { Person, RenderName } from '@/interfaces/Person';
import { useEffect, useState } from 'react';
import { ButtonProps } from '@/components/DialogConfirm';
import { ActionIconButton } from '@/data/common';
import {
  DEFAULT_USER_INFORMATION,
  DEFAULT_VALUES,
} from '@/data/user-list';

import { useDispatch } from 'react-redux';
import {
  setSelectRow,
} from '@/store/user/userSlice';
import { PersonFile, exampleDataFile } from '@/data/schedule';
import TableCustomFile from '@/components/TableCustomFile';

function FL0020() {
  const [, setValidated] = useState(false);
  const [, setMessageDialog] = useState('');
  const [, setButtons] = useState(Array<ButtonProps>);
  const [tableData, setTableData] = useState<Array<Person>>([]);
  const [, setTargetRow] = useState<Person>(DEFAULT_USER_INFORMATION);
  const [, setTargetRowDefault] = useState<Person>(DEFAULT_USER_INFORMATION);
  const [, setTargetIndex] = useState<number>(-1); // Not in array index by default for register processing
  const [, setRegisterForm] = useState(false);
  const [, setShowOnly] = useState(false);
  const dispatch = useDispatch();
  const [valRenderName, setValRenderName] =
    useState<RenderName>(DEFAULT_VALUES);
  const [valName, setValName] = useState('');
  const [valKanaName, setValKanaName] = useState('');
  const [valAddress1, setValAddress1] = useState('');
  const [valAddress2, setValAddress2] = useState('');
  const [valAddress3, setValAddress3] = useState('');
  useEffect(() => {
    setValidated(false);
    setValRenderName(DEFAULT_VALUES);
    setValName('');
    setValKanaName('');
    setValAddress1('');
    setValAddress2('');
    setValAddress3('');
  }, []);

  useEffect(() => {
    setValRenderName({
      ...valRenderName,
      address: valAddress1 + valAddress2 + valAddress3,
    });
  }, [valAddress1, valAddress2, valAddress3]);

  useEffect(() => {
    setValRenderName({
      ...valRenderName,
      name: valName,
    });
  }, [valName]);

  useEffect(() => {
    setValRenderName({
      ...valRenderName,
      kanaName: valKanaName,
    });
  }, [valKanaName]);

  // Delete
  const showDeleteConfirmDialog = (itemIdx: number) => {
    setMessageDialog('本当に削除していいんですか？');
    const deleteItem = () => {
      tableData.splice(itemIdx, 1);
      setTableData(tableData);
    };

    setButtons(() => [
      {
        text: 'はい',
        okButton: true,
        onClickButton: () => {
          deleteItem();

        },
        className: 'button-dialog',
      },
      {
        text: 'いいえ',
        okButton: false,
        onClickButton: () => {
          navigator
        },
        className: 'button-dialog',
      },
    ]);

  };

  const handleActionClickIcon = (
    index: number,
    currentPage: number,
    rowsPerPage: number,
    btnId: string,
  ) => {
    const realIndex =
      currentPage > 0 ? currentPage * rowsPerPage + index : index;

    switch (btnId) {
      case ActionIconButton.BTN_SHOW:
        setTargetRow(tableData[realIndex]);
        setTargetRowDefault(tableData[realIndex]);

        setShowOnly(true);
        break;
      case ActionIconButton.BTN_EDIT:
        setTargetRow(tableData[realIndex]);
        setTargetRowDefault(tableData[realIndex]);
        setRegisterForm(false);

        break;
      case ActionIconButton.BTN_DEL:
        showDeleteConfirmDialog(realIndex);
        break;
      default:
        break;
    }
    setTargetIndex(realIndex);
  };

  const handleOnClickRow = (person: Person | null) => {
    dispatch(setSelectRow(person));
  };
  return (
    <Row className="">
      <div className=" w-100 h-50">
        <TableCustomFile<PersonFile>
          data={exampleDataFile}
          actionClick={handleActionClickIcon}
          handleClickRow={handleOnClickRow}
        ></TableCustomFile>
      </div>
    </Row>

  );
}

export default FL0020;
