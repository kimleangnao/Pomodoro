


const ProgressTime = ({repeats, whatIsRunning, countdownMinutes, breakTimeMinute, inputMinute, countdownSeconds, breakTimeSecond, inputSecond}) =>{



    return(
        <div>
            <div className="home-wrapper-ghostBar">
                <div className="home-wrapper-ghostBar-times"> {repeats} </div>
            </div>
            <div className="home-wrapper-times">
                
                <input type="tel" value={whatIsRunning === "progress" ? countdownMinutes :  breakTimeMinute} min="0" max="99" onChange={(e) => inputMinute(e)} className="home-wrapper-times-minutes" />
                 
                <div className="home-wrapper-times-colons">
                    :
                </div>

                <input type="tel" value={whatIsRunning === "progress" ? countdownSeconds :  breakTimeSecond} onChange={(e) => inputSecond(e)}  min="0" max="59"  className="home-wrapper-times-seconds" />
             
            </div>
        </div>
    )
}

export default ProgressTime;