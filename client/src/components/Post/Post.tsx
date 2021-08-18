import { MoreVert } from '@material-ui/icons';
import { loadImage } from '../utils';
import Heart from '../../images/heart.png';
import Like from '../../images/like.png';
import { IPost } from '../../interfaces';
import { Users } from '../../dummyData';
import './Post.scss';
import { useState } from 'react';

const Post = (props: { post: IPost }) => {
    const { photo, date, userId, comment, desc } = props.post;
    const user = Users.find((User) => User.id === userId);

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
                            src={user?.profilePicture && loadImage(user.profilePicture)}
                            alt="avatar"
                        />
                        <span className="postUsername">{user?.username}</span>
                        <span className="postDate">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{desc}</span>
                    <img className="postImg" src={loadImage(photo)} alt="post" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={Like} alt="like" onClick={likeHandler} />
                        <img className="likeIcon" src={Heart} alt="heart" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {comment} comment{comment < 2 ? '' : 's'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
