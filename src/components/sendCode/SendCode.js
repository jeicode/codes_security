import React from "react";


const SendCode = ({sendCode}) => {
    return (
        <>
        <div className="card">
            <div className="card-header">
                VERIFICATION PROCESS
            </div>

            <div className="card-body">
                Send code to continue with the verification process.
            </div>

            <div className="m-2">
                <button className='btn btn-success'
                        onClick={ () => sendCode()}>
                    Ok. Send code
                </button>
            </div>
        </div>
        </>
    )

}


export {SendCode}