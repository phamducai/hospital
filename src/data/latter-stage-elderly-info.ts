import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { LatterStageElderlyInfo } from '@/interfaces/LatterStageElderlyInfo';
const columnsTableLatterStageElderlyInfo: ColumnTableCustom[] = [
  {
    id: 'date_of_issue',
    label: '交付年月日',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'start_date',
    label: '有効開始日',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'end_date',
    label: '有効期限',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'insured_number',
    label: '被保険者番号',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'burden_ratio',
    label: '負担割合',
    align: TextAlign.Center,
    minWidthValue: 50,
  },
  {
    id: 'maximum_burden_amount',
    label: '負担上限額',
    align: TextAlign.Right,
    minWidthValue: 200,
  },
];

const dataLatterStageElderlyInfo: LatterStageElderlyInfo[] = [
  {
    date_of_issue: '令03/01/01',
    start_date: '令03/01/01',
    end_date: '令05/12/31',
    insured_number: '391000111111111',
    burden_ratio: '２割',
    maximum_burden_amount: '令03/01月	15,000円',
  },

];

export { columnsTableLatterStageElderlyInfo, dataLatterStageElderlyInfo };
