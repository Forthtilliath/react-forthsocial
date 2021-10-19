import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import AuthContext from '../../components/AppContext/Auth.context';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { isEmpty, loadImage } from '../../components/utils';
import { getUser } from '../../_actions/users.actions';

const Profile = () => {
    const { connexion } = useContext(AuthContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = connexion.user!;
    const [pageUser, setPageUser] = useState<IUser | undefined>(undefined);
    const { profile } = useSelector((state: ProfileState) => state.users);
    const dispatch = useDispatch();
    const { username }: { username: string } = useParams();

    // Récupère les données du user à partir du username
    useEffect(() => {
        dispatch(getUser(username));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username]);

    // Met à jour le state du user
    useEffect(() => setPageUser(profile), [profile]);

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
