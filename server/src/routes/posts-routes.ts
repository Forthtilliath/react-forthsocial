import express from 'express';
const router = express.Router();
import * as postsCtrl from '../controllers/posts-ctrl';

// posts
router.get('/', postsCtrl.getPosts);

router.get('/timeline/', postsCtrl.getPosts);
router.get('/timeline/:username', postsCtrl.getPostsUser);

// crud
router.post('/', postsCtrl.createPost);
router.get('/:id', postsCtrl.getPost);
router.put('/:id', postsCtrl.editPost);
router.delete('/:id', postsCtrl.deletePost);

// likes
router.post('/:id/like', postsCtrl.likePost);
router.delete('/:id/unlike', postsCtrl.unlikePost); // NOTE ??? Faire dans like ?

export default router;
