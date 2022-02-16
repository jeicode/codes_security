

const Loading = ({color = 'text-primary'}) => {
    return (
        <div 
        className={`spinner-border ${color} m-2 d-block mx-auto`} 
        role="status"/>
    )

    
    
}


export { Loading }