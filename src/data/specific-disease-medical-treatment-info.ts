import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { SpecificDiseaseMedicalTreatmentInfo } from '@/interfaces/SpecificDiseaseMedicalTreatmentInfo';
const columnsTableSpecificDiseaseMedicalTreatmentInfo: ColumnTableCustom[] = [
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
    id: 'maximum_burden_amount',
    label: '負担上限額',
    align: TextAlign.Right,
    minWidthValue: 200,
  },
];

const dataSpecificDiseaseMedicalTreatmentInfo: SpecificDiseaseMedicalTreatmentInfo[] = [
  {
    date_of_issue: '令23/10/10',
    start_date: '令23/10/10',
    end_date: '令23/10/12',
    maximum_burden_amount: '20,000円',
  },
  {
    date_of_issue: '令03/01/01',
    start_date: '令03/01/01',
    end_date: '令05/12/31',
    maximum_burden_amount: '10,000円	',
  },

];

export { columnsTableSpecificDiseaseMedicalTreatmentInfo, dataSpecificDiseaseMedicalTreatmentInfo };
