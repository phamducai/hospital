/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';

type RenderTextForTextFieldProps = {
    data?: string
}

const RenderTextForTextField = ({ data = '' }: RenderTextForTextFieldProps) => {
    const [hiddenLetter, setHiddenLetter] = useState(Array<any>);

    useEffect(() => {
        if (!data) {
            return;
        }
        const temp = data.split('').map((item: string) => {
            return {
                isShow: true,
                value: item,
            };
        });
        setHiddenLetter(temp);

    }, [data]);

    const clickHiddenLetter = (index: number) => {
        if (
            hiddenLetter[index].value == ' ' ||
            hiddenLetter[index].value == '　'
        ) {
            return;
        }
        let arr: any[] = [];
        arr = arr.concat(hiddenLetter);
        arr[index].isShow = !arr[index].isShow;
        setHiddenLetter(arr);
    };

    return (
        <div className="d-flex flex-wrap align-items-center mt-2 mt-md-0 sm-12">
            {hiddenLetter?.map((item: any, index: number) =>
                item.isShow ? (
                    <div
                        className="border border-1 border-dark px-2 py-1 -ml-1 btn-hidden-string"
                        onClick={() => clickHiddenLetter(index)}
                    >
                        {item.value}
                    </div>
                ) : (
                    <div
                        className="border border-1 border-dark px-2 py-1 -ml-1 btn-hidden-string"
                        onClick={() => clickHiddenLetter(index)}
                    >
                        ■
                    </div>
                ),
            )}
        </div>
    )
};

export default RenderTextForTextField;
