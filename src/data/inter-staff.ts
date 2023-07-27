import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { InterStaffInfo } from '@/interfaces/InterStaffInfo';
const columnsTableInterStaff: ColumnTableCustom[] = [
  {
    id: 'unread',
    label: '未読',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'date_time',
    label: '日時',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'classification',
    label: '分類',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'address',
    label: '宛先',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'subject',
    label: '件名',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
];

const dataInterStaff: InterStaffInfo[] = [
  {
    unread: '未読',
    date_time: '2021/12/24 15:42',
    classification: '受信',
    address: '大西　良樹',
    subject: '全体連絡',
  },

  {
    unread: '未読',
    date_time: '2021/12/17 23:45',
    classification: '受信',
    address: 'システム　管理者',
    subject: 'テストメール',
  },
];

export { columnsTableInterStaff, dataInterStaff };
