import { MouseEventHandler } from "react";

type SubmitButtonProps = {
    value: string,
    width?: number,
    onClick?: MouseEventHandler,
}

const SubmitButton = ({ value, onClick }: SubmitButtonProps) => {
    const btnStyle = {
        backgroundColor: '#E86A33',
        borderRadius: 5,
        color: 'white'
    }
    return (
        <button className="btn text-light w-100 px-5" style={btnStyle} onClick={onClick}> {value} </button>
    )
};

export default SubmitButton;
