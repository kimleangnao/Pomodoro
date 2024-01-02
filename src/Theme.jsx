
import { Link } from "react-router-dom";

import { useState } from "react";


import playButtonWhite from "../resources/images/playbutton-white.png";

import closeButtonWhite from "../resources/images/closebutton-white.png";
import copyRight from "../resources/images/copyright-icon.png";

const Theme = ({theme, setTheme}) =>{

    const [switchCredits, setSwitchCredits] = useState(false)

    const switchCreditFunction = (e) => {
        e.preventDefault();

        if(switchCredits){
            setSwitchCredits(false);
        }else{
            setSwitchCredits(true);
        }
    }

    const selectToActive = (e, id, index) => {
        e.preventDefault();
        console.log(id, index);

        //need a cache to make sure we don't click the same button and fire the same choice multiple times
        //also give warning when user changes too many option in a spawn of minutes

        
        //create deep copy using json
        let currentInformation = JSON.parse(JSON.stringify(theme));
        //update selected index
        currentInformation[index].map((v) => v.selected = (id === v.id ? true : false));

        //set new value
        setTheme(currentInformation);

    }  
    
  
   

    return(
        <div className="theme">
           <h1 className="theme-title">
                THEME
           </h1>
           <div className="theme-wrapper">
                {/*credits section*/}
                <button className={switchCredits === false ? "theme-wrapper-creditsOpen" : "theme-wrapper-creditsOpen display-wrapper-none"} onClick={(e) => switchCreditFunction(e)}>
                    <img title="credits link" className="theme-wrapper-creditsOpen-icon" src={copyRight} alt="icon not found" />
                </button>
                <div className={switchCredits === true ? "theme-wrapper-credits" : "theme-wrapper-credits display-wrapper-none"} >
                    <button className="theme-wrapper-credits-closeButton" onClick={(e) => switchCreditFunction(e)}>
                        <img className="theme-wrapper-credits-closeButton-icon" src={closeButtonWhite} alt="icon not found" />
                    </button>
         
                    <h2 className="theme-wrapper-credits-title">Credits</h2>

                    <h3 className="theme-wrapper-credits-title-sub"> Images </h3>
                    <Link to="/">dfdfdf</Link> <br />
                    <Link to="/">dfdfdf</Link> <br />
                    <Link to="/">dfdfdf</Link> <br />
                    <Link to="/">dfdfdf</Link> <br />

                    <h3 className="theme-wrapper-credits-title-sub"> Fonts </h3>
                    <Link to="/">dfdfdf</Link> <br />
                    <Link to="/">dfdfdf</Link> <br />
                    <Link to="/">dfdfdf</Link> <br />
                    <Link to="/">dfdfdf</Link> <br />
    

                    <h3 className="theme-wrapper-credits-title-sub">Sound</h3>
                    <Link to="/">dfdfdf</Link> <br />
                    <Link to="/">dfdfdf</Link> <br />
                    <Link to="/">dfdfdf</Link> <br />
                    <Link to="/">dfdfdf</Link> <br />

                </div>

                {/*theme section*/}
                <div className="theme-wrapper-title">
                    Backgrounds
                </div>
                <div className="theme-wrapper-backgrounds">

                    {
                        theme[0].map((v,i) => (
                            <button key={i} id={v.id} className={v.selected === true ? "theme-wrapper-backgrounds-image theme-selected" : "theme-wrapper-backgrounds-image"} onClick={(e) => selectToActive(e, v.id, 0)}>
                                <img className="theme-wrapper-backgrounds-image-source" src={v.imageSource} alt={v.alt} />
                            </button>
                        ))
                    }
                
                </div>
                <div className="theme-wrapper-title">
                    Fonts
                </div>
                <div className="theme-wrapper-fonts">

                    {
                        theme[1].map((v,i) => (
                            <button key={i} id={v.id} className={v.selected === true ? "theme-wrapper-fonts-button theme-selected" : "theme-wrapper-fonts-button "} onClick={(e) => selectToActive(e, v.id, 1)}>
                                {v.fontName}
                            </button>
                        ))
                    }
                  
                </div>
                <div className="theme-wrapper-title">
                    Ring Sounds
                </div>
                <div className="theme-wrapper-sounds">

                    {
                        theme[2].map((v,i) => (
                        <button key={i} id={v.id} className={v.selected === true ? "theme-wrapper-sounds-alert  theme-selected" : "theme-wrapper-sounds-alert"} onClick={(e) => selectToActive(e, v.id, 2)}>
                            <div className="theme-wrapper-sounds-alert-button">
                                <img src={playButtonWhite} alt="icon not found" />
                            </div>
                            <div className="theme-wrapper-sounds-alert-text">
                               {v.soundName}
                            </div>
                        </button>
                        ))
                    }
                   
                </div>

                <button className="theme-wrapper-button">SAVE</button>
           </div>
        </div>
    )
}

export default Theme;