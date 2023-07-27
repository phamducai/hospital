import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { NursingInfo } from '@/interfaces/NursingInfo';
const columnsTableNursingInfo: ColumnTableCustom[] = [
    {
        id: 'recording_date',
        label: '記録年月日',
        align: TextAlign.Center,
        minWidthValue: 100,
    },
    {
        id: 'staff',
        label: '担当職員',
        align: TextAlign.Center,
        minWidthValue: 100,
    },
    {
        id: 'first_date',
        label: '初回年月日',
        align: TextAlign.Center,
        minWidthValue: 200,
    },
    {
        id: 'end_date',
        label: '終了年月日',
        align: TextAlign.Center,
        minWidthValue: 100,
    },
    {
        id: 'insurance',
        label: '保険種別',
        align: TextAlign.Center,
        minWidthValue: 100,
    }
];

const dataNursingInfo: NursingInfo[] = [
    {
        recording_date: '令03/01/01',
        staff: '大西　良樹',
        first_date: '令03/04/02',
        end_date: '',
        insurance: '医療(精神)',
    },
    {
        recording_date: '令03/01/01',
        staff: '大西　良樹',
        first_date: '令02/04/02',
        end_date: '',
        insurance: '医療(精神)',
    },
    {
        recording_date: '令02/04/01',
        staff: '大西　良樹',
        first_date: '令03/04/02',
        end_date: '',
        insurance: '医療',
    },
    {
        recording_date: '令03/01/01',
        staff: '大西　良樹',
        first_date: '令03/04/02',
        end_date: '',
        insurance: '医療',
    }
]

export {
    columnsTableNursingInfo,
    dataNursingInfo,
};