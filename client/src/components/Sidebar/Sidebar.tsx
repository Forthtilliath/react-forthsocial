import sidebarData from './sidebarData';
import './Sidebar.scss';
import CloseFriend from '../CloseFriend/CloseFriend';
import { Users as Friends } from '../../dummyData';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    {sidebarData.map((el, i) => (
                        <li className="sidebarListItem" key={i}>
                            <span children={el.icon} className="sidebarIcon" />
                            <span className="sidebarListItemText">{el.text}</span>
                        </li>
                    ))}
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Friends.map((friend) => (
                        <CloseFriend key={friend.id} friend={friend} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
