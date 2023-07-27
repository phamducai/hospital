import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { Intelligence } from '@/interfaces/Intelligence';
const columnsTableIntelligence: ColumnTableCustom[] = [
  {
    id: 'effective_start_date',
    label: '有効開始日',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'end_date',
    label: '有効終了日',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'legal_number',
    label: '法別番号',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'order',
    label: '順位',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'priority_category',
    label: '優先区分',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'bearer_number',
    label: '負担者番号',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'beneficiary_number',
    label: '受給者番号',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'subject',
    label: '対象',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
];

const dataIntelligence: Intelligence[] = [
  {
    effective_start_date: '令04/10/01',
    end_date: '令05/09/30',
    legal_number: '54 (医)',
    order: '10',
    priority_category: '保険優先',
    bearer_number: '54111111',
    beneficiary_number: '1234567',
    subject: '○',
  },
  {
    effective_start_date: '令03/01/01',
    end_date: '令05/12/31',
    legal_number: '54 (医)',
    order: '10',
    priority_category: '保険優先',
    bearer_number: '54111111',
    beneficiary_number: '1234567',
    subject: '○',
  },
  {
    effective_start_date: '令03/01/01',
    end_date: '令05/12/31',
    legal_number: '54 (医)',
    order: '10',
    priority_category: '保険優先',
    bearer_number: '54111111',
    beneficiary_number: '1234567',
    subject: '○',
  },
  {
    effective_start_date: '令03/01/01',
    end_date: '令05/12/31',
    legal_number: '54 (医)',
    order: '10',
    priority_category: '保険優先',
    bearer_number: '54111111',
    beneficiary_number: '1234567',
    subject: '○',
  },
  {
    effective_start_date: '令03/01/01',
    end_date: '令05/12/31',
    legal_number: '54 (医)',
    order: '10',
    priority_category: '保険優先',
    bearer_number: '54111111',
    beneficiary_number: '1234567',
    subject: '○',
  },
];

export { columnsTableIntelligence, dataIntelligence };
