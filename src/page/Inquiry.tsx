import MasterLayout from '@/layout/MasterLayout';
import { Form } from 'react-bootstrap';
//import { FormLabel } from 'react-bootstrap';
import '@/assets/scss/user/manual/Manual.scss'
import { Table } from 'react-bootstrap';

function Inquiry() {
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
                  className="nav-link active "
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
              <h6>お問い合わせ先</h6>
            </div>
            <br />
            <div className="contact">
              <span className="headofline">■</span>

              <Form.Label className="contact-here">
                取扱方法等のご相談は、こちらまで。
              </Form.Label>
            </div>
            <br />
            <div className="contact-td">
              <div className="contact-information">株式会社アポロシステム</div>
            </div>

            <br />
            <div className="reception">受付時間 (平日)</div>
            <div className="reception-time">
              <span>午前 ９：００ ～ 午後 １２：００</span>
              <span>午後 １３：００ ～ 午後 １８：００</span>
            </div>

            <br />
            <div className="telephone">電話番号</div>
            <div className="number">０１２０－８７８－７２１</div>

            <br />
            <div className="email">メールアドレス</div>
            <div className="info">info@athome-kango.com</div>
            <br />
            <Table>
              <tbody>
                <tr>
                  <td className="first">※1</td>
                  <td className="description">
                    お問い合わせいただく前に「FAQ」「マニュアル」をご覧いただき、該当する情報が掲載されていないかをご確認ください。
                  </td>
                </tr>
                <tr>
                  <td className="first">※2</td>
                  <td className="description">
                    お問い合わせいただく前の注意をお読みくださいますよう、お願い致します。
                  </td>
                </tr>
              </tbody>
            </Table>
            <br />
            <div className="heading-6">
              <h6>お問い合わせいただく前の注意</h6>
            </div>
            <br />
            <div className="contact">
              <span className="headofline">■</span>

              <Form.Label className="contact-here">
                下記事項にご同意の上、お問い合わせください。
              </Form.Label>
              <div style={{ paddingLeft: '30px' }}>
                お客様からいただく個人情報は、弊社から、ご相談への回答、品質向上のために使用さ
              </div>
            </div>
          </Form.Group>
        </div>
      </div>
    </MasterLayout>
  );
}
export default Inquiry;
