import { useContext, useEffect, useState } from 'react';
import Post from '../Post/Post';
import Share from '../Share/Share';
import * as api from '../../_api';
import AuthContext from '../AppContext/Auth.context';

const Feed = ({ username}:{username?:string}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [posts, setPosts] = useState([]);
    const {
        connexion: { user },
    } = useContext(AuthContext); 

    const getPosts = () => {
        // console.log(user!.id);
        // Posts de Jean
        api.fetchPosts(username ?? user!.username)
            .then(({data}) => setPosts(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        console.log(username);
        getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
