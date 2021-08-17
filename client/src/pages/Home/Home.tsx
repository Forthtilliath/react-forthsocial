import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './Home.scss';

const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    );
};

export default Home;
