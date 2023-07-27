import { TransferInfo } from "@/interfaces/TransferInfo"
import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';

const columnsTableTransferInfo: ColumnTableCustom[] = [
  {
    id: 'recording_date',
    label: '記録日',
    align: TextAlign.Left,
    minWidthValue: 70,
  },
  {
    id: 'user_name',
    label: '利用者氏名',
    align: TextAlign.Left,
    minWidthValue: 100,
  },
  {
    id: 'kinds',
    label: '種類',
    align: TextAlign.Left,
    minWidthValue: 200,
  },
  {
    id: 'title',
    label: '表題',
    align: TextAlign.Left,
    minWidthValue: 200,
  },
];

const dataTransferInfo: TransferInfo[] = [
  {
    recording_date: '2023/07/19',
    user_name: '高松　太郎',
    kinds: '退院前カンファレンス',
    title: '',
  },
  {
    recording_date: '2022/04/01',
    user_name: '高松　太郎',
    kinds: '担当者会議（テンプレートあり)',
    title: ' ',
  },
  {
    recording_date: '2022/01/01',
    user_name: '高松　太郎',
    kinds: '担当者会議',
    title: ' ',
  },
  {
    recording_date: '2021/12/03',
    user_name: '丸亀　丸恵',
    kinds: '電話連絡／対応',
    title: '緊急訪問の連絡',

  },
  {
    recording_date: '2021/11/22',
    user_name: '高松　太郎',
    kinds: '担当者会議',
    title: '12月担当者会議について',
  }
]

export {
  dataTransferInfo,
  columnsTableTransferInfo,
};
