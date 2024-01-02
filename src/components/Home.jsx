import { useEffect, useState } from "react";

import ProgressTime from "./ProgressTime";
import InputTime from "./InputTime";

const Home = ({playSound}) => {


    //state for button
    const [activeProgress, setActiveProgress] = useState(true);
    const [pause, setPause] = useState(false);
 


    const [whatIsRunning, setWhatIsRunning] = useState("progress");

    const [isRunning, setIsRunning] = useState(false);
    const [isBreakTime, setIsBreakTime] = useState(false);
    


    const [repeats, setRepeats] = useState(0);
    const [breakTimeMinute, setBreakTimeMinute] = useState(2);
    const [breakTimeSecond, setBreakTimeSecond] = useState(20);


    const [countdownMinutes, setCountdownMinutes] = useState(1);
    const [countdownSeconds, setCountdownSeconds] = useState(10);

    const inputMinute = (e) => {
        e.preventDefault();
        if(activeProgress){
            setCountdownMinutes(Number(e.target.value));
        }else{
            setBreakTimeMinute(Number(e.target.value));
        }
      
    }

    const inputSecond = (e) => {
        e.preventDefault();
        if(activeProgress){
            setCountdownSeconds(Number(e.target.value));
        }else{
            setBreakTimeSecond(Number(e.target.value));
        }
       
    }

    const switchRunning = (e) => {
        e.preventDefault();

        setIsRunning(true);
        setActiveProgress(true);
    }
    const switchRunningOff = (e) => {
        e.preventDefault();
        //if you are already on a break, you can't pause
        if(activeProgress ){
            setIsRunning(false);
            setPause(true);
        }
    }

    useEffect(() => {
        //this is running time

        let intervalTimer;

        if(isRunning && (countdownMinutes >= 0 || countdownSeconds >= 0)){
            //
            intervalTimer = setInterval(() => {
                //check the second first to see if there is need for countdown second
                if(countdownSeconds == 0){
                    console.log("we reach here! 1")
                    if(countdownMinutes == 0){
                        playSound();
                        setRepeats((prevRepeat) => prevRepeat+1);

                        setActiveProgress(false);
                        setPause(false);
                        setIsRunning(false);
                        setIsBreakTime(true);
                        setWhatIsRunning("break")
                        clearInterval(intervalTimer);
                    }else{
                 
                        setCountdownMinutes((prevMinute) => prevMinute - 1);
                        setCountdownSeconds(59);
                        //update the eye candy
                        //if the minute is single digit, add 0 infront of it
                    }
                }else{
           
                    console.log(countdownSeconds)
                    setCountdownSeconds((prevSecond) => prevSecond - 1);
                    //update the eyes candy
                }
            }, 1000)
        }

        //call this to clean up when component unmount
        return () => clearInterval(intervalTimer);

    }, [isRunning,countdownMinutes, countdownSeconds])

    useEffect(() => {
        // this is for breaktime
      
        let intervalBreakTimer;

        if(isBreakTime && (breakTimeMinute >= 0 || breakTimeSecond >= 0)){
            intervalBreakTimer = setInterval(() => {
                if(breakTimeSecond == 0){
                    if(breakTimeMinute == 0){
                        //
                        setActiveProgress(true);
                        setPause(false);
                        setIsBreakTime(false);
                        setWhatIsRunning("progress")
                   
                        clearInterval(intervalBreakTimer)
                        
                    }else{
                        //
                        setBreakTimeMinute((prevM) => prevM - 1);
                        setBreakTimeSecond(59);
                    }
                }else{
                    //
                    setBreakTimeSecond((prevS) => prevS - 1);

                }
            }, 1000)
        }

        return () => clearInterval(intervalBreakTimer);

    },[isBreakTime, breakTimeMinute, breakTimeSecond])


    const controllSwitchButton = (e, whichButton) => {
        e.preventDefault();
        if(whichButton === "work" & activeProgress === false){
            setActiveProgress(true)
        }else if (whichButton === "break" & activeProgress === true){
            setActiveProgress(false)
        }
      
    }


    return(
        <div className="home-wrapper">
   

            <div className="home-wrapper-bar">
                <div role="button" tabIndex={0} onKeyDown={(e) => controllSwitchButton(e, "work") } onClick={(e) => controllSwitchButton(e, "work")} className={activeProgress ? "home-wrapper-bar-progress home-wrapper-bar-activeState" : "home-wrapper-bar-progress" }>
                        WORK
                </div>   
                <div role="button" tabIndex={0} onKeyDown={(e) => controllSwitchButton(e, "break") } onClick={(e) => controllSwitchButton(e, "break")} className={activeProgress === false ? "home-wrapper-bar-break home-wrapper-bar-activeState" : "home-wrapper-bar-break"}>
                        BREAK
                </div>   
            </div>    



            { isRunning || isBreakTime || pause?  
            <ProgressTime 
                repeats={repeats} 
                whatIsRunning={whatIsRunning}  
                countdownMinutes={countdownMinutes}
                breakTimeMinute={breakTimeMinute}
                inputMinute={inputMinute}
                countdownSeconds={countdownSeconds}
                breakTimeSecond={breakTimeSecond}
                inputSecond={inputSecond}
            /> 
            : 
                <InputTime 
                    inputMinute={inputMinute}
                    inputSecond={inputSecond}
                    activeProgress={activeProgress}
                    countdownMinutes={countdownMinutes}
                    countdownSeconds={countdownSeconds}
                    breakTimeMinute={breakTimeMinute}
                    breakTimeSecond={breakTimeSecond}
                />
            }
           
            
            <button onClick={(e) => switchRunning(e)} disabled={isRunning || isBreakTime  === true ? true : false} className={isRunning || isBreakTime == true ? "home-wrapper-start-button home-wrapper-start-button-hide": "home-wrapper-start-button "}>
                START
            </button>
            <button onClick={(e) => switchRunningOff(e)} className={ isRunning || isBreakTime ? "home-wrapper-start-button": "home-wrapper-start-button home-wrapper-start-button-hide"}>
                PAUSE
            </button>

            
        </div>
    )
}


export default Home;