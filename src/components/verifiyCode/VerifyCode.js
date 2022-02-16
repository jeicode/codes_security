import React from "react";

import { MessageAction } from "../messageAction/MessageAction";
import { verifyCode } from '../../utils/VerifyCode'
import { Loading } from "../loading/Loading";
// reducer 
import { reducer as reducerVerifyCode, actionTypes } from "../../reducer_objs/verifyCode";



const VerifyCode = ({ setStateApp, codeg , codeIsValid}) => {    
    const [state, dispatch] = React.useReducer(reducerVerifyCode, initState)
    const {loading, message, codeValue} = state

    React.useEffect(() => {
        if (!!loading) {
            setTimeout(() => {
                dispatch({ type: actionTypes.codeVerified})
            }, 3000);
        }
    }, [loading]);

    return (
        <>
            <div className="card">
                <div className="card-title p-2">
                    Enter code security send by console.log :)
                </div>

                <div className="card-body">

                    <form onSubmit={event => {
                        event.preventDefault()
                        verifyCode(codeValue, message, codeg, dispatch, setStateApp)
                    }}>
                        <input
                            className="form-control"
                            onChange={(event) => dispatch({ type: actionTypes.write, 
                                                            payload: event.target.value})}
                            placeholder="Enter code security" />

                        {loading && (
                            <Loading />
                        )}
                        {!loading && (
                            <MessageAction message={message}/>
                        )}
                        { !codeIsValid &&
                            <button type="submit"
                                className="btn btn-success m-2">
                                Verify
                            </button>
                        }
                        { (!!codeIsValid && !loading) && 
                            <button 
                                type="button"
                                className="btn btn-success m-2"
                                onClick={() => setStateApp({finishVerification: true})}>
                                Finish verification
                            </button>
                        
                        }

                    </form>

                </div>
            </div>
        </>
    )

}

const initState = {
    codeValue: '',
    errorCode: false,
    loading: false,
    message: {
        show: false,
        detail: '',
        className: ''
    }
    
}


export { VerifyCode }