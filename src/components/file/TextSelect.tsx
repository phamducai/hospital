import { ReactNode } from "react";
import React from "react";
interface optionSelected {
  key: string | number,
  value: string | number

}

type TextFieldWithIconProps = {
  id: string,
  label?: string,
  labelColor?: string,
  children: ReactNode,
  onIconClick?: React.MouseEventHandler,
  required?: boolean,
  inputClassName?: string,
  maxlength?: number
  data?: optionSelected[],
}

const TextSelect = ({ label, labelColor, data }: TextFieldWithIconProps) => {

  const labelStyle = {
    minInlineSize: 145,
    backgroundColor: labelColor ? labelColor : 'none'
  }

  const containerStyle = {
    display: 'flex',
    blockSize: 34,
    inlineSize: '100%',
    fontSize: 14,
  }
  return (
    <div className="d-md-flex justify-content-center align-items-center">
      {label && (
        <div className="d-md-flex align-items-center h-100" style={labelStyle}>
          <label className=" px-2"> {label} </label>
        </div>
      )}
      <div style={containerStyle}>
        <select
          className={"flex-grow-1 h-100 "}
          id="drop_id"

        >
          <option value="-1"></option>
          {data?.map((option) => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
};

export default TextSelect;
