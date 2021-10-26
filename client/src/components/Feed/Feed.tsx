import { useCallback, useContext, useEffect, useState } from 'react';
import { Post, NoPost } from '../Post/Post';
import Share from '../Share/Share';
import * as api from '../../_api';
import AuthContext from '../AppContext/Auth.context';
import { CoffeeLoading } from 'react-loadingg';

const Feed = ({ username }: { username?: string }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { connexion } = useContext(AuthContext);
    const user = connexion.user!;

    const getPosts = useCallback(() => {
        api.fetchPosts(username ?? user.username)
            .then(({ data }) => {
                setPosts(data);
                setIsLoading(false); 
            })
            .catch((err) => console.log(err));
    }, [user, username]);

    useEffect(() => {
        getPosts();
        // Bloque le display si le component est démonté
        return () => setIsLoading(true);
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
