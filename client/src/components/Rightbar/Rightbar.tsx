import './Rightbar.scss';
import BirthdayImg from '../../images/gift.png';
import Ad from '../../images/ad.png';
import { Users } from '../../dummyData';
import OnlineUser from '../OnlineUser/OnlineUser';

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src={BirthdayImg} alt="birthday" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src={Ad} alt="ad" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => (
                        <OnlineUser key={user.id} user={user} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Rightbar;
