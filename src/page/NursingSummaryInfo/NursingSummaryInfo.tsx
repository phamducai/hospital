/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * PG ID: NursingSummaryInfo (Nursing summary information)
 * PG NAME: 看護サマリー情報 (Nursing summary information)
 */
import MasterLayout from '@/layout/MasterLayout';
import { Col, Form, Row, Table, Button } from 'react-bootstrap';
import CustomHeading from '@/components/user/detail/TextHeader';
import TabButtonLink from '@/components/TabButtonLink';
import { tabButtonNursingSummaryInfo } from '@/data/common';
import { useNavigate } from 'react-router';

function NursingSummaryInfo() {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/nurse/nursing-summary-info-update');
  };

  return (
    <MasterLayout>
      <CustomHeading title="利用者基本情報" />
      <TabButtonLink active={2} arrayButton={tabButtonNursingSummaryInfo} />
      <div className="main">
        <div className="px-1 px-md-3 w-100 my-2">
          <Form className="user-list mt-2">
            <div className="d-sm-flex justify-content-between align-items-center mt-3">
                <Form.Group className="d-flex justify-content-between">
                {/* <h5>◆訪問看護基本情報</h5> */}
                </Form.Group>
                <div className="mb-md-2 text-start px-md-3 mt-2 mt-sm-0">
                  <Button className="w-100">
                    看護サマリー印刷
                  </Button>
                </div>
            </div>
          </Form>

          <Form className="w-100 h-100 d-flex flex-column" id="nursing-info">
            <Form.Group className="input-detail user-detail d-flex flex-column">
              <div>
                <Form.Group
                  as={Row}
                  className="mb-2 mt-2 form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={9} className="text-start">
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            記録年月日
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">2017/02/01</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            記録者氏名
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">大西　良樹</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            職種
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">看護師</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            提出先
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">ＡＡＡ病院</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            入院日
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">2016/08/01</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            感染症情報
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">有無</td>
                          <td className="bg-white">ＨＢｓ</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(その他)</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            アレルギー
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">有無</td>
                          <td className="bg-white">無</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(有の場合)</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            疾患・病状に対する <br /> 説明と理解
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">本人</td>
                          <td className="bg-white">炎症をおこしている。入院治療が必要。</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">家族</td>
                          <td className="bg-white">炎症の度合いが悪いようである。できれば入院による治療を行いたい。</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            服薬中の薬
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">有無</td>
                          <td className="bg-white">有</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">詳細</td>
                          <td className="bg-white">
                            新レシカルボン坐薬２０個外用 <br />
                            グリセリン浣腸「ムネ」５個外用 <br />
                            カロナール（２００）２錠頭痛時
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            入院・入所までの経過
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                          平成２６年３月３１日リハビリセンターを退院する。入院中から、褥瘡や膀胱炎等がみられており、退院後の在宅生活フォローの <br />
                          ため訪問看護導入となる。
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            看護上の問題点
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                          ＃1：運動がコントロールできないことによる身体損傷リスク <br />
                          ＃2：胸郭の変形、咳反射が弱いことに関連した非効果的呼吸パターン <br />
                          ＃3：胸やけなどの消化器症状があることでの安楽障害
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            継続して行って欲しいケア
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                            患部マッサージ
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <div className='form-group-container my-2 pt-2 pb-0 m-5'>＜日常生活動作（ＡＤＬ）等の状況＞</div>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　食事　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            食事
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">形態</td>
                          <td className="bg-white">普通食　経管栄養</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(治療食)</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            食事摂取方法
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">経口</td>
                          <td className="bg-white">自立</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">経管栄養</td>
                          <td className="bg-white">経管栄養</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">品名</td>
                          <td className="bg-white"></td>
                        </tr>
                        <tr>
                          <td className="td-w-100">サイズ</td>
                          <td className="bg-white"></td>
                        </tr>
                        <tr>
                          <td className="td-w-100">最終交換日</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div pt-3"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　排泄　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            排泄方法
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">方法</td>
                          <td className="bg-white">トイレ　尿器</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">品名</td>
                          <td className="bg-white"></td>
                        </tr>
                        <tr>
                          <td className="td-w-100">サイズ</td>
                          <td className="bg-white"></td>
                        </tr>
                        <tr>
                          <td className="td-w-100">最終交換日</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            排便コントロール
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">内容</td>
                          <td className="bg-white">その他</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(その他)</td>
                          <td className="bg-white"></td>
                        </tr>
                        <tr>
                          <td className="td-w-100">最終排便日	</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div pt-3"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　清潔　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            清潔方法
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">方法</td>
                          <td className="bg-white">入浴</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(その他)</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div pt-3"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　活動　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            麻痺
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                            有　右側
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            視覚障害
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">有無</td>
                          <td className="bg-white">無</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(有の場合)</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            聴覚障害
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">有無</td>
                          <td className="bg-white">無</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(有の場合)</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            移動手段
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">方法</td>
                          <td className="bg-white">杖</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(その他)</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div pt-3"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　意識・精神状態　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            意識・精神状態
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">状態</td>
                          <td className="bg-white">清明</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(その他)</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div pt-3"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　コミュニケーション　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            コミュニケーション
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">状態</td>
                          <td className="bg-white">問題なし</td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(その他)</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div pt-3"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                            【　医療処置　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            有無
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                            無
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            種類
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                          (酸素流量)
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            (気管切開) <br /> (カニューレ)
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">品名</td>
                          <td className="bg-white"></td>
                        </tr>
                        <tr>
                          <td className="td-w-100">サイズ</td>
                          <td className="bg-white"></td>
                        </tr>
                        <tr>
                          <td className="td-w-100">カフエア量</td>
                          <td className="bg-white"></td>
                        </tr>
                        <tr>
                          <td className="td-w-100">最終交換日</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            (人工呼吸器)<br />(機種名)
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            (その他)
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div pt-3"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                             【　ストーマケア　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            有無
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                            無
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            種類
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            (交換頻度)
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div pt-3"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                             【　皮膚・創部管理　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            有無
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                            無
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            種類
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            (部位・サイズ)
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            (処置薬剤)
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            (処置方法)
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div pt-3"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                             【　疼痛管理　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            有無
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                            無
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            方法
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            (その他)
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle label-table"
                            rowSpan={7}
                          >
                            薬品
                          </td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(薬品名)</td>
                          <td className="bg-white"></td>
                        </tr>
                        <tr>
                          <td className="td-w-100">(使用量)</td>
                          <td className="bg-white"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div pt-3"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                             【　注射　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            有無
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">
                            無
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            種類
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            (その他)
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            (薬剤名)
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                              連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div pt-3"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21 text-center"
                            rowSpan={4}
                          >
                             【　その他　】
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            内容
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="form-group-container mt-3-div"
                  controlId="form_user_id"
                >
                  <Col sm={6} md={10} className="mt-2-div">
                    <Table responsive className="table-bordered mb-2">
                      <tbody className="bg-light-yellow label-dialog">
                        <tr>
                          <td
                            className="bg-light-yellow label-dialog align-middle td-w-sm-21"
                            rowSpan={4}
                          >
                            連絡事項
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-white">

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-2 form-group-container mt-3-div"
                  controlId="form_button_container"
                >
                  <Col sm={10} className="mt-2-div mt-2">
                    <Button
                      className="min-w-btn-150"
                      variant="success"
                      onClick={() => handleEdit()}>
                      編集
                    </Button>
                  </Col>
                </Form.Group>
              </div>

              {/* {isShowDoneDialogDelete && (
                <DialogConfirm
                  buttons={buttons}
                  message="データを削除しました。"
                  onHidePopup={handleDoneDialogDelete}
                  className="w-dialog-confirm text-danger"
                />
              )} */}

            </Form.Group>
          </Form>
        </div>
      </div>
    </MasterLayout>
  );
}

export default NursingSummaryInfo;
