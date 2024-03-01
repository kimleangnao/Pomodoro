


const ProgressTime = ({minute, second, minuteChange, secondChange, setMinute, setSecond}) =>{

    //make number look good
    //if it's single digit, add zero before it
    // that's it


    return(
        <div>
            <div className="home-wrapper-ghostBar">
                <div className="home-wrapper-ghostBar-times"> {0} </div>
            </div>
            <div className="home-wrapper-times">
                
                <input type="tel" value={minute} onChange={(e) => minuteChange(e, setMinute)} min="0" max="99"  className="home-wrapper-times-minutes" />
                 
                <div className="home-wrapper-times-colons">
                    :
                </div>

                <input type="tel" value={second} onChange={(e) => secondChange(e, setSecond)}   min="0" max="59"  className="home-wrapper-times-seconds" />
             
            </div>
        </div>
    )
}

export default ProgressTime;