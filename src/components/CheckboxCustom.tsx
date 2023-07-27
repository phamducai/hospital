type CheckBoxProps = {
  id: string;
  label: string;
  value?: string;
  spaceLable?: number;
  checked?: boolean;

};

const CheckBoxCustom = ({ id, label, value, checked }: CheckBoxProps) => {
  const inputStyle = {
    inlineSize: 24,
    blockSize: 24,
  };
  return (
    <div className="d-flex align-item-center mt-1 display-inline-block">
      <input
        type="checkbox"
        className="mx-1"
        id={id}
        value={value}
        style={inputStyle}
        defaultChecked={checked}

      />
      <label>{label}</label>
    </div>
  );
};

export default CheckBoxCustom;
