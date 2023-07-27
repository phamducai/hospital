
import { PropsWithChildren } from 'react'

interface ImageButtonProps {
    onImageClick: () => void,
    class?: string
}
function ImageButton(props: PropsWithChildren<ImageButtonProps>) {

    return (
        <>
            <button onClick={props.onImageClick} className={props.class}>
                {props.children}
            </button>
        </>
    )
}
export default ImageButton