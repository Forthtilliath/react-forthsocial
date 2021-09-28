import { Search, Chat, Notifications, Home, Group, KeyboardArrowDownRounded, Settings } from '@material-ui/icons';
import { ImExit } from 'react-icons/all';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link, NavLink  } from 'react-router-dom';
import AuthContext from '../AppContext/Auth.context';
import Logout from '../Logout/Logout';
import { loadImage } from '../utils';
import Logo from '../../images/logo/logo.png';

import './Topbar.scss';

const Topbar = () => {
    const {
        connexion: { user },
    } = useContext(AuthContext);

    const [isOpenAccountMenu, setIsOpenAccountMenu] = useState(false);

    const toggleAccountMenu = () => setIsOpenAccountMenu(!isOpenAccountMenu);

    const checkElement = useCallback((e) => {
        if (!e.target.closest('.topbarIconItem')) setIsOpenAccountMenu(false);
    }, []);

    useEffect(() => {
        window.addEventListener('click', checkElement);
        return () => window.removeEventListener('click', checkElement);
    }, [checkElement]);

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
            </div>

            <div className="topbarCenter">
                <div className="topbarIcons main">
                    <NavLink to="home" className="topbarIconItem" activeClassName="active" data-name="Accueil">
                        <Home />
                    </NavLink>
                    <NavLink to="friends" className="topbarIconItem" activeClassName="active" data-name="Amis">
                        <Group />
                    </NavLink>
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarIcons second">
                    <Link to="profile" className="topbarProfileItem">
                        <img src={loadImage(user ? user.profilePicture : '')} alt="avatar" className="topbarImg" />
                        <div className="topbarName">{user?.username}</div>
                    </Link>
                    <div className="topbarIconItem" data-name="Messagerie">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem" data-name="Notifications">
                        <Notifications />
                        <span className="topbarIconBadge">5</span>
                    </div>
                    <div
                        className={isOpenAccountMenu ? 'topbarIconItem r0 open' : 'topbarIconItem r0'}
                        data-name="Compte"
                        onClick={toggleAccountMenu}
                    >
                        <KeyboardArrowDownRounded />
                        {isOpenAccountMenu && (
                            <div className="topbarAccountMenu">
                                <Link to="profile" className="topbarAccountMenu__item">
                                    <img
                                        src={loadImage(user ? user.profilePicture : '')}
                                        alt="avatar"
                                        className="topbarAccountMenu__itemAvatar"
                                    />
                                    <div className="topbarAccountMenu__itemWrapper">
                                        <div className="topbarAccountMenu__itemLabel">{user?.username}</div>
                                        <div className="topbarAccountMenu__itemSubLabel">Voir votre profil</div>
                                    </div>
                                </Link>
                                <hr className="topbarAccountMenu--hr" />
                                {/* <div className="">Changer de compte</div> */}
                                <Link to="settings" className="topbarAccountMenu__item">
                                    <div className="topbarAccountMenu__itemImg">
                                        <Settings />
                                    </div>
                                    <div className="topbarAccountMenu__itemLabel">Affichage et accessibilité</div>
                                </Link>
                                <Logout>
                                    <div className="topbarAccountMenu__item">
                                        <div className="topbarAccountMenu__itemImg">
                                            <ImExit className="s40" />
                                        </div>
                                        <div className="topbarAccountMenu__itemLabel">Se déconnecter</div>
                                    </div>
                                </Logout>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
