import { useEffect, useRef, useState } from "react";

import ProgressTime from "./ProgressTime";
import InputTime from "./InputTime";

const Home = ({playSound}) => {

    //record
    const [timeEndms, settimeEndms] = useState (0);
    const [displayMinute, setdisplayMinute] = useState("00");
    const [displaySecond, setdisplaySecond] = useState("00");

    //const[firstTimeSetupMinute, setfirstTimeSetupMinute] = useState(true);
    //const[firstTimeSetupSecond, setfirstTimeSetupSecond] = useState(true);

    //state for button  
    const [activeProgress, setActiveProgress] = useState(true);
    const [pause, setPause] = useState(false);
 


    // const [whatIsRunning, setWhatIsRunning] = useState("progress");

    const [isRunning, setIsRunning] = useState(false);
    const [isBreakTime, setIsBreakTime] = useState(false);
    
    const intervalIdRef = useRef(null);

    // const [repeats, setRepeats] = useState(0);
    // const [breakTimeMinute, setBreakTimeMinute] = useState(0);
    // const [breakTimeSecond, setBreakTimeSecond] = useState(0);


    // const [countdownMinutes, setCountdownMinutes] = useState(0);
    // const [countdownSeconds, setCountdownSeconds] = useState(0);

    // const inputMinute = (e) => {
    //     e.preventDefault();
    //     if(activeProgress){
    //         setCountdownMinutes(Number(e.target.value));
    //     }else{
    //         setBreakTimeMinute(Number(e.target.value));
    //     }
      
    // }

    // const inputSecond = (e) => {
    //     e.preventDefault();
    //     if(activeProgress){
    //         setCountdownSeconds(Number(e.target.value));
    //     }else{
    //         setBreakTimeSecond(Number(e.target.value));
    //     }
       
    // }

    const minuteChange = (e, functionToRun) => {
        if(!isRunning){
            functionToRun(e.target.value)
        }
    }
    const secondChange = (e, functionToRun) => {
        if(!isRunning){
            functionToRun(e.target.value)
        }
    }



    useEffect(()=>{


        let intervalID = setInterval(()=>{
 
            if(isRunning){  
                console.log("is this running!")
        

                if(timeEndms === 0){
                    let currentMS = Date.now();
                    let currentTimeEndMS;
                          
                    let convertMinuteToMS = Number(displayMinute) != 0 ? Number(displayMinute) * 60 * 1000 : 0;
                    let convertSecondToMS = Number(displaySecond) != 0 ? Number(displaySecond) * 1000 : 0;

                    let combine = convertMinuteToMS + convertSecondToMS;
                    currentTimeEndMS = currentMS + combine;
                    //we start
                    settimeEndms(currentTimeEndMS);
                }else{
             
                    let timeLeft = timeEndms - Date.now();

                    if(timeLeft <= 0){
                        clearInterval(intervalIdRef.current); 
                        return;
                    }

                    //convert MS to minute
                    //what left convert to second
                    //ignore millisecond
                    const  msToSecond = 1000;
                    const scToMinute = 60;
                    let convertToSecond = Math.floor(timeLeft / msToSecond);
    
                    let manyMinutes = Math.floor(convertToSecond / scToMinute);
                    let manySeconds = convertToSecond % 60;
                    if(manyMinutes < 10){
                        let convertToText = "0" + manyMinutes
                        setdisplayMinute(convertToText);
                    }else{
                        setdisplayMinute(manyMinutes);
                    }
                    if(manySeconds <10){
                        let convertToText = "0" + manySeconds
                        setdisplaySecond(convertToText);
                    }else{
                        setdisplaySecond(manySeconds)
                    }
                 
                
                }
               
            }
        }, 1000)
        
        intervalIdRef.current = intervalID;

        return () => clearInterval(intervalIdRef.current)

    }, [isRunning, displayMinute, displaySecond, timeEndms])


    const switchRunning = (e) => {
         e.preventDefault();

        setIsRunning(true);
        setActiveProgress(true);
    }
    const switchRunningOff = (e) => {
        e.preventDefault();
         //if you are already on a break, you can't pause
        if(activeProgress){
            setIsRunning(false);
            setPause(true);
        }
    }

    // useEffect(() => {
    //     //this is running time

    //     let intervalTimer;

    //     if(isRunning && (countdownMinutes >= 0 || countdownSeconds >= 0)){
    //         //
    //         intervalTimer = setInterval(() => {
    //             //check the second first to see if there is need for countdown second
    //             if(countdownSeconds == 0){
    //                 console.log("we reach here! 1")
    //                 if(countdownMinutes == 0){
    //                     playSound();
    //                     setRepeats((prevRepeat) => prevRepeat+1);

    //                     setActiveProgress(false);
    //                     setPause(false);
    //                     setIsRunning(false);
    //                     setIsBreakTime(true);
    //                     setWhatIsRunning("break")
    //                     clearInterval(intervalTimer);
    //                 }else{
                 
    //                     setCountdownMinutes((prevMinute) => prevMinute - 1);
    //                     setCountdownSeconds(59);
    //                     //update the eye candy
    //                     //if the minute is single digit, add 0 infront of it
    //                 }
    //             }else{
           
    //                 console.log(countdownSeconds)
    //                 setCountdownSeconds((prevSecond) => prevSecond - 1);
    //                 //update the eyes candy
    //             }
    //         }, 1000)
    //     }

    //     //call this to clean up when component unmount
    //     return () => clearInterval(intervalTimer);

    // }, [isRunning,countdownMinutes, countdownSeconds, playSound])

    // useEffect(() => {
    //     // this is for breaktime
      
    //     let intervalBreakTimer;

    //     if(isBreakTime && (breakTimeMinute >= 0 || breakTimeSecond >= 0)){
    //         intervalBreakTimer = setInterval(() => {
    //             if(breakTimeSecond == 0){
    //                 if(breakTimeMinute == 0){
    //                     //
    //                     setActiveProgress(true);
    //                     setPause(false);
    //                     setIsBreakTime(false);
    //                     setWhatIsRunning("progress")
                   
    //                     clearInterval(intervalBreakTimer)
                        
    //                 }else{
    //                     //
    //                     setBreakTimeMinute((prevM) => prevM - 1);
    //                     setBreakTimeSecond(59);
    //                 }
    //             }else{
    //                 //
    //                 setBreakTimeSecond((prevS) => prevS - 1);

    //             }
    //         }, 1000)
    //     }

    //     return () => clearInterval(intervalBreakTimer);

    // },[isBreakTime, breakTimeMinute, breakTimeSecond])


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
            <ProgressTime 
                minute={displayMinute} 
                second={displaySecond} 
                setMinute={setdisplayMinute}
                setSecond={setdisplaySecond}
                minuteChange={minuteChange} 
                secondChange={secondChange} 
            />


            {/*
            { isRunning || isBreakTime || pause?  
           (<ProgressTime 
                repeats={repeats} 
                whatIsRunning={whatIsRunning}  
                countdownMinutes={countdownMinutes}
                breakTimeMinute={breakTimeMinute}
                inputMinute={inputMinute}
                countdownSeconds={countdownSeconds}
                breakTimeSecond={breakTimeSecond}
                inputSecond={inputSecond}
            />)
            : 
               (<InputTime 
                    inputMinute={inputMinute}
                    inputSecond={inputSecond}
                    activeProgress={activeProgress}
                    countdownMinutes={countdownMinutes}
                    countdownSeconds={countdownSeconds}
                    breakTimeMinute={breakTimeMinute}
                    breakTimeSecond={breakTimeSecond}
                />)
            }
           
            */}
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