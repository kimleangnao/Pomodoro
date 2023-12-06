
import backgroundImg from "../../resources/images/background.jpg"

const Home = () => {
    console.log(backgroundImg)
    return(
        <div className="home" style={{backgroundImage: `url("${backgroundImg}")`, backgroundPosition: "center"}}>
           <div className="home-maskedColor">
          
           </div>
           <div className="home-wrapper">
                <div className="home-wrapper-bar">
                    <div className="home-wrapper-bar-progress">
                            WORK
                    </div>   
                    <div className="home-wrapper-bar-break">
                            BREAK
                    </div>   
                </div>    
                <div className="home-wrapper-ghostBar">
                    <div className="home-wrapper-ghostBar-times">
                        6
                    </div>
                </div>
                <div className="home-wrapper-times">
                    <div className="home-wrapper-times-minutes">
                        20
                    </div>
                    <div className="home-wrapper-times-colons">
                        :
                    </div>
                    <div className="home-wrapper-times-seconds">
                        59
                    </div>
                </div>
                <div className="home-wrapper-start">
                    <div className="home-wrapper-start-button">
                        START
                    </div>
                </div>
            </div>
        

        </div>
    )
}


export default Home;