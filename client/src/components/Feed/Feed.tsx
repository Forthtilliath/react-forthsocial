import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.scss';
import { Posts } from '../../dummyData';
import { IPost } from '../../interfaces';
import { useEffect, useState } from 'react';
import * as api from '../../api';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => async () => {
        try {
            const { data } = await api.fetchPosts('b79aece63a764fd79b9e300982bcbd73'); // Posts de Jean
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((post: IPost) => (
                    <Post key={post.id} post={post as IPost} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
