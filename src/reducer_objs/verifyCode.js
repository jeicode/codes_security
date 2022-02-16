
const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    write: 'WRITE',
    reset: 'RESET',
    loading: "LOADING",
    codeVerified: "CODE_VERIFIED",
    newMsg: "NEW_MSG"
};


const reducerObject = (state, payload) => {
    return {
        [actionTypes.loading]: { ...state, loading: true },
        [actionTypes.codeVerified]: { ...state, loading: false },
        [actionTypes.write]: { ...state, codeValue: payload },
        [actionTypes.newMsg]: {
            ...state,
            ...payload
        }
    }


}

const reducer = (state, { payload, type }) => {
    // console.log("state ", state)
    if (type in reducerObject(state, {})) {
        console.log("return.. ", reducerObject(state, payload)[type])
        return reducerObject(state, payload)[type];
    } else {
        return state;
    }
};


export {
    reducer,
    reducerObject,
    actionTypes

}