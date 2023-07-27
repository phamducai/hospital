import MasterLayout from '@/layout/MasterLayout';
import { Form } from 'react-bootstrap';
import '@/assets/scss/user/manual/Manual.scss';
import { Button } from 'react-bootstrap';

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

            <ul className="nav nav-tabs " id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link "
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#manual"
                  type="button"
                  href="/page/Manual"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  マニュアル
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link active "
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
                  className="nav-link  "
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
            <div className="d-block d-md-flex justify-content-left align-items-center ">
              <Form.Label className="px-2 mt-1">キーワード検索</Form.Label>

              <input
                className="d-md-flex d-block justify-content-center align-items-center mt-1 px-3 h-100 input-desktop-b"
                type="text"
                id="newPassword"
              ></input>

              <Form.Label className="px-2 mt-1" style={{ width: 'auto' }}>
                キーワード検索
              </Form.Label>
              <select
                className="bg-white h-100 input-dropdown-search"
                id="drop_id"
              >
                <option value="0">基本操作</option>
                <option value="1">利用者情報</option>
                <option value="2">保険/公費情報</option>
                <option value="3">指示/計画情報</option>
                <option value="4">スケジュール/訪問看護実績</option>
                <option value="5">請求処理/レセプト作成</option>
                <option value="6">ファイル・画像管理</option>
                <option value="7">ステーション管理</option>
                <option value="8">マスタメンテナンス</option>
                <option value="9">モバイル機能</option>
                <option value="10">その他</option>
              </select>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <Button className="btn-success btn-min-w-30 button">検索</Button>
            </div>
          </Form.Group>
        </div>
      </div>
    </MasterLayout>
  );
}
export default Manual;
