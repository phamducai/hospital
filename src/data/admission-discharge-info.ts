import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { AdmissionDischargeInfo } from '@/interfaces/AdmissionDischargeInfo';
const columnsTableAdmissionDischargeInfo: ColumnTableCustom[] = [
  {
    id: 'kinds',
    label: '種類',
    align: TextAlign.Center,
    minWidthValue: 70,
  },
  {
    id: 'date',
    label: '年月日',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'inpatient_facility_name',
    label: '入院先施設名',
    align: TextAlign.Left,
    minWidthValue: 200,
  },
];

const dataAdmissionDischargeInfo: AdmissionDischargeInfo[] = [
  {
    kinds: '入院',
    date: '令03/02/10',
    inpatient_facility_name: '高松病院',
  },
  {
    kinds: '入院',
    date: '平31/01/01',
    inpatient_facility_name: '高松病院',
  },
];

export { columnsTableAdmissionDischargeInfo, dataAdmissionDischargeInfo };
