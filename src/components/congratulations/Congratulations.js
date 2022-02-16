
const Congratulations = ({message}) => {
    return (
        <div className="text-center m-2">
            <img
                src='/images/congratulation.png'
                alt="Congratulations"/>
            <div className="text-dark m-2">
                {message}
            </div>

        </div>
    )
}

export {Congratulations}