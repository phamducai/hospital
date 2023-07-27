import {
    RELATIONSHIP,
    PROFESSION
} from '@/data/user-list';
import { Form, Table } from "react-bootstrap";

const FamilyCompositionForm = () => {
    const numberRow = [
        {
            id: 1,
            name: '観音寺　花子',
            age: '65',
            relation: '母',
            profession: '無職',
            contact: '070-0000-0000'
        },
        { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 },
    ];

    return (
        <Table className='table-bordered mb-2' responsive="sm">
            <tbody>
                <tr className='bg-light-yellow text-center align-middle'>
                    <td rowSpan={18} className='label-dialog text-algin-left w-auto-lable'>家族構成</td>
                    <td rowSpan={2} className='w-20-div'>No.</td>
                    <td className='w-100-input'>氏名</td>
                    <td>年齢</td>
                    <td >続柄</td>
                    <td >職業</td>
                    <td >連絡先</td>
                </tr>
                <tr className='bg-light-yellow  text-center'>
                    <td colSpan={5} >特記事項</td>
                </tr>

                {numberRow.map((column) => (
                    <><tr className='text-center'>
                        <td rowSpan={2} className='bg-yellow align-middle w-20-div'>{column.id}</td>
                        <td className='w-100-input'>
                            <Form.Control
                                type="text"
                                placeholder="氏名"
                                name="requester"
                                className='w-100 w-150-name'
                                defaultValue={column.name ?? ''}
                            />
                        </td>
                        <td className='w-30-td'>
                            <Form.Control
                                type="text"
                                name="requester"
                                defaultValue={column.age ?? ''}
                                className='w-50-old '
                            />
                        </td>
                        <td className="w-100-input">
                            <Form.Select
                                name="relationship"
                                defaultValue={column.relation ?? ''}
                                className='w-100-td w-120-select'
                            >
                                {RELATIONSHIP.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))}
                            </Form.Select>
                        </td>
                        <td className="w-100-input">
                            <Form.Select
                                name="profession"
                                defaultValue={column.profession ?? ''}
                                className='w-120-select'
                            >
                                {PROFESSION.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))}
                            </Form.Select>
                        </td>
                        <td className="w-100-input text-center">
                            <Form.Control
                                type="text"
                                placeholder="依頼元"
                                name="requester"
                                className='w-100 w-140-contact'
                                defaultValue={column.contact ?? ''}
                            />
                        </td>
                    </tr>
                        <tr>
                            <td colSpan={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="特記事項"
                                    name="notices"
                                    className='w-100'
                                />
                            </td>
                        </tr>
                    </>

                ))}
            </tbody>
        </Table>
    );
};

export default FamilyCompositionForm;
