import ContactCard from "../../Cards/ContactCard";
import HowWeOperate from "../../Cards/HowWeOperateCard";
import Notification from "../../UI/Notifications";
import Profile from "../../User/Profile";

const ProfilePage = () => {
    
    return (
        <div className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <Profile/>
                    <Notification />

                </div>
                <div className="col-sm-3">
                   <HowWeOperate/>
                    <br></br>
                    <ContactCard/>
                </div>
            </div>
        </div>
    </div>
    );
};
export default ProfilePage;
