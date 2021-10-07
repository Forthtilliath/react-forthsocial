import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
    return (
        <div className="homeContainer">
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
    );
};

export default Home;
