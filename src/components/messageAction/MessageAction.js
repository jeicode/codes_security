

const MessageAction = ({message}) => {
    const {show, detail, className} = message
    if (show) {
        return (
        <div className={`${className} m-2`}>
            {detail}
        </div>
        )
    }
    return null
}

export {MessageAction}