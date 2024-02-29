
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import porfilePic from "../../resources/images/profile.jpg"

const Navbar = () => {

    const [mobileNav, setmobileNav] = useState(false);
    
    const [switchMenu, setSwitchMenu] = useState(false);
    const [switchLogin, setSwitchLogin] = useState(true);

    const navigate = useNavigate();

    const fSwitchState = (e) =>{
        e.preventDefault();

        //check if the login is true
        if(switchLogin == false){
            //
            navigate("/login");
        }else{
            if(switchMenu){
                setSwitchMenu(false)
            }else{
                setSwitchMenu(true)
            }
        }
    }



    return(
        <div className="navbar-outer">
            <div className="navbar-mobile">
                <div className="navbar-mobile_top">
                    <button onClick={(() => setmobileNav(!mobileNav))} className="navbar-mobile_top_circle">
                    
                    </button>    
                </div>    
                {
                    mobileNav ? (
                        <div  className="navbar-mobile_menu">
                            <div className="navbar-mobile_menu_wrapper">
                                <div className="navbar-mobile_menu_wrapper_box">
                                    <div className="navbar-mobile_menu_wrapper_box">

                                    </div>
                                </div>
                                <Link to={`/`} className="navbar-mobile_menu_wrapper_item">
                                    HOME
                                </Link>
                            </div>

                            <div className="navbar-mobile_menu_wrapper">
                                <div className="navbar-mobile_menu_wrapper_box">
                                    <div className="navbar-mobile_menu_wrapper_box">

                                    </div>
                                </div>
                                <Link to={`/statistic`} className="navbar-mobile_menu_wrapper_item">
                                    STATS
                                </Link>
                            </div>

                            <div className="navbar-mobile_menu_wrapper">
                                <div className="navbar-mobile_menu_wrapper_box">
                                    <div className="navbar-mobile_menu_wrapper_box">

                                    </div>
                                </div>
                                <Link to={`/history`} className="navbar-mobile_menu_wrapper_item">
                                    HISTORY
                                </Link>
                            </div>

                            <div className="navbar-mobile_menu_wrapper">
                                <div className="navbar-mobile_menu_wrapper_box">
                                    <div className="navbar-mobile_menu_wrapper_box">

                                    </div>
                                </div>
                                <Link to={`/theme`} className="navbar-mobile_menu_wrapper_item">
                                    THEME
                                </Link>
                            </div>

                            <div className="navbar-mobile_menu_wrapper">
                                <div className="navbar-mobile_menu_wrapper_box">
                                    <div className="navbar-mobile_menu_wrapper_box">

                                    </div>
                                </div>
                                <Link to={`/profile`} className="navbar-mobile_menu_wrapper_item">
                                    PROFILE
                                </Link>
                            </div>        
                        </div>
                    ) : ""
                }
                
            </div>
            <div className="navbar">
                <div style={{display: `${switchMenu == true ? "" : "none"}`}} className="navbar-menu">
                    <Link to={`/`} className="navbar-menu-item">
                        HOME
                    </Link>
                    <Link to={`/statistic`} className="navbar-menu-item">
                        STATS
                    </Link>
                    <Link to={`/history`} className="navbar-menu-item">
                        HISTORY
                    </Link>
                    <Link to={`/theme`} className="navbar-menu-item">
                        THEME
                    </Link>
                    <Link to={`/profile`} className="navbar-menu-item">
                        PROFILE
                    </Link>
                
                </div>
                <button className="navbar-icon" onClick={(e) => fSwitchState(e)}>
                <img className="navbar-icon-image" src="https://i.imgur.com/mE1oKAw.jpg" alt="profile" />
                </button>
            </div>
        </div>
        
    )
}

export default Navbar;