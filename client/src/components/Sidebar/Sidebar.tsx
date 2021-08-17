import sidebarData from './sidebarData';
import './sidebar.scss';

const Sidebar = () => {
    const listFriends = [
        { image: '2.jpeg', name: 'John Doe' },
        { image: '3.jpeg', name: 'Jane Doe' },
        { image: '4.jpeg', name: 'Rondou Doe' },
        { image: '5.jpeg', name: 'Tout Doe' },
        { image: '6.jpeg', name: 'Tusor Doe' },
        { image: '7.jpeg', name: 'Pa Doe' },
        { image: '7.jpeg', name: 'Pa Doe' },
        { image: '7.jpeg', name: 'Pa Doe' },
        { image: '7.jpeg', name: 'Pa Doe' },
    ];

    const loadImage = (fileName: string) => require(`../../images/person/${fileName}`).default;

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
