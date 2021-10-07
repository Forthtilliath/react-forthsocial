import { Link } from 'react-router-dom';
import { Card, CardEmpty } from '../../components/Card/Card';
import Sidebar from '../../components/Sidebar/Sidebar';

const Friends = () => {
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
    const arrayOf15 = Array.from({ length: 15 }, (_, k) => k + arrayFriends.length);

    const MaskSVG = () => (
        <div style={{ height: 0 }}>
            <svg>
                <mask id="mask_first">
                    <circle cx="8" cy="8" fill="white" r="8"></circle>
                </mask>
                <mask id="mask_next">
                    <circle cx="8" cy="8" fill="white" r="8"></circle>
                    <circle cx="-4" cy="8" fill="black" r="10"></circle>
                </mask>
            </svg>
        </div>
    );

    return (
        <div className="friendsContainer">
            <Sidebar />
            <div className="friendsRight">
                <div className="friendsRight_top">
                    <h2>Vous connaissez peut-être</h2>
                    <Link to="" className="friendsRight_top-link">Voir tout</Link>
                </div>

                <MaskSVG />

                <div className="friendsRight_content">
                    {arrayFriends.map((friend, i) => (
                        <Card key={i} user={friend} />
                    ))}
                    {arrayOf15.map((v) => (
                        <CardEmpty key={v} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Friends;
