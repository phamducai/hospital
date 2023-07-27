import { ColumnTableCustom, TextAlign } from '@/interfaces/ColumnTableCustom';
import { AdditionalInfo } from '@/interfaces/AdditionalInfo';
import { AdditionalInfoRegister } from '@/interfaces/AdditionalInfoRegister';
import { AdditionalInfoRegister2 } from '@/interfaces/AdditionalInfoRegister';

const columnsTableAdditionalInfo: ColumnTableCustom[] = [
  {
    id: 'insuranceType',
    label: '保険種別',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'valid_period',
    label: '有効期間',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'addition_name',
    label: '加算名称',
    align: TextAlign.Left,
    minWidthValue: 100,
  },
];

const dataAdditionalInfo: AdditionalInfo[] = [
  {
    insuranceType: '医療',
    valid_period: '令05/07/01 ～ 令05/07/31',
    addition_name: '訪問看護ターミナルケア療養費1',
  },
  {
    insuranceType: '医療',
    valid_period: '令05/06/01 ～ 継続算定',
    addition_name: '機能強化型訪問看護管理療養費１（月の初回）',
  },
  {
    insuranceType: '医療',
    valid_period: '令05/06/01 ～ 令05/06/30',
    addition_name: '訪問看護ターミナルケア療養費2',
  },
];

const columnsTableAdditionalInfoRegister: ColumnTableCustom[] = [
  {
    id: 'insuranceType',
    label: '保険種別',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'none',
    label: '',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'addition_name',
    label: '加算名称',
    align: TextAlign.Left,
    minWidthValue: 100,
  },
  {
    id: 'money_amount',
    label: '金額',
    align: TextAlign.Right,
    minWidthValue: 100,
  },
];

const dataAdditionalInfoRegister: AdditionalInfoRegister[] = [
  {
    insuranceType: '医療',
    none: '',
    addition_name: '訪問看護ターミナルケア療養費1',
    money_amount: '+50%',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '難病等複数回訪問加算（1日2回or3回以上）',
    money_amount: '変動',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '訪問看護管理療養費（月の初回）',
    money_amount: '7,440',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '訪問看護管理療養費（月２回目以降）',
    money_amount: '3,000',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '機能強化型訪問看護管理療養費１（月の初回）',
    money_amount: '12,830',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '機能強化型訪問看護管理療養費２（月の初回）',
    money_amount: '9,800',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '機能強化型訪問看護管理療養費３（月の初回）',
    money_amount: '8,470',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '機能強化型訪問看護管理療養費（月２回目以降）',
    money_amount: '3,000',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '退院時共同指導加算',
    money_amount: '8,000',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '退院支援指導加算',
    money_amount: '6,000',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '退院支援指導加算(長時間)',
    money_amount: '8,400',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '特別管理指導加算',
    money_amount: '2,000',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '２４時間対応体制加算',
    money_amount: '6,400',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '特別管理加算（5000）',
    money_amount: '5,000',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '特別管理加算（2500）',
    money_amount: '2,500',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '特別管理加算（新型コロナ対応）',
    money_amount: '2,500',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '訪問看護情報提供療養費１',
    money_amount: '1,500',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '訪問看護情報提供療養費２',
    money_amount: '1,500',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '訪問看護情報提供療養費３',
    money_amount: '1,500',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '医療観察訪問看護情報提供料Ⅰ',
    money_amount: '2,000',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '医療観察訪問看護情報提供料Ⅱ',
    money_amount: '1,500',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '訪問看護ターミナルケア療養費1',
    money_amount: '25,000',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '訪問看護ターミナルケア療養費2',
    money_amount: '10,000',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '遠隔死亡診断補助加算',
    money_amount: '1,500',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '在宅患者連携指導加算',
    money_amount: '3,000',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '在宅緊急時等カンファレンス加算',
    money_amount: '2,000',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '看護・介護職員連携強化加算',
    money_amount: '2,500',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '専門管理加算',
    money_amount: '2,500',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '乳幼児加算（６歳未満）',
    money_amount: '1,500',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '精神科複数回訪問加算（1日2回or3回以上）',
    money_amount: '変動',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '精神科重症患者支援管理連携加算イ',
    money_amount: '8,400',
  },
  {
    insuranceType: '医療',
    none: '',
    addition_name: '精神科重症患者支援管理連携加算ロ',
    money_amount: '5,800',
  },
];

const columnsTableAdditionalInfoRegister2: ColumnTableCustom[] = [
  {
    id: 'insuranceType2',
    label: '保険種別',
    align: TextAlign.Center,
    minWidthValue: 100,
  },
  {
    id: 'addition_code',
    label: '加算コード',
    align: TextAlign.Left,
    minWidthValue: 100,
  },
  {
    id: 'addition_name2',
    label: '加算名称',
    align: TextAlign.Left,
    minWidthValue: 100,
  },
  {
    id: 'credits_number',
    label: '単位数',
    align: TextAlign.Right,
    minWidthValue: 100,
  },
];

