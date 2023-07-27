import MasterLayout from '@/layout/MasterLayout';
//import Tab from 'react-bootstrap/Tab';
//import Tabs from 'react-bootstrap/Tabs';
import { Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import '@/assets/scss/user/manual/Manual.scss';
function Manual() {
  return (
    <MasterLayout>
      <div className="main" id="manual">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form.Group className="user-list mt-1">
            <div className="text-start mt-2">
              <h5>パスワード変更</h5>
            </div>
            <br />

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item align-items-center" role="presentation">
                <button
                  className="nav-link active "
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#manual"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  マニュアル
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#faq"
                  href="/page/Faq"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  FAQ
                </a>
              </li>

              <li className="nav-item " role="presentation">
                <a
                  className="nav-link "
                  id="messages-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#inquiry"
                  href="/page/Inquiry"
                  role="tab"
                  aria-controls="messages"
                  aria-selected="false"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>

            <br></br>
            <div className="heading-6">
              <h6>PC機能操作マニュアル</h6>
            </div>
            <br />
            <Table>
              <div className="smaller-width">
                <tr>
                  <td>00_システム操作フロー.pdf</td>
                  <td>2019/12/20</td>
                </tr>
                <tr>
                  <td>01_基本操作.pdf</td>
                  <td>2022/12/16</td>
                </tr>
                <tr>
                  <td>02_利用者情報.pdf</td>
                  <td>2022/12/16</td>
                </tr>
                <tr>
                  <td>03_保険公費情報.pdf</td>
                  <td>2022/08/19</td>
                </tr>
                <tr>
                  <td>04_指示計画情報.pdf</td>
                  <td>2023/06/16</td>
                </tr>
                <tr>
                  <td>05_スケジュール.pdf</td>
                  <td>2023/03/17</td>
                </tr>
                <tr>
                  <td>06_ファイル・画像管理.pdf</td>
                  <td>2023/04/21</td>
                </tr>
                <tr>
                  <td>07_請求処理.pdf</td>
                  <td>2023/05/19</td>
                </tr>
                <tr>
                  <td>08_帳票・データ・統計出力.pdf</td>
                  <td>2023/06/16</td>
                </tr>
                <tr>
                  <td>09_ステーション管理・マスタメンテナンス.pdf</td>
                  <td>2023/06/16</td>
                </tr>
                <tr>
                  <td>99_職員間連絡機能.pdf</td>
                  <td>2021/12/17</td>
                </tr>
              </div>
            </Table>
          </Form.Group>
          .
        </div>
      </div>
    </MasterLayout>
  );
}
export default Manual;
