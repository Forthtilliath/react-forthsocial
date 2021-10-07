import sidebarData from './sidebarData';
import CloseFriend from '../CloseFriend/CloseFriend';
import { Users as Friends } from '../../dummyData';
import Avatar from '../Avatar/Avatar';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../AppContext/Auth.context';

const Sidebar = () => {
    const {
        connexion: { user },
    } = useContext(AuthContext);

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <NavLink to="profile" activeClassName="active">
                            <span className="sidebarIcon">
                                <Avatar image={user?.profilePicture} size={30} />
                            </span>
                            <span className="sidebarListItemText">{'Jean'}</span>
                        </NavLink>
                    </li>
                    {sidebarData.map((el, i) => (
                        <li className="sidebarListItem" key={i}>
                            <NavLink to={el.link} activeClassName="active">
                                <span children={el.icon} className="sidebarIcon" />
                                <span children={el.text} className="sidebarListItemText" />
                            </NavLink>
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