const dataAdditionalInfoRegister2: AdditionalInfoRegister2[] = [
  {
    insuranceType2: '介護',
    addition_code: '133100',
    addition_name2: '訪問看護ターミナルケア療養費1',
    credits_number: '574',
  },
  {
    insuranceType2: '介護',
    addition_code: '134000',
    addition_name2: '訪問看護特別管理加算Ⅰ',
    credits_number: '500',
  },
  {
    insuranceType2: '介護',
    addition_code: '133101',
    addition_name2: '訪問看護特別管理加算Ⅱ',
    credits_number: '250',
  },
  {
    insuranceType2: '介護',
    addition_code: '134002',
    addition_name2: '訪問看護初回加算',
    credits_number: '300',
  },
  {
    insuranceType2: '介護',
    addition_code: '134003',
    addition_name2: '訪問看護退院時共同指導加算',
    credits_number: '600',
  },
  {
    insuranceType2: '介護',
    addition_code: '134004',
    addition_name2: '訪問看護介護連携強化加算',
    credits_number: '250',
  },
  {
    insuranceType2: '介護',
    addition_code: '134010',
    addition_name2: '訪問看護体制強化加算Ⅰ',
    credits_number: '550',
  },
  {
    insuranceType2: '介護',
    addition_code: '134005',
    addition_name2: '訪問看護体制強化加算Ⅱ',
    credits_number: '200',
  },
  {
    insuranceType2: '介護',
    addition_code: '134111',
    addition_name2: '訪問看護同一建物減算１',
    credits_number: '-10%',
  },
  {
    insuranceType2: '介護',
    addition_code: '134112',
    addition_name2: '訪問看護同一建物減算２',
    credits_number: '-15%',
  },
  {
    insuranceType2: '介護',
    addition_code: '136103',
    addition_name2: '訪問看護サービス提供体制加算Ⅰ１',
    credits_number: '6',
  },
  {
    insuranceType2: '介護',
    addition_code: '136101',
    addition_name2: '訪問看護サービス提供体制加算Ⅱ１',
    credits_number: '3',
  },
  {
    insuranceType2: '介護',
    addition_code: '136104',
    addition_name2: '訪問看護サービス提供体制加算Ⅰ２',
    credits_number: '50',
  },
  {
    insuranceType2: '介護',
    addition_code: '136102',
    addition_name2: '訪問看護サービス提供体制加算Ⅱ２',
    credits_number: '25',
  },
  {
    insuranceType2: '介護',
    addition_code: '137000',
    addition_name2: '訪問看護ターミナルケア加算',
    credits_number: '2,000',
  },
  {
    insuranceType2: '介護',
    addition_code: '138000',
    addition_name2: '特別地域訪問看護加算１',
    credits_number: '+15%',
  },
  {
    insuranceType2: '介護',
    addition_code: '138001',
    addition_name2: '特別地域訪問看護加算２',
    credits_number: '+15%',
  },
  {
    insuranceType2: '介護',
    addition_code: '138002',
    addition_name2: '特別地域訪問看護加算２日割',
    credits_number: '+15%',
  },
  {
    insuranceType2: '介護',
    addition_code: '138100',
    addition_name2: '訪問看護小規模事業所加算１',
    credits_number: '+10%',
  },
  {
    insuranceType2: '介護',
    addition_code: '138101',
    addition_name2: '訪問看護小規模事業所加算２',
    credits_number: '+10%',
  },
  {
    insuranceType2: '介護',
    addition_code: '138102',
    addition_name2: '訪問看護小規模事業所加算２日割',
    credits_number: '+10%',
  },
  {
    insuranceType2: '介護',
    addition_code: '138110',
    addition_name2: '訪問看護中山間地域等提供加算１',
    credits_number: '+5%',
  },
  {
    insuranceType2: '介護',
    addition_code: '138111',
    addition_name2: '訪問看護中山間地域等提供加算２',
    credits_number: '+5%',
  },
  {
    insuranceType2: '介護',
    addition_code: '138112',
    addition_name2: '訪問看護中山間地域等加算２日割',
    credits_number: '+5%',
  },
  {
    insuranceType2: '介護',
    addition_code: '633100',
    addition_name2: '予防緊急時訪問看護加算１',
    credits_number: '574',
  },
  {
    insuranceType2: '介護',
    addition_code: '634000',
    addition_name2: '予防訪問看護特別管理加算Ⅰ',
    credits_number: '500',
  },
  {
    insuranceType2: '介護',
    addition_code: '634001',
    addition_name2: '予防訪問看護特別管理加算Ⅱ',
    credits_number: '250',
  },
  {
    insuranceType2: '介護',
    addition_code: '634002',
    addition_name2: '予防訪問看護初回加算',
    credits_number: '300',
  },
  {
    insuranceType2: '介護',
    addition_code: '634003',
    addition_name2: '予防訪問看護退院時共同指導加算',
    credits_number: '600',
  },
  {
    insuranceType2: '介護',
    addition_code: '634005',
    addition_name2: '予防訪問看護体制強化加算',
    credits_number: '100',
  },
  {
    insuranceType2: '介護',
    addition_code: '634111',
    addition_name2: '予防訪問看護同一建物減算１',
    credits_number: '-10%',
  },
  {
    insuranceType2: '介護',
    addition_code: '634112',
    addition_name2: '予防訪問看護同一建物減算２',
    credits_number: '-15%',
  },
  {
    insuranceType2: '介護',
    addition_code: '636102',
    addition_name2: '予防訪問看護サービス提供体制加算Ⅰ',
    credits_number: '6',
  },
  {
    insuranceType2: '介護',
    addition_code: '636101',
    addition_name2: '予防訪問看護サービス提供体制加算Ⅱ',
    credits_number: '3',
  },
  {
    insuranceType2: '介護',
    addition_code: '638000',
    addition_name2: '予防特別地域訪問看護加算',
    credits_number: '+15%',
  },
  {
    insuranceType2: '介護',
    addition_code: '638100',
    addition_name2: '予防訪問看護小規模事業所加算',
    credits_number: '+10%',
  },
  {
    insuranceType2: '介護',
    addition_code: '638110',
    addition_name2: '予防訪問看護中山間地域等提供加算',
    credits_number: '+5%',
  },
];

export {
  columnsTableAdditionalInfo,
  dataAdditionalInfo,
  columnsTableAdditionalInfoRegister,
  dataAdditionalInfoRegister,
  columnsTableAdditionalInfoRegister2,
  dataAdditionalInfoRegister2
};
