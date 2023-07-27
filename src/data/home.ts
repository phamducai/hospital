/* eslint-disable no-irregular-whitespace */
export const accordionData = [
  {
    id: '0',
    title: 'システムの使い方が分からないときは',
    data: [
      `
      <b>お問合せ専用フリーダイヤル　<font size="5">0120-878-721</font>　（at home看護Mobile 担当まで）</b><br><br>
      <b>クイックスタートガイド　<a href="./doc/クイックスタートガイド（記録業務）.pdf" target="_blank">「記録業務編.pdf」</a></b>
      　<a href="./doc/クイックスタートガイド（請求業務）.pdf" target="_blank"><b>「請求業務編.pdf」</b></a>
      　<a href="./doc/クイックスタートガイド（便利な機能）.pdf" target="_blank"><b>「便利な機能編.pdf」<br></b></a>`,
    ],
  },
  {
    id: '1',
    title: 'お知らせ',
    data: [
      `<tr>
      <td class="info_td"></td>
      <td class="info_td"><font color="#E76161"></font></td>
      <td colspan="3">
        <b><font size="4"><font color="#E76161">【重要なお知らせ】※4月28日追加情報あり<br>・新型コロナウイルス感染症に係る診療報酬上の臨時的な取扱いについて</font></font></b><br><br>
        <b>令和5年5月8日</b>から新型コロナの感染症法上の位置付けが5類に変更になり、<br>
        下記の通り、公費負担や加算の金額などが変更されました。<br>
        詳細については、<a href="./doc/令和03年度_新型コロナ対応臨時措置（医療）.pdf" target="_blank"><b>「新型コロナ対応臨時措置.pdf」</b></a>をご覧ください。<br><br>

        <b>〇公費負担医療</b><br>
        　　自己負担分を28感染症公費で支援　⇒　28感染症公費対象外<br><br>
        <b>〇訪問時間に関わらず長時間加算を算定する措置</b><br>
        　・新型コロナ感染者への医師の指示による緊急訪問の場合<br>
        　　　長時間加算：15,600円　⇒　<b>5,200円</b>を1日に1回まで算定可能<br><br>
        　・新型コロナ感染者への計画通りの訪問の場合<br>
        　　　長時間加算：5,200円　⇒　<b>2,600円</b>を1日に1回まで算定可能<br><br>
        　　システム上では請求処理時に日付をもとに自動で判定を行い、金額を算定します。<br>
        　　<b>医療レセプト用情報に新型コロナの療養期間の入力項目を追加</b>しました。<br>
        　　<br>
        <b>〇新型コロナ起因による電話対応にて、管理療養費のみを算定する措置</b><br>
        　　システム上では保険種別「医療（コロナ電話対応）」を選択した場合については、<br>
        　　令和5年7月31日をもって終了します。<br>

        <br>
      </td>
    </tr>`,
    ],
  },
  {
    id: '2',
    title: '新着情報',
    data: [
      `<table class="info_table">
      <tbody>

      <tr>
        <td class="info_td">　</td>
        <td colspan="3"><font color="blue">－　機能改善　－</font></td>
      </tr>

      <tr>
        <td class="info_td">　</td>
        <td class="info_td2">2023/05/19</td>
        <td colspan="2">
          【医療レセプト用情報】　新型コロナ該当期間欄追加<br>
          新型コロナ臨時措置内容の変更に伴い、<br>
          医療レセプト用情報に新型コロナ該当期間欄を追加しました。<br>
          詳細については、<a href="./doc/令和03年度_新型コロナ対応臨時措置（医療）.pdf" target="_blank"><b>「新型コロナ対応臨時措置.pdf」</b></a>をご覧ください。<br>
          <br>
        </td>
      </tr>

      <tr>
        <td class="info_td">　</td>
        <td class="info_td2">2023/05/19</td>
        <td colspan="2">
          【各画面】　フリー入力欄の仕様変更<br>
          フリー入力欄に入力した文字が枠の横幅を超える場合、<br>
          枠内で改行される仕様に変更しました。<br>
          ※画面上の表示のみです。帳票上は改行記号や帳票の枠内で改行されます。<br>
          <br>
        </td>
      </tr>


      <tr>
        <td class="info_td">　</td>
        <td class="info_td2">2023/05/19</td>
        <td colspan="2">
          【指示情報／点滴指示情報】　入力可能文字数の上限の変更<br>
          指示情報／点滴指示情報の下記項目の入力可能文字数の上限を変更しました。<br>
          　・病状・治療状態　　　　　　　　：500文字⇒1,500文字<br>
          　・療養生活指導上の留意事項：256文字⇒750文字<br>
          <br>
        </td>
      </tr>


      <tr>
        <td class="info_td">　</td>
        <td class="info_td2">2023/05/19</td>
        <td colspan="2">
          【帳票統計出力】　担当職員検索の追加<br>
          帳票出力の検索メニューに担当職員検索を追加しました。<br>
          <br>
        </td>
      </tr>

      <tr>
        <td class="info_td">　</td>
        <td class="info_td2">2023/05/19</td>
        <td colspan="2">
          【レセプト作成画面】　利用者ソート順に担当職員順を追加<br>
          利用者一覧のソート順を担当職員順に変更できるように対応しました。<br>
          各利用者の利用者情報で登録している担当職員のカナ順にソートされます。<br>
          <br>
        </td>
      </tr>


      <tr>
        <td class="info_td">　</td>
        <td colspan="3" class="valign_top"><hr></td>
      </tr>
      <tr>
        <td class="info_td">　</td>
        <td colspan="3"><font color="red">－　不具合修正　－</font></td>
      </tr>

      <tr>
        <td class="info_td">　</td>
        <td class="info_td2">2023/05/19</td>
        <td colspan="2">05月19日の不具合修正はありません。</td>
      </tr>
      <tr><td colspan="4" class="info_blank">　</td></tr>


      <tr>
        <td class="info_td">　</td>
        <td colspan="3" class="valign_top"><hr></td>
      </tr>
      <tr>
        <td class="info_td">　</td>
        <td colspan="3"><font color="green">－　マニュアル　－</font></td>
      </tr>

      <tr>
        <td class="info_td">　</td>
        <td class="info_td2">2023/05/19</td>
        <td colspan="2">
          以下のマニュアルを更新しました。<br>
          （更新）　「04_指示計画情報.pdf」<br>
          （更新）　「07_請求処理.pdf」<br>
          （更新）　「08_帳票・データ・統計出力.pdf」<br>
        </td>
      </tr>

      <tr>
        <td class="info_td">　</td>
        <td colspan="3" class="valign_top"><hr></td>
      </tr>
      <tr>
        <td class="info_td">　</td>
        <td colspan="3"><font color="purple">－　更新履歴　－</font></td>
      </tr>
      <tr>
        <td class="info_td">　</td>
        <td class="info_td2"></td>
        <td colspan="2"><a href="./info_log.html">過去分はこちらから</a></td>

      </tr><tr><td colspan="4" class="info_blank">　</td></tr>
    </tbody></table>`,
    ],
  },
  {
    id: '3',
    title: 'システムメンテナンス情報',
    data: [
      `<table class="info_table">
      <tbody>
      <tr>
        <td class="info_td"></td>
        <td class="info_td"><font color="royalblue">■</font></td>
        <td colspan="3">
          原則、毎月第3金曜日 22：00 ～ 5：00 （午後10：00 ～ 翌午前5：00）は、<br>
          定期メンテナンスのためサービスをご利用できません。あらかじめご了承ください。<br>

          ＜06月～08月の予定＞

      </td></tr><tr>
        <td class="info_td">　</td>
        <td class="info_td">　</td>
        <td class="info_td">　</td>
        <td colspan="2" class="info_td3"><b>2023年06月16日</b></td>
      </tr>

      <tr>
        <td class="info_td">　</td>
        <td class="info_td">　</td>
        <td class="info_td">　</td>
        <td colspan="2" class="info_td3"><b>2023年07月21日</b></td>
      </tr>

      <tr>
        <td class="info_td">　</td>
        <td class="info_td">　</td>
        <td class="info_td">　</td>
        <td colspan="2" class="info_td3"><b>2023年08月18日</b></td>
      </tr>

      <tr><td colspan="5" class="info_blank">　</td></tr>

      <tr>
        <td class="info_td">　</td>
        <td class="info_td"><font color="royalblue">■</font></td>
        <td colspan="3">
          毎週月曜日 3：00 ～ 4：00 （午前3：00 ～ 午前4：00）は、<br>
          システムメンテナンスのため使用できません。あらかじめご了承ください。
        </td>
      </tr>
    </tbody></table>`,
    ],
  },
  {
    id: '4',
    title: '対応ブラウザ',
    data: [
      `<table class="info_table">
      <tbody>
      <tr>
        <td colspan="3">
        　　<font color="royalblue">■</font> <b>事業所様ごとの設定変更について</b><br>
        　　　　当システムでは事業所様の実際の運用に合わせるため、<br>
        　　　　事業所様ごとに設定を変更できる項目を用意しています。<br>
        　　　　下記リンク先資料に詳細を記載しております。<br>
        　　　　各システム設定を変更したい場合は、アポロシステムまでご連絡ください。<br>
        </td>
      </tr>
      <tr><td colspan="4" class="info_blank">　</td></tr>
      <tr>
        <td class="info_td2">　　　　『<a href="./doc/システム設定資料.pdf" target="_blank"><b>システム設定資料.pdf</b></a>』<br>
          <br>
        </td>
      </tr>

      <tr>
        <td colspan="3">
          　　<font color="royalblue">■</font> <b>システムの強制ログアウトについて</b><br>
          　　　　システムにログインしてから「１２０分間」画面の遷移やボタン操作を行わないと、<br>
          　　　　強制的にシステムからログアウトしますので、あらかじめご注意ください。<br>
          　　　　入力等に時間がかかる場合は、こまめに登録ボタンをクリックしてください。<br>
        </td>
      </tr>
    </tbody></table>`,
    ],
  },
  {
    id: '5',
    title: 'システム設定',
    data: [
      `<table class="info_table">
  <tbody>
  <tr>
    <td class="info_td">　</td>
    <td>Microsoft Edge（最新版）<br>
        Google Chrome（最新版）</td>
    <td class="info_td">　</td>
  </tr>
  <tr><td colspan="3" class="info_blank">　</td></tr>
  <tr>
    <td class="info_td">　</td>
    <td colspan="2"><hr></td>
  </tr>
  <tr>
    <td class="info_td">　</td>
    <td>
      PDFファイルをご覧いただくためにAdobe Readerが必要です。<br>
      最新のAcrobatはAdobe社のサイトよりダウンロード可能（無料）です。
    </td>
  </tr>
  <tr><td colspan="3" class="info_blank">　</td></tr>
</tbody></table>`,
    ],
  },

  {
    id: '6',
    title: 'SSL証明書',
    data: [
      `当システムでは、GMOグローバルサイン株式会社の
      SSL証明書を採用しています。
      これにより当サイトの情報は暗号化された状態で通信しています。`
    ]
  },
];
