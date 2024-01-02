


const InputTime = ({inputMinute,inputSecond, activeProgress, countdownMinutes, countdownSeconds, breakTimeMinute, breakTimeSecond}) => {

    return(
        <div>
            <div className="home-wrapper-times">
                
                <input type="tel"  min="0" max="99" value={activeProgress ? countdownMinutes : breakTimeMinute} onChange={(e) => inputMinute(e)} className="home-wrapper-times-minutes" />
                 
                <div className="home-wrapper-times-colons">
                    :
                </div>

                <input type="tel" value={activeProgress ? countdownSeconds : breakTimeSecond} onChange={(e) => inputSecond(e)}  min="0" max="59"  className="home-wrapper-times-seconds" />
             
            </div>
        </div>
    )
}


export default InputTime;