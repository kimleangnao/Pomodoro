


const TextBar = ({info}) => {
    const {activeHour, activeMinute, breakHour, breakMinute, day, month, year} = info;
    console.log("info:", info)
    return(
        <div className="textBar">
            <div className="textBar-work">
                <div className="textBar-work-date">
                   {day}/{month}/{year}
                </div>
                <div className="textBar-work-text">
                    {activeHour} hours {activeMinute} minutes
                </div>
            </div>
            <div className="textBar-break">
                {breakHour} hours {breakMinute} minutes
            </div>
        </div>
    )
}

export default TextBar;