import { BillInfo } from '@/interfaces/BillInfo';

const billingInfoList: BillInfo[] = [
  {
    id: "01",
    billingDate: '2023年03月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '90,290',
    amountPaidByPerson: '10,000',
    actualCost: '0',
    collection: '',
  },
  {
    id: "02",
    billingDate: '2023年02月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '80,740	',
    amountPaidByPerson: '10,000',
    actualCost: '0',
    collection: '',
  },
  {
    id: "03",
    billingDate: '2023年01月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '89,290',
    amountPaidByPerson: '10,000',
    actualCost: '0',
    collection: '',
  },
  {
    id: "04",
    billingDate: '2022年12月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '89,290',
    amountPaidByPerson: '10,000',
    actualCost: '0',
    collection: '',
  },
  {
    id: "05",
    billingDate: '2022年11月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '80,740',
    amountPaidByPerson: '10,000',
    actualCost: '0',
    collection: '',
  },
  {
    id: "06",
    billingDate: '2022年10月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '89,290',
    amountPaidByPerson: '10,000',
    actualCost: '0',
    collection: '',
  },
  {
    id: "07",
    billingDate: '2022年09月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '89,290',
    amountPaidByPerson: '10,000',
    actualCost: '0',
    collection: '',
  },
  {
    id: "08",
    billingDate: '2022年08月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '80,740',
    amountPaidByPerson: '10,000',
    actualCost: '0',
    collection: '',
  },

  {
    id: "09",
    billingDate: '2022年07月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '49,950',
    amountPaidByPerson: '9,990',
    actualCost: '0',
    collection: '',
  },
  {
    id: "10",
    billingDate: '2022年06月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '80,740',
    amountPaidByPerson: '10,000',
    actualCost: '0',
    collection: '',
  },
  {
    id: "11",
    billingDate: '2022年05月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '89,290',
    amountPaidByPerson: '10,000',
    actualCost: '0',
    collection: '',
  },
  {
    id: "12",
    billingDate: '2022年04月分',
    insuranceType: '医療',
    classification: '国保',
    amount	: '89,290',
    amountPaidByPerson: '10,000',
    actualCost: '20,200',
    collection: '',
  },
]

// Option deposit item in account info update

const optionDepositItem = [
  {
    option: '普通',
  },
  {
    option: '当座'
  },
  {
    option: '納税準備'
  },
  {
    option: 'その他'
  }
]

export {
  billingInfoList,
  optionDepositItem,
};


