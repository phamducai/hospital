import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { InsuranceInfo } from '@/interfaces/InsuranceInfo';
const columnsTableInsuranceInfo: ColumnTableCustom[] = [
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
    id: 'division',
    label: '	区分',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'insurer_name',
    label: '保険者名称',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'symbol_person',
    label: '被保険者記号・番号',
    align: TextAlign.Center,
    minWidthValue: 200,
  },
];

const dataInsuranceInfo: InsuranceInfo[] = [
  {
    date_of_issue: '令04/10/01',
    start_date: '令04/10/01',
    end_date: '令05/09/30',
    division: '国保',
    insurer_name: '高松市',
    symbol_person: '11-22・12345(枝番)01',
  },

  {
    date_of_issue: '令02/10/01',
    start_date: '令02/10/01',
    end_date: '令03/09/30',
    division: '国保',
    insurer_name: '高松市',
    symbol_person: '11-22・1234',
  },

  {
    date_of_issue: '令01/10/01',
    start_date: '令01/10/01',
    end_date: '令02/09/30',
    division: '国保',
    insurer_name: '高松市',
    symbol_person: '11-22・1234',
  },

  {
    date_of_issue: '平30/10/01',
    start_date: '平30/10/01',
    end_date: '令01/09/30',
    division: '国保',
    insurer_name: '高松市',
    symbol_person: '11-22・1234',
  },

  {
    date_of_issue: '平29/10/01',
    start_date: '平29/10/01',
    end_date: '令30/09/30',
    division: '国保',
    insurer_name: '高松市',
    symbol_person: '11-22・1234',
  },
];

export { columnsTableInsuranceInfo, dataInsuranceInfo };
