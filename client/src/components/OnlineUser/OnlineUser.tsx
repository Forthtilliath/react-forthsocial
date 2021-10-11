import { IUser } from '../../interfaces';
import Avatar from '../Avatar/Avatar';

const OnlineUser = (props: { user: IUser }) => {
    const { user } = props;

    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <Avatar image={user?.profilePicture} size={40} />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    );
};

export default OnlineUser;
