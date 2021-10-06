import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { AvatarExterne } from '../../components/Avatar/Avatar';
import './FindFriends.scss';

const FindFriends = () => {
    const friend = {
        image: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-1/p160x160/43787612_2074859925910450_4642702889259630592_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=5gbV1wovlFEAX8Xwrhw&tn=aYgSleM9DqHoaXZT&_nc_ht=scontent-cdt1-1.xx&oh=09ad4a42eec11a8013f32c2e4dec8f14&oe=6181F057',
        name: 'Marie Baguelin',
        relations: 4,
        avatars: [
            'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.18169-1/c25.0.150.150a/1622669_10203044793339328_1564188310_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=15JWvNKSp_gAX8kKj9t&_nc_ht=scontent-cdg2-1.xx&oh=750404a6fd6a7fdfc450484b03c128ec&oe=6184519C',
            'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-1/s200x200/129936118_4044723728890228_2783868642995328493_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=bRyTYO-NliIAX-2R6NK&_nc_ht=scontent-cdt1-1.xx&oh=c50709653647a74f75e109bfa1722aed&oe=61819517',
        ],
    };

    const arrayFriends = Array.from({ length: 20 }, (_) => friend);
    console.log(arrayFriends);

    const Card = ({ user }: { user: { image: string; name: string; relations: number; avatars: string[] } }) => {
        return (
            <div className="findFriendsRight-content-cardContainer">
                <div className="findFriendsRight-content-card">
                    <div className="findFriendsRight-content-cardtop">
                        <div className="findFriendsRight-content-card_imageWrapper">
                            <img src={user.image} alt="avatar" className="findFriendsRight-content-card_image" />
                        </div>
                    </div>
                    <div className="findFriendsRight-content-cardcontent">
                        <h4 className="findFriendsRight-content-cardcontent_name">{user.name}</h4>
                        <div className="findFriendsRight-content-cardcontent_relations">
                            <AvatarExterne image={user.avatars[0]} size={16} />
                            <AvatarExterne image={user.avatars[1]} size={16} />
                            {user.relations && user.relations + ' amis en commun'}
                        </div>
                        <div className="findFriendsRight-content-cardcontent_button">
                            <button>Ajouter</button>
                        </div>
                        <div className="findFriendsRight-content-cardcontent_button">
                            <button>Supprimer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="findFriendsContainer">
            <Sidebar />
            <div className="findFriendsRight">
                <div className="findFriendsRight-top">
                    <h2>Vous connaissez peut-être</h2>
                    <Link to="">Voir tout</Link>
                </div>

                <div className="findFriendsRight-content">
                    {arrayFriends.map((friend, i) => (
                        <Card key={i} user={friend} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FindFriends;
