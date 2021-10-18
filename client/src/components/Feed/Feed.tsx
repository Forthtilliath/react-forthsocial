import { useContext, useEffect, useState } from 'react';
import { Post, NoPost } from '../Post/Post';
import Share from '../Share/Share';
import * as api from '../../_api';
import AuthContext from '../AppContext/Auth.context';
import { CoffeeLoading } from 'react-loadingg';

const Feed = ({ username }: { username?: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {
        connexion: { user },
    } = useContext(AuthContext);

    const getPosts = () => {
        api.fetchPosts(username ?? user!.username)
            .then(({ data }) => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                {/* <Share /> */}
                {isLoading ? (
                    <CoffeeLoading style={{ margin: '20px auto 0 auto' }} />
                ) : (
                    <>
                        <Share />
                        {posts.length ? (
                            posts.map((post: IPost) => <Post key={post.id} post={post as IPost} />)
                        ) : (
                            <NoPost />
                        )}
                    </>
                )}
                {/*posts.length ? posts.map((post: IPost) => <Post key={post.id} post={post as IPost} />) : <NoPost />*/}
            </div>
        </div>
    );
};

export default Feed;
