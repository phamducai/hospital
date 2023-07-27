const menuItemsBeforeLogin = [
  {
    text: 'ID',
    url: '#',
  },
  {
    text: 'パスワード',
    url: '#',
  },
  {
    text: 'ログイン',
    url: '/',
  },
];

const menuItemsAfterLogin = [
  {
    text: '利用者情報',
    url: '/user-search',
  },
  {
    text: '申し送り情報',
    url: '/user-search',
  },
  {
    text: '訪問検索',
    url: '/user-search',
  },
  {
    text: 'ファイル／画像管理',
    url: '/page/image-management',
  },
  {
    text: '請求メニュー',
    url: '/user-search',
  },
  {
    text: 'ステーション管理',
    url: '/user-search',
  },
  {
    text: '統計出力',
    url: '/user-search',
  },
  {
    text: '帳票出力',
    url: '/user-search',
  },
  {
    text: 'データ出力',
    url: '/user-search',
  },
  {
    text: 'マスタメンテナンス',
    url: '/user-search',
  },
  {
    text: 'サポート情報',
    url: '/page/Manual',
  },
  {
    text: 'パスワード変更',
    url: '/page/change-password',
  },
];

const menuItemsOnClickRow = [
  {
    text: '利用者基本情報',
    url: '/user-detail',
  },
  {
    text: '保険／公費情報',
    url: '/user/insurance/medical-insurance',
  },
  {
    text: '指示／計画情報',
    url: '/user/instructions/home-visit-nursing-instruct-info',
  },
  {
    text: '褥瘡対策看護計画情報',
    url: '#',
  },
  {
    text: '利用状況サマリー／口座情報',
    url: '/user/usage-summary-info',
  },
  {
    text: '看護サマリー情報',

    url: '/nurse/nursing-summary-list',

  },
  {
    text: 'トップメニューに戻る',
    url: '#',
  },
];

const menuItemsTopPage = [
  {
    name: '利用者検索',
    subName: '（基本／保険･公費／指示･計画）',
    url: '/user-search',
  },
  {
    name: '申し送り情報',
    subName: '',
    url: '/user/search-screen',
  },
  {
    name: '訪問検索',
    subName: '',
    url: '#',
  },
  {
    name: 'ファイル／画像管理',
    subName: '',
    url: '/file/file-search',
  },
  {
    name: '請求メニュー',
    subName: '（医療／介護／実費）',
    url: '#',
  },
  {
    name: 'ステーション管理',
    subName: '（業務日誌／期限切れ／登録情報）',
    url: '#',
  },
  {
    name: '統計出力',
    subName: '',
    url: '#',
  },
  {
    name: '帳票出力',
    subName: '',
    url: '#',
  },
  {
    name: 'データ出力',
    subName: '',
    url: '#',
  },
  {
    name: 'マスタメンテナンス',
    subName: '',
    url: '#',
  },
  {
    name: 'サポート情報',
    subName: '',
    url: '/page/Manual',
  },
  {
    name: 'パスワード変更',
    subName: '',
    url: '/page/change-password',
  },
  {
    name: 'スケジュール',
    subName: '',
    url: '/user/schedule',
  },

  {
    name: '職員間連絡機能',
    subName: '',
    url:'/user/inter-staff',

  },
  // {
  //   name: 'スケジュール',
  //   subName: '',
  //   url: '/user/schedule',
  // },
];
//******/
const tabButtonUsageSummaryInfo = [
  {
    title: '◆　契約情報等一覧',
    link: '/user/usage-summary-info',
  },
  {
    title: '◆　有効保険／公費情報等一覧',
    link: '/user/insurance-expense-info',
  },
  {
    title: '◆　口座情報',
    link: '/user/account-info',
  },
  {
    title: '◆　請求情報一覧',
    link: '/user/billing-info',
  },
];
//
const itemTabInsurance = [
  {
    title: '医療保険情報　',
    link: '/user/insurance/medical-insurance'
  },
  {
    title: '高齢受給者情報',
    link: '/user/insurance/elderly-beneficiary'
  },
  {
    title: '後期高齢者情報',
    link: '/user/insurance/latter-stage-elderly'
  },
  {
    title: '限度額認定情報',
    link: '/user/insurance/limit-identification'
  },
  {
    title: '特定疾病療養受療情報',
    link: '/user/insurance/specific-disease-medical-treatment'
  },
  {
    title: '介護保険情報',
    link: '/user/insurance/long-term-care-insurance'
  },
  {
    title: '公費情報',
    link: '/user/insurance/intelligence-public-expense'
  },
  {
    title: '加算情報',
    link: '/user/insurance/additional-information'
  },
]

const itemTabHomevisitNursingInfo = [
  {
    title: '訪問看護指示情報',
    link: '/user/instructions/home-visit-nursing-instruct-info'
  },
  {
    title: '訪問看護計画情報',
    link: '/user/instructions/visiting-nursing-plan-info'
  },
]

/***/
const tabButtonNursingSummaryInfo = [
  {
    title: '◆　看護サマリー一覧',
    link: '/nurse/nursing-summary-list',
  },
  {
    title: '◆　看護サマリー情報',
    link: '/nurse/nursing-summary-info',
  },
  {
    title: '◆　画像情報',
    link: '/nurse/image-info',
  },
];
/***/

enum ActionIconButton {
  BTN_SHOW = 'btnShow',
  BTN_EDIT = 'btnEdit',
  BTN_DEL = 'btnDel',
}

enum ActionRedirect {
  USER_INFORMATION = 'USER_INFORMATION',
  NURSING_BASIC_INFO = 'NURSING_INFO',
  ADMISSION_DISCHARGE_INFO = 'ADMISSION_DISCHARGE_INFO',
  CANCER_DOCTORS_INFO = 'CANCER_DOCTORS_INFO',
}

const setLoginStatusStorage = (status: boolean) => {
  localStorage.setItem('loginStatus', JSON.stringify(status));
};

const getLoginStatusStorage = () => {
  return JSON.parse(localStorage.getItem('loginStatus') ?? 'false');
};



export {
  menuItemsBeforeLogin,
  menuItemsAfterLogin,
  menuItemsOnClickRow,
  menuItemsTopPage,
  itemTabInsurance,
  itemTabHomevisitNursingInfo,
  ActionIconButton,
  setLoginStatusStorage,
  getLoginStatusStorage,
  ActionRedirect,
  tabButtonUsageSummaryInfo,
  tabButtonNursingSummaryInfo,
};
