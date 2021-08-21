import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Share from '../Share/Share';
// import { Posts } from '../../dummyData';
import { IPost } from '../../interfaces';
import * as api from '../../_api';
import './Feed.scss';

const Feed = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        // Posts de Jean
        api.fetchPosts('b79aece63a764fd79b9e300982bcbd73')
            .then(({data}) => setPosts(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        console.log('FEED')
        getPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((post: IPost) => (
                    <Post key={post.id} post={post as IPost} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
