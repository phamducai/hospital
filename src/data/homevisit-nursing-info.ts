import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { HomevisitNursingInfo } from '@/interfaces/HomevisitNursingInfo';
const columnsTableHomevisitNurseInfo: ColumnTableCustom[] = [
  {
    id: 'date_of_instruction',
    label: '指示日',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'doctor_name',
    label: '主治医氏名',
    align: TextAlign.Left,
    minWidthValue: 100,
  },
  {
    id: 'instruction_period',
    label: '指示期間',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'infusion',
    label: '点滴',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
];

const dataHomevisitNursingInfo: HomevisitNursingInfo[] = [
  {
    date_of_instruction: '2022/12/01',
    doctor_name: '琴平　平男',
    instruction_period: '2022/12/01 ～ 2023/05/31',
    infusion: '*',
  },

  {
    date_of_instruction: '2022/04/01',
    doctor_name: '琴平　平男',
    instruction_period: '2022/06/01 ～ 2022/11/30',
    infusion: '*',
  },

  {
    date_of_instruction: '2021/12/01',
    doctor_name: '琴平　平男',
    instruction_period: '2021/12/01 ～ 2022/05/31',
    infusion: '*',
  },

  {
    date_of_instruction: '2021/06/01',
    doctor_name: 'テスト　主治医Ａ',
    instruction_period: '2021/06/01 ～ 2021/11/30',
    infusion: '*',
  },

  {
    date_of_instruction: '2020/12/01',
    doctor_name: 'テスト　主治医Ａ',
    instruction_period: '2020/12/01 ～ 2021/05/31',
    infusion: '*',
  },

  {
    date_of_instruction: '2020/06/01',
    doctor_name: 'テスト　主治医Ａ',
    instruction_period: '2020/06/01 ～ 2020/11/30',
    infusion: '*',
  },
];

export { columnsTableHomevisitNurseInfo, dataHomevisitNursingInfo };
