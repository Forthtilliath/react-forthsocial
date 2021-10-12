import BirthdayImg from '../../images/gift.png';
import Ad from '../../images/ad.png';
import { loadImage } from '../utils';

const Rightbar = ({ profile }: any) => {
    const HomeRightBar = () => (
        <>
            <div className="birthdayContainer">
                <img className="birthdayImg" src={BirthdayImg} alt="birthday" />
                <span className="birthdayText">
                    <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                </span>
            </div>
            <img src={Ad} alt="ad" className="rightbarAd" />
            {/* <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map((user) => (
                    <OnlineUser key={user.id} user={user} />
                ))}
            </ul> */}
        </>
    );

    const ProfileRightbar = () => (
        <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightBarInfoKey">Ville :</span>
                    <span className="rightBarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightBarInfoKey">De :</span>
                    <span className="rightBarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightBarInfoKey">Relation :</span>
                    <span className="rightBarInfoValue">Couple</span>
                </div>
            </div>

            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={loadImage('person/1.jpeg')} alt="avatar" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={loadImage('person/1.jpeg')} alt="avatar" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
            </div>
        </>
    );

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">{profile ? <ProfileRightbar /> : <HomeRightBar />}</div>
        </div>
    );
};

export default Rightbar;
