import { useEffect, useRef, useState } from "react";

import ProgressTime from "./ProgressTime";

import minuteSign from "../../resources/images/minute-sign.png";
import secondSign from "../../resources/images/second-sign.png";


const Home = ({playSound, playSoundStart}) => {

    //record break
    const [timeEndmsBreak, settimeEndmsBreak] = useState(0);
    const [displayMinuteBreak, setdisplayMinuteBreak] = useState("");
    const [displaySecondBreak, setdisplaySecondBreak] = useState("");

    //record work
    const [showSign, setshowSign] = useState(true);
    const [timeEndms, settimeEndms] = useState (0);
    const [displayMinute, setdisplayMinute] = useState("");
    const [displaySecond, setdisplaySecond] = useState("");

    //const[firstTimeSetupMinute, setfirstTimeSetupMinute] = useState(true);
    //const[firstTimeSetupSecond, setfirstTimeSetupSecond] = useState(true);

    //state for button  
    const [activeProgress, setActiveProgress] = useState(true);
 


    // const [whatIsRunning, setWhatIsRunning] = useState("progress");

    const [isRunning, setIsRunning] = useState(false);
    const [isBreakTime, setIsBreakTime] = useState(false);
    
    const intervalIdRef = useRef(null);
    const breakIntervalRef = useRef(null);

    const [repeats, setRepeats] = useState(0);


    const minuteChange = (e, functionToRun) => {
        if(!isRunning){
            //make sure that our minute is a number

            const value = e.target.value;
            if(value === ''){
                functionToRun("")
            }else if (isNaN(value)|| value < 0 || value > 59){
                return "Error: Number need to be between 0 minute and 59 minutes.";
            }else{
                functionToRun(value)
                return null;
            }
           
        }
    }
    const secondChange = (e, functionToRun) => {
        if(!isRunning){
            const value = e.target.value;
            if(value === ''){
                functionToRun("")
            }else if (isNaN(value)|| value <= 0 || value > 59){
                return "Error: Number need to be between 0 minute and 59 minutes.";
            }else{
                functionToRun(value)
                return null;
            }
        }
    }



    useEffect(()=>{
        let intervalID = setInterval(()=>{
 
            if(isRunning){  

                if(timeEndms === 0){
                    let currentMS = Date.now();
                    let currentTimeEndMS;
                          
                    let convertMinuteToMS = Number(displayMinute) != 0 ? Number(displayMinute) * 60 * 1000 : 0;
                    let convertSecondToMS = Number(displaySecond) != 0 ? Number(displaySecond) * 1000 : 0;

                    let combine = convertMinuteToMS + convertSecondToMS;
                    currentTimeEndMS = currentMS + combine;
                    //we start
                    settimeEndms(currentTimeEndMS);
                    playSoundStart();
                }else{
             
                    let timeLeft = timeEndms - Date.now();

                    if(timeLeft <= 0){
                        let repeatNum = repeats;
                        repeatNum +=  1;
                        setRepeats(repeatNum);
                        setdisplayMinute("")
                        setdisplaySecond("")
                        setIsRunning(false);
                        settimeEndms(0)
                        setIsBreakTime(true)
                        setActiveProgress(false);
                        playSound();
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
        }, 1)
        
        intervalIdRef.current = intervalID;

        return () => clearInterval(intervalIdRef.current)

    }, [isRunning, displayMinute, displaySecond, timeEndms, repeats, playSound])

    useEffect(() => {
        const intervalBreak = setInterval(()=>{
            if(isBreakTime){
                //we are on break, now count down the time
                if(timeEndmsBreak == 0){
                    //
                    let currentMS = Date.now();
                    let currentTimeEndMS;

                    let convertMinuteToMS = Number(displayMinuteBreak) != 0 ? Number(displayMinuteBreak) * 60 * 1000 : 0;
                    let convertSecondToMS = Number(displaySecondBreak) != 0 ? Number(displaySecondBreak) * 1000 : 0;

                    let combine = convertMinuteToMS + convertSecondToMS;
                    currentTimeEndMS = currentMS + combine;

                    settimeEndmsBreak(currentTimeEndMS);
                 

                }else{
                    //
                    let timeLeft = timeEndmsBreak - Date.now();
             
                    if(timeLeft <= 0){
                  
                        //end this break
                        setdisplayMinuteBreak("")
                        setdisplaySecondBreak("")
                        settimeEndmsBreak(0)
                        setIsBreakTime(false)
                        setActiveProgress(true);
                        playSound();
                        clearInterval(breakIntervalRef.current);       
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
                        setdisplayMinuteBreak(convertToText);
                    }else{
                        setdisplayMinuteBreak(manyMinutes);
                    }
                    if(manySeconds <10){
                        let convertToText = "0" + manySeconds
                        setdisplaySecondBreak(convertToText);
                    }else{
                        setdisplaySecondBreak(manySeconds)
                    }
                }
            }
        }, 1)

        breakIntervalRef.current = intervalBreak;

       return () => clearInterval(breakIntervalRef.current)

    }, [isBreakTime, timeEndmsBreak, displayMinuteBreak, displaySecondBreak, playSound])

    const switchRunning = (e) => {
         e.preventDefault();

        setIsRunning(true);
        setActiveProgress(true);
        setshowSign(false);
    }

    const controllSwitchButton = (e, whichButton) => {
        e.preventDefault();
        if(whichButton == "work" & activeProgress === false){
            setActiveProgress(true)
        }else if (whichButton == "break" & activeProgress === true){
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
           
            {
                activeProgress ? (
                    
                    <ProgressTime 
                        minute={displayMinute} 
                        second={displaySecond} 
                        minuteSign={minuteSign}
                        secondSign={secondSign}
                        setMinute={setdisplayMinute}
                        setSecond={setdisplaySecond}
                        minuteChange={minuteChange} 
                        secondChange={secondChange} 
                        repeat={repeats}
                        showSign={showSign}
                    />
                ) : (
                    <ProgressTime 
                        minute={displayMinuteBreak} 
                        second={displaySecondBreak} 
                        minuteSign={minuteSign}
                        secondSign={secondSign}
                        setMinute={setdisplayMinuteBreak}
                        setSecond={setdisplaySecondBreak}
                        minuteChange={minuteChange} 
                        secondChange={secondChange} 
                        repeat={repeats}
                        showSign={false}
                    />
               
                )
            }

            
            <button onClick={(e) => switchRunning(e)} disabled={isRunning || isBreakTime  === true ? true : false} className={isRunning || isBreakTime == true ? "home-wrapper-start-button home-wrapper-start-button-hide": "home-wrapper-start-button "}>
                START
            </button>
            
            {
                /*
                    <button onClick={(e) => switchRunningOff(e)} className={ isRunning || isBreakTime ? "home-wrapper-start-button": "home-wrapper-start-button home-wrapper-start-button-hide"}>
                        PAUSE
                    </button>      
                */
            }
    

            
        </div>
    )
}


export default Home;