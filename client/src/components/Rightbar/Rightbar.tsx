import './Rightbar.scss';
import BirthdayImg from '../../images/gift.png';
import Ad from '../../images/ad.png';
import { loadImage } from '../utils';

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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={loadImage('person/3.jpeg')} alt="profile" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Rightbar;
