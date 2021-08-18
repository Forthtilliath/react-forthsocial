import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.scss';
import { Posts } from '../../dummyData';
import { IPost } from '../../interfaces';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((post:IPost) => (
                    <Post key={post.id} post={post as IPost} />
                ))}
            </div>
        </div>
    );
};

export default Feed;