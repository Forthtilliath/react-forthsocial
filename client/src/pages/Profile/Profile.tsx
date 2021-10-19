import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../../components/AppContext/Auth.context';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { isEmpty, loadImage } from '../../components/utils';
import { getUser } from '../../_actions/users.actions';

const Profile = (props: { username: string }) => {
    const { connexion } = useContext(AuthContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = connexion.user!;
    const [username, setUsername] = useState(props.username);
    const [pageUser, setPageUser] = useState<IUser | undefined>(undefined);
    const users = useSelector((state: ProfileState) => state.users);
    const dispatch = useDispatch();

    // Met à jour le username
    useEffect(() => setUsername(props.username), [props]);

    // Récupère les données du user à partir du username
    useEffect(() => {
        dispatch(getUser(username));
    }, [dispatch, username]);

    // Met à jour le state du user
    useEffect(() => setPageUser(users.profile), [users]);

    return (
        <div className="profileContainer">
            <Sidebar />
            <div className="profileRight">
                {!isEmpty(pageUser) ? (
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
