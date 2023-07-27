import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { LimitIdentification } from '@/interfaces/LimitIdentification';
const columnsTableLimitIdentification: ColumnTableCustom[] = [
    {
        id: 'date_of_delivery',
        label: '交付年月日',
        align: TextAlign.Center,
        minWidthValue: 100,
    },
    {
        id: 'first_date',
        label: '有効開始日',
        align: TextAlign.Center,
        minWidthValue: 100,
    },
    {
        id: 'end_date',
        label: '有効期限',
        align: TextAlign.Center,
        minWidthValue: 200,
    },
    {
        id: 'application',
        label: '適用区分',
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

const dataLimitIdentification: LimitIdentification[] = [
    {
        date_of_delivery: '令02/08/01',
        first_date: '令02/08/01',
        end_date: '令02/09/30',
        application: 'オ',
        maximum_amount: '35,400円',
    },
    {
        date_of_delivery: '令01/08/01',
        first_date: '令01/08/01',
        end_date: '令02/07/31',
        application: 'オ',
        maximum_amount: '35,400円',
    },
    {
        date_of_delivery: '平30/08/01',
        first_date: '平30/08/01',
        end_date: '令01/07/31',
        application: 'オ',
        maximum_amount: '35,400円',
    },
    {
        date_of_delivery: '平29/08/01',
        first_date: '平29/08/01',
        end_date: '平30/07/31',
        application: 'オ',
        maximum_amount: '35,400円',
    },
    {
        date_of_delivery: '平28/08/01',
        first_date: '平28/08/01',
        end_date: '平29/07/31',
        application: 'オ',
        maximum_amount: '35,400円',
    }
]

export {
    columnsTableLimitIdentification,
    dataLimitIdentification,
};
