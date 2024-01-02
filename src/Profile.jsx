
import { useState } from "react";
import ProgressBar from "./components/ProgressBar";


const Profile = () => {

    const [userProfileInfo,] = useState({
        firstName: "ALEXIO",
        lastName: "BESIO",
        email: "alexiobesio@gmail.com",
        country: "USA",
        status: "BE THE VERY BEST.",
        thisWeekHours: 100,
        thisMonthHours: 500,
        thisYearHours: 8000
    })



    return(
        <div className="profile">
            <div className="profile-user">
                <div className="profile-user-image">
                    <div className="profile-user-image-frame">
                        <img className="profile-user-image-frame-image" src="https://i.imgur.com/mE1oKAw.jpg" alt="not found" />
                    </div>
                </div>
                <div className="profile-user-details">
                    <div className="profile-user-details-wrapper">
                        <p className="profile-user-details-p">
                            <i className="fa-solid fa-user"></i> {userProfileInfo.firstName} {userProfileInfo.lastName}
                        </p>
                        <p className="profile-user-details-p">
                            <i className="fa-solid fa-envelope"></i> {userProfileInfo.email}
                        </p>
                        <p className="profile-user-details-p">
                        <i className="fa-solid fa-globe"></i> {userProfileInfo.country}
                        </p>
                        <div className="profile-user-details-bio">
                            {userProfileInfo.status}
                        </div>
                    </div>
                   
                </div>
            </div>
            <ProgressBar title="This Week" number={userProfileInfo.thisWeekHours} maxNumber={168} />
            <ProgressBar title="This Month" number={userProfileInfo.thisMonthHours} maxNumber={744} />
            <ProgressBar title="This Year" number={userProfileInfo.thisYearHours} maxNumber={8760} />
        </div>
    )
}

export default Profile;