import { loadImage } from '../utils';

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