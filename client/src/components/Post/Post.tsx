import { MoreVert } from '@material-ui/icons';
import { loadImage } from '../utils';
import Heart from '../../images/heart.png';
import Like from '../../images/like.png';
import './Post.scss';

const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={loadImage('person/1.jpeg')} alt="avatar" />
                        <span className="postUsername">Toutou Doe</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey ! It's a test !</span>
                    <img className="postImg" src={loadImage('post/1.jpeg')} alt="post" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={Like} alt="like" />
                        <img className="likeIcon" src={Heart} alt="heart" />
                        <span className="postLikeCounter">32 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
