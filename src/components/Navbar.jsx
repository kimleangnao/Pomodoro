import { Link } from "react-router-dom";

const Navbar = () => {


    return(
        <div className="navbar-outer">
           
            <div className="navbar">
                
                <Link to="/theme"  className="navbar-icon">
                    <img className="navbar-icon-image" src="https://i.imgur.com/mE1oKAw.jpg" alt="profile" />
                </Link>
            </div>
        </div>
        
    )
}

export default Navbar;