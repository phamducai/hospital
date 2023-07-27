import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { ElderlyInfo } from '@/interfaces/ElderlyInfo';
const columnsTableElderlyInfo: ColumnTableCustom[] = [
    {
        id: 'date_of_issue',
        label: '交付年月日',
        align: TextAlign.Center,
        minWidthValue: 100,
    },
    {
        id: 'effective_start_date',
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
        id: 'co_payment_ratio',
        label: '一部負担金の割合',
        align: TextAlign.Center,
        minWidthValue: 100,
    },
    {
        id: 'maximum_amount',
        label: '負担上限額',
        align: TextAlign.Right,
        minWidthValue: 100,
    }
];

const dataElderlyInfo: ElderlyInfo[] = [
    {
        date_of_issue: '令03/01/01',
        effective_start_date: '令03/01/01',
        end_date: '令05/12/31',
        co_payment_ratio: '２割',
        maximum_amount: '令03/01月	18,000円',
    },
]

export {
    columnsTableElderlyInfo,
    dataElderlyInfo,
};
