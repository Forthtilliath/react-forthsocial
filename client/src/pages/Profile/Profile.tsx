import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../../components/AppContext/Auth.context';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { loadImage } from '../../components/utils';
import { getUser, noUser } from '../../_actions/users.actions';

const Profile = ({ username }: { username: string }) => {
    const { connexion } = useContext(AuthContext);
    const user = connexion.user!;
    const [pageUser, setPageUser] = useState<IUser | undefined>();
    const dispatch = useDispatch();
    const profileUser: IUser | undefined = useSelector((state: ProfileState) => state.users.profile);

    useEffect(() => {
        // Initialise à 0 le profile pour éviter d'avoir le profil précédent sur une page sans profile
        dispatch(noUser());
        if (!pageUser) {
            // Si c'est la page de profil de l'utilisateur connecté
            if (user.username === username) setPageUser(user);
            // Si c'est la page de profil d'un autre utilisateur
            else {
                // Met à jour les données du profil
                dispatch(getUser(username));
                if (profileUser === undefined) setPageUser(undefined);
                else setPageUser(profileUser);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profileUser]);

    return (
        <div className="profileContainer">
            <Sidebar />
            <div className="profileRight">
                {pageUser ? (
                    <>
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className="profileCoverImg" src={loadImage(pageUser?.coverPicture)} alt="cover" />
                                <img
                                    className="profileUserImg"
                                    src={loadImage(pageUser?.profilePicture)}
                                    alt="avatar"
                                />
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">{pageUser?.username}</h4>
                                <span className="profileInfoDesc">{pageUser?.description}</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <Feed username={pageUser?.username} />
                            <Rightbar profile />
                        </div>
                    </>
                ) : (
                    <div>Profil non trouvé</div>
                )}
            </div>
        </div>
    );
};

export default Profile;
