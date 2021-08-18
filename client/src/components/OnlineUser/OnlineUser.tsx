import './OnlineUser.scss';
import { loadImage } from '../utils';
import { IUser } from '../../interfaces';

const OnlineUser = (props: { user: IUser }) => {
    const { user } = props;

    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={loadImage(user?.profilePicture)} alt="profile" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    );
};

export default OnlineUser;
