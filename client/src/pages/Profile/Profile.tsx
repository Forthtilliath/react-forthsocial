import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { loadImage } from '../../components/utils';

const Profile = () => {
    return (
        <div className="profileContainer">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src={loadImage('post/3.jpeg')} alt="post" />
                        <img className="profileUserImg" src={loadImage('post/7.jpeg')} alt="post" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Name</h4>
                        <span className="profileInfoDesc">Desc</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile />
                </div>
            </div>
        </div>
    );
};

export default Profile;
