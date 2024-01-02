


const ProgressBar = ({title, number, maxNumber}) => {
    return(
        <div className="progressBar">
            <div className="progressBar-info">
                <div className="progressBar-info-text">
                    {title}
                </div>
                <div className="progressBar-info-maxNumber">
                    {maxNumber} Hours
                </div>
            </div>
            <div className="progressBar-bar">
                <div className="progressBar-bar-percentage" style={{width: `${ (number / maxNumber)*100 }%`, color: `${(number / maxNumber)*100 >= 10 ? "white" : "black"}`}}>
                    {number} Hours
                </div>  
            </div>
        </div>
    )
}


export default ProgressBar;