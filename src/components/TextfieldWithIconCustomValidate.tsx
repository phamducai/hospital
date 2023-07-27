/*
 ** EXAMPLE TO USE THIS COMPONENT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

<TextFieldWithIcon id="id_1" label="メールアドレス" labelColor='rgb(255,255,204)' >
    <FontAwesomeIcon icon={faMagnifyingGlass}/>
</TextFieldWithIcon>
*/

import { ReactNode, useState } from "react";
import React from "react";

type TextFieldWithIconProps = {
  id: string,
  label?: string,
  labelColor?: string,
  children: ReactNode,
  onIconClick?: React.MouseEventHandler,
  required?: boolean,
  inputClassName?: string,
  maxlength?: number,
  widthInput?: string,
  regex?: any
}

const TextfieldWithIconCustomValidate = ({ id, label, labelColor, children, onIconClick, required, inputClassName = '', maxlength, widthInput, regex }: TextFieldWithIconProps) => {
  const [errorAction, setErrorAction] = React.useState(false);
  const labelStyle = {
    minInlineSize: 145,
    backgroundColor: labelColor ? labelColor : 'none'
  }
  const inputStyle = {
    border: errorAction ? '1px solid red' : '1px solid #adadad',
    width: widthInput
  }
  const iconStyle = {
    border: '1px solid #adadad',
    cursor: 'pointer',
    paddingLeft: '-2px',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  }
  const containerStyle = {
    display: 'flex',
    blockSize: 34,
    inlineSize: '100%',
    fontSize: 14,
  }
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (regex?.test(value)) {
      setInputValue(value);
    }
  };
  return (
    <div className="d-md-flex justify-content-center align-items-center">
      {label && (
        <div className="d-md-flex align-items-center h-100" style={labelStyle}>
          <label className="px-lg-2"> {label} </label>
        </div>
      )}
      <div style={containerStyle}>
        <input type="text"
          value={inputValue}
          onChange={handleInputChange} maxLength={maxlength} className={"flex-grow-1 h-100 input-text-icon " + inputClassName} id={id} style={inputStyle} required={required} onInvalid={() => setErrorAction(true)} onInput={() => setErrorAction(false)} />
        <div className="d-flex justify-content-center align-items-center px-2 bg-white h-100" style={iconStyle} onClick={onIconClick} >
          {children}
        </div>
      </div>
    </div>
  )
};

export default TextfieldWithIconCustomValidate;
