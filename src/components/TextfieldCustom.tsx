/*
 ** EXAMPLE TO USE THIS COMPONENT
<TextFieldCustom
    label="利用者ID"
    placeHolder="利用者ID"
    id="abc_id"
    labelColor='rgb(255,255,204)'
    note="都道府県、市区町村名（例：香川県高松市）"
    regex={/^[A-Za-z\s]+$/}
/>

<TextFieldCustom
    label="メールアドレス"
    placeHolder="メールアドレス"
    id="abc_id_2"
    labelColor='rgb(255,255,204)'
/>

*/
import React, { ChangeEvent } from 'react';

type TextFieldCustomProps = {
    id: string,
    type?: string,
    label?: string,
    labelColor?: string,
    placeHolder?: string,
    note?: string,
    regex?: RegExp,
    required?: boolean,
}

const TextFieldCustom = ({ id, label, type, labelColor, placeHolder, note, regex, required }: TextFieldCustomProps) => {
    const [errorAction, setErrorAction] = React.useState(false);
    const labelStyle = {
        minInlineSize: 145,
        backgroundColor: labelColor ? labelColor : 'none'
    };
    const inputStyle = {
        border: errorAction ? '1px solid red' : '1px solid black',
        blockSize: 34,
        inlineSize: '100%',
        outline: 'none',
        paddingInline: 5
    };
    const containerStyle = {
        display: 'flex',
        blockSize: note ? 34 * 2 : 34,
        inlineSize: '100%',
        fontSize: 14
    };
    const handleRegex = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value.trim();
        if (regex && value) {
            if (regex.test(value)) {
                setErrorAction(false);
            } else {
                setErrorAction(true);
            }
        }
    };
    return (
        <div style={containerStyle}>
            {label && (
                <div className="d-flex align-items-center h-100" style={labelStyle}>
                    <label className=" px-2"> {label} </label>
                </div>
            )}
            <div className="flex-grow-1 p-0">
                <div>
                    <input type={type || 'text'} placeholder={placeHolder} id={id} style={inputStyle} onChange={(e: ChangeEvent<HTMLInputElement>) => handleRegex(e)} required={required} onInvalid={() => setErrorAction(true)} onInput={() => setErrorAction(false)} />
                    <p style={{ minBlockSize: 34, fontSize: 12 }} className="d-flex align-items-center">{note}</p>
                </div>
            </div>
        </div>
    )
};

export default TextFieldCustom;
