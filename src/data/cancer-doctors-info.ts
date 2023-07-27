import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { CancerDoctorsInfo } from '@/interfaces/CancerDoctorsInfo';
const columnsTableCancerDoctorsInfo: ColumnTableCustom[] = [
  {
    id: 'medical_name',
    label: '医療機関名',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'billing_date',
    label: '請求年月',
    align: TextAlign.Center,
    minWidthValue: 120,
  },
  {
    id: 'target_week',
    label: '対象週',
    align: TextAlign.Left,
    minWidthValue: 200,
  },
];

const dataCancerDoctorsInfo: CancerDoctorsInfo[] = [
  {
    medical_name: '高松病院',
    billing_date: '令和05年06月',
    target_week: '06/04週',
  },
  {
    medical_name: '高松病院',
    billing_date: '令和05年05月',
    target_week: '04/30週、05/07週、05/14週、05/21週',
  },
  {
    medical_name: '高松病院',
    billing_date: '令和05年04月',
    target_week: '04/30週',
  },
  {
    medical_name: '高松病院',
    billing_date: '令和05年03月',
    target_week: '02/26週',
  },
  {
    medical_name: '高松病院',
    billing_date: '令和05年02月',
    target_week: '02/26週',
  },
];

export { columnsTableCancerDoctorsInfo, dataCancerDoctorsInfo };
