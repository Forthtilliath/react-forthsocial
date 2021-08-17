import { loadImage } from '../utils';
import sidebarData from './sidebarData';
import './Sidebar.scss';

const Sidebar = () => {
    const listFriends = [
        { image: 'person/2.jpeg', name: 'John Doe' },
        { image: 'person/3.jpeg', name: 'Jane Doe' },
        { image: 'person/4.jpeg', name: 'Rondou Doe' },
        { image: 'person/5.jpeg', name: 'Tout Doe' },
        { image: 'person/6.jpeg', name: 'Tusor Doe' },
        { image: 'person/7.jpeg', name: 'Pa Doe' },
        { image: 'person/7.jpeg', name: 'Pa Doe' },
        { image: 'person/7.jpeg', name: 'Pa Doe' },
        { image: 'person/7.jpeg', name: 'Pa Doe' },
    ];

    // const loadImage = (fileName: string) => require(`../../images/person/${fileName}`).default;

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
                    {listFriends.map((friend, i) => (
                        <li className="sidebarFriend" key={i}>
                            <img className="sidebarFriendImg" src={loadImage(friend.image)} alt="" />
                            <span className="sidebarFriendName">{friend.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
