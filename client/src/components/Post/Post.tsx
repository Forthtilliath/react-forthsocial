import { useState } from 'react';
import { MoreVert } from '@material-ui/icons';
import Moment from 'react-moment';
import { loadImage } from '../utils';
import Heart from '../../images/heart.png';
import Like from '../../images/like.png';
import { IPost } from '../../interfaces';
// import { Users } from '../../dummyData';
import 'moment/locale/fr';
import './Post.scss';

const Post = (props: { post: IPost }) => {
    console.log(props.post);
    const { description, image, createdAt, username, profilePicture, nbComments } = props.post;
    // const user = Users.find((User) => User.id === userId);

    const [like, setLike] = useState(props.post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={profilePicture && loadImage(profilePicture)}
                            alt="avatar"
                        />
                        <span className="postUsername">{username}</span>
                        <span className="postDate"><Moment fromNow>{createdAt}</Moment></span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{description}</span>
                    {image && <img className="postImg" src={loadImage(image)} alt="post" />}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={Like} alt="like" onClick={likeHandler} />
                        <img className="likeIcon" src={Heart} alt="heart" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {nbComments} comment{nbComments < 2 ? '' : 's'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
