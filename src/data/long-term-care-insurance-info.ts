import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { LongTermCareInsuranceInfo } from '@/interfaces/LongTermCareInsuranceInfo';
const columnsTableLongTermCareInsuranceInfo: ColumnTableCustom[] = [
  {
    id: 'start_date',
    label: '認定開始日',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'end_date',
    label: '認定終了日',
    align: TextAlign.Center,
    minWidthValue: 100,
  },

  {
    id: 'insurer_number',
    label: '保険者番号',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'cover_insurer_number',
    label: '被保険者番号',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'category_of_long_term_care_need',
    label: '要介護状態区分',
    align: TextAlign.Center,
    minWidthValue: 200,
  },
];

const dataLongTermCareInsuranceInfo: LongTermCareInsuranceInfo[] = [
  {
    start_date: '令03/01/01',
    end_date: '令05/12/31',
    insurer_number: '372011',
    cover_insurer_number: '3720000111',
    category_of_long_term_care_need: '要支援（経過的要介護）',
  },
];

export { columnsTableLongTermCareInsuranceInfo, dataLongTermCareInsuranceInfo };
