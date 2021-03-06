import { Search, Settings } from '@material-ui/icons';
import { useRef } from 'react';
import { ImExit } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import Avatar from '../Avatar/Avatar';
import { UserSettings } from '../Svg/Svg';

export const BoxMenuSearch = () => {
    const textInput = useRef(null);

    const setFocus = () => (textInput.current as unknown as HTMLInputElement).focus();

    return (
        <div className="topbarBoxMenu topbarSearchMenu">
            <div className="topbarBoxMenu__item" onClick={setFocus}>
                <div className="topbarBoxMenu__itemImg">
                    <Search />
                </div>
                <div className="topbarBoxMenu__itemLabel">
                    <input
                        ref={textInput}
                        autoFocus
                        className="topbarBoxMenu__inputSearch"
                        type="text"
                        placeholder="Search for friend, post or video"
                    />
                </div>
            </div>
        </div>
    );
};

export const BoxMenuAccount = ({ user }: IProps) => {
    return (
        <div className="topbarBoxMenu topbarAccountMenu">
            <Link to={`/profile/${user?.username.toLowerCase()}`} className="topbarBoxMenu__item">
                <Avatar image={user?.profilePicture} size={60} />
                <div className="topbarBoxMenu__itemWrapper">
                    <div className="topbarBoxMenu__itemLabel">{user?.username}</div>
                    <div className="topbarBoxMenu__itemSubLabel">Voir votre profil</div>
                </div>
            </Link>
            <hr className="topbarBoxMenu--hr" />
            {/* <div className="">Changer de compte</div> */}
            <Link to={`/profile/${user?.username.toLowerCase()}/edit`} className="topbarBoxMenu__item">
                <div className="topbarBoxMenu__itemImg">
                    <UserSettings />
                </div>
                <div className="topbarBoxMenu__itemLabel">Modifier mon profil</div>
            </Link>
            <Link to="/settings" className="topbarBoxMenu__item">
                <div className="topbarBoxMenu__itemImg">
                    <Settings />
                </div>
                <div className="topbarBoxMenu__itemLabel">Affichage et accessibilit??</div>
            </Link>
            <Logout>
                <div className="topbarBoxMenu__item">
                    <div className="topbarBoxMenu__itemImg">
                        <ImExit className="s40" />
                    </div>
                    <div className="topbarBoxMenu__itemLabel">Se d??connecter</div>
                </div>
            </Logout>
        </div>
    );
};

export default Object.freeze({ BoxMenuSearch, BoxMenuAccount });
