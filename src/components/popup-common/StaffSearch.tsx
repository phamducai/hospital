// import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import TableCustom from '../TableCustom';
import { TextAlign, ColumnTableCustom } from '@/interfaces/ColumnTableCustom';
import '@/assets/scss/dialog-common/DialogCommon.scss';

type DialogStaffSearchProp = {
  isShow: boolean;
  onCloseClick: () => void;
  onSuccessClick: () => void;
};

interface Person {
  id: string;
  kanaName: string;
  kanjiName: string;
  job: string;
  gender: string;
  facility: string;
}

const handleOnClickRow = () => {
  console.log();
};

const exampleData: Person[] = [
  {
    id: '20001',
    kanaName: 'オオニシ　ヨシキ',
    kanjiName: '大西　良樹',
    job: '看護師',
    gender: '男性',
    facility: 'アポロ',
  },
  {
    id: '40001',
    kanaName: 'モリイズミ　スミヨ',
    kanjiName: '森泉　澄代',
    job: '看護師',
    gender: '男性',
    facility: '女性',
  },
  {
    id: '50001',
    kanaName: 'ファム　コック　ヴィ',
    kanjiName: 'ファム　コック　ヴィ',
    job: '准看',
    gender: '男性',
    facility: 'アポロ',
  },
  {
    id: '70001',
    kanaName: 'アポロ　タロウ',
    kanjiName: 'アポロ　太郎',
    job: '看補',
    gender: '男性',
    facility: 'アポロ',
  },
];

const exampleColumns: ColumnTableCustom[] = [
  {
    id: 'id',
    label: '職員ＩＤ',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'kanaName',
    label: '職員カナ氏名',
    align: TextAlign.Center,
    minWidthValue: 200,
  },
  {
    id: 'kanjiName',
    label: '職員漢字氏名',
    align: TextAlign.Center,
    minWidthValue: 200,
  },
  {
    id: 'job',
    label: '職種',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  { id: 'gender', label: '性別', align: TextAlign.Center, minWidthValue: 50 },
  {
    id: 'facility',
    label: '所属施設',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
];

function DialogStaffSearch({
  isShow,
  onCloseClick,
  onSuccessClick,
}: DialogStaffSearchProp) {
  return (
    <Modal show={isShow} onHide={onCloseClick} size="xl" id="dialog-common">
      <Modal.Title className="px-4 py-2">職員検索</Modal.Title>
      <Modal.Body>
        <div>
          <div className="d-lg-flex justify-content-start align-items-center">
            <div className="px-lg-2">職員ＩＤ検索</div>
            <input
              className="form-control w-250px"
              type="text"
              placeholder=""
            />
            <div className="px-lg-2 ms-lg-5 mt-3 mt-lg-0">所属施設検索</div>
            <select className="form-select w-150px">
              <option value="-1"></option>
              <option value="1">アポロ</option>
              <option value="2">松縄サテ</option>
            </select>
          </div>
          <div className="d-lg-flex justify-content-start align-items-center mt-3">
            <div className="px-lg-2">職員カナ検索</div>
            <input
              className="form-control w-250px"
              type="text"
              placeholder=""
            />
          </div>
          <div className="d-lg-flex justify-content-start align-items-center mt-3">
            <div className="px-lg-2">職員種別検索</div>
            <select className="form-select w-250px">
              <option value="-1"></option>
              <option value="101">医師</option>
              <option value="201">看護師</option>
              <option value="202">准看護師［准看］</option>
              <option value="203">保健師</option>
              <option value="204">助産師</option>
              <option value="301">理学療法士［ＰＴ］</option>
              <option value="302">作業療法士［ＯＴ］</option>
              <option value="303">言語聴覚士［ＳＴ］</option>
              <option value="402">看護補助者［看補］</option>
              <option value="403">精神保健福祉士［ＰＳＷ］</option>
              <option value="801">事務一般［事務］</option>
              <option value="901">システム管理者［シス管］</option>
            </select>
            <div className="px-lg-2 ms-lg-5 me-lg-3 mt-3 mt-lg-0">
              その他検索
            </div>
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input me-2"
                defaultChecked
              />
              <div>退職者を除く</div>
            </div>
          </div>
          <button className="btn btn-warning px-5 mt-4 w-200px">検索</button>
        </div>
        <div>
          <TableCustom<Person>
            data={exampleData}
            columns={exampleColumns}
            handleClickRow={handleOnClickRow}
            actionClick={handleOnClickRow}
          ></TableCustom>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success px-4" onClick={onSuccessClick}>
          確定
        </button>
        <button className="btn btn-secondary" onClick={onCloseClick}>
          閉じる
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default DialogStaffSearch;
