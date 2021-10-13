import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';

const OnlineUser = (props: { user: IUser }) => {
    const { user } = props;

    return (
        <li>
            <NavLink to={`/profile/${user.username.toLowerCase()}`} className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <Avatar image={user?.profilePicture} size={40} />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{user.username}</span>
            </NavLink>
        </li>
    );
};

export default OnlineUser;
