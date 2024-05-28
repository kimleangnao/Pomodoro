


const ProgressTime = ({showSign, minuteSign, secondSign,minute, second, minuteChange, secondChange, setMinute, setSecond, repeat}) =>{

    //make number look good
    //if it's single digit, add zero before it
    // that's it


    return(
        <div>
            <div className="home-wrapper-ghostBar">
                <div className="home-wrapper-ghostBar-times"> {repeat} </div>
            </div>
            <div className="home-wrapper-times">
                {
                    showSign ? ( 
                        <div className="home-wrapper-times_absolute">
                            <div className="home-wrapper-times_absolute_minute">
                                <p className="home-wrapper-times_absolute_minute_text">
                                    MINUTE(s)
                                </p>
                                <div className="home-wrapper-times_absolute_minute_image">
                                    <img src={minuteSign} alt="not found" className="home-wrapper-times_absolute_minute_image_sign" />    
                                </div>
                            </div>
                            <div className="home-wrapper-times_absolute_second">
                                <p className="home-wrapper-times_absolute_second_text">
                                    SECOND(s)
                                </p>
                                <div className="home-wrapper-times_absolute_second_image">
                                    <img src={secondSign} alt="not found" className="home-wrapper-times_absolute_second_image_sign" /> 
                                </div>
                            </div>
                        </div>
                    ) : ""
                }
               

                <div className="home-wrapper-times_inputs">
                    <input type="text" value={minute} placeholder={"00"} maxLength={"2"} inputMode="numeric" onChange={(e) => minuteChange(e, setMinute)} min="0" max="59"  className="home-wrapper-times-minutes" />
                    
                    <div className="home-wrapper-times-colons">
                        :
                    </div>
    
                    <input type="tel" value={second} placeholder={"00"} maxLength={"2"}   onChange={(e) => secondChange(e, setSecond)}   min="0" max="59"  className="home-wrapper-times-seconds" />
                
                </div>
              
            </div>
        </div>
    )
}

export default ProgressTime;