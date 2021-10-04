import { Search, Settings } from '@material-ui/icons';
import { ImExit } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import { loadImage } from '../utils';

export const BoxMenuSearch = () => {
    return (
        <div className="topbarBoxMenu topbarSearchMenu">
            <div className="topbarBoxMenu__item">
                <div className="topbarBoxMenu__itemImg">
                    <Search />
                </div>
                <div className="topbarBoxMenu__itemLabel">
                    <input type="text" placeholder="Search for friend, post or video" />
                </div>
            </div>
        </div>
    );
};

export const BoxMenuAccount = ({ user }: IProps) => {
    return (
        <div className="topbarBoxMenu topbarAccountMenu">
            <Link to="profile" className="topbarBoxMenu__item">
                <img src={loadImage(user?.profilePicture)} alt="avatar" className="topbarBoxMenu__itemAvatar" />
                <div className="topbarBoxMenu__itemWrapper">
                    <div className="topbarBoxMenu__itemLabel">{user?.username}</div>
                    <div className="topbarBoxMenu__itemSubLabel">Voir votre profil</div>
                </div>
            </Link>
            <hr className="topbarBoxMenu--hr" />
            {/* <div className="">Changer de compte</div> */}
            <Link to="settings" className="topbarBoxMenu__item">
                <div className="topbarBoxMenu__itemImg">
                    <Settings />
                </div>
                <div className="topbarBoxMenu__itemLabel">Affichage et accessibilité</div>
            </Link>
            <Logout>
                <div className="topbarBoxMenu__item">
                    <div className="topbarBoxMenu__itemImg">
                        <ImExit className="s40" />
                    </div>
                    <div className="topbarBoxMenu__itemLabel">Se déconnecter</div>
                </div>
            </Logout>
        </div>
    );
};

export default Object.freeze({ BoxMenuSearch, BoxMenuAccount });
