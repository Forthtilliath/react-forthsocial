import sidebarData from './sidebarData';
import './Sidebar.scss';
import CloseFriend from '../CloseFriend/CloseFriend';
import { Users as Friends } from '../../dummyData';
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link to="profile">
                            <span className="sidebarIcon">
                                <Avatar image={''} size={30} />
                            </span>
                            <span className="sidebarListItemText">{'Jean'}</span>
                        </Link>
                    </li>
                    {sidebarData.map((el, i) => (
                        <li className="sidebarListItem" key={i}>
                            <Link to={el.link}>
                                <span children={el.icon} className="sidebarIcon" />
                                <span className="sidebarListItemText">{el.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* <button className="sidebarButton">Show More</button> */}
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
