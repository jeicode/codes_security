import { actionTypes } from "../reducer_objs/verifyCode"


function codeIsValid(code, codeg){
    return code === codeg
}


const verifyCode = (codeValue, message, codeg, dispatch, setStateApp) => {
    message.show = true
    const _codeIsValid = codeIsValid(codeValue, codeg )

    if (_codeIsValid){
        message.detail = 'Code valid!'
        message.className = 'text-success'
        setStateApp({ codeIsValid: true})

    } else {
        message.detail = 'Code invalid!'
        message.className = 'text-danger'
    }
    dispatch({type: actionTypes.loading})
    dispatch({type: actionTypes.newMsg, payload: {errorCode: !_codeIsValid, message} })
}
export {codeIsValid, verifyCode}