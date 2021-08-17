import express from 'express';
const router = express.Router();
import * as postsCtrl from '../controllers/posts-ctrl';

// posts
router.get('/', postsCtrl.getPosts);

// crud
router.post('/', postsCtrl.createPost);
router.get('/:id', postsCtrl.getPost);
router.put('/:id', postsCtrl.editPost);
router.delete('/:id', postsCtrl.deletePost);

// likes
router.post('/like/:id', postsCtrl.likePost);
router.delete('/unlike/:id', postsCtrl.unlikePost);

export default router;
