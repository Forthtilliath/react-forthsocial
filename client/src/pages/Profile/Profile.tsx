import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../../components/AppContext/Auth.context';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { loadImage } from '../../components/utils';
import { getUser } from '../../_actions/users.actions';

const Profile = ({ username }: { username: string }) => {
    // const [isLoading, setIsLoading] = useState(true)
    const { connexion } = useContext(AuthContext);
    const user = connexion.user!;
    const [pageUser, setPageUser] = useState<IUser>();
    const dispatch = useDispatch();
    const profileUser = useSelector((state: ProfileState) => state.users.profile);
    console.log('Profile', profileUser);

    useEffect(() => {
        if (user.username === username) setPageUser(user);
        else {
            dispatch(getUser(username));
        }
    }, []);

    // useEffect(() => {
    //     setIsLoading(false);
    // }, [pageUser])

    return (
        <div className="profileContainer">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src={loadImage('post/3.jpeg')} alt="cover" />
                        <img className="profileUserImg" src={loadImage('post/7.jpeg')} alt="avatar" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Name</h4>
                        <span className="profileInfoDesc">Desc</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={username} />
                    <Rightbar profile />
                </div>
            </div>
        </div>
    );
};

export default Profile;
