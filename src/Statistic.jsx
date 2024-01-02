
import { useState } from "react";
import Graph from "./components/Graph"


const Statistic = () => {
    let [day, setDays] = useState(30);

    const SwitchDay = (e, day) => {
        e.preventDefault();

        setDays(day);
    }

    return(
        <div className="statistic"> 
            <h1 className="statistic-title"> 
                STATISTIC
            </h1>
            <div className="statistic-buttons">
                <button onClick={(e) => SwitchDay(e, 7)} className="statistic-buttons-button">
                    7 Days
                </button>
                <button onClick={(e) => SwitchDay(e, 15)} className="statistic-buttons-button">
                    15 Days
                </button>
                <button onClick={(e) => SwitchDay(e, 30)} className="statistic-buttons-button">
                    30 Days
                </button>
            </div>
            <div className="statistic-graph">
                <div className="statistic-graph-lines">
                  <Graph days={day} />
                </div>
                <div className="statistic-graph-hour">
                    HOURS
                </div>
                <div className="statistic-graph-days">
                    DAYS
                </div>
            </div>
        </div>
    )
}

export default Statistic;