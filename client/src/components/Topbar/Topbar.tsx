import { Search, Chat, Notifications, Home, Group, KeyboardArrowDownRounded } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../AppContext/Auth.context';
import Logo from '../../images/logo/logo.png';
import Avatar from '../Avatar/Avatar';

import { BoxMenuAccount, BoxMenuSearch } from './BoxMenu';

const Topbar = () => {
    const { connexion } = useContext(AuthContext);
    const user = connexion.user!;

    const [isOpenAccountMenu, setIsOpenAccountMenu] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    const toggleAccountMenu = () => {
        setIsOpenSearch(false);
        setIsOpenAccountMenu(!isOpenAccountMenu);
    };
    const toggleSearch = () => {
        setIsOpenAccountMenu(false);
        setIsOpenSearch(!isOpenSearch);
    };

    // const closeModals = () => {
    //     setIsOpenAccountMenu(false);
    //     setIsOpenSearch(false);
    // }

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" className="logo">
                    <img src={Logo} alt="logo" className="logoImg" />
                    <span className="logoTitle">FS</span>
                </Link>
                <div className="searchBar">
                    <Search className="searchIcon" fontSize="small" />
                    <input type="text" placeholder="Search for friend, post or video" className="searchInput" />
                </div>
                <div className="topbarIcons second" style={{ position: 'relative' }}>
                    <div
                        className={isOpenSearch ? 'topbarIconItem l0 open' : 'topbarIconItem l0'}
                        data-name="Rechercher" onClick={toggleSearch}>
                        <Search />
                    </div>
                    {isOpenSearch && <BoxMenuSearch />}
                </div>
            </div>

            <div className="topbarCenter">
                <div className="topbarIcons main">
                    <NavLink to="/home" className="topbarIconItem" activeClassName="active" data-name="Accueil">
                        <Home />
                    </NavLink>
                    <NavLink to="/friends" className="topbarIconItem" activeClassName="active" data-name="Amis">
                        <Group />
                    </NavLink>
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarIcons second">
                    <Link to={`/profile/${user.username.toLowerCase()}`} className="topbarProfileItem">
                        <Avatar image={user.profilePicture} />
                        <div className="topbarName">{user.username}</div>
                    </Link>
                    <Link to="/chat" className="topbarIconItem" data-name="Messagerie">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </Link>
                    <Link to="/notifications" className="topbarIconItem" data-name="Notifications">
                        <Notifications />
                        <span className="topbarIconBadge">5</span>
                    </Link>
                    <div
                        className={isOpenAccountMenu ? 'topbarIconItem r0 open' : 'topbarIconItem r0'}
                        data-name="Compte"
                        onClick={toggleAccountMenu}
                    >
                        <KeyboardArrowDownRounded />
                        {isOpenAccountMenu && <BoxMenuAccount user={user} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
