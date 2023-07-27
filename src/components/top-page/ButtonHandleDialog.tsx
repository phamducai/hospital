import { ReactNode } from 'react';
type ButtonHandleDialogProp={
  buttonProp:ReactNode
  message: string;
  exampleID: string
}


export default  function ButtonHandleDialog({buttonProp}:ButtonHandleDialogProp){

  return(
    <>
      {buttonProp}

    </>
  )
}
