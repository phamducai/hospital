import MasterLayout from '@/layout/MasterLayout';
import { Form, Button } from 'react-bootstrap';
import '@/assets/scss/user/changepassword/ChangePassword.scss';

function ChangePassword() {
  return (
    <MasterLayout>
      <div className="main" id="password">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form.Group className="user-list mt-1">
            <div className="text-start mt-2">
              <h5>パスワード変更</h5>
            </div>
            {/* <div className="  justify-content-start"> */}

            <div className="d-block d-md-flex justify-content-left align-items-center ">
              <Form.Label className="px-2 mt-1" style={{ width: 'auto' }}>
                現パスワード
                <span className="color-text-custom" style={{ color: 'red' }}>
                  【必】
                </span>
              </Form.Label>

              <Form.Control
                className="d-block d-md-flex justify-content-left align-items-center mt-1 input-desktop-a"
                type="text"
                id="currentPassword"
              />
            </div>

            <div className="d-block d-md-flex justify-content-left align-items-center">
              <Form.Label className="px-2 mt-1" style={{ width: 'auto' }}>
                新パスワード
                <span className="color-text-custom" style={{ color: 'red' }}>
                  【必】
                </span>
              </Form.Label>

              <Form.Control
                className="d-block d-md-flex justify-content-left align-items-center mt-1 input-desktop-a"
                type="text"
                id="newPassword"
              />
            </div>

            <div className="d-block d-md-flex justify-content-left align-items-center">
              <Form.Label className="px-2 mt-1" style={{ width: 'auto' }}>
                新パスワードの確認 <span style={{ color: 'red' }}>【必】</span>
              </Form.Label>

              <Form.Control
                className="d-block d-md-flex justify-content-left align-items-center mt-1 input-desktop"
                type="text"
                id="confirmPassword"
              />
            </div>

            <div className="d-flex justify-content-between mt-3">
              <Button className="btn-success btn-min-w-30 button">登録</Button>
            </div>
          </Form.Group>
        </div>
      </div>
    </MasterLayout>
  );
}

export default ChangePassword;
