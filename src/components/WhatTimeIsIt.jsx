import { useEffect, useState } from "react";



const WhatTimeIsIt = () => {

    const [isCheckingTimeRunning, ] = useState(true);
    const [timeHour, setTimeHour] = useState(0);
    const [timeMinute, setTimeMinute] = useState(0);


    useEffect(() => {
        let intervalTimer;
        if(isCheckingTimeRunning){
            intervalTimer = setInterval(() => {
                let newDate = new Date();
                
                setTimeHour(newDate.getHours());
                setTimeMinute(newDate.getMinutes());
            }, 1000)
        }

        return () => clearInterval(intervalTimer);

    },  [isCheckingTimeRunning])


    return(
        <div>
            {timeHour < 10 ? "0"+timeHour : timeHour} : {timeMinute < 10 ? "0"+timeMinute : timeMinute} {timeHour>= 12 ? "PM" : "AM"}
        </div>
    )
}


export default WhatTimeIsIt;