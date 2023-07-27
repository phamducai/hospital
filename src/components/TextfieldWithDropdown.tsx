/*
 ** EXAMPLE TO USE THIS COMPONENT
const items: Person[] = [
  {userId: "id1",name: "name1", kanaName: "kanaName1",dateOfBirth: "1997-10-01",age: 33, gender: 'Male'},
  {userId: "id2",name: "name2", kanaName: "kanaName2",dateOfBirth: "1997-10-01",age: 33, gender: 'Male'},
  {userId: "id3",name: "name3", kanaName: "kanaName3",dateOfBirth: "1997-10-01",age: 33, gender: 'Male'},
  {userId: "id4",name: "name4", kanaName: "kanaName4",dateOfBirth: "1997-10-01",age: 33, gender: 'Male'},
]

<TextFieldWithDropdown
    id="drop_id" label="生年月日（年齢）"
    labelColor='rgb(255,255,204)'
    data={items}
    labelFieldName='kanaName'
    valueFieldName="userId"
/>
*/

interface TextFieldWithDropdownProps<T> {
  id: string,
  label?: string,
  labelColor?: string,
  data: T[],
  valueFieldName?: keyof T,
  labelFieldName: keyof T,
  spaceLable?: number
}
interface OptionData {
  value?: string,
  label: string
}

const mapToOptionData = <T extends object>(items: T[], valueFieldName?: keyof T, labelFieldName?: keyof T) => {
  const optionDatas: OptionData[] = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const optionData: OptionData = {
      value: valueFieldName ? String(item[valueFieldName]) : '',
      label: labelFieldName ? String(item[labelFieldName]) : '',
    };
    optionDatas.push(optionData);
  }
  return optionDatas;
}

const TextFieldWithDropdown = <T extends object>({ id, label, labelColor, data, valueFieldName, labelFieldName, spaceLable }: TextFieldWithDropdownProps<T>) => {
  const rows: OptionData[] = mapToOptionData(data, valueFieldName, labelFieldName);

  const labelStyle = {
    minInlineSize: spaceLable,
    backgroundColor: labelColor ? labelColor : 'none'
  }
  const containerStyle = {
    blockSize: 34,
    fontSize: 14,
  }
  return (
    <div className="d-md-flex justify-content-center align-items-center w-100">
      {label && (
        <div className="d-flex align-items-center h-100" style={labelStyle}>
          <label className=" px-2">{label}</label>
        </div>
      )}
      <div style={containerStyle}>
        <select className='bg-white h-100 input-dropdown-search ' id={id}>
          {rows.map((item, index) => (
            <option key={index} value={item.value || item.label}>{item.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
};

export default TextFieldWithDropdown;

