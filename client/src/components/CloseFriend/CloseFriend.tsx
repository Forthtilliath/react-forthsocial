import { IUser } from '../../interfaces';
import { loadImage } from '../utils';
import './CloseFriend.scss'

const CloseFriend = (props: { friend: IUser }) => {
    const { friend } = props;
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={loadImage(friend.profilePicture)} alt="" />
            <span className="sidebarFriendName">{friend.username}</span>
        </li>
    );
};

export default CloseFriend;