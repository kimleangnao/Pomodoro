
import TextBar from "./components/TextBar";

import prevImage from "../resources/images/prev-button.png";
import nextImage from "../resources/images/next-button.png";
import { useState } from "react";

const History = () => {
    let [activeIndex , setActiveIndex] = useState(1);
    let [information, ] = useState([
        [
            {activeHour : 7 , activeMinute : 10, breakHour : 1, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 3 , activeMinute : 20, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 2 , activeMinute : 60, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 4 , activeMinute : 40, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 1 , activeMinute : 30, breakHour : 1, breakMinute : 40, day:"10", month:"11", year:"2023"}
        ],
        [
            {activeHour : 5 , activeMinute : 0, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 6 , activeMinute : 0, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 5 , activeMinute : 0, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 4 , activeMinute : 0, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 5 , activeMinute : 0, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"}
        ],
        [
            {activeHour : 4 , activeMinute : 30, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 4 , activeMinute : 40, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 4 , activeMinute : 30, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 3 , activeMinute : 30, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 4 , activeMinute : 30, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"}
        ],
        [
            {activeHour : 7 , activeMinute : 20, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 6 , activeMinute : 20, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 7 , activeMinute : 40, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 6 , activeMinute : 30, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 5 , activeMinute : 40, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"}
        ],
        [
            {activeHour : 1 , activeMinute : 20, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 2 , activeMinute : 20, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 3 , activeMinute : 30, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 3 , activeMinute : 30, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 3 , activeMinute : 30, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"}
        ],
        [
            {activeHour : 3 , activeMinute : 40, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 3 , activeMinute : 0, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 7 , activeMinute : 40, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 3 , activeMinute : 30, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"},
            {activeHour : 7 , activeMinute : 0, breakHour : 0, breakMinute : 40, day:"10", month:"11", year:"2023"}
        ],
    ]);


    const paginationCounter = (e, state) =>{
        e.preventDefault();

        if(state === "next"){
            //
            if(activeIndex < 6){
                setActiveIndex(activeIndex + 1);
            }
            
        }else if (state === "prev"){
            //
            if(activeIndex > 1){
                setActiveIndex(activeIndex - 1);
            }
        }
    }



    return(
        <div className="history"> 
            <div className="history-wrapper"> 
                <div className="history-wrapper-work"> 
                    WORK
                </div>
                <div className="history-wrapper-break"> 
                    BREAK
                </div>
            </div>
            {
                information[activeIndex - 1].map((v, i) => 
                    <TextBar key={i} info={v} />
                )
            }

            <div className="history-nav">
                <button onClick={(e) => paginationCounter(e, "prev")} className="history-nav-prev">
                    <img src={prevImage} alt="not found" />
                </button>
                <div className="history-nav-text">
                    {activeIndex}
                </div>
                <button onClick={(e) => paginationCounter(e, "next")} className="history-nav-next">
                    <img src={nextImage} alt="not found" />
                </button>
            </div>
        
        </div>
    )
}

export default History;